import styles from './Team.module.css';

export function Team() {
    return (
        <div className={styles.container}>
            <img
                className={styles.img}
                src="https://ca-times.brightspotcdn.com/dims4/default/dd18896/2147483647/strip/true/crop/4800x3200+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F01%2F3d%2F36f92a4c4086a7bf5ed8c860b605%2F1261350-la-me-storms-aftermath007-ls.jpg"
                alt="Team Image"
            />
            <div className={styles.textOverlay}>
                {/* <h1 className={styles.scheduleText}>Climb</h1> */}
                <h1 className={styles.scheduleText}> Climb Schedule</h1>
                <table className={styles.scheduleTable}>
                    <tbody>
                        <tr>
                            <td>25 NOV 2016</td>
                            <td>Vestibulum viverra</td>
                        </tr>
                        <tr>
                            <td >28 NOV 2016</td>
                            <td>Vestibulum viverra</td>
                        </tr>
                        <tr>
                            <td>18 DEC 2016</td>
                            <td>Vestibulum viverra</td>
                        </tr>
                        <tr>
                            <td>7 JAN 2017</td>
                            <td>Vestibulum viverra</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
