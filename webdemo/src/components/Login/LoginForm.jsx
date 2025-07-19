import { useState } from "react";

const USERS = [
  { username: "user1", password: "123456" },
  { username: "user2", password: "abcdef" },
];

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const found = USERS.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      setError("");
      onLogin();
      localStorage.setItem("vocab_logged_in", "true");
    } else {
      setError("Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <div className="login-form-wrapper">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Đăng nhập </h2>
        <input
          type="text"
          placeholder="Tài khoản"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login">
          Đăng nhập
        </button>
        {error && (
          <div style={{ color: "red", marginTop: "1rem" }}>{error}</div>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
