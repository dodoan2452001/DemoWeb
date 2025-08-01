import Logo from "./Logo";

function Header({
  onLogout,
  showNav = true,
  onNavClick,
  onLogoClick,
  currentPage,
}) {
  return (
    <header className="vocab-header">
      <div onClick={onLogoClick} style={{ cursor: "pointer" }}>
        <Logo />
      </div>
      {showNav && (
        <nav className="vocab-nav">
          <button
            className={currentPage === "hoctu" ? "active" : ""}
            onClick={() => onNavClick("hoctu")}
          >
            Học từ
          </button>
          <button
            className={currentPage === "tudien" ? "active" : ""}
            onClick={() => onNavClick("tudien")}
          >
            Tìm kiếm từ điển
          </button>
          <button
            className={currentPage === "danhsachtu" ? "active" : ""}
            onClick={() => onNavClick("danhsachtu")}
          >
            Danh sách từ
          </button>
          <button
            className={currentPage === "luyentap" ? "active" : ""}
            onClick={() => onNavClick("luyentap")}
          >
            Luyện tập
          </button>
        </nav>
      )}
      <div className="auth-buttons">
        {onLogout && (
          <button className="login" onClick={onLogout}>
            Đăng xuất
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
