import { useState } from "react";
import Navbarmenu from "../../component/navbar/Navbar";
import "./Login.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submithandler = () => {
    if (username == "admin" && password == "12345") {
      document.cookie =
        "username=admin; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
      navigate("/panel");
    } else Swal.fire("یوزرنیم یا پسورد اشتباه است!");
  };
  return (
    <>
      <Navbarmenu />
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="username"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
            <button onClick={submithandler} type="button">
              login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
