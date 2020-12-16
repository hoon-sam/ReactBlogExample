//eslint -> 잘못된 코딩 관습 잡아주는 라이브러리
/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '남자 코트 추천2', '남자 코트 추천3']);
  let [좋아요, 좋아요변경] = useState(0);

  let posts = '강남 고기 맛집';

  function 제목바꾸기(){
    var newArray = [...글제목]; //deep copy 복사 해야함. array나 object는 참조 자료형.
    newArray[0] = '여자코트 추천';
    글제목변경(newArray);  //state를 완전히 교체하는 함수
  }

  return (
    <div className="App">
        <div className="black-nav">
        <div>개발 Blog</div>
        </div>
        <button onClick={ 제목바꾸기} >버튼</button>
        <div className="list">
          <h3> { 글제목[0] } <span onClick={ ()=>{ 좋아요변경(좋아요 + 1) } }>😍</span> {좋아요} </h3>
          <p>2월 17일 발행</p> 
          <hr/>
          <h3> { 글제목[1] } </h3>
          <p>2월 18일 발행</p> 
          <hr/>
          <h3> { 글제목[2] } </h3>
          <p>2월 19일 발행</p> 
          <hr/>
        </div>

        <Modal/>

    </div>
  );

  function Modal(){
    return (
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    )
  }

}

export default App;
