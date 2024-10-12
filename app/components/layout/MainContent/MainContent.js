
// import { useState } from "react";
import Filter from "../Filter/Filter";
import ProductGrid from "../productGrid/ProductGrid";
import styles from "./MainContent.module.css";

function MainContent({ data }) {
  // const [hideFilter, setHideFilter] = useState(true);

  // const handleHideFilter = () =>{
  //   setHideFilter(prev => !prev)
  // }
  return (
    <div className={styles.maincontentWrapper}>
       <hr className={styles.customHr}/>
      <div className={styles.maincontentdiv}>
        
        <div className={styles.buttons}>
          <p className={styles.items}>3425 ITEMS</p>
   
            <p className={styles.filterbutton}>HIDE FILTER</p>
        
        </div>
        <div className={styles.optionsdropdown}>
          <select name="" id="" className={styles.selectP}>
            <option className={styles.options} value="recommended">
              RECOMMENDED
            </option>
            <option value="newest first">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="high to low">PRICE: HIGH TO LOW</option>
            <option value="low to high">PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>
        <hr className={styles.customHr}/>

      <div className={styles.dataContainer}>
       
        {/* {!hideFilter &&  <Filter  />}
         */}
         <Filter/>
        <ProductGrid />
      </div>
    </div>
  );
}

export default MainContent;
