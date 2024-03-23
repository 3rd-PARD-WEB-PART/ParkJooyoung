import logo from './logo.svg';
import me from './assets/jyp.jpg';
import background from './assets/paper.jpg';
import './App.css';

function App() {


  let intro = "Allo!"


  return (

    <div className="App">


      <div className='introBlock'>
        <p className="intro">
          <span className='letter1'>{intro[0]}</span>
          <span className='letter2'>{intro[1]}</span>
          <span className='letter3'>{intro[2]}</span>
          <span className='letter4'>{intro[3]}</span>
          <span className='letter5'>{intro[4]}</span>
        </p>
      </div>


      <div className='blackRec'>
      </div>
      <div className='blackRec2'>
      </div>
      <div className='blackRec3'>
      </div>
      <div className='blackRec4'>
      </div>


      <div className='greetingBlock'>
        <p className='greeting'>만나서 반가워요!</p>
      </div>
      <div className='greetingBlock2'>
        <p className='greeting2'>만나서 반가워요!</p>
      </div>


      <div className='imgBlock'>
        <img src={me} className="profile" />
      </div>


      <div className='textBlock'>
        <p className='name'> 안녕하세요! 저는 박주영이라고해요.</p>
        <p className='like'> 저는 노는 거랑, 만드는 것, 그리고 고기 먹는걸 좋아해요.</p>
        <p className='goal'> 이번학기 목표는 전공 공부랑 파드 활동 두 마리 토끼를 다 잡는거에요.</p>
        <p className='ntmy'> 잘 부탁드려요!</p>
      </div>

    </div>
  );
}

export default App;
