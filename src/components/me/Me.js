import React from 'react';
import styles from './Me.module.css';
import ester from "../../images/אסתר טפרה תדמית.png"

const AboutMe = () => {
  return <>
      <div className={styles.header} id="מי אני">קצת עלי</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={ester} alt="אסתר טפרה" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>אסתר טפרה</h1>
        <div className={styles.subtitle}>"היופי באיפור הוא להביא את עצמנו"</div>
        <p className={styles.description}>
במהלך השנים האחרונות המטרה העיקרית שלי היא להוציא כל מי שמגיעה אלי עם איפור שתואם לה,לציפיות שלה ולגוון העור שלה! 
        </p>
        <p className={styles.description}>
        במהלך שלוש השנים  האחרונות איפרתי בנות מכל הגוונים, פיתחתי איתן שיחות כדי להבין מי הן כדי להתאים את האיפור למי שיושבת מולי! מעבר לאיפור כדי להביא את עצמנו
        </p>

      </div>
 
    </div>

  
   
    </>
};

export default AboutMe;