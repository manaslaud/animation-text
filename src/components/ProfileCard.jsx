import {Cursor,useTypewriter,Typewriter} from 'react-simple-typewriter'
import AnimationText from './AnimationText';
import styles from './components_css/profilecard.module.css'

function ProfileCard() {
    return(
        <div className={styles.ProfileCard}>
        <img src='pfp.jpg' className={styles.image}></img>
        <h1>Manas Laud</h1>
        <h2>Mumbai</h2>
        <p>UI/UX Desinger and Frontend Developer</p>
        <div className={styles.btnContainer}>
        <button className={styles.contactBtn}><a href='https://www.behance.net/manaslaud'>Behance</a></button>
        <button className={styles.githubBtn}><a href='https://github.com/manaslaud'>Github</a></button>
        </div>
        <div className={styles.skillsContainer}>
            <span className={styles.skills}><a href='https://gravitas23.vercel.app/'> Gravitas23</a></span>
            <span className={styles.skills}><a href='https://3dverse.vercel.app/'> 3dverse</a></span>
            <span className={styles.skills}><a href='https://share-app-manas.web.app/'> Share Place App</a></span>
            <span className={styles.skills}><a href='https://ffcs.csivit.com/'>FFCS Planner</a></span>
            <span className={styles.skills}><a href='https://quiz-frontend-zeta.vercel.app/'>CSI Quiz</a></span>
        </div>
        <AnimationText/>
        </div>
    );
}

export default  ProfileCard;
