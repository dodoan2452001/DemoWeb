import "./App.css";

import { useState, useEffect } from "react";
import Header from "./components/Menu/Header";
import LoginForm from "./components/Login/LoginForm";
import MainContent from "./components/MainContent";
import Footer from "./components/Menu/Footer";
import HocTu from "./components/NavBar/HocTu";
import TuDien from "./components/NavBar/TuDien";
import DanhSachTu from "./components/NavBar/DanhSachTu";
import LuyenTap from "./components/NavBar/LuyenTap";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const isLogged = localStorage.getItem("vocab_logged_in");
    if (isLogged === "true") setLoggedIn(true);
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("vocab_logged_in");
    setCurrentPage("home");
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };
  const getContent = () => {
    if (currentPage === "home") return <MainContent />;
    if (currentPage === "hoctu") return <HocTu />;
    if (currentPage === "tudien") return <TuDien />;
    if (currentPage === "danhsachtu") return <DanhSachTu />;
    if (currentPage === "luyentap") return <LuyenTap />;
    return <MainContent />;
  };

  if (!loggedIn) {
    return (
      <div className="vocab-app">
        <div className="login-bg">
          <LoginForm onLogin={handleLogin} />
        </div>
      </div>
    );
  }

  return (
    <div className="vocab-app">
      <Header
        onLogout={handleLogout}
        onNavClick={handleNavClick}
        onLogoClick={() => setCurrentPage("home")}
        currentPage={currentPage}
      />
      {getContent()}
      {currentPage !== "danhsachtu" && currentPage !== "hoctu" && <Footer />}
    </div>
  );
}

export default App;
