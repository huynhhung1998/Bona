import { useAuth } from "../lib/AuthContext";

export default function Login() {
  const { signIn } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-cine-dark">
      <div className="bg-cine-gray p-8 rounded-xl w-80 text-center">
        <h1 className="text-2xl font-bold mb-6">Bona Media</h1>

        <button
          onClick={signIn}
          className="w-full bg-cine-red py-3 rounded-lg font-bold"
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
}