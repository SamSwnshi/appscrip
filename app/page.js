import style from "./page.module.css";
import Navbar from "./components/layout/Navbar/Navbar";
import HomePage from "./components/layout/HomePage/HomePage";

export default function Home() {
  return (
    <div className={style.home}>
      <Navbar />
      <HomePage />
    </div>
  );
}
