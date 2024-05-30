import Footer from "../layout/footer"
import Header from "../layout/header"
import apply_bg from '../Assets/Images/apply-bg.jpg'
import our_works from '../Assets/Images/our-works.jpg'


const HowWeWork = () => {
    return(
        <>
        <Header />
        <div className="title-banner" style={{backgroundImage: `url(${our_works})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', color: 'white'}}>
            <h1>How We Work</h1>

        </div>
        <div className="main-body lower-body">
        <div className="text-heading">
                <h2>Our Target Beneficiatries</h2>
                <div className="heading-line"></div>
        </div>
        <p>
            At the heart of our educational mission, Citygate Global Foundation directs its focus toward empowering the most vulnerable and underserved segments of our community. Our primary target beneficiaries for education are:
            <br/><br/> •	orphans,
            <br/> •	fatherless, 
            <br/>•	children, 
            <br/>•	and less privileged students 
            <br/> <br/> These are the ones who face systemic barriers to accessing quality learning opportunities in Nigeria.
            We recognize that orphans and fatherless children contend with unique challenges stemming from the absence of parental support and guidance. Additionally, we extend our outreach to less privileged students, acknowledging that economic constraints should not be a deterrent to their educational aspirations.
            Our commitment to these specific groups is rooted in the conviction that education is a fundamental right that should be accessible to every child, regardless of their background. By concentrating our efforts on those facing adversity, we aim to break down barriers, providing a pathway for these individuals to realize their full potential.
            Through targeted educational support, mentorship programs, and holistic development initiatives, we strive to empower our beneficiaries with the skills, knowledge, and resilience needed to overcome challenges and contribute meaningfully to society. Our vision is to create a more inclusive and equitable educational landscape, where every child, irrespective of their circumstances, can access the transformative power of learning.
        </p>
        <br/>
        <div className="text-heading">
                <h2>Our Strategies for the Program</h2>
                <div className="heading-line"></div>
        </div>
        <p>
        <br/>Citygate Global Foundation Education Support and Scholarship Strategy:
        <br/><br/>1. <b>Affiliated Schools and Institutions Collaboration</b>:
        <br/><br/>•	We develop partnerships with educational institutions, including schools and colleges, to identify potential beneficiaries within their networks.
        <br/><br/>•	We collaborate closely with school administrators and teachers to establish criteria for identifying orphans, fatherless, and less privileged students facing educational challenges.
        <br/><br/>2. <b>Referrals through Empire Trust Microfinance Bank and Citygate Global Investment Limited Customers</b>:
        <br/><br/>•	We leverage the existing customer base of Empire Trust Microfinance Bank and Citygate Global Investment Limited for referrals.
        <br/><br/>•	We implement a streamlined referral process, encouraging customers to nominate deserving candidates for educational support.
        <br/><br/>3. <b>Targeted Identification Criteria</b>:
        <br/><br/>•	Orphans: Focus is on cases where there is clear evidence of both parents' demise, and the orphan's education pursuits are hindered due to the absence of a responsible guardian.
        <br/><br/>•	Fatherless: Prioritize situations where the father is the primary provider and has died and the mother is unable to support the child's educational needs adequately. The qualifying criterion for such cases is the death of the father.
        <br/><br/>•	Motherless: We consider exceptions for motherless cases where the mother was the primary provider and has passed away, recognizing the unique challenges they may face.
        <br/><br/>•	Less Privileged: We identify candidates living below the poverty line or those in the care of orphanages or homes, ensuring that economic constraints do not impede their access to education.
        <br/><br/>4. <b>Community Engagement and Sensitization</b>:
        <br/><br/>•	We conduct awareness campaigns in communities served by Empire Trust Microfinance Bank and Citygate Global Investment Limited, emphasizing the foundation's commitment to supporting education.
        <br/><br/>•	We engage with local community leaders and organizations to identify potential beneficiaries who may not be enrolled in formal educational institutions.
        <br/><br/>5. <b>Rigorous Application and Verification Process</b>:
        <br/><br/>•	Establish a thorough application process, including detailed documentation and interviews, to assess the eligibility and need of potential beneficiaries.
        <br/><br/>•	Implement a verification system to ensure the accuracy of information provided and the alignment with the foundation's criteria.
        <br/><br/>6. <b>Holistic Assessment</b>:
        <br/><br/>•	We consider the holistic needs of the beneficiaries, including academic performance, extracurricular activities, and socio-economic background, to tailor support programs accordingly.
        <br/><br/>•	We collaborate with educational experts and counsellors to assess the specific needs and potential of each beneficiary.
        <br/><br/>7. <b>Regular Monitoring and Support</b>:
        <br/><br/>•	We implement a monitoring system to track the academic progress and overall well-being of supported beneficiaries.
        <br/><br/>•	We provide ongoing mentorship and support programs to ensure the holistic development of each beneficiary.
        <br/>This comprehensive strategy aims to optimize the identification, selection, and support processes, ensuring that Citygate Global Foundation's education initiatives effectively reach and empower orphans, fatherless, and less privileged students.

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

export default HowWeWork