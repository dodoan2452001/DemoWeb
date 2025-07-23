import React, { useState } from "react";

// Demo từ điển mẫu, có thể mở rộng hoặc thay bằng API thật
const DICTIONARY = [
  {
    word: "apple",
    meaning: "quả táo",
    example: "I eat an apple every morning.",
    phonetic: "/ˈæp.əl/",
  },
  {
    word: "book",
    meaning: "quyển sách",
    example: "She is reading a book.",
    phonetic: "/bʊk/",
  },
  {
    word: "dog",
    meaning: "con chó",
    example: "The dog is barking.",
    phonetic: "/dɒɡ/",
  },
  {
    word: "cat",
    meaning: "con mèo",
    example: "The cat is sleeping.",
    phonetic: "/kæt/",
  },
  {
    word: "water",
    meaning: "nước",
    example: "I drink water every day.",
    phonetic: "/ˈwɔː.tər/",
  },
];

function TuDien() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [history, setHistory] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);
    if (!query.trim()) return;
    const found = DICTIONARY.find(
      (w) => w.word.toLowerCase() === query.trim().toLowerCase()
    );
    if (found) {
      setResult(found);
      setSuggestions([]);
      setHistory((prev) =>
        [found.word, ...prev.filter((w) => w !== found.word)].slice(0, 5)
      );
    } else {
      // Gợi ý từ gần đúng
      const sugg = DICTIONARY.filter((w) =>
        w.word.toLowerCase().includes(query.trim().toLowerCase())
      ).map((w) => w.word);
      setResult(null);
      setSuggestions(sugg);
    }
  };

  const handleSuggestionClick = (word) => {
    setQuery(word);
    setSearched(false);
    const found = DICTIONARY.find((w) => w.word === word);
    if (found) {
      setResult(found);
      setSuggestions([]);
      setHistory((prev) =>
        [found.word, ...prev.filter((w) => w !== found.word)].slice(0, 5)
      );
    }
  };

  return (
    <div className="page-content">
      <h2 style={{ marginLeft: 25 }}>TỪ ĐIỂN</h2>
      <form
        onSubmit={handleSearch}
        style={{ display: "flex", gap: 8, marginLeft: 32, marginBottom: 24 }}
      >
        <input
          type="text"
          placeholder="Nhập từ cần kiểm tra..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: "8px 12px",
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: "1.1rem",
            minWidth: 180,
          }}
        />
        <button
          type="submit"
          style={{
            background: "#38bdf8",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "8px 18px",
            fontWeight: "bold",
            fontSize: "1.1rem",
            cursor: "pointer",
          }}
        >
          Tra cứu
        </button>
      </form>

      {result && (
        <div
          style={{
            marginLeft: 32,
            background: "#f0f9ff",
            borderRadius: 10,
            padding: 20,
            maxWidth: 400,
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
        <div
          style={{
            marginLeft: 32,
            marginTop: 12,
            color: "#ef4444",
            fontWeight: "bold",
          }}
        >
          Chưa có từ bạn tìm kiếm.
        </div>
      )}

      {suggestions.length > 0 && (
        <div style={{ marginLeft: 32, marginTop: 12 }}>
          <b>Gợi ý:</b>
          {suggestions.map((w) => (
            <span
              key={w}
              onClick={() => handleSuggestionClick(w)}
              style={{
                cursor: "pointer",
                color: "#38bdf8",
                marginLeft: 12,
                textDecoration: "underline",
              }}
            >
              {w}
            </span>
          ))}
        </div>
      )}

      {history.length > 0 && (
        <div style={{ marginLeft: 32, marginTop: 24 }}>
          <b>Lịch sử tra cứu:</b>
          {history.map((w) => (
            <span
              key={w}
              onClick={() => handleSuggestionClick(w)}
              style={{
                cursor: "pointer",
                color: "#0ea5e9",
                marginLeft: 12,
                textDecoration: "underline",
              }}
            >
              {w}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default TuDien;
