

import ProductCard from "../ProductCard/ProductCard";
import styles from "./MainContent.module.css";

function MainContent({ data }) {

  return (
    <div className={styles.maincontentWrapper}>
      <div className={styles.maincontentdiv}>
        <div className={styles.buttons}>
          <p className={styles.items}>3425 ITEMS</p>
          <p className={styles.filterbutton}> HIDE FILTER</p>
        </div>
        <div >
          <select name="" id="" className={styles.optionsdropdown}>
            <option value="">RECOMMENDED</option>
            <option value="">NEWEST FIRST</option>
            <option value="">POPULAR</option>
            <option value="">PRICE: HIGH TO LOW</option>
            <option value="">PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>
      <div>
        <div>
          {/* <h1>{data.title}</h1> */}
          {/* <ProductCard/> */}
          {console.log(data)}
        </div>
        <div></div>
      </div>
    </div>
  );
  
}

export default MainContent;

