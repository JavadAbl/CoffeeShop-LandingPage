import styles from "./Header.module.css";
import Neonizer from "neonizer";
import { neonify } from "neontext";
import { useEffect } from "react";
import useColorize from "../../Hooks/UseColorize";

export default function Header() {
  const color = useColorize(2000);

  useEffect(() => {
    neonify({
      elem: "container",
      shadowBlurRadius: 5,
      colors: [
        "white",

        "rgb(150, 151, 255)",
        "rgb(150, 255, 151)",
        "rgb(255, 151, 151)",
      ],
      random: true,
      colorizeText: false,
      shadowOffsetX: 2,
      shadowOffsetY: 2,
    });
  }, []);

  return (
    <div style={{}} className={"container-lg pt-3 pb-5 text-center "}>
      <h1 className=" display-4 text-light">
        {"Welcome to Our "}
        <Neonizer time={2500}>
          <p className={" fw-bold text-uppercase "} id="container">
            Coffee Shop
          </p>
        </Neonizer>
      </h1>

      <div className="w-75 mx-auto">
        <p className="lead text-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, totam
          inventore qui eos quasi ex voluptates voluptatum aspernatur.
        </p>

        <a className={"btn btn-primary me-1 text-uppercase " + styles.btn}>
          Order Now
        </a>

        <a
          className={"btn btn-outline-info  ms-1 text-uppercase " + styles.btn}
        >
          Contact Sales
        </a>
      </div>

      <div className="text-center d-block mt-4 ">
        <a href="#CoffeeLines">
          <i
            style={{ color }}
            className={"bi bi-box-arrow-down h3 " + styles.test}
          ></i>
        </a>
      </div>
    </div>
  );
}
