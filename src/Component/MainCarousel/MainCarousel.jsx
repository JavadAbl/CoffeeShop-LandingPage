import Neonizer from "neonizer";
import styles from "./MainCarousel.module.css";

export default function MainCarousel() {
  return (
    <div
      id="CoffeeLines"
      className={" position-relative   pt-4 pb-8 " + styles.container}
    >
      {/*   <div className={" " + styles.imgLeft}></div>
      <div className={" " + styles.imgRight}></div> */}

      <Neonizer>
        <h2
          className={
            "  text-center text-capitalize display-6 mb-4  " + styles.title
          }
        >
          Into The Field of Coffee
        </h2>
      </Neonizer>

      <div style={{}} className=" container-lg  ">
        <div
          id="mainCarousel"
          style={{ maxWidth: "100rem" }}
          className=" carousel carousel-fade mx-auto "
          data-bs-theme="light"
        >
          <div className="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#mainCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>

            <button
              type="button"
              data-bs-target="#mainCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>

            <button
              type="button"
              data-bs-target="#mainCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>

            <button
              type="button"
              data-bs-target="#mainCarousel"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>

          <div className=" carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/c-1.jpg"
                alt=""
                style={{ height: "22rem", objectFit: "cover" }}
                className=" w-75 d-block mx-auto rounded rounded-2 border"
              />

              <div className="carousel-caption d-none d-sm-block bg-dark bg-opacity-50 pt-1">
                <h5>First slide label</h5>
                <p className=" ">
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>

            <div className="carousel-item ">
              <img
                src="images/c-2.jpg"
                alt=""
                style={{ height: "22rem", objectFit: "cover" }}
                className="w-75 d-block mx-auto rounded rounded-2 border"
              />
              <div className="carousel-caption d-none d-sm-block bg-dark bg-opacity-50 pt-1">
                <h5>First slide label</h5>
                <p className=" ">
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>

            <div className="carousel-item ">
              <img
                src="images/c-3.jpg"
                alt=""
                style={{ height: "22rem", objectFit: "cover" }}
                className="w-75 d-block mx-auto rounded rounded-2 border border-info"
              />
              <div className="carousel-caption d-none d-sm-block bg-dark bg-opacity-50 pt-1">
                <h5>First slide label</h5>
                <p className=" ">
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>

            <div className="carousel-item ">
              <img
                src="images/c-4.jpg"
                alt=""
                style={{ height: "22rem", objectFit: "cover" }}
                className="w-75 d-block mx-auto rounded rounded-2 border"
              />
              <div className="carousel-caption d-none d-sm-block bg-dark bg-opacity-50 pt-1">
                <h5>First slide label</h5>
                <p className=" ">
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon text-white"
              aria-hidden="true"
            ></span>

            <span className=" visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next "
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide="next"
          >
            <span
              style={{ color: "red", borderColor: "red" }}
              className="carousel-control-next-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden ">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
