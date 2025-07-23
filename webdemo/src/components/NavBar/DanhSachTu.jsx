import React, { useState, useEffect } from "react";

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
      {
        word: "car",
        meaning: "xe ô tô",
        note: "Phương tiện di chuyển",
        added: "2025-07-17",
        review: 0,
      },
      {
        word: "dog",
        meaning: "con chó",
        note: "Thú cưng trung thành",
        added: "2025-07-16",
        review: 0,
      },
      {
        word: "cat",
        meaning: "con mèo",
        note: "Thú cưng dễ thương",
        added: "2025-07-15",
        review: 0,
      },
      {
        word: "pen",
        meaning: "cây bút",
        note: "Dùng để viết",
        added: "2025-07-14",
        review: 0,
      },
      {
        word: "tree",
        meaning: "cái cây",
        note: "Thực vật",
        added: "2025-07-13",
        review: 0,
      },
      {
        word: "phone",
        meaning: "điện thoại",
        note: "Thiết bị liên lạc",
        added: "2025-07-12",
        review: 0,
      },
      {
        word: "water",
        meaning: "nước",
        note: "Chất lỏng thiết yếu",
        added: "2025-07-11",
        review: 0,
      },
      {
        word: "house",
        meaning: "ngôi nhà",
        note: "Nơi ở",
        added: "2025-07-10",
        review: 0,
      },
      {
        word: "tree",
        meaning: "cái cây",
        note: "Thực vật",
        added: "2025-07-09",
        review: 0,
      },
      {
        word: "computer",
        meaning: "máy tính",
        note: "Thiết bị điện tử",
        added: "2025-07-08",
        review: 0,
      },
      {
        word: "bottle",
        meaning: "chai nước",
        note: "Đựng nước",
        added: "2025-07-07",
        review: 0,
      },
      {
        word: "table",
        meaning: "cái bàn",
        note: "Đồ nội thất",
        added: "2025-07-06",
        review: 0,
      },
      {
        word: "chair",
        meaning: "cái ghế",
        note: "Đồ nội thất",
        added: "2025-07-05",
        review: 0,
      },
      {
        word: "window",
        meaning: "cửa sổ",
        note: "Kiến trúc nhà",
        added: "2025-07-04",
        review: 0,
      },
      {
        word: "door",
        meaning: "cánh cửa",
        note: "Kiến trúc nhà",
        added: "2025-07-03",
        review: 0,
      },
      {
        word: "clock",
        meaning: "đồng hồ",
        note: "Xem giờ",
        added: "2025-07-02",
        review: 0,
      },
      {
        word: "bag",
        meaning: "cái túi",
        note: "Đựng đồ",
        added: "2025-07-01",
        review: 0,
      },
      {
        word: "lamp",
        meaning: "cái đèn",
        note: "Chiếu sáng",
        added: "2025-06-30",
        review: 0,
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
      <div
        style={{
          height: "calc(100vh - 260px)", // 260px là tổng chiều cao header, form, padding, có thể điều chỉnh lại nếu cần
          overflowY: "auto",
          borderRadius: 8,
          border: "1px solid #e0e0e0",
          marginBottom: 0,
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f0f4ff" }}>
              <th style={{ padding: "8px", border: "1px solid #ddd" }}>
                Từ vựng
              </th>
              <th style={{ padding: "8px", border: "1px solid #ddd" }}>
                Nghĩa
              </th>
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
    </div>
  );
}
export default DanhSachTu;
