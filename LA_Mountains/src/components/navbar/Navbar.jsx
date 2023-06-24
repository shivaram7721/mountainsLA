import styles from './Navbar.module.css'
import { useNavigate } from 'react-router-dom';

export function Navbar() {

    const navigate = useNavigate();

    return (
        <div className={styles.main}>
            <div className={styles.imgContainer}>
                <img className={styles.img} onClick={()=>navigate('/')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0B_8UNQeX6l_oGVsSpFlo9hlC6l3WBeaUg&usqp=CAU"/>
                <div className={styles.nameContainer}>
                    <p className={styles.nameOne} onClick={()=>navigate('/')}>LOSANGELES</p>
                    <p className={styles.nameTwo} onClick={()=>navigate('/')}>MOUNTAINS</p>
                </div>
            </div>

            <div className={styles.linksContainer}>
                <p className={styles.history} onClick={()=>navigate('/history')}><em>01. HISTORY</em></p>
                <p className={styles.team} onClick={()=>navigate('/team')}><em>02. TEAM</em></p>
            </div>
        </div>
    );
}