//컴포넌트 js는 앞글자를 대문자로 함으로써 나타냄
//class 컴포넌트 :요즘에는 잘 사용하지 않음.
import React from "react"; //모든 컴포넌트의 첫줄에 들어감
class AppItem extends React.Component{
    render(){
        return (
        <div className="App">
            <h1>메로롱</h1>
        </div>
        );
    }

}
export default AppItem;