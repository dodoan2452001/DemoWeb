import { FaBook, FaSearch, FaSmile } from "react-icons/fa";

function MainContent() {
  return (
    <main className="vocab-main">
      <h1>Tìm từ, ghi nhớ mãi mãi.</h1>
      <div className="search-bar">
        <input type="text" placeholder="Nhập từ cần tra cứu..." />
        <button className="search-btn">
          <FaSearch />
        </button>
      </div>
      <div className="search-options">
        <span>Tìm kiếm nâng cao</span>
        <span>Từ ngẫu nhiên</span>
      </div>
      <section className="vocab-options">
        <div className="option-card blue">
          <FaBook size={24} />
          <span>Từ điển cho việc học</span>
        </div>
        <div className="option-card pink">
          <FaSmile size={24} />
          <span>Cách thú vị để nâng cao từ vựng</span>
        </div>
        <div className="option-card green">
          <FaBook size={24} />
          <span>Phương pháp dạy từ hiệu quả</span>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
