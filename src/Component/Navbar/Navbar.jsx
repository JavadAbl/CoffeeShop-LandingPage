export default function Navbar() {
  return (
    <nav data-bs-theme="dark" className=" navbar navbar-expand-md fixed-top  ">
      <div className=" container-lg">
        <div className=" navbar-brand">
          <a href="#">
            {/* <img src="images/logo.png" alt="Coffee Shop Site" height={150} /> */}
          </a>
        </div>

        <button
          className=" navbar-toggler ms-auto "
          data-bs-toggle="collapse"
          data-bs-target="#navDropDown"
          aria-controls="navDropDown"
          aria-expanded="false"
        >
          <span className=" navbar-toggler-icon"></span>
        </button>

        <div id="navDropDown" className=" collapse navbar-collapse">
          <ul className=" navbar-nav ms-auto">
            <li className=" nav-item">
              <a href="#" className=" nav-link">
                Link1
              </a>
            </li>

            <li className=" nav-item">
              <a href="#" className=" nav-link">
                Link2
              </a>
            </li>

            <li className=" nav-item">
              <a href="#" className=" nav-link">
                Link3
              </a>
            </li>

            <li className=" nav-item">
              <a href="#" className=" nav-link">
                Link4
              </a>
            </li>

            <li className=" nav-item">
              <a className="nav-link " href="#">
                <i className="bi bi-facebook bg-primary rounded-circle py-1 px-2 text-light"></i>
              </a>
            </li>

            <li className=" nav-item">
              <a className="nav-link " href="#">
                <i className="bi bi-instagram bg-primary rounded-circle py-1 px-2 text-light"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
