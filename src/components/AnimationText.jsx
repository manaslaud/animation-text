import {Cursor,useTypewriter,Typewriter} from 'react-simple-typewriter'

function AnimationText() {
    const {text}=useTypewriter({
        words:['manas','laud','male'],
        loop:{},
        typeSpeed:120,
        deleteSpeed:50
    })
  return (
    <div className="component">
    <Typewriter
            words={['Eat', 'Sleep', 'Code', 'Repeat!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
    </div>
  );
}

export default  AnimationText;
