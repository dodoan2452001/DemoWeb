import { useState, useEffect } from "react";

function DanhSachTu() {
  const [words, setWords] = useState(() => {
    const saved = localStorage.getItem("vocab_words");
    if (saved) return JSON.parse(saved);
    return [
      {
        word: "apple",
        meaning: "quả táo",
        note: "Trái cây phổ biến",
        added: "2025-07-19",
        review: 2,
      },
      {
        word: "book",
        meaning: "quyển sách",
        note: "Dùng để đọc",
        added: "2025-07-18",
        review: 1,
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("vocab_words", JSON.stringify(words));
  }, [words]);

  const [newWord, setNewWord] = useState("");
  const [newMeaning, setNewMeaning] = useState("");
  const [newNote, setNewNote] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newWord || !newMeaning) return;
    setWords([
      ...words,
      {
        word: newWord,
        meaning: newMeaning,
        note: newNote,
        added: new Date().toISOString().slice(0, 10),
        review: 0,
      },
    ]);
    setNewWord("");
    setNewMeaning("");
    setNewNote("");
  };

  const handleDelete = (idx) => {
    setWords(words.filter((_, i) => i !== idx));
  };

  const handleReview = (idx) => {
    setWords(
      words.map((w, i) => (i === idx ? { ...w, review: w.review + 1 } : w))
    );
  };

  return (
    <div className="page-content">
      <h2 style={{ marginLeft: "25px" }}>DANH SÁCH TỪ</h2>
      <form
        onSubmit={handleAdd}
        style={{
          marginBottom: "1.5rem",
          display: "flex",
          gap: "0.5rem",
          maxWidth: "700px",
          marginLeft: "60px",
        }}
      >
        <input
          type="text"
          placeholder="Từ vựng"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
          required
          style={{
            flex: 1,
            minWidth: "120px",
            height: "40px",
            fontSize: "1rem",
          }}
        />
        <input
          type="text"
          placeholder="Nghĩa"
          value={newMeaning}
          onChange={(e) => setNewMeaning(e.target.value)}
          required
          style={{
            flex: 1,
            minWidth: "120px",
            height: "40px",
            fontSize: "1rem",
          }}
        />
        <input
          type="text"
          placeholder="Ghi chú (tuỳ chọn)"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          style={{
            flex: 1,
            minWidth: "120px",
            height: "40px",
            fontSize: "1rem",
          }}
        />
        <button
          type="submit"
          style={{
            flex: 1,
            minWidth: "120px",
            height: "40px",
            fontSize: "1rem",
            background: "#38bdf8",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Thêm từ
        </button>
      </form>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f0f4ff" }}>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>
              Từ vựng
            </th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Nghĩa</th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>
              Ghi chú
            </th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>
              Ngày thêm
            </th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>
              Số lần ôn tập
            </th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>
              Thao tác
            </th>
          </tr>
        </thead>
        <tbody>
          {words.map((w, idx) => (
            <tr key={idx}>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {w.word}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {w.meaning}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {w.note}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {w.added}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {w.review}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                <button
                  onClick={() => handleReview(idx)}
                  style={{ marginRight: "0.5rem" }}
                >
                  Ôn tập
                </button>
                <button
                  onClick={() => handleDelete(idx)}
                  style={{ color: "red" }}
                >
                  Xoá
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DanhSachTu;
