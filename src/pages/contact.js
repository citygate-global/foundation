import Header from "../layout/header"
import contact from '../Assets/Images/contact.jpg'
import Footer from "../layout/footer"


const Contact = () => {
    return(
        <>
        <Header />
        <div className="title-banner special-banner" style={{backgroundImage: `url(${contact})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', color: 'white'}}>
            <h1> Contact Us</h1>

        </div>
        <div className="main-body lower-body">
        <div className="text-heading">
                <h2><i class="fa-regular fa-building"></i> Our Offices</h2>
                <div className="heading-line"></div>
        </div>
        <p>17, Ogunlowo Street, Off Awolowo Way, Ikeja, Lagos.</p>
        <br/>
        <div className="text-heading">
                <h2><i class="fa-solid fa-phone"></i> Call Us</h2>
                <div className="heading-line"></div>
        </div>
        <p>09099252176, 09082481165</p>
        <br/>
        <div className="text-heading">
                <h2><i class="fa-regular fa-envelope"></i> Email Us</h2>
                <div className="heading-line"></div>
        </div>
        <p>foundation@citygateglobal.com</p>
        <br/>
        <h4>Our use this form</h4>
        <p>We will respond as soon as we recieve your message.</p>
        <br/>
        <div className="card card-body contact-form">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd9wAJBuO1Xx1ivFak1JhNFZigmpz5WWzWXw6oHoPx4vulsqw/viewform?embedded=true" width="100%" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
        </div>
        <Footer />
        </>
    )
}

export default Contact