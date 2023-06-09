import styles from '../assets/css/carrosel.module.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Frame8 from '../pages/landingPage/assets/img/Frame8.png';
import Frame9 from '../pages/landingPage/assets/img/Frame9.png';
import Frame10 from '../pages/landingPage/assets/img/Frame10.png';

export default function Carrosel(props) {

    return (
        <div className={styles["layout-flexbox"]} id="layoutCarrosel">
            <div className={styles["text-new-experiences"]} id="layoutTextCarrosel">
                <div className={styles["label-new-experiences"]}>
                    <div className={styles["vertical-line"]} id="verticalLineCarrosel"></div>
                    <h2> Descubra novas experiências </h2>
                </div>
                <br/>
                <span>Lorem ipsum dolor sit amet consectetur. Mauris porttitor enim lorem magna pretium suspendisse donec. Odio lorem vitae mauris eu egestas ultrices auctor tincidunt in.</span>
            </div>
            <div className={styles["layout-grid"]} id="layoutImagesCarrosel">
                <Carousel className={styles["main-slide"]}>
                    
                        <div>
                            <img className={styles["img-size"]} src={Frame8} alt='' />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img className={styles["img-size"]} src={Frame9} alt=''/>
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img className={styles["img-size"]} src={Frame10} alt=''/>
                            <p className="legend">Legend 3</p>
                        </div>
                        <div>
                            <img className={styles["img-size"]} src={Frame8} alt=''/>
                            <p className="legend">Legend 3</p>
                        </div>
                        
                    
                </Carousel>
            </div>
        </div>
    )
}