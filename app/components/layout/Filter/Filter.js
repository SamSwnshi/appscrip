import styles from "./Filter.module.css"

const Filter = () => {
  return (
    <div className={styles.filterWrapper}>
      <div>
        <label className={styles.labelData}>
            <input type="radio" className={styles.squareRadio}/>
            CUSTOMIZBLE
        </label>
      </div>
      <hr className={styles.customHr}/>
       <div className={styles.optionsdropdown}>
          <select name="" id="" className={styles.selectP}>
            <option className={styles.options} value="recommended">
              IDEAL FOR
            </option>
            
          </select>
          <p>All</p>
        </div>
        <hr className={styles.customHr}/>
       <div className={styles.optionsdropdown}>
          <select name="" id="" className={styles.selectP}>
            <option className={styles.options} value="recommended">
              OCCASSION
            </option>
            
          </select>
          <p>All</p>
        </div>
        <hr className={styles.customHr}/>
       <div className={styles.optionsdropdown}>
          <select name="" id="" className={styles.selectP}>
            <option className={styles.options} value="recommended">
              WORK
            </option>
            
          </select>
          <p>All</p>
        </div>
        <hr className={styles.customHr}/>
       <div className={styles.optionsdropdown}>
          <select name="" id="" className={styles.selectP}>
            <option className={styles.options} value="recommended">
              FABRIC
            </option>
            
          </select>
          <p>All</p>
        </div>
        <hr className={styles.customHr}/>
       <div className={styles.optionsdropdown}>
          <select name="" id="" className={styles.selectP}>
            <option className={styles.options} value="recommended">
              SEGMENT
            </option>
            
          </select>
          <p>All</p>
        </div>
        <hr className={styles.customHr}/>
       <div className={styles.optionsdropdown}>
          <select name="" id="" className={styles.selectP}>
            <option className={styles.options} value="recommended">
              SUITABLE FOR
            </option>
            
          </select>
          <p>All</p>
        </div>
        <hr className={styles.customHr}/>
       <div className={styles.optionsdropdown}>
          <select name="" id="" className={styles.selectP}>
            <option className={styles.options} value="recommended">
              RAW MATERIALS
            </option>
            
          </select>
          <p>All</p>
        </div>
        <hr className={styles.customHr}/>
       <div className={styles.optionsdropdown}>
          <select name="" id="" className={styles.selectP}>
            <option className={styles.options} value="recommended">
              PATTERN
            </option>
            
          </select>
          <p>All</p>
        </div>
        <hr className={styles.customHr}/>
      
    </div>
  )
}

export default Filter
