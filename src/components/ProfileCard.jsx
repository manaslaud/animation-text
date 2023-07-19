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
        <h1 className={styles.myProjText}> My Projects</h1>
        <div className={styles.skillsContainer}>
             <span className={styles.skills}><a href='https://gravitas23-frontend-landing.vercel.app/'>graVITas 2023</a></span>
             <span className={styles.skills}><a href='https://ffcs.csivit.com/'>FFCS Planner</a></span>
            <span className={styles.skills}><a href='https://runaway-pink.vercel.app/'>Runaway</a></span>
            <span className={styles.skills}><a href='https://github.com/manaslaud/spotify_charts'>Spotify DataApp</a></span>
            <span className={styles.skills}><a href='https://share-app-manas.web.app/'>Share Place</a></span>
        </div>
        <AnimationText/>
        </div>
    );
}

export default  ProfileCard;
