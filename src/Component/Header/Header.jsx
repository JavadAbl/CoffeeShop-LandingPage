import styles from "./Header.module.css";
import Neonizer from "neonizer";
import { neonify } from "neontext";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    neonify({
      elem: "container",
      shadowBlurRadius: 5,
      colors: [
        "white",

        /* "rgb(150, 151, 255)",
        "rgb(150, 255, 151)",
        "rgb(255, 151, 151)", */
      ],
      random: true,
      colorizeText: false,
      shadowOffsetX: 2,
      shadowOffsetY: 2,
    });
  }, []);

  return (
    <div className={" container-lg py-6 text-center "}>
      <h1 className=" display-2 text-light">
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
    </div>
  );
}
