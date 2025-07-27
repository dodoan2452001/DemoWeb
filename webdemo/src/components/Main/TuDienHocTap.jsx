import React, { useState, useEffect } from "react";

function TuDienHocTap({ isVisible, onClose }) {
  const [words, setWords] = useState([]);
  const [newWord, setNewWord] = useState("");
  const [newMeaning, setNewMeaning] = useState("");
  const [newNote, setNewNote] = useState("");
  const [newExample, setNewExample] = useState("");

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

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newWord || !newMeaning) return;

    const newWordItem = {
      word: newWord,
      meaning: newMeaning,
      phonetic: newNote,
      example: newExample,
      note: newNote,
      added: new Date().toISOString().slice(0, 10),
      review: 0,
    };

    const updatedWords = [...words, newWordItem];
    setWords(updatedWords);
    localStorage.setItem("vocab_words", JSON.stringify(updatedWords));

    setNewWord("");
    setNewMeaning("");
    setNewNote("");
    setNewExample("");
  };

  const handleDelete = (idx) => {
    const updatedWords = words.filter((_, i) => i !== idx);
    setWords(updatedWords);
    localStorage.setItem("vocab_words", JSON.stringify(updatedWords));
  };

  const handleReview = (idx) => {
    const updatedWords = words.map((w, i) =>
      i === idx ? { ...w, review: w.review + 1 } : w
    );
    setWords(updatedWords);
    localStorage.setItem("vocab_words", JSON.stringify(updatedWords));
  };

  if (!isVisible) return null;

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
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: 20,
          padding: 30,
          maxWidth: "90%",
          width: "1000px",
          maxHeight: "90%",
          boxShadow: "0 20px 50px rgba(102, 126, 234, 0.4)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "#fff",
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
            background: "rgba(255,255,255,0.2)",
            border: "none",
            borderRadius: "50%",
            width: 40,
            height: 40,
            color: "#fff",
            fontSize: "20px",
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

        <div style={{ textAlign: "center", marginBottom: 25 }}>
          <h2
            style={{
              color: "#fff",
              fontSize: "24px",
              marginBottom: 10,
              fontWeight: "600",
            }}
          >
            📚 Từ điển cho việc học
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px" }}>
            Quản lý và ôn tập từ vựng của bạn
          </p>
        </div>

        <form
          onSubmit={handleAdd}
          style={{
            marginBottom: 25,
            background: "rgba(255,255,255,0.1)",
            padding: 20,
            borderRadius: 15,
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 15,
              marginBottom: 15,
            }}
          >
            <input
              type="text"
              placeholder="Từ vựng *"
              value={newWord}
              onChange={(e) => setNewWord(e.target.value)}
              required
              style={{
                padding: "12px 15px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: "16px",
                outline: "none",
              }}
            />
            <input
              type="text"
              placeholder="Nghĩa *"
              value={newMeaning}
              onChange={(e) => setNewMeaning(e.target.value)}
              required
              style={{
                padding: "12px 15px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: "16px",
                outline: "none",
              }}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 15,
              marginBottom: 15,
            }}
          >
            {
              <input
                type="text"
                placeholder="Ghi chú"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                style={{
                  padding: "12px 15px",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.3)",
                  background: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  fontSize: "16px",
                  outline: "none",
                }}
              />
            }
            <input
              type="text"
              placeholder="Ví dụ"
              value={newExample}
              onChange={(e) => setNewExample(e.target.value)}
              style={{
                padding: "12px 15px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: "16px",
                outline: "none",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px 20px",
              borderRadius: 10,
              border: "none",
              background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(79, 172, 254, 0.4)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(79, 172, 254, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(79, 172, 254, 0.4)";
            }}
          >
            ➕ Thêm từ mới
          </button>
        </form>

        <div
          style={{
            height: "400px",
            overflowY: "auto",
            background: "rgba(255,255,255,0.1)",
            borderRadius: 15,
            backdropFilter: "blur(10px)",
          }}
        >
          {words.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "50px",
                color: "rgba(255,255,255,0.7)",
                fontSize: "18px",
              }}
            >
              Chưa có từ vựng nào. Hãy thêm từ đầu tiên!
            </div>
          ) : (
            <div style={{ padding: 15 }}>
              {words.map((word, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    margin: "10px 0",
                    padding: 20,
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.2)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.15)";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.1)";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          marginBottom: 8,
                        }}
                      >
                        {word.word}
                        {word.note && (
                          <span
                            style={{
                              color: "rgba(255,255,255,0.7)",
                              fontSize: "16px",
                              fontWeight: "normal",
                              marginLeft: 10,
                            }}
                          >
                            - {word.note}
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          fontSize: "18px",
                          color: "rgba(255,255,255,0.9)",
                          marginBottom: 8,
                        }}
                      >
                        <strong>Nghĩa:</strong> {word.meaning}
                      </div>
                      {word.example && (
                        <div
                          style={{
                            fontSize: "16px",
                            color: "rgba(255,255,255,0.8)",
                            fontStyle: "italic",
                          }}
                        >
                          <strong>Ví dụ:</strong> {word.example}
                        </div>
                      )}
                      <div
                        style={{
                          fontSize: "14px",
                          color: "rgba(255,255,255,0.6)",
                          marginTop: 10,
                          display: "flex",
                          gap: 15,
                        }}
                      >
                        <span>📅 {word.added}</span>
                        <span>🔄 Ôn tập: {word.review} lần</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 10, marginLeft: 20 }}>
                      <button
                        onClick={() => handleReview(idx)}
                        style={{
                          background: "rgba(34, 197, 94, 0.8)",
                          color: "#fff",
                          border: "none",
                          borderRadius: 8,
                          padding: "8px 15px",
                          fontSize: "14px",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "rgba(34, 197, 94, 1)";
                          e.target.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "rgba(34, 197, 94, 0.8)";
                          e.target.style.transform = "scale(1)";
                        }}
                      >
                        ✅ Ôn tập
                      </button>
                      <button
                        onClick={() => handleDelete(idx)}
                        style={{
                          background: "rgba(239, 68, 68, 0.8)",
                          color: "#fff",
                          border: "none",
                          borderRadius: 8,
                          padding: "8px 15px",
                          fontSize: "14px",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "rgba(239, 68, 68, 1)";
                          e.target.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "rgba(239, 68, 68, 0.8)";
                          e.target.style.transform = "scale(1)";
                        }}
                      >
                        🗑️ Xóa
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TuDienHocTap;
