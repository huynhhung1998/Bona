// src/models/EmployeeModel.js
import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
  employeeCode: { type: String, required: true, unique: true }, // MÃ NV
  fullName: { type: String, required: true },                   // HỌ VÀ TÊN
  department: { type: String, required: true },                 // PHÒNG
  team: { type: String },                                       // TEAM
  block: { type: String },                                      // KHỐI
  position: { type: String, required: true },                   // VỊ TRÍ
  level: { type: String, required: true },                      // CẤP BẬC
  hireDate: { type: Date, required: true },                     // NGÀY NHẬN VIỆC
  probationStart: { type: Date },                                // NGÀY THỬ VIỆC
  probationEnd: { type: Date },                                  // NGÀY HẾT HẠN THỬ VIỆC
  contractDate: { type: Date, required: true },                 // NGÀY KÝ HỢP ĐỒNG
  contractEnd: { type: Date },                                   // NGÀY ĐẾN HẠN HỢP ĐỒNG
  noticePeriod: { type: Number },                                // THỜI HẠN BÁO TRƯỚC (ngày)
  reSign: { type: Boolean },                                     // TÁI KÝ
  contractType: { type: String, required: true },                // LOẠI HĐ
  resignationDate: { type: Date },                                // NGÀY BẮT ĐẦU NGHỈ VIỆC
  birthYear: { type: Number, required: true },                   // NĂM SINH
  gender: { type: String, required: true },                      // GIỚI TÍNH
  origin: { type: String },                                       // NGUYÊN QUÁN
  idNumber: { type: String, required: true, unique: true },      // CMND/CCCD
  idIssueDate: { type: Date, required: true },                   // NGÀY CẤP
  idIssuePlace: { type: String, required: true },                // NƠI CẤP
  permanentAddress: { type: String },                             // THƯỜNG TRÚ
  temporaryAddress: { type: String },                             // TẠM TRÚ
  bankAccount: { type: String },                                  // SỐ TÀI KHOẢN
  bankName: { type: String },                                     // NGÂN HÀNG
  bankBranch: { type: String },                                   // CHI NHÁNH NGÂN HÀNG
  bankCode: { type: String },                                     // MÃ NGÂN HÀNG
  vehicleLabel: { type: String },                                  // NHÃN XE
  vehicleColor: { type: String },                                  // MÀU XE
  vehicleNumber: { type: String },                                 // SỐ XE
  phone: { type: String },                                         // ĐIỆN THOẠI
  personalEmail: { type: String },                                 // EMAIL CÁ NHÂN
  workEmail: { type: String },                                     // EMAIL CÔNG TY
  salaryCommitFile: { type: String },                              // BẢN CAM KẾT bảo mật lương
  salaryGrossFile: { type: String },                               // BẢN CAM KẾT lương gross
  newIdNumber: { type: String },                                    // CCCD MỚI
  notes: { type: String },                                          // GHI CHÚ
  photo: { type: String },                                          // ảnh
}, {
  timestamps: true
});

const Employee = mongoose.model('Employee', EmployeeSchema);

export default Employee;