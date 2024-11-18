import { useEffect } from "react";
import Button from "../components/button/Button"
import FAQItem from "../components/questions/Questions"
import styles from "./ThirdScreen.module.css"
import ScrollReveal from "scrollreveal";
const ThirdScreen=()=>{
    useEffect(() => {
        ScrollReveal().reveal(`.${styles.title}`, {
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
<div className={styles.title} id="שאלות תשובות">עונה על השאלות שלכן</div>
<FAQItem question="את מגיעה לכל הארץ?" answer="אני מגיעה לכל מקום ברדיוס בין חדרה לאזור המרכז"/>
<FAQItem question="האיפור כולל הדבקת ריסים?" answer="הדבקת ריסים היא בתשלום נוסף לאיפור"/>
<Button text="אסתר, יש לי עוד כמה שאלות"/>
</>


}
export default ThirdScreen