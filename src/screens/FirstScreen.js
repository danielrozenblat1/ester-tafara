import Circle from "../components/circle/Circle"
import styles from "./FirstScreen.module.css"
import makeup from "../icons/wired-lineal-1587-cosmetic-brush-hover-pinch (2).json"
import wedding from "../icons/wired-lineal-653-marriage-hover-pinch (1).json"

const FirstScreen=(props)=>{
   

return <>
<div className={!props.scrolled?styles.wrap:styles.wrapP}>
<div className={styles.descriptionWrapper}>
<p className={styles.description}>במיוחד לכלות ולנשים שמחפשות להיות הכי יפות באירוע המיוחד שלהן</p>
</div>
<h1 className={styles.title}>ESTER TAFARA</h1>
<div className={styles.row}>
            <Circle icon={makeup} text="איפור ערב" />
            <Circle icon={wedding} text="איפור כלות" />
  
        </div>
        </div>
</>


}
export default FirstScreen