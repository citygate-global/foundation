import Footer from "../layout/footer"
import Header from "../layout/header"
import leadership from '../Assets/Images/leadership.jpg'
import person_bio from '../Assets/Images/person-bio.jpg'
import oluseun from '../Assets/Images/leadership/oluseun.jpg'
import olamide from '../Assets/Images/leadership/olamide.jpg'
import anuoluwa from '../Assets/Images/leadership/anuoluwa.jpg'


const Leadership = () => {
    return(
        <>
    <Header />
    <div className="title-banner" style={{backgroundImage: `url(${leadership})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', color: 'white'}}>
            <h1>Leadership</h1>

        </div>
    
    <div className="main-body lower-body">
    <div className="text-heading">
                <h2>The Foundation's Trustees</h2>
                <div className="heading-line"></div>
        </div>
        <br/>
        <div className="trustee-div">
            <div className="person-bio">
                <div className="bio-image" style={{backgroundImage: `url(${oluseun})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                </div>
                <div className="bio-text" style={{padding: '20px'}}>
                    <h5>Oluseun Durojaye</h5>
                    <span>Dr. Seun Durojaye Co-founded the Citygate Global in Nigeria in the year 2007. 
He is a seasoned banker who has cognate experience of over 25 years in banking having worked in UBA PLC, Zenith Bank PLC, Platinum Bank Ltd, and Keystone Bank Ltd prior to the establishment of Citygate Global in 2007. 
His  years of experience in Banking cuts across Credit, Marketing, Treasury and Branch Management roles.</span>
                </div>

            </div>
            <div className="person-bio">
                <div className="bio-image" style={{backgroundImage: `url(${olamide})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                </div>
                <div className="bio-text" style={{padding: '20px'}}>
                    <h5>Olamide Idowu</h5>
<span>Olamide Idowu Co-founded Citygate Global Investment Limited in the year 2007. 
She holds a Diploma in Business Management, Travel and Tourism and has served as a volunteer with WOEZO Africa, Edmonton Alberta. Since then, she has worked as an Administrative Manager for United Cribling and a Facility Manager for EDS in Edmonton Alberta.
She is a business woman and currently serves a director for Citygate Global Investment Ltd and seats on the board of directors of Empire Trust Microfinance Bank.</span>
                </div>
            </div>
            <div className="person-bio">
                <div className="bio-image" style={{backgroundImage: `url(${anuoluwa})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                </div>
                <div className="bio-text" style={{padding: '20px'}}>
                    <h5>Anuoluwa Durojaye </h5>
                    <span>Mrs Anuoluwa Durojaye Co-founded Citygate Global Investment Limited  in the year 2007. 
She is a trained Accountant who has practiced in the Microfinance Business in Nigeria since 2007.
She currently serves as an executive director for Citygate Global Investment and oversees the account and finance unit of the organization. She also seats on the board of directors of a Microfinance Bank</span>
                </div>
            </div>
        </div>
        <br/>
        <br/>
            <div className="text-heading">
                <h2>The Foundation's Leadership Team</h2>
                <div className="heading-line"></div>
        </div>
        <br/>
        <div className="leadership-div">
        <div className="person-bio">
                <div className="bio-image" style={{backgroundImage: `url(${person_bio})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                </div>
                <div style={{padding: '20px'}}>
                    <h4>Person</h4>
                    <p>Designation</p>
                </div>

            </div>
            <div className="person-bio">
                <div className="bio-image" style={{backgroundImage: `url(${person_bio})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                </div>
                <div style={{padding: '20px'}}>
                    <h4>Person</h4>
                    <p>Designation</p>
                </div>
            </div>
            <div className="person-bio">
                <div className="bio-image" style={{backgroundImage: `url(${person_bio})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                </div>
                <div style={{padding: '20px'}}>
                    <h4>Person </h4>
                    <p>Designation</p>
                </div>
            </div>
            <div className="person-bio">
                <div className="bio-image" style={{backgroundImage: `url(${person_bio})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                </div>
                <div style={{padding: '20px'}}>
                    <h4>Person </h4>
                    <p>Designation</p>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <div className="leadership-div">
        <div className="person-bio">
                <div className="bio-image" style={{backgroundImage: `url(${person_bio})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                </div>
                <div style={{padding: '20px'}}>
                    <h4>Person</h4>
                    <p>Designation</p>
                </div>

            </div>
            <div className="person-bio">
                <div className="bio-image" style={{backgroundImage: `url(${person_bio})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                </div>
                <div style={{padding: '20px'}}>
                    <h4>Person</h4>
                    <p>Designation</p>
                </div>
            </div>
            <div className="person-bio">
                <div className="bio-image" style={{backgroundImage: `url(${person_bio})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                </div>
                <div style={{padding: '20px'}}>
                    <h4>Person </h4>
                    <p>Designation</p>
                </div>
            </div>
            <div className="person-bio">
                <div className="bio-image" style={{backgroundImage: `url(${person_bio})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                </div>
                <div style={{padding: '20px'}}>
                    <h4>Person </h4>
                    <p>Designation</p>
                </div>
            </div>
        </div>

    </div>
    <Footer />
    </>
    )
}

export default Leadership