import logo from '../Assets/Images/cgf_logo2.png'
const Footer = () => {
    return(
        <>
        <footer className="footer">
            <div className="ft-1">
                <img className='footer-logo' src={logo}/>
                <p><i class="fa-regular fa-envelope"></i> info@citygateglobal.com</p>
                <p><i class="fa-solid fa-phone"></i> 09099252176, 09082481165</p>
                <p><i class="fa-regular fa-building"></i> 17, Ogunlowo Street, Off Awolowo Way, Ikeja, Lagos.</p>
            </div>
            <div className='ft-2'>
                <br/>
                <h5>Quick Links</h5>
                <br/>
                <a href='/home'>Home</a>
                <br/>
                <br/>
                <a href='/application'>Application</a>
                <br/>
                <br/>
                <a href='/media'>Media</a>
                <br/>
                <br/>
                <a href='/contact'>Contact</a>
            </div>
            <div className='ft-3'>
                <br/>
                <h5>About</h5>
                <br/>
                <a href='/about'>About Us</a>
                <br/>
                <br/>
                <a href='/our-works'>Our Works</a>
                <br/>
                <br/>
                <a href='/how-we-work'>How We Work</a>
                <br/>
                <br/>
                <a href='/leadership'>Leadership</a>
            </div>
            <div className='ft-3'>
                <br/>
                <h5>Connect with Us</h5>
                <br/>
                <div style={{display: 'flex', gap: '15%'}}>
                <a href='https://web.facebook.com/CitygateGlobalFoundation'><i class="fa-brands fa-facebook-f"></i></a>
                <a href='https://twitter.com/CGlobalF_'><i class="fa-brands fa-x-twitter"></i> </a>
                <a href='https://www.instagram.com/citygateglobalfoundation/'><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </footer>
        </>
    )

}

export default Footer