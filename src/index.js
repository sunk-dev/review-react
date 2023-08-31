import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import App from './App.js';
// 모듈의 시작
// html에 있는 root 태그 가져옴
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  
    <App /> //->리액트 컴포넌트 app.js 랜더링
);

