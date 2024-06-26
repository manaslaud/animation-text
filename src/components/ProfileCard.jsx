import {Cursor,useTypewriter,Typewriter} from 'react-simple-typewriter'
import AnimationText from './AnimationText';
import styles from './components_css/profilecard.module.css'

function ProfileCard() {
    return(
        <div className={styles.ProfileCard}>
        <img src='pfp.jpg' className={styles.image}></img>
        <h1>Manas Laud</h1>
        <h2>Mumbai</h2>
        <p><b>I work with:</b> Three.js, Next.js, React Three Fiber and Solidity</p>
        <div className={styles.btnContainer}>
        <button className={styles.contactBtn}><a href='https://www.behance.net/manaslaud'>Behance</a></button>
        <button className={styles.githubBtn}><a href='https://github.com/manaslaud'>Github</a></button>
        </div>
        <div className={styles.skillsContainer}>
                        <span className={styles.skills}><a href='https://srm-hack.vercel.app/'>Boltshift</a></span>
            <span className={styles.skills}><a href='https://file-share-peach.vercel.app/'>Gdrive 3.0</a></span>
            <span className={styles.skills}><a href='https://messit.vinnovateit.com/'>Messit</a></span>

            <span className={styles.skills}><a href='https://planefolio-2-0.vercel.app/'>Planefolio</a></span>
            <span className={styles.skills}><a href='https://gravitas.vit.ac.in/'> Gravitas23</a></span>
<span className={styles.skills}><a href='https://intel.aryanbharti.com/'>Rekindle</a></span>
            <span className={styles.skills}><a href='https://lasertag.csivit.com/'>Lasertag 2023</a></span>
            <span className={styles.skills}><a href='https://share-app-manas.web.app/'> Share Place App</a></span>                     
        </div>
        <AnimationText/>
        </div>
    );
}

export default  ProfileCard;
