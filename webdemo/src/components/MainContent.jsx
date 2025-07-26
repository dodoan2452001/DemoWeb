import React, { useState } from "react";
import {
  FaBook,
  FaSearch,
  FaSmile,
  FaGraduationCap,
  FaUsers,
  FaClock,
  FaStar,
} from "react-icons/fa";
import TuTraCuu from "./Main/TuTraCuu";
import TuNgauNhien from "./Main/TuNgauNhien";
import TuDienHocTap from "./Main/TuDienHocTap";
import CachHocThuVi from "./Main/CachHocThuVi";
import PhuongPhapHieuQua from "./Main/PhuongPhapHieuQua";
import Testimonials from "./Testimonials";

function MainContent() {
  const [showTuDien, setShowTuDien] = useState(false);
  const [showCachHoc, setShowCachHoc] = useState(false);
  const [showPhuongPhap, setShowPhuongPhap] = useState(false);

  return (
    <main className="vocab-main">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>📚 Tìm từ, ghi nhớ mãi mãi</h1>
          <p className="hero-description">
            Ứng dụng học từ vựng tiếng Anh thông minh với phương pháp khoa học.
            Giúp bạn xây dựng vốn từ vựng vững chắc và ghi nhớ lâu dài.
          </p>

          {/* Stats */}
          <div className="stats-container">
            <div className="stat-item">
              <FaBook className="stat-icon" />
              <div>
                <div className="stat-number">1000+</div>
                <div className="stat-label">Từ vựng</div>
              </div>
            </div>
            <div className="stat-item">
              <FaUsers className="stat-icon" />
              <div>
                <div className="stat-number">500+</div>
                <div className="stat-label">Học viên</div>
              </div>
            </div>
            <div className="stat-item">
              <FaClock className="stat-icon" />
              <div>
                <div className="stat-number">24/7</div>
                <div className="stat-label">Học mọi lúc</div>
              </div>
            </div>
            <div className="stat-item">
              <FaStar className="stat-icon" />
              <div>
                <div className="stat-number">4.9★</div>
                <div className="stat-label">Đánh giá</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <TuTraCuu />
        <div className="search-options">
          <TuNgauNhien />
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="section-title">🎯 Tính năng nổi bật</h2>
        <section className="vocab-options">
          <div
            className="option-card blue"
            onClick={() => setShowTuDien(true)}
            style={{ cursor: "pointer" }}
          >
            <FaGraduationCap size={28} />
            <span>Từ điển cho việc học</span>
            <div className="card-description">
              Quản lý và ôn tập từ vựng cá nhân
            </div>
          </div>
          <div
            className="option-card pink"
            onClick={() => setShowCachHoc(true)}
            style={{ cursor: "pointer" }}
          >
            <FaSmile size={28} />
            <span>Cách thú vị để nâng cao từ vựng</span>
            <div className="card-description">
              Học qua game, phim ảnh và âm nhạc
            </div>
          </div>
          <div
            className="option-card green"
            onClick={() => setShowPhuongPhap(true)}
            style={{ cursor: "pointer" }}
          >
            <FaBook size={28} />
            <span>Phương pháp học từ vựng hiệu quả</span>
            <div className="card-description">
              Kỹ thuật khoa học giúp ghi nhớ lâu
            </div>
          </div>
        </section>
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <div className="cta-section">
        <h3>🚀 Bắt đầu hành trình học từ vựng ngay hôm nay!</h3>
        <p>
          Tham gia cùng hàng nghìn học viên đang cải thiện vốn từ vựng mỗi ngày
        </p>
        <div className="cta-buttons">
          <button className="cta-primary" onClick={() => setShowTuDien(true)}>
            <FaGraduationCap /> Bắt đầu học
          </button>
          <button className="cta-secondary">
            <FaSearch /> Khám phá thêm
          </button>
        </div>
      </div>

      {/* Modals */}
      <TuDienHocTap
        isVisible={showTuDien}
        onClose={() => setShowTuDien(false)}
      />
      <CachHocThuVi
        isVisible={showCachHoc}
        onClose={() => setShowCachHoc(false)}
      />
      <PhuongPhapHieuQua
        isVisible={showPhuongPhap}
        onClose={() => setShowPhuongPhap(false)}
      />
    </main>
  );
}

export default MainContent;
