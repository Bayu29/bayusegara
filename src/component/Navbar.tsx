const Navbar = () => {
  return (
   <>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand nav-color" href="#">BAYU</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse p-3 navbar-menu" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link nav-color active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-color" href="#">Skill</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-color" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-color" href="#">Project</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-contact" type='button'>Contact me</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   </>
  );
};

export default Navbar
