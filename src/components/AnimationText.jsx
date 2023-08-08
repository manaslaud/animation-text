import {Cursor,useTypewriter,Typewriter} from 'react-simple-typewriter'
import styles from './components_css/animationText.module.css'
function AnimationText() {
    // const {text}=useTypewriter({
    //     words:['Student','Developer','Athlete'],
    //     loop:{},
    //     typeSpeed:120,
    //     deleteSpeed:5000
    // })
  return (
    <div className={styles.component}>
    <Typewriter
            words={['Student', 'Developer', 'Athlete']}
            loop={Infinity}
            cursor
            cursorStyle='>'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
    </div>
  );
}

export default  AnimationText;
