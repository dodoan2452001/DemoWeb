import React from "react";

function PhuongPhapHieuQua({ isVisible, onClose }) {
  if (!isVisible) return null;

  const methods = [
    {
      title: "1. Học từ vựng qua ngữ cảnh:",
      items: [
        {
          subtitle: "Đọc sách, báo, truyện:",
          content:
            "Thay vì học từ đơn lẻ, hãy đọc các tài liệu tiếng Anh để làm quen với từ vựng trong các tình huống cụ thể.",
        },
        {
          subtitle: "Xem phim, video, chương trình TV:",
          content:
            "Tương tác với ngôn ngữ qua hình ảnh và âm thanh giúp bạn hiểu rõ hơn về cách sử dụng từ.",
        },
        {
          subtitle: "Nghe nhạc, podcast:",
          content:
            "Âm nhạc và các chương trình phát thanh có thể giúp bạn làm quen với từ vựng mới một cách tự nhiên.",
        },
      ],
    },
    {
      title: "2. Sử dụng Flashcards:",
      items: [
        {
          subtitle: "Flashcards giấy hoặc ứng dụng:",
          content:
            "Ghi từ mới và nghĩa của chúng lên flashcards để ôn tập thường xuyên.",
        },
        {
          subtitle: "Thêm hình ảnh, ví dụ:",
          content: "Giúp bạn liên tưởng và ghi nhớ từ vựng tốt hơn.",
        },
        {
          subtitle: "Sử dụng ứng dụng flashcards:",
          content:
            "Các ứng dụng như Anki hoặc Quizlet có thể giúp bạn ôn tập mọi lúc mọi nơi.",
        },
      ],
    },
    {
      title: "3. Học từ vựng theo chủ đề:",
      items: [
        {
          subtitle: "Phân loại từ vựng:",
          content:
            "Nhóm các từ vựng theo chủ đề (ví dụ: gia đình, công việc, du lịch) giúp bạn dễ dàng ghi nhớ và sử dụng chúng.",
        },
        {
          subtitle: "Học từ vựng liên quan:",
          content:
            "Kết hợp các từ có liên quan đến nhau (ví dụ: động từ, danh từ, tính từ) giúp bạn hiểu sâu hơn về cách sử dụng từ.",
        },
      ],
    },
    {
      title: "4. Lặp lại ngắt quãng (Spaced Repetition):",
      items: [
        {
          subtitle: "Ôn tập từ vựng định kỳ:",
          content:
            "Ôn lại các từ mới sau một khoảng thời gian nhất định (ví dụ: sau 1 giờ, sau 1 ngày, sau 3 ngày) để củng cố trí nhớ.",
        },
        {
          subtitle: "Sử dụng ứng dụng Spaced Repetition:",
          content:
            "Các ứng dụng như Anki có thể giúp bạn thực hiện phương pháp này một cách hiệu quả.",
        },
      ],
    },
    {
      title: "5. Sử dụng từ vựng trong thực tế:",
      items: [
        {
          subtitle: "Đặt câu với từ mới:",
          content:
            "Viết câu hoặc đặt câu nói sử dụng từ vựng mới giúp bạn hiểu rõ hơn về cách sử dụng từ và ghi nhớ lâu hơn.",
        },
        {
          subtitle: "Giao tiếp hàng ngày:",
          content:
            "Cố gắng sử dụng từ mới trong giao tiếp hàng ngày để luyện tập và làm quen với từ vựng.",
        },
        {
          subtitle: "Tìm kiếm cơ hội để sử dụng từ vựng:",
          content:
            "Tìm cách đưa các từ mới vào các hoạt động hàng ngày, như viết nhật ký, tham gia diễn đàn, hoặc trò chuyện với bạn bè.",
        },
      ],
    },
    {
      title: "6. Kết hợp các phương pháp:",
      items: [
        {
          subtitle: "Sử dụng hình ảnh, âm thanh, và ngữ cảnh:",
          content:
            "Kết hợp nhiều phương pháp để tạo ra trải nghiệm học tập đa dạng và thú vị.",
        },
        {
          subtitle: "Đừng quên ôn tập:",
          content:
            "Ôn tập thường xuyên là chìa khóa để ghi nhớ từ vựng lâu dài.",
        },
        {
          subtitle: "Kiên trì và nỗ lực:",
          content:
            "Học từ vựng là một quá trình, hãy kiên trì và đừng nản lòng khi gặp khó khăn.",
        },
      ],
    },
    {
      title: "7. Các công cụ hỗ trợ:",
      items: [
        {
          subtitle: "Từ điển:",
          content:
            "Sử dụng từ điển trực tuyến hoặc giấy để tra cứu nghĩa và cách sử dụng từ.",
        },
        {
          subtitle: "Ứng dụng học từ vựng:",
          content:
            "Các ứng dụng như Duolingo, Memrise, Babbel có thể hỗ trợ quá trình học tập của bạn.",
        },
        {
          subtitle: "Trang web học tiếng Anh:",
          content:
            "Các trang web như BBC Learning English, Cambridge English có nhiều tài liệu hữu ích.",
        },
      ],
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        backdropFilter: "blur(5px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg, #a8e6cf 0%, #88d8a3 50%, #7fcdcd 100%)",
          borderRadius: 20,
          padding: 30,
          maxWidth: "90%",
          width: "800px",
          maxHeight: "90%",
          boxShadow: "0 20px 50px rgba(168, 230, 207, 0.4)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "#333",
          position: "relative",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 25,
            background: "rgba(255,255,255,0.3)",
            border: "none",
            borderRadius: "50%",
            width: 40,
            height: 40,
            color: "#333",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255,255,255,0.5)";
            e.target.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255,255,255,0.3)";
            e.target.style.transform = "scale(1)";
          }}
        >
          ×
        </button>

        <div style={{ textAlign: "center", marginBottom: 25 }}>
          <h2
            style={{
              color: "#333",
              fontSize: "24px",
              marginBottom: 10,
              fontWeight: "600",
            }}
          >
            📚 Phương pháp học từ vựng hiệu quả
          </h2>
          <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.5" }}>
            Những phương pháp được chứng minh khoa học để học từ vựng một cách
            hiệu quả và bền vững. Áp dụng đúng cách sẽ giúp bạn tiến bộ nhanh
            chóng và ghi nhớ lâu dài.
          </p>
        </div>

        <div
          style={{
            height: "500px",
            overflowY: "auto",
            background: "rgba(255,255,255,0.2)",
            borderRadius: 15,
            padding: 20,
            backdropFilter: "blur(10px)",
          }}
        >
          {methods.map((section, sectionIdx) => (
            <div key={sectionIdx} style={{ marginBottom: 25 }}>
              <h3
                style={{
                  color: "#2c5530",
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: 15,
                  borderBottom: "2px solid rgba(44, 85, 48, 0.3)",
                  paddingBottom: 8,
                }}
              >
                {section.title}
              </h3>

              {section.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  style={{
                    background: "rgba(255,255,255,0.3)",
                    margin: "10px 0",
                    padding: 15,
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.4)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.4)";
                    e.target.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.3)";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#2c5530",
                      marginBottom: 8,
                    }}
                  >
                    {item.subtitle}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      lineHeight: "1.5",
                    }}
                  >
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div
            style={{
              background: "rgba(44, 85, 48, 0.1)",
              padding: 20,
              borderRadius: 12,
              marginTop: 20,
              border: "2px dashed rgba(44, 85, 48, 0.3)",
            }}
          >
            <h4
              style={{
                color: "#2c5530",
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              💡 Lời khuyên quan trọng
            </h4>
            <p
              style={{
                color: "#555",
                fontSize: "14px",
                lineHeight: "1.6",
                textAlign: "center",
                margin: 0,
              }}
            >
              Hãy nhớ rằng học từ vựng là một hành trình dài. Chọn 2-3 phương
              pháp phù hợp với bản thân, thực hành đều đặn mỗi ngày và kiên trì.
              Chất lượng quan trọng hơn số lượng!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhuongPhapHieuQua;
