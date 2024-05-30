import Footer from "../layout/footer"
import Header from "../layout/header"
import apply_bg from '../Assets/Images/apply-bg.jpg'
import our_works from '../Assets/Images/our-works.jpg'


const OurWorks = () => {
    return (
        <>
        <Header />
        <div className="title-banner" style={{backgroundImage: `url(${our_works})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', color: 'white'}}>
            <h1>Our Works</h1>

        </div>

        <div className="main-body lower-body">

        <div className="text-heading">
                <h2>What We Aim to Do</h2>
                <div className="heading-line"></div>
        </div>
        <p>
             1.	<b>Facilitating Educational Access for the Orphans, Fatherless and the Less Privileged</b>:<br/> Our primary goal is to forge pathways that grant orphans, fatherless and less privileged children access to quality education, ensuring that they are not hindered by socio-economic constraints in their pursuit of knowledge.
        <br/>2.	<b>Enrolment of Enthusiastic Children Facing Educational Barriers</b>:<br/> We aim to enroll children who display genuine interest and enthusiasm for learning but find themselves outside the realms of education due to the unfortunate circumstances of parental loss or financial constraints.
        <br/>3.	<b>Sponsoring Educational Aspirations through Scholarships</b>:<br/> Through targeted scholarship programs, we aspire to identify and sponsor children eager to advance their educational journeys. This particularly includes those whose parents may have passed away or are unable to meet the financial requirements for their children's tuition and other educational needs.
        <br/>4.	<b>Fostering Economic and Community Contributions</b>:<br/> Our overarching aim is to equip every individual with basic education, empowering them to become valuable and productive members of both the economy and their communities. By providing foundational education, we seek to nurture well-rounded individuals capable of contributing meaningfully to society.
        </p>
        <div className="text-heading">
                <h2>Why We Aim to Do It</h2>
                <div className="heading-line"></div>
        </div>
        <p>
        The objectives of our foundation are driven by a steadfast commitment to addressing the profound challenges faced by orphans, the fatherless and less privileged children, recognizing education as a powerful catalyst for positive change. Our overarching goal is rooted in the belief that every child, regardless of their socio-economic background, deserves access to quality education. The reasons behind our objectives are:<br/>
        <br/>1.	<b>Equity in Educational Opportunities</b>:<br/> We aim to rectify disparities in educational access, ensuring that the less privileged have the same opportunities to learn and grow as their more fortunate peers. By breaking down barriers to education, we strive to create a level playing field where potential can be realized irrespective of economic circumstances.
    <br/>2.	<b>Empowering Through Knowledge</b>:<br/> Education empowers individuals, providing them with the tools and knowledge necessary to overcome challenges and make informed decisions. Our objectives reflect a commitment to empower less privileged children with the transformative force of education, equipping them to navigate and shape their own futures.
    <br/>3.	<b>Addressing Educational Barriers Due to Parental Loss or Financial Constraints</b>:<br/> The objectives specifically target children facing the dual challenges of parental loss or financial constraints. By enrolling and supporting these children in their educational pursuits, we aim to mitigate the adverse impact of such circumstances, offering them a chance to break free from the cycle of disadvantage.
    <br/>4.	<b>Building Foundations for Productive Citizenship</b>:<br/> We believe that education is the cornerstone of personal and societal progress. By providing basic education, we contribute to shaping individuals who not only contribute meaningfully to the economy but also become engaged and responsible members of their communities. Our objectives align with the broader vision of fostering well-rounded individuals capable of positive societal impact.
    <br/><br/>    In essence, our objectives reflect our dedication to creating a more equitable and empowered society, one where education serves as a beacon of hope and opportunity for every child, regardless of their background.

        </p>
        <div className="text-heading">
                <h2>Our Plans for the Future</h2>
                <div className="heading-line"></div>
        </div>
        <p>
        While our steadfast commitment remains centred on advancing the education of orphans, fatherless, and less privileged children, we are driven by an expansive vision for the future. Beyond our educational initiatives, we aspire to extend our impact by venturing into the realm of healthcare support. Our goal is to bridge the gap for those who currently lack the means to access essential healthcare services, thereby contributing to the overall well-being of our beneficiaries.
        <br/><br/>Looking ahead, we envision a future where the scale of our impact transcends the limitations of independent fundraising. Our ambition is to establish strategic partnerships with individuals and organizations who share our passion and dedication. By cultivating alliances with like-minded entities, we aim to amplify our reach and create a multiplier effect, ultimately fostering a more inclusive and equitable Nigerian society.
        <br/><br/>In addition to these aspirations, we are actively exploring avenues to enhance the effectiveness of our educational programs. By embracing a comprehensive approach, we seek to empower our beneficiaries holistically, ensuring they are equipped not only with academic knowledge but also with the skills and support needed to navigate the challenges of life successfully.
        <br/><br/>Our long-term vision involves becoming a catalyst for systemic change, advocating for policies that prioritize education and healthcare accessibility for all. We envision a future where the Citygate Global Foundation plays a pivotal role in shaping the trajectory of Nigeria, contributing to the creation of a society where every individual, 

        </p>
        </div>
        <br/>
        <div className="key-data-div apply-box" style={{textAlign: 'center', padding: '10% 0%', color: 'white', backgroundImage: `url(${apply_bg})`, backgroundSize: 'cover'}}>
            <p className="large-text">Start Your Application</p>
            <p>Begin your seamless application on this website.</p>
            <a className="btn big-btn outline-btn" href="/application">APPLY <i class="fa-solid fa-arrow-right"></i></a>

        </div>
        <Footer />
        </>
    )
}
export default OurWorks