import Header from "../layout/header"
import banner_image from '../Assets/Images/cgf-home-banner.jpg'
import citygate_logo from '../Assets/Images/citygate_logo.png'
import apply_bg from '../Assets/Images/apply-bg.jpg'
import Footer from "../layout/footer"

const Home = () => {
    return(
        <>
        <Header />
        <div className="home-banner" style={{backgroundImage: `url(${banner_image})`}}>
            <div className="banner-text">
                <h2>Empowering Dreams and Igniting Futures</h2>
            </div>
            <br/>
            <br/>
            <a className="get-started" href="/application">Get Started  <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <br/>
        <div className="full-text-section" style={{textAlign: 'center'}}>
            <div className="text-heading">
                <h2>Our Mission</h2>
                <div className="heading-line centralised-item"></div>
            </div>
            <br/>
                <p className="text-paragraph full-text">
                    To deploy impactful and innovative scholarship programs, that provides educational opportunities <br/> to orphans, fatherless, and less privileged students to empower and uplift them and, foster <br/> their journey towards becoming productive members of society. 
                </p>
        </div>
        <br/>
        <div className="key-data-div">
            <h2 className="centered white">Key Facts about The Foundation</h2>
            <br/>
            <br/>
        <div className="key-data">
            <div className="key-data-column">
            <i className="key-data-icon white-icon fa-solid fa-landmark"></i>
            <br/>
                <h4>Incorporation</h4>
                <p>Incorporated September 6, 2019</p>
            </div>
            <div className="key-data-column">
            <i className="key-data-icon white-icon fa-solid fa-school"></i>
            <br/>
            <h4>Supported Beneficiaries </h4>
                <span>Primary School Children</span> <br/>
                <span>Secondary School Children</span> <br/>
                <span>Undergraduates</span> <br/>
                <span> Postgraduates</span> <br/>
            </div>
            <div className="key-data-column">
            <i className="key-data-icon white-icon fa-solid fa-user-graduate"></i>
            <br/>
            <h4>Primary Focus </h4>
                <span>Education</span>
                
            </div>
        </div>
        </div>
        <br/>
        <br/>
        <div className="full-text-section" style={{textAlign: 'center'}}>
            <div className="text-heading">
                <h2>Our Strategic Partners</h2>
                <div className="heading-line centralised-item"></div>
            </div>
            <br/>
            <div className="centralised-full split-two">
            <a className="brand-box" href="https://citygateglobal.com">
                <div>
                    <img className="brand-logo" src={citygate_logo} />
                </div>
                    <h5>
                    Citygate Global <br/>
                    Investment
                    </h5>
            </a>
            <a className="brand-box" href="https://empiretrustmfb.com">
                <div>
                    <img className="brand-logo" src={citygate_logo} />
                </div>
                    <h5>
                    Empire Trust <br/>
                    Microfinance Bank
                    </h5>
            </a>
            
            </div>            
        </div>
        <br/>
        <div className="video-box">
        <iframe className="video" src="https://www.youtube.com/embed/uZVLJpe9t5s"/>
            <div className="video-text">
                <h1>2024 Citygate Global Foundation <br/> Meet & Greet</h1>
                <p>Highlights from the 2024 Citygate Foundation Meet & Greet event.</p>
                <hr/>
                <a className="btn btn-secondary clear-button black big-btn" href="/media">View More <i class="fa-solid fa-chevron-right"></i></a>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="key-data-div apply-box" style={{textAlign: 'center', padding: '10% 0%', color: 'white', backgroundImage: `url(${apply_bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <p className="large-text">Start Your Application</p>
            <p>Begin your seamless application on this website.</p>
            <a className="btn big-btn outline-btn" href="/application">APPLY <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <Footer />

        </>
    )
}

export default Home