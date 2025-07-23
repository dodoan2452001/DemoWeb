import React, { useState } from "react";

// Giả sử dữ liệu danh sách từ được truyền vào dưới dạng prop hoặc import từ file khác
// Ở đây demo với một mảng mẫu
const sampleWords = [
  {
    word: "apple",
    meaning: "quả táo",
    example: "I eat an apple every day.",
    phonetic: "/ˈæp.əl/",
  },
  {
    word: "banana",
    meaning: "quả chuối",
    example: "Bananas are yellow.",
    phonetic: "/bəˈnɑː.nə/",
  },
  {
    word: "cat",
    meaning: "con mèo",
    example: "The cat is sleeping.",
    phonetic: "/kæt/",
  },
];

function TuTraCuu({ words = sampleWords }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);
    if (!query.trim()) return;
    const found = words.find(
      (w) =>
        w.word.toLowerCase() === query.trim().toLowerCase() ||
        w.meaning.toLowerCase() === query.trim().toLowerCase()
    );
    if (found) {
      setResult(found);
      setSuggestions([]);
    } else {
      // Gợi ý từ gần đúng
      const sugg = words
        .filter(
          (w) =>
            w.word.toLowerCase().includes(query.trim().toLowerCase()) ||
            w.meaning.toLowerCase().includes(query.trim().toLowerCase())
        )
        .map((w) => w.word);
      setResult(null);
      setSuggestions(sugg);
    }
  };

  const handleSuggestionClick = (word) => {
    setQuery(word);
    setSearched(false);
    const found = words.find((w) => w.word === word);
    if (found) {
      setResult(found);
      setSuggestions([]);
    }
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        padding: 24,
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 8px #ccc",
      }}
    >
      <form onSubmit={handleSearch} style={{ display: "flex", gap: 8 }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nhập từ cần tra cứu..."
          style={{
            flex: 1,
            padding: 8,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            borderRadius: 6,
            background: "#38bdf8",
            color: "#fff",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          🔍
        </button>
      </form>

      {result && (
        <div
          style={{
            marginTop: 24,
            background: "#f0f9ff",
            borderRadius: 10,
            padding: 20,
            boxShadow: "0 2px 8px #cce",
          }}
        >
          <div
            style={{ fontSize: "1.3rem", fontWeight: "bold", color: "#38bdf8" }}
          >
            {result.word}{" "}
            <span style={{ color: "#888", fontSize: "1rem" }}>
              {result.phonetic}
            </span>
          </div>
          <div style={{ margin: "8px 0" }}>
            <b>Nghĩa:</b> {result.meaning}
          </div>
          <div style={{ fontStyle: "italic" }}>
            <b>Ví dụ:</b> {result.example}
          </div>
        </div>
      )}

      {/* Thông báo chỉ hiện khi đã bấm tìm kiếm */}
      {!result && searched && query.trim() && suggestions.length === 0 && (
        <div style={{ marginTop: 12, color: "#ef4444", fontWeight: "bold" }}>
          Chưa có từ bạn tìm kiếm.
        </div>
      )}

      {suggestions.length > 0 && (
        <div style={{ marginTop: 12 }}>
          <b>Gợi ý:</b>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {suggestions.map((s) => (
              <li
                key={s}
                style={{ cursor: "pointer", color: "#6366f1" }}
                onClick={() => handleSuggestionClick(s)}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TuTraCuu;
