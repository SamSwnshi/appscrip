
import HeroSection from "../HeroSection/HeroSection";
import MainContent from "../MainContent/MainContent";
import styles from "./Home.module.css";
const HomePage = () => {
  return (
    <div className={styles.wrappers}>
      <HeroSection />
      <MainContent />
    </div>
  );
};

export default HomePage;
