import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretLeft} from "@fortawesome/free-solid-svg-icons";
import gif from './img/show-by-rock-anime.gif';
import round1 from './img/cranky-anime.gif';
import round2 from './img/sb69-delmin.gif';
import round3 from './img/sb69_1.gif';
import round4 from './img/sb69_2.gif';
import all from './img/sb69-delmin_all.gif';


function App() {
  const iconStyle = { fontSize: 32 };
  return (
    <div className="App">
      <header>
      <a href="../"><FontAwesomeIcon style={iconStyle} icon={faCaretLeft} /></a>
        デルミン
      </header>
      <div className="kv"></div>
      <h2 className='text-3xl font-bold text-pink-400 my-8'>デビルミント鬼龍</h2>
      <p className="mb-12 mx-4 text-white">デビルミント鬼龍族の小柄な女のコ。細かい作業や集中力を要する遊びが得意。<br/>
ツノからビームが出ちゃうらしい。</p>
      <div className='mx-4 rounded overflow-hidden'>
        <img src={gif} alt=""/>
      </div>
      <div className="mt-16">
        <div className="rounded-xl shadow-2xl ml-auto mr-4 my-8 overflow-hidden w-[60vw]">
          <img className="" src={round1} alt=""/>
        </div>

        <div className="rounded-xl shadow-2xl mr-auto ml-4 my-8 overflow-hidden w-[60vw]">
          <img className="" src={round2} alt=""/>
        </div>

        <div className="rounded-xl shadow-2xl ml-auto mr-4 my-8 overflow-hidden w-[60vw]">
          <img className="" src={round3} alt=""/>
        </div>

        <div className="rounded-xl shadow-2xl mr-auto ml-4 my-8 overflow-hidden w-[60vw]">
          <img className="" src={round4} alt=""/>
        </div>
        <div className='mt-32'>
          <h3 className='text-white font-bold text-2xl shadow-xl'>Show By Rock見てね</h3>
          <div className='mx-4 rounded-xl overflow-hidden'>
            <img src={all} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
