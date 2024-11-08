import Header from "../Component/Header/Header";
import MainCarousel from "../Component/MainCarousel/MainCarousel";
import Navbar from "../Component/Navbar/Navbar";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={"" + styles.container}>
        <Navbar />
        <Header />
        <MainCarousel />
      </div>
    </>
  );
}
