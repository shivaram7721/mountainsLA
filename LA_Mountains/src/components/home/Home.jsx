import styles from './Home.module.css';

export function Home() {
    return (
        <div>
            {/* <Navbar /> */}
            <div className={styles.container}>
                <img className={styles.img} src='https://ca-times.brightspotcdn.com/dims4/default/dd18896/2147483647/strip/true/crop/4800x3200+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F01%2F3d%2F36f92a4c4086a7bf5ed8c860b605%2F1261350-la-me-storms-aftermath007-ls.jpg'/>
                <div className={styles.textOverlay}>
                    <span className={styles.text}>LOSANGELES</span>
                    <span className={styles.text} style={{color: "rgb(114, 114, 212)"}}>MOUNTAINS</span>
                </div>
            </div>
        </div>
    );
}
