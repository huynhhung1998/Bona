import Employee from '../models/EmployeeModel.js';

// GET LIST + PAGINATION + SEARCH
export const getEmployees = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = '',
      department,
      position,
      sortBy = 'createdAt',
      order = 'desc'
    } = req.query;

    // 🔎 SEARCH (theo tên + mã NV)
    const searchQuery = search
      ? {
          $or: [
            { fullName: { $regex: search, $options: 'i' } },
            { employeeCode: { $regex: search, $options: 'i' } }
          ]
        }
      : {};

    // 🎯 FILTER
    const filterQuery = {
      ...(department && { department }),
      ...(position && { position })
    };

    // 🧠 MERGE QUERY
    const query = {
      ...searchQuery,
      ...filterQuery
    };

    // 🔽 SORT
    const sortOption = {
      [sortBy]: order === 'asc' ? 1 : -1
    };

    const total = await Employee.countDocuments(query);

    const employees = await Employee.find(query)
      .select('employeeCode fullName department position phone photo')
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json({
      data: employees,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET DETAIL
export const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Not found' });

    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE (có upload file)
export const createEmployee = async (req, res) => {
  try {
    const data = req.body;

    // file upload
    if (req.files) {
      if (req.files.photo) {
        data.photo = req.files.photo[0].filename;
      }
      if (req.files.salaryCommitFile) {
        data.salaryCommitFile = req.files.salaryCommitFile[0].filename;
      }
      if (req.files.salaryGrossFile) {
        data.salaryGrossFile = req.files.salaryGrossFile[0].filename;
      }
    }

    const employee = new Employee(data);
    await employee.save();

    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE
export const updateEmployee = async (req, res) => {
  try {
    const data = req.body;

    if (req.files) {
      if (req.files.photo) {
        data.photo = req.files.photo[0].filename;
      }
    }

    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true }
    );

    if (!employee) return res.status(404).json({ message: 'Not found' });

    res.json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE
export const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Not found' });

    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};  