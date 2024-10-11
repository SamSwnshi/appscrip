
import HeroSection from "../HeroSection/HeroSection";
import MainContent from "../MainContent/MainContent";

import ProductGrid from "../productGrid/ProductGrid";
import styles from "./Home.module.css";
const HomePage = () => {
  return (
    <div className={styles.wrappers}>
     <HeroSection/>
     <MainContent/>
     <ProductGrid/>
    
    </div>
  );
};

export default HomePage;
