import styles from './Carousel.module.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export function Carousel() {
  return (
    <div>
      <Splide>
        <SplideSlide>
          <div className={styles.imageContainer}>
            <img src='https://ca-times.brightspotcdn.com/dims4/default/dd18896/2147483647/strip/true/crop/4800x3200+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F01%2F3d%2F36f92a4c4086a7bf5ed8c860b605%2F1261350-la-me-storms-aftermath007-ls.jpg' alt="Image 1" />
            <div className={styles.textOverlay}>
                <h1 className={styles.historyImg}>HISTORY</h1>
            <p className={styles.imageText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown 
              printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className={styles.imageContainer}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/5/57/LA_Skyline_Mountains2.jpg' alt="Image 2" />
            <div className={styles.textOverlay}>
            <h1 className={styles.historyImg}>HISTORY</h1>
            <p className={styles.imageText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown 
              printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className={styles.imageContainer}>
            <img src='https://w0.peakpx.com/wallpaper/205/599/HD-wallpaper-skyscraper-building-city-los-angeles-in-mountains-background-usa-travel.jpg' alt="Image 3" />
            <div className={styles.textOverlay}>
            <h1 className={styles.historyImg}>HISTORY</h1>
            <p className={styles.imageText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown 
              printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className={styles.imageContainer}>
            <img src='https://ktla.com/wp-content/uploads/sites/4/2019/12/dtla.jpg' alt="Image 4" />
            <div className={styles.textOverlay}>
            <h1 className={styles.historyImg}>HISTORY</h1>
              <p className={styles.imageText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown 
              printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}
