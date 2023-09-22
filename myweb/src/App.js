import { useState } from 'react';
import './App.css';
import UserInfo from './component/UserInfo';
function App() {

  const [count, setCount] = useState(0); // 앞은 변수 뒤는 함수 use라고 부르는건 hook 이라고 한다
  
  const onPressUpButton = () => { 
    console.log('up')
    setCount(count+1);
  }

  const onPressDownButton = () => {
    console.log('down')
    setCount(count-1);
  }
  
  return (

    <div className="App">
      <button style={{
        width: 100,
        heigh: 80
      }}
      onClick={onPressUpButton}
      >up</button>

    <p style={{ fontWeight: 'bold'}}>{count}</p>

      <button style={{
        width: 100,
        heigh: 80
      }}
      onClick={onPressDownButton}
      >down</button>

      <div>
        <UserInfo name="이승훈" age={22} callNum="010-3556-5945"></UserInfo>
        <UserInfo name="현지훈" age={22} callNum="010-1234-5678"></UserInfo>
        <UserInfo name="조우주" age={21} callNum="010-9876-5432"></UserInfo>
      </div>
      
    </div>
    
  );
}

export default App;