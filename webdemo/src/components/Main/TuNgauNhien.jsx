import React, { useState, useEffect } from "react";
import { FaDice } from "react-icons/fa";

function TuNgauNhien() {
  const [words, setWords] = useState([]);
  const [randomWord, setRandomWord] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("vocab_words");
    if (data) {
      try {
        setWords(JSON.parse(data));
      } catch {
        setWords([]);
      }
    }
  }, []);

  const getRandomWord = () => {
    if (words.length === 0) {
      alert("Chưa có từ nào trong danh sách!");
      return;
    }
    const randomIndex = Math.floor(Math.random() * words.length);
    setRandomWord(words[randomIndex]);
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
    setRandomWord(null);
  };

  return (
    <>
      <div
        onClick={getRandomWord}
        style={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem",
          borderRadius: "12px",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          transition: "all 0.3s ease",
          maxWidth: "120px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow =
            "0 8px 25px rgba(99, 102, 241, 0.3)";
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
        }}
      >
        <FaDice
          size={24}
          style={{
            color: "#6366f1",
            marginBottom: "0.5rem",
          }}
        />
        <span
          style={{
            color: "#1e293b",
            fontSize: "18px",
            fontWeight: "600",
            textAlign: "center",
            lineHeight: "1.2",
          }}
        >
          Từ ngẫu nhiên
        </span>
      </div>

      {isVisible && randomWord && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            backdropFilter: "blur(5px)",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: 20,
              padding: 40,
              maxWidth: 500,
              width: "90%",
              boxShadow: "0 20px 50px rgba(102, 126, 234, 0.4)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
              position: "relative",
              transform: "scale(1)",
              transition: "all 0.3s ease",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: 15,
                right: 20,
                background: "rgba(255,255,255,0.2)",
                border: "none",
                borderRadius: "50%",
                width: 35,
                height: 35,
                color: "#fff",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255,255,255,0.3)";
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255,255,255,0.2)";
                e.target.style.transform = "scale(1)";
              }}
            >
              ×
            </button>

            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <h3
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  marginBottom: 15,
                  fontWeight: "600",
                }}
              >
                🎲 Từ ngẫu nhiên
              </h3>
            </div>

            <div
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#fff",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              {randomWord.word}{" "}
              <span
                style={{ color: "rgba(255,255,255,0.7)", fontSize: "18px" }}
              >
                {randomWord.phonetic}
              </span>
            </div>

            <div
              style={{
                margin: "20px 0",
                fontSize: "20px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px 20px",
                borderRadius: 12,
                backdropFilter: "blur(10px)",
              }}
            >
              <b>Nghĩa:</b> {randomWord.meaning}
            </div>

            <div style={{ textAlign: "center", marginTop: 25 }}>
              <button
                onClick={getRandomWord}
                style={{
                  background:
                    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 12,
                  padding: "12px 25px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(79, 172, 254, 0.4)",
                  transition: "all 0.3s ease",
                  marginRight: 15,
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 6px 20px rgba(79, 172, 254, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow =
                    "0 4px 15px rgba(79, 172, 254, 0.4)";
                }}
              >
                🎲 Từ khác
              </button>
              <button
                onClick={closeModal}
                style={{
                  background: "rgba(255,255,255,0.2)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: 12,
                  padding: "12px 25px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255,255,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(255,255,255,0.2)";
                }}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TuNgauNhien;
