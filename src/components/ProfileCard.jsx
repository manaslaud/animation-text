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
            <span className={styles.skills}>UI/UX</span>
            <span className={styles.skills}>Figma</span>
            <span className={styles.skills}>React.js</span>
            <span className={styles.skills}>Typescript</span>
            <span className={styles.skills}>Frontend Web Development</span>
        </div>
        <AnimationText/>
        </div>
    );
}

export default  ProfileCard;
