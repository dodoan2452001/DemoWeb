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

  // Quiz state
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizType, setQuizType] = useState(null); // 1,2,3,5
  const [quizList, setQuizList] = useState([]);
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizOptions, setQuizOptions] = useState([]);
  const [quizInput, setQuizInput] = useState("");
  const [quizResult, setQuizResult] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);

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

  // Quiz helpers
  function shuffle(arr) {
    return arr
      .map((v) => [Math.random(), v])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  }

  // Start quiz
  const startQuiz = (type) => {
    setQuizType(type);
    setQuizScore(0);
    setQuizDone(false);
    let list = shuffle([...words]);
    setQuizList(list);
    setQuizIdx(0);
    setQuizResult(null);
    setQuizInput("");
    // Generate options for first question if needed
    if (type === 1 || type === 3) {
      genOptions(list[0], type, list);
    }
    setShowQuiz(true);
  };

  // Generate options for trắc nghiệm
  const genOptions = (current, type, list) => {
    let options = [type === 1 ? current.meaning : current.word];
    while (options.length < 4) {
      const rand = list[Math.floor(Math.random() * list.length)];
      const val = type === 1 ? rand.meaning : rand.word;
      if (!options.includes(val)) options.push(val);
    }
    setQuizOptions(shuffle(options));
  };

  // Xử lý trả lời quiz
  const handleQuizAnswer = (ans) => {
    const current = quizList[quizIdx];
    let correct = false;
    if (quizType === 1) correct = ans === current.meaning;
    if (quizType === 3) correct = ans === current.word;
    if (quizType === 2) correct = ans.trim().toLowerCase() === current.meaning.trim().toLowerCase();
    if (correct) setQuizScore((s) => s + 1);
    setQuizResult(correct ? "Đúng!" : `Sai! Đáp án: ${quizType === 1 ? current.meaning : quizType === 3 ? current.word : current.meaning}`);
    setTimeout(() => {
      nextQuiz();
    }, 1000);
  };

  // Next quiz
  const nextQuiz = () => {
    const nextIdx = quizIdx + 1;
    if (nextIdx >= quizList.length) {
      setQuizDone(true);
      setQuizResult(null);
      return;
    }
    setQuizIdx(nextIdx);
    setQuizResult(null);
    setQuizInput("");
    if (quizType === 1 || quizType === 3) genOptions(quizList[nextIdx], quizType, quizList);
  };

  // Quiz UI
  const renderQuiz = () => {
    if (!showQuiz) return null;
    if (quizDone)
      return (
        <div className="quiz-modal">
          <div style={{ background: '#fff', padding: 32, borderRadius: 12, boxShadow: '0 2px 8px #ccc', maxWidth: 400, margin: '60px auto', textAlign: 'center' }}>
            <h3>Luyện tập hoàn thành!</h3>
            <div>Điểm số: {quizScore}/{quizList.length}</div>
            <button onClick={() => setShowQuiz(false)} style={{ marginTop: 16, background: '#38bdf8', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 24px', fontWeight: 'bold', cursor: 'pointer' }}>Đóng</button>
          </div>
        </div>
      );
    const current = quizList[quizIdx];
    return (
      <div className="quiz-modal">
        <div style={{ background: '#fff', padding: 32, borderRadius: 12, boxShadow: '0 2px 8px #ccc', maxWidth: 400, margin: '60px auto', textAlign: 'center' }}>
          <div style={{ marginBottom: 16 }}>Câu {quizIdx + 1}/{quizList.length}</div>
          {/* Quiz type 1: Trắc nghiệm nghĩa */}
          {quizType === 1 && (
            <>
              <div style={{ fontWeight: 'bold', marginBottom: 12 }}>Từ: <span style={{ color: '#38bdf8' }}>{current.word}</span></div>
              {quizOptions.map((opt) => (
                <button key={opt} onClick={() => handleQuizAnswer(opt)} style={{ display: 'block', width: '100%', margin: '8px 0', padding: 8, borderRadius: 6, border: '1px solid #38bdf8', background: '#f0f9ff', cursor: 'pointer' }}>{opt}</button>
              ))}
            </>
          )}
          {/* Quiz type 2: Điền nghĩa */}
          {quizType === 2 && (
            <>
              <div style={{ fontWeight: 'bold', marginBottom: 12 }}>Từ: <span style={{ color: '#38bdf8' }}>{current.word}</span></div>
              <form onSubmit={e => { e.preventDefault(); handleQuizAnswer(quizInput); }}>
                <input value={quizInput} onChange={e => setQuizInput(e.target.value)} placeholder="Nhập nghĩa tiếng Việt" style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginBottom: 12 }} />
                <button type="submit" style={{ background: '#38bdf8', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 24px', fontWeight: 'bold', cursor: 'pointer' }}>Kiểm tra</button>
              </form>
            </>
          )}
          {/* Quiz type 3: Trắc nghiệm đảo ngược */}
          {quizType === 3 && (
            <>
              <div style={{ fontWeight: 'bold', marginBottom: 12 }}>Nghĩa: <span style={{ color: '#38bdf8' }}>{current.meaning}</span></div>
              {quizOptions.map((opt) => (
                <button key={opt} onClick={() => handleQuizAnswer(opt)} style={{ display: 'block', width: '100%', margin: '8px 0', padding: 8, borderRadius: 6, border: '1px solid #38bdf8', background: '#f0f9ff', cursor: 'pointer' }}>{opt}</button>
              ))}
            </>
          )}
          {/* Quiz type 5: Random toàn bộ (trộn 3 dạng) */}
          {quizType === 5 && (
            <>
              {/* Random chọn 1 trong 3 dạng trên cho mỗi câu */}
              {(() => {
                const subType = [1,2,3][Math.floor(Math.random()*3)];
                if (subType === 1) return (
                  <>
                    <div style={{ fontWeight: 'bold', marginBottom: 12 }}>Từ: <span style={{ color: '#38bdf8' }}>{current.word}</span></div>
                    {quizOptions.map((opt) => (
                      <button key={opt} onClick={() => handleQuizAnswer(opt)} style={{ display: 'block', width: '100%', margin: '8px 0', padding: 8, borderRadius: 6, border: '1px solid #38bdf8', background: '#f0f9ff', cursor: 'pointer' }}>{opt}</button>
                    ))}
                  </>
                );
                if (subType === 2) return (
                  <>
                    <div style={{ fontWeight: 'bold', marginBottom: 12 }}>Từ: <span style={{ color: '#38bdf8' }}>{current.word}</span></div>
                    <form onSubmit={e => { e.preventDefault(); handleQuizAnswer(quizInput); }}>
                      <input value={quizInput} onChange={e => setQuizInput(e.target.value)} placeholder="Nhập nghĩa tiếng Việt" style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginBottom: 12 }} />
                      <button type="submit" style={{ background: '#38bdf8', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 24px', fontWeight: 'bold', cursor: 'pointer' }}>Kiểm tra</button>
                    </form>
                  </>
                );
                if (subType === 3) return (
                  <>
                    <div style={{ fontWeight: 'bold', marginBottom: 12 }}>Nghĩa: <span style={{ color: '#38bdf8' }}>{current.meaning}</span></div>
                    {quizOptions.map((opt) => (
                      <button key={opt} onClick={() => handleQuizAnswer(opt)} style={{ display: 'block', width: '100%', margin: '8px 0', padding: 8, borderRadius: 6, border: '1px solid #38bdf8', background: '#f0f9ff', cursor: 'pointer' }}>{opt}</button>
                    ))}
                  </>
                );
              })()}
            </>
          )}
          {quizResult && <div style={{ marginTop: 16, fontWeight: 'bold', color: quizResult.startsWith('Đúng') ? '#22c55e' : '#ef4444' }}>{quizResult}</div>}
        </div>
      </div>
    );
  };

  // ...existing code...
  return (
    <div className="page-content">
      {/* Nút mở luyện tập */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '0 0 12px 0' }}>
        <button
          onClick={() => setShowQuiz('select')}
          style={{ background: '#fbbf24', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 'bold', fontSize: '1rem', padding: '8px 24px', cursor: 'pointer', boxShadow: '0 2px 8px #cce' }}
        >
          Luyện tập Quiz
        </button>
      </div>
      {/* Modal chọn dạng quiz */}
      {showQuiz === 'select' && (
        <div className="quiz-modal">
          <div style={{ background: '#fff', padding: 32, borderRadius: 12, boxShadow: '0 2px 8px #ccc', maxWidth: 400, margin: '60px auto', textAlign: 'center' }}>
            <h3>Chọn dạng luyện tập</h3>
            <button onClick={() => startQuiz(1)} style={{ display: 'block', width: '100%', margin: '8px 0', padding: 12, borderRadius: 6, border: '1px solid #38bdf8', background: '#f0f9ff', cursor: 'pointer' }}>1. Trắc nghiệm nghĩa tiếng Việt</button>
            <button onClick={() => startQuiz(2)} style={{ display: 'block', width: '100%', margin: '8px 0', padding: 12, borderRadius: 6, border: '1px solid #38bdf8', background: '#f0f9ff', cursor: 'pointer' }}>2. Điền nghĩa tiếng Việt</button>
            <button onClick={() => startQuiz(3)} style={{ display: 'block', width: '100%', margin: '8px 0', padding: 12, borderRadius: 6, border: '1px solid #38bdf8', background: '#f0f9ff', cursor: 'pointer' }}>3. Trắc nghiệm đảo ngược</button>
            <button onClick={() => startQuiz(5)} style={{ display: 'block', width: '100%', margin: '8px 0', padding: 12, borderRadius: 6, border: '1px solid #38bdf8', background: '#f0f9ff', cursor: 'pointer' }}>5. Luyện tập random toàn bộ</button>
            <button onClick={() => setShowQuiz(false)} style={{ marginTop: 16, background: '#ef4444', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 24px', fontWeight: 'bold', cursor: 'pointer' }}>Đóng</button>
          </div>
        </div>
      )}
      {showQuiz && showQuiz !== 'select' && renderQuiz()}
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
