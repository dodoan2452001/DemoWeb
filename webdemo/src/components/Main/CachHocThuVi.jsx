import React from "react";

function CachHocThuVi({ isVisible, onClose }) {
  if (!isVisible) return null;

  const suggestions = [
    {
      title: "1. Học từ vựng qua trò chơi:",
      items: [
        {
          subtitle: "Trò chơi từ vựng:",
          content:
            "Tham gia các trò chơi như Scrabble, Word Search, hoặc sử dụng các ứng dụng học từ vựng có tính năng trò chơi như Duolingo, Memrise.",
        },
        {
          subtitle: "Giải câu đố:",
          content:
            "Chơi các trò chơi ô chữ, trò chơi tìm từ, hoặc các câu đố khác liên quan đến từ vựng.",
        },
      ],
    },
    {
      title: "2. Học từ vựng qua phim ảnh và âm nhạc:",
      items: [
        {
          subtitle: "Xem phim có phụ đề:",
          content:
            "Chọn những bộ phim bạn yêu thích và xem có phụ đề tiếng Anh. Điều này giúp bạn học từ vựng trong ngữ cảnh và làm quen với cách phát âm.",
        },
        {
          subtitle: "Nghe nhạc và hát theo:",
          content:
            "Chọn những bài hát tiếng Anh yêu thích và hát theo lời bài hát. Điều này giúp bạn cải thiện khả năng phát âm và học thêm từ mới.",
        },
      ],
    },
    {
      title: "3. Đọc sách và báo:",
      items: [
        {
          subtitle: "Đọc đa dạng tài liệu:",
          content:
            "Đọc sách, báo, tạp chí, blog và các tài liệu khác bằng tiếng Anh để tiếp xúc với nhiều từ vựng mới trong các chủ đề khác nhau.",
        },
        {
          subtitle: "Ghi chú từ mới:",
          content:
            "Khi đọc, hãy ghi chú những từ mới và tìm hiểu nghĩa của chúng. Sau đó, cố gắng sử dụng những từ này trong giao tiếp hàng ngày.",
        },
      ],
    },
    {
      title: "4. Sử dụng flashcards và ứng dụng:",
      items: [
        {
          subtitle: "Flashcards truyền thống:",
          content:
            "Tạo các thẻ từ vựng với từ mới ở một mặt và nghĩa ở mặt kia. Ôn tập thường xuyên để ghi nhớ.",
        },
        {
          subtitle: "Ứng dụng học từ vựng:",
          content:
            "Sử dụng các ứng dụng như Anki, Quizlet, hoặc Memrise để học từ vựng một cách có hệ thống.",
        },
      ],
    },
    {
      title: "5. Thực hành giao tiếp:",
      items: [
        {
          subtitle: "Nói chuyện với người bản xứ:",
          content:
            "Tham gia các nhóm giao tiếp tiếng Anh hoặc tìm bạn học để thực hành sử dụng từ vựng trong giao tiếp thực tế.",
        },
        {
          subtitle: "Viết nhật ký:",
          content:
            "Viết nhật ký bằng tiếng Anh và cố gắng sử dụng những từ vựng mới đã học.",
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
            "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
          borderRadius: 20,
          padding: 30,
          maxWidth: "90%",
          width: "800px",
          maxHeight: "90%",
          boxShadow: "0 20px 50px rgba(255, 154, 158, 0.4)",
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
            😊 Cách thú vị để nâng cao từ vựng
          </h2>
          <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.5" }}>
            Để nâng cao vốn từ vựng một cách thú vị, bạn có thể thử nhiều phương
            pháp khác nhau như học từ vựng qua trò chơi, xem phim và nghe nhạc
            tiếng Anh, đọc sách và báo, sử dụng flashcards, và viết nhật ký.
            Quan trọng nhất là tìm ra cách học phù hợp với bản thân và kiên trì
            thực hành.
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
          <div
            style={{
              marginBottom: 20,
              color: "#444",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Dưới đây là một số gợi ý chi tiết:
          </div>

          {suggestions.map((section, sectionIdx) => (
            <div key={sectionIdx} style={{ marginBottom: 25 }}>
              <h3
                style={{
                  color: "#333",
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: 15,
                  borderBottom: "2px solid rgba(255,255,255,0.3)",
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
                      color: "#333",
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
        </div>
      </div>
    </div>
  );
}

export default CachHocThuVi;
