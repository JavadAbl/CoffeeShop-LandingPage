import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={" container-lg py-6 text-center " + styles.container}>
      <h1 className=" display-2 text-light">Welcome to Our Coffee Shop</h1>

      <div className="w-75 mx-auto">
        <p className="lead ">
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
