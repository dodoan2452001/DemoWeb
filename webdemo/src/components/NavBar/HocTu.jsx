import React, { useState } from "react";

const DAILY_WORDS = [
  {
    word: "apple",
    meaning: "quả táo",
    example: "I eat an apple every morning.",
    emoji: "🍎",
  },
  {
    word: "book",
    meaning: "quyển sách",
    example: "She is reading a book.",
    emoji: "📚",
  },
  {
    word: "car",
    meaning: "xe ô tô",
    example: "My father drives a car.",
    emoji: "🚗",
  },
  {
    word: "dog",
    meaning: "con chó",
    example: "The dog is barking.",
    emoji: "🐕",
  },
  {
    word: "house",
    meaning: "ngôi nhà",
    example: "Her house is very big.",
    emoji: "🏠",
  },
  {
    word: "pen",
    meaning: "cây bút",
    example: "I write with a pen.",
    emoji: "✏️",
  },
  {
    word: "cat",
    meaning: "con mèo",
    example: "The cat is sleeping.",
    emoji: "🐱",
  },
  {
    word: "tree",
    meaning: "cái cây",
    example: "There is a tree in the garden.",
    emoji: "🌳",
  },
  {
    word: "phone",
    meaning: "điện thoại",
    example: "I call my friend with my phone.",
    emoji: "📱",
  },
  {
    word: "water",
    meaning: "nước",
    example: "I drink water every day.",
    emoji: "💧",
  },
  {
    word: "sun",
    meaning: "mặt trời",
    example: "The sun is shining brightly.",
    emoji: "☀️",
  },
  {
    word: "moon",
    meaning: "mặt trăng",
    example: "The moon is beautiful tonight.",
    emoji: "🌙",
  },
  {
    word: "fish",
    meaning: "con cá",
    example: "I like to eat fish.",
    emoji: "🐟",
  },
  {
    word: "bird",
    meaning: "con chim",
    example: "The bird is singing in the tree.",
    emoji: "🐦",
  },
  {
    word: "flower",
    meaning: "bông hoa",
    example: "She gave me a beautiful flower.",
    emoji: "🌸",
  },
  {
    word: "star",
    meaning: "ngôi sao",
    example: "I can see many stars at night.",
    emoji: "⭐",
  },
  {
    word: "fire",
    meaning: "lửa",
    example: "We made a fire to keep warm.",
    emoji: "🔥",
  },
  {
    word: "clock",
    meaning: "đồng hồ",
    example: "The clock shows 3 o'clock.",
    emoji: "🕐",
  },
  {
    word: "music",
    meaning: "âm nhạc",
    example: "I love listening to music.",
    emoji: "🎵",
  },
  {
    word: "food",
    meaning: "thức ăn",
    example: "This food is very delicious.",
    emoji: "🍽️",
  },
];

function HocTu() {
  const [learned, setLearned] = useState([]);
  const [words] = useState(DAILY_WORDS);
  const needReview = learned.length > 0 && learned.length < words.length;

  const handleMarkLearned = (word) => {
    if (!learned.includes(word)) {
      const newLearned = [...learned, word];
      setLearned(newLearned);
      if (newLearned.length === words.length) {
        alert("Bạn đã hoàn thành bài học hôm nay!");
      }
    }
  };

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
            Bạn còn {words.length - learned.length} từ chưa thuộc, hãy ôn tập
            tiếp nhé!
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
        {words.map((w) => (
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
            <div
              style={{
                width: 64,
                height: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 12px auto",
                background: "#f8fafc",
                borderRadius: 12,
                border: "2px solid #e2e8f0",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  fontSize: "32px",
                  lineHeight: 1,
                  transform: "scale(1)",
                  display: "block",
                  width: "32px",
                  height: "32px",
                  textAlign: "center",
                  fontFamily:
                    "Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif",
                }}
              >
                {w.emoji}
              </span>
            </div>
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
