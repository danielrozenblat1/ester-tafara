import FAQItem from "../components/questions/Questions"
import styles from "./ForthScreen.module.css"
import boger from "../images/עור בוגר.png"
import akne from "../images/עור עם אקנה.png"
import Button from "../components/button/Button"
import Brides from "../components/brides/Brides"
import ScrollReveal from "scrollreveal"
import { useEffect } from "react"
const ForthScreen=()=>{
    useEffect(() => {
        ScrollReveal().reveal(`.${styles.subtitle}`, {
          duration: 1000,
          distance: "30px",
          origin: "top",
          easing: "ease-out",
          reset: false,
          viewFactor: 0.2,
          interval: 300,
          delay: 200,
          scale: 1,
        });
        ScrollReveal().reveal(`.${styles.description}`, {
            duration: 1000,
            distance: "30px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
          });
      }, []);

return <>
<div className={styles.title}>גם אם יש לך</div>
<div className={styles.row}>
    <div className={styles.or}>
<div className={styles.subtitle}>עור בוגר</div>
<div className={styles.center}>
    <img className={styles.image} alt="איפור עור בוגר" src={boger}/>
</div>
</div>
<div className={styles.or}>
<div className={styles.subtitle}>עור עם אקנה</div>
<div className={styles.center}>
    <img className={styles.image} alt="איפור עור עם אקנה" src={akne}/>
</div>
</div>
</div>
<div className={styles.title}>יש לך מקום אצלי!</div>
<div className={styles.description}>איפרתי במהלך השנים עשרות גווני עור וסוגי עור <br/> כולן קיבלו ממני שגרת טיפוח לעור לפני האירוע  <br/> וכולן יצאו עם איפור שמתאים לסוג ולגוון העור שלהן וכמובן - יציב ותואם לציפיות שלהן!</div>
<Brides/>
</>


}
export default ForthScreen