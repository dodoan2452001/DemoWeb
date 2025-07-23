import React, { useState, useEffect } from "react";

function shuffle(arr) {
  return arr
    .map((v) => [Math.random(), v])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);
}

const QUIZ_TYPES = [1, 2, 3];

export default function LuyenTap() {
  const [words, setWords] = useState([]);
  const [quizType, setQuizType] = useState(null); // 1,2,3,5
  const [quizList, setQuizList] = useState([]);
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizOptions, setQuizOptions] = useState([]);
  const [quizInput, setQuizInput] = useState("");
  const [quizResult, setQuizResult] = useState("");
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [currentSubType, setCurrentSubType] = useState(null); // for random mode

  useEffect(() => {
    const data = localStorage.getItem("words");
    if (data) {
      try {
        setWords(JSON.parse(data));
      } catch {
        setWords([]);
      }
    }
  }, []);

  function startQuiz(type) {
    if (!words || words.length < 4) {
      alert("Cần ít nhất 4 từ để luyện tập!");
      return;
    }
    let quizArr = shuffle(words).slice(0, Math.min(words.length, 20));
    setQuizType(type);
    setQuizList(quizArr);
    setQuizIdx(0);
    setQuizScore(0);
    setQuizDone(false);
    setQuizResult("");
    setQuizInput("");
    if (type === 5) {
      setCurrentSubType(randomSubType());
    } else {
      setCurrentSubType(null);
    }
    setTimeout(
      () => genOptions(type, quizArr, 0, type === 5 ? currentSubType : null),
      0
    );
  }

  function randomSubType() {
    return QUIZ_TYPES[Math.floor(Math.random() * QUIZ_TYPES.length)];
  }

  function genOptions(type, arr, idx, subType) {
    const qType = type === 5 ? subType : type;
    const current = arr[idx];
    let opts = [];
    if (qType === 1) {
      opts = shuffle([
        current.meaning,
        ...shuffle(arr.filter((w) => w.word !== current.word))
          .slice(0, 3)
          .map((w) => w.meaning),
      ]);
    } else if (qType === 3) {
      opts = shuffle([
        current.word,
        ...shuffle(arr.filter((w) => w.meaning !== current.meaning))
          .slice(0, 3)
          .map((w) => w.word),
      ]);
    }
    setQuizOptions(opts);
  }

  function handleQuizAnswer(ans) {
    const type = quizType === 5 ? currentSubType : quizType;
    const current = quizList[quizIdx];
    let correct = false;
    if (type === 1) {
      correct = ans === current.meaning;
    } else if (type === 2) {
      correct =
        ans.trim().toLowerCase() === current.meaning.trim().toLowerCase();
    } else if (type === 3) {
      correct = ans === current.word;
    }
    setQuizResult(
      correct
        ? "Đúng!"
        : `Sai! Đáp án: ${type === 3 ? current.word : current.meaning}`
    );
    if (correct) setQuizScore((s) => s + 1);
    setTimeout(() => {
      if (quizIdx + 1 >= quizList.length) {
        setQuizDone(true);
      } else {
        const nextIdx = quizIdx + 1;
        setQuizIdx(nextIdx);
        setQuizInput("");
        setQuizResult("");
        if (quizType === 5) {
          const nextSub = randomSubType();
          setCurrentSubType(nextSub);
          genOptions(5, quizList, nextIdx, nextSub);
        } else {
          genOptions(quizType, quizList, nextIdx, null);
        }
      }
    }, 800);
  }

  useEffect(() => {
    if (!quizType || quizDone) return;
    if (quizType === 2 || (quizType === 5 && currentSubType === 2)) return;
    genOptions(
      quizType,
      quizList,
      quizIdx,
      quizType === 5 ? currentSubType : null
    );
    // eslint-disable-next-line
  }, [quizIdx, quizType, currentSubType]);

  function renderQuiz() {
    if (!quizType) return null;
    if (quizDone) {
      return (
        <div className="quiz-modal">
          <div
            style={{
              background: "#fff",
              padding: 32,
              borderRadius: 12,
              boxShadow: "0 2px 8px #ccc",
              maxWidth: 400,
              margin: "60px auto",
              textAlign: "center",
            }}
          >
            <h3>Luyện tập hoàn thành!</h3>
            <div>
              Điểm số: {quizScore}/{quizList.length}
            </div>
            <button
              onClick={() => setQuizType(null)}
              style={{
                marginTop: 16,
                background: "#38bdf8",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "8px 24px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Đóng
            </button>
          </div>
        </div>
      );
    }
    const current = quizList[quizIdx];
    let quizBlock = null;
    const type = quizType === 5 ? currentSubType : quizType;
    if (type === 1) {
      quizBlock = (
        <>
          <div style={{ fontWeight: "bold", marginBottom: 12 }}>
            Từ: <span style={{ color: "#38bdf8" }}>{current.word}</span>
          </div>
          {quizOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => handleQuizAnswer(opt)}
              style={{
                display: "block",
                width: "100%",
                margin: "8px 0",
                padding: 8,
                borderRadius: 6,
                border: "1px solid #38bdf8",
                background: "#f0f9ff",
                cursor: "pointer",
              }}
            >
              {opt}
            </button>
          ))}
        </>
      );
    } else if (type === 2) {
      quizBlock = (
        <>
          <div style={{ fontWeight: "bold", marginBottom: 12 }}>
            Từ: <span style={{ color: "#38bdf8" }}>{current.word}</span>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleQuizAnswer(quizInput);
            }}
          >
            <input
              value={quizInput}
              onChange={(e) => setQuizInput(e.target.value)}
              placeholder="Nhập nghĩa tiếng Việt"
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 6,
                border: "1px solid #ccc",
                marginBottom: 12,
              }}
            />
            <button
              type="submit"
              style={{
                background: "#38bdf8",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "8px 24px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Kiểm tra
            </button>
          </form>
        </>
      );
    } else if (type === 3) {
      quizBlock = (
        <>
          <div style={{ fontWeight: "bold", marginBottom: 12 }}>
            Nghĩa: <span style={{ color: "#38bdf8" }}>{current.meaning}</span>
          </div>
          {quizOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => handleQuizAnswer(opt)}
              style={{
                display: "block",
                width: "100%",
                margin: "8px 0",
                padding: 8,
                borderRadius: 6,
                border: "1px solid #38bdf8",
                background: "#f0f9ff",
                cursor: "pointer",
              }}
            >
              {opt}
            </button>
          ))}
        </>
      );
    }
    return (
      <div className="quiz-modal">
        <div
          style={{
            background: "#fff",
            padding: 32,
            borderRadius: 12,
            boxShadow: "0 2px 8px #ccc",
            maxWidth: 400,
            margin: "60px auto",
            textAlign: "center",
          }}
        >
          <div style={{ marginBottom: 16 }}>
            Câu {quizIdx + 1}/{quizList.length}
          </div>
          {quizBlock}
          {quizResult && (
            <div
              style={{
                marginTop: 16,
                fontWeight: "bold",
                color: quizResult.startsWith("Đúng") ? "#22c55e" : "#ef4444",
              }}
            >
              {quizResult}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <h2 style={{ marginLeft: 25 }}>LUYỆN TẬP TỪ VỰNG</h2>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}
      >
        <button
          onClick={() => startQuiz(1)}
          style={{
            margin: 8,
            background: "#fbbf24",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontWeight: "bold",
            fontSize: "1rem",
            padding: "12px 24px",
            cursor: "pointer",
            boxShadow: "0 2px 8px #cce",
          }}
        >
          1. Trắc nghiệm nghĩa tiếng Việt
        </button>
        <button
          onClick={() => startQuiz(2)}
          style={{
            margin: 8,
            background: "#38bdf8",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontWeight: "bold",
            fontSize: "1rem",
            padding: "12px 24px",
            cursor: "pointer",
            boxShadow: "0 2px 8px #cce",
          }}
        >
          2. Điền nghĩa tiếng Việt
        </button>
        <button
          onClick={() => startQuiz(3)}
          style={{
            margin: 8,
            background: "#34d399",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontWeight: "bold",
            fontSize: "1rem",
            padding: "12px 24px",
            cursor: "pointer",
            boxShadow: "0 2px 8px #cce",
          }}
        >
          3. Trắc nghiệm đảo ngược
        </button>
        <button
          onClick={() => startQuiz(5)}
          style={{
            margin: 8,
            background: "#6366f1",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontWeight: "bold",
            fontSize: "1rem",
            padding: "12px 24px",
            cursor: "pointer",
            boxShadow: "0 2px 8px #cce",
          }}
        >
          5. Luyện tập random toàn bộ
        </button>
      </div>
      {renderQuiz()}
    </div>
  );
}
