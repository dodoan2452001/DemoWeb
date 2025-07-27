import React, { useState, useEffect } from "react";

function TuTraCuu() {
  const [words, setWords] = useState([]);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [searched, setSearched] = useState(false);

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
        maxWidth: 800,
        margin: "20px auto",
        padding: 0,
        background: "transparent",
      }}
    >
      <form
        onSubmit={handleSearch}
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "24px 32px",
          borderRadius: 20,
          boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nhập từ cần tra cứu..."
          style={{
            flex: 1,
            padding: "16px 24px",
            fontSize: "18px",
            borderRadius: 12,
            border: "none",
            outline: "none",
            background: "rgba(255,255,255,0.95)",
            color: "#2d3748",
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
            minWidth: "400px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "16px 24px",
            borderRadius: 12,
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            color: "#fff",
            border: "none",
            fontWeight: "bold",
            fontSize: "20px",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(79, 172, 254, 0.4)",
            transition: "all 0.3s ease",
            minWidth: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
          🔍
        </button>
      </form>

      {result && (
        <div
          style={{
            marginTop: 30,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: 20,
            padding: 30,
            boxShadow: "0 15px 35px rgba(102, 126, 234, 0.3)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#fff",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#fff",
              marginBottom: "15px",
              textAlign: "center",
            }}
          >
            {result.word}{" "}
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px" }}>
              {result.phonetic}
            </span>
          </div>
          <div
            style={{
              margin: "15px 0",
              fontSize: "18px",
              background: "rgba(255,255,255,0.1)",
              padding: "12px 16px",
              borderRadius: 10,
              backdropFilter: "blur(10px)",
            }}
          >
            <b>Nghĩa:</b> {result.meaning}
          </div>
        </div>
      )}

      {!result && searched && query.trim() && suggestions.length === 0 && (
        <div
          style={{
            marginTop: 20,
            color: "#e53e3e",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "16px",
            background: "rgba(229, 62, 62, 0.1)",
            padding: "15px",
            borderRadius: 12,
            border: "1px solid rgba(229, 62, 62, 0.2)",
          }}
        >
          Chưa có từ bạn tìm kiếm.
        </div>
      )}

      {suggestions.length > 0 && (
        <div
          style={{
            marginTop: 20,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: 15,
            padding: "20px",
            boxShadow: "0 10px 25px rgba(102, 126, 234, 0.2)",
          }}
        >
          <div
            style={{
              color: "#fff",
              fontWeight: "bold",
              marginBottom: "15px",
              fontSize: "18px",
            }}
          >
            Gợi ý:
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {suggestions.map((s) => (
              <span
                key={s}
                style={{
                  cursor: "pointer",
                  color: "#fff",
                  background: "rgba(255,255,255,0.2)",
                  padding: "8px 15px",
                  borderRadius: 20,
                  fontSize: "14px",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onClick={() => handleSuggestionClick(s)}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255,255,255,0.3)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(255,255,255,0.2)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TuTraCuu;
