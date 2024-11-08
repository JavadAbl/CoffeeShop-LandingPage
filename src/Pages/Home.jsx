import Header from "../Component/Header/Header";
import Navbar from "../Component/Navbar/Navbar";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={"" + styles.container}>
        <Navbar />
        <Header />
      </div>
    </>
  );
}
