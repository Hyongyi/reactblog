import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, changeTitle] = useState([
    "남자 코트 추천",
    "홍대 이쁜 카페",
    "파이썬 독학",
  ]);

  let [like, countLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...title];
          copy.sort();
          changeTitle(copy);
        }}
      >
        가나다순 정렬
      </button>

      <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              countLike(like++);
            }}
          >
            ❤
          </span>
          {like}
        </h4>
        <p>2월 17일 발행</p>
        <button
          onClick={() => {
            let copy = [...title];
            copy[0] = "여자 코트 추천";
            changeTitle(copy);
          }}
        >
          남여 변경
        </button>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
