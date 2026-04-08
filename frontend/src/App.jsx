import { useAuth } from "./lib/AuthContext";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";




export default function App() {
  const { user } = useAuth();

  return (
    <>
      {!user ? <Login /> : <Dashboard />}
    </>
  );
}