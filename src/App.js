import React from 'react';
import logo from './logo.svg';
import './App.css';
/* JSX 규칙
여러개의 태그를 사용하려면 그것들을 하나의 루트로 감싸야 함.
React Fragement 태그
복수의 자식요소를 그룹화 하는데 사용되며 불필요한 노드를 DOM에 추가하지 않음.
 빈 다이아몬드로 하면 리액트 프래그먼트 태그로 인식함.
 리액트에서 닫는 태그가 없는태그들은 (/)슬래시를 치고 닫아준다. */ 
function App() {
  const $h1=<h1>메롱메롱</h1>; //이렇게 하는 알아서 태그 생성(doucument.CreateElement 자동 생성해줌)
  const $h2=React.createElement('h2',null,'반가워요~~');
  return (
    <> 
    <div className="App">
      {$h1}
      {$h2}
    </div>
    <div className='noname'>
      <p>오늘은 태풍이 와서 비가 많이 내렸다. <br/>그래서 부침개를 먹고싶었다~</p>
    </div>
    </>
  );
}

export default App;
