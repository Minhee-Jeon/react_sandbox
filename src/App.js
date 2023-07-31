import './App.css';

function App() {
  const name = '빵';
  const breadList = ['우유', '딸기', '바나나', '초코'];
  return (
    <>
      <h1 className='orange'>{`가장 맛있는 탄수화물! ${name}`}</h1>
      <ul>
        {breadList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img 
        style={{width: '200px', height: '200px'}}
        src='https://plus.unsplash.com/premium_photo-1664640733898-d5c3f71f44e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        alt='bread'/>
    </>
  );
}

export default App;
