import React, { useState } from "react";

const DAILY_WORDS = [
  {
    word: "apple",
    meaning: "quả táo",
    example: "I eat an apple every morning.",
    image: "https://cdn-icons-png.flaticon.com/512/415/415733.png",
  },
  {
    word: "book",
    meaning: "quyển sách",
    example: "She is reading a book.",
    image: "https://cdn-icons-png.flaticon.com/512/167/167755.png",
  },
  {
    word: "car",
    meaning: "xe ô tô",
    example: "My father drives a car.",
    image: "https://cdn-icons-png.flaticon.com/512/743/743007.png",
  },
  {
    word: "dog",
    meaning: "con chó",
    example: "The dog is barking.",
    image: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    word: "house",
    meaning: "ngôi nhà",
    example: "Her house is very big.",
    image: "https://cdn-icons-png.flaticon.com/512/616/616494.png",
  },
  {
    word: "pen",
    meaning: "cây bút",
    example: "I write with a pen.",
    image: "https://cdn-icons-png.flaticon.com/512/167/167753.png",
  },
  {
    word: "cat",
    meaning: "con mèo",
    example: "The cat is sleeping.",
    image: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    word: "tree",
    meaning: "cái cây",
    example: "There is a tree in the garden.",
    image: "https://cdn-icons-png.flaticon.com/512/616/616430.png",
  },
  {
    word: "phone",
    meaning: "điện thoại",
    example: "I call my friend with my phone.",
    image: "https://cdn-icons-png.flaticon.com/512/167/167756.png",
  },
  {
    word: "water",
    meaning: "nước",
    example: "I drink water every day.",
    image: "https://cdn-icons-png.flaticon.com/512/616/616438.png",
  },
];

function HocTu() {
  const [learned, setLearned] = useState([]);

  const handleMarkLearned = (word) => {
    if (!learned.includes(word)) {
      const newLearned = [...learned, word];
      setLearned(newLearned);
      if (newLearned.length === DAILY_WORDS.length) {
        alert("Bạn đã hoàn thành bài học hôm nay!");
      }
    }
  };

  const needReview = learned.length > 0 && learned.length < DAILY_WORDS.length;

  return (
    <div className="page-content" style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 16,
          marginBottom: 8,
          marginLeft: "32px",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ margin: 0 }}>Học từ mới hôm nay</h2>
        {needReview && (
          <div
            style={{
              color: "#ef4444",
              fontWeight: "bold",
              fontSize: "1.1rem",
              marginLeft: "2rem",
            }}
          >
            Bạn còn {DAILY_WORDS.length - learned.length} từ chưa thuộc, hãy ôn
            tập tiếp nhé!
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          marginLeft: "32px",
          flexWrap: "wrap",
          maxHeight: "80vh",
          overflowY: "auto",
          paddingRight: "12px",
        }}
      >
        {DAILY_WORDS.map((w) => (
          <div
            key={w.word}
            style={{
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 2px 8px #ccc",
              padding: 20,
              minWidth: 180,
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            <img
              src={w.image}
              alt={w.word}
              style={{ width: 60, height: 60, marginBottom: 10 }}
            />
            <h3 style={{ color: "#38bdf8" }}>{w.word}</h3>
            <div style={{ marginBottom: 8 }}>
              <b>Nghĩa:</b> {w.meaning}
            </div>
            <div style={{ fontStyle: "italic", marginBottom: 8 }}>
              <b>Ví dụ:</b> {w.example}
            </div>
            <button
              onClick={() => handleMarkLearned(w.word)}
              style={{
                background: learned.includes(w.word) ? "#34d399" : "#f472b6",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "4px 12px",
                cursor: "pointer",
              }}
            >
              {learned.includes(w.word) ? "Đã thuộc" : "Đánh dấu đã thuộc"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HocTu;
