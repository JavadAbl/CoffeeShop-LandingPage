import CoffeeLines from "../Component/CoffeeLines/CoffeeLines";
import Header from "../Component/Header/Header";
import MainCarousel from "../Component/MainCarousel/MainCarousel";
import Navbar from "../Component/Navbar/Navbar";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={"" + styles.container}>
        <div style={{ minHeight: "100vh" }} className=" ">
          <Navbar />
          <Header />
        </div>

        <div style={{ minHeight: "100vh" }}>
          <MainCarousel />
        </div>

        <CoffeeLines />
      </div>
    </>
  );
}
