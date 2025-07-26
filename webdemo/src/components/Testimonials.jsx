import React from "react";
import { FaStar, FaUser } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Minh Anh",
      avatar: "👩‍🎓",
      rating: 5,
      comment:
        "Ứng dụng tuyệt vời! Tôi đã học được hơn 500 từ mới trong 2 tháng.",
      role: "Sinh viên",
    },
    {
      name: "Hoàng Nam",
      avatar: "👨‍💼",
      rating: 5,
      comment:
        "Phương pháp học rất hiệu quả, đặc biệt là tính năng từ ngẫu nhiên.",
      role: "Nhân viên văn phòng",
    },
    {
      name: "Thu Hương",
      avatar: "👩‍💻",
      rating: 5,
      comment:
        "Giao diện đẹp, dễ sử dụng. Tôi học từ vựng mỗi ngày với app này.",
      role: "Lập trình viên",
    },
  ];

  return (
    <div className="testimonials-section">
      <h2 className="section-title">💬 Người dùng nói gì về chúng tôi</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-header">
              <span className="avatar">{testimonial.avatar}</span>
              <div className="user-info">
                <h4>{testimonial.name}</h4>
                <p className="role">{testimonial.role}</p>
              </div>
            </div>
            <div className="stars">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
            </div>
            <p className="comment">"{testimonial.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
