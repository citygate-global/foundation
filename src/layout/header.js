import logo from '../Assets/Images/cgf_logo.png'
const Header = () => {
    return(
        <>
        <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary top-menu">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#"><img className="main-logo" src={logo} alt="" /></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav menu-items">
                      <li className="nav-item menu-item">
                        <a className="nav-link" aria-current="page" href="home">Home</a>
                      </li>
                      <li className="nav-item menu-item">
                        <a className="nav-link" aria-current="page" href="about-us">About Us</a>
                      </li>
                      <li className="nav-item menu-item">
                        <a className="nav-link" aria-current="page" href="our-works">Our Works</a>
                      </li>
                      <li className="nav-item menu-item">
                        <a className="nav-link" aria-current="page" href="how-we-work">How We Work</a>
                      </li>
                      <li className="nav-item menu-item">
                        <a className="nav-link" aria-current="page" href="leadership">Leadership</a>
                      </li>
                      <li className="nav-item menu-item">
                        <a className="nav-link" aria-current="page" href="application">Application</a>
                      </li>
                      <li className="nav-item menu-item">
                        <a className="nav-link" aria-current="page" href="media">Media</a>
                      </li>
                      <li className="nav-item menu-item">
                        <a className="nav-link" aria-current="page" href="contact-us">Contact Us</a>
                      </li>  
                    </ul>
                  </div>
                </div>
              </nav>
        </header>
        </>
    
    )
}

export default Header