import "./page.module.css"
import Navbar from "./components/layout/Navbar/Navbar";
import HomePage from "./components/layout/HomePage/HomePage";
import Footer from "./components/layout/Footer/Footer";

export default function Home() {
  return (
    <div className="app" >
      <Navbar />
      <HomePage />
      <Footer/>
    </div>
  );
}
