import { useEffect } from "react";
import NewBox from "../components/NewBox/NewBox"
import styles from "./SecondScreen.module.css"
import meet from "../icons/wired-lineal-981-consultation-hover-conversation.json"
import list from "../icons/wired-lineal-47-to-do-list-hover-unfold.json"
import makeup from "../icons/wired-lineal-1554-beauty-face-powder-hover-pinch.json"
import Button from "../components/button/Button";

const SecondScreen = () => {
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '-20% 0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // מוסיף או מסיר את הקלאס בהתאם לאם האלמנט נראה או לא
                entry.target.classList.toggle(styles.visible, entry.isIntersecting);
            });
        }, options);

        const dividers = document.querySelectorAll(`.${styles.dividerLine}`);
        dividers.forEach(divider => observer.observe(divider));

        return () => observer.disconnect();
    }, []);

    return <>
        <div className={styles.wrapper}>
            <div className={styles.title} id="תהליך העבודה איתי">אז איך הקסם קורה?</div>
            <div className={styles.description}>חשוב לי שתביני מה הולך לקרות מהרגע שאנחנו משריינות תאריך! <br/> אז תחזיקי חזק..! זה התהליך שאנחנו עומדות לעבור</div>
            <div className={styles.container}>
                <NewBox title="ייעוץ ותיאום ציפיות" icon={meet} description="אנחנו נפגשות לפני האירוע ומכירות, אני מנתחת את סוג העור שלך וגוון העור שלך והכי חשוב - מבינה איך את מצפה להראות "/>
                <div className={styles.dividerLine}></div>
                <NewBox title="הוראות הכנה" icon={list} description="את מקבלת ממני שגרת טיפוח שמתחילה לפי הזמן שאגדיר לך לפני האירוע (תלוי בסוג העור) כדי שהעור שלך יהיה מוכן ונקי לקראת היום הגדול!"/>
                <div className={styles.dividerLine}></div>
                <NewBox title="היום הגדול!" icon={makeup} description="אנחנו נפגשות ביום האירוע ואני מוציאה אותך עם איפור החלומות שלך - אבל לפני הכל - מקלילה אווירה ,מרגיעה והופכת את היום שלך למחוייך"/>
            </div>
        </div>
        <Button text="אסתר, אני רוצה לשמוע עוד"/>
        </>
}

export default SecondScreen;