import logo from './logo.svg';
import './App.css';
import AnimationText from './components/AnimationText';
import {Cursor,useTypewriter,Typewriter} from 'react-simple-typewriter'

function App() {
  
  return (
    <div className="App">
     <p>Hello World</p>
     <AnimationText/>
    </div>
  );
}

export default App;
