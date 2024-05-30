import Footer from "../layout/footer"
import Header from "../layout/header"
import apply_bg from '../Assets/Images/apply-bg.jpg'
import about_us from '../Assets/Images/about-us.jpg'


const About = () => {
    return(
        <>
        <Header />
        <div className="title-banner" style={{backgroundImage: `url(${about_us})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '0px -50px'}}>
            <h1>About Us</h1>

        </div>
        <div className="main-body">
        <p>
        At Citygate Global Foundation, we stand as a beacon of hope and opportunity, dedicated to transforming the lives of orphans, fatherless, and less privileged students. Established with a profound commitment to education and holistic well-being, our foundation envisions a world where every individual, regardless of their background, can break free from the shackles of adversity and achieve their dreams.
        </p>
        <br/>
        <div className="text-heading">
                <h2>AIMS AND OBJECTIVES</h2>
                <div className="heading-line"></div>
        </div>
        <ol>
                    <li>To create opportunities for the less privileged children to have access to education.</li>
                    <li>To enrol children who are interested and enthusiastic about their educational pursuits but are out of school due to the death or financial constraint of their parents.</li>
                    <li>To provide scholarship programs which will identify and sponsor children that are keen to further their educational pursuits but whose parents may be deceased or unable to afford the tuition fees and financial needs of such children.</li>
                    <li>4.	To ensure that every individual becomes a useful and productive member of the economy and communities by providing basic education to them.</li>
        </ol>
        
        <div className="text-heading">
                <h2>HISTORY</h2>
                <div className="heading-line">

        </div>
        
        <p>Citygate Global Foundation became officially registered in 2019, and this marked the formal acknowledgment of a vision that had its roots back in June 2016, during a collaborative effort of Empire Trust Microfinance Bank and Citygate Global Investment Limited. The initial spark for the foundation was ignited by a simple goal—to address the future needs of a child who had lost his father. This led to the creation of an endowment fund set to mature on his 21st birthday, thus marking the embryonic stage of what would evolve into the Citygate Global Foundation.
        The inception of our foundation was a response to a stark reality: numerous children in Nigerian society faced educational barriers following the loss of a major provider—their parents or the diminished income of a sponsor. This realization spurred our Trustees into action. The groundwork laid in those early days paved the way for the formal establishment of the Citygate Global Foundation on June 6, 2019.
        Since our inception, our foundation has grown and diversified its efforts, extending support to beneficiaries across various educational stages—from Nursery School to Undergraduates, with aspirations to one day include Postgraduates in our outreach. 
        With each passing day, our commitment to providing hope and opportunities to orphans, the fatherless, and less privileged students, strengthens and propelling us towards a future where education is an accessible beacon of empowerment for every deserving individual.
        </p>
        <div className="">
            <div className="text-heading">
                <h2>Vision</h2>
                <div className="heading-line"></div>
            </div>
            <br/>
                <p className="text-paragraph full-text centered orange">
                "To facilitate a society where orphans, the fatherless, and less privileged children and student have unfettered access to education, empowering them to break the chains of adversity and become thriving contributors to society."
                </p>
        </div>     
        <div className="">
            <div className="text-heading">
                <h2>Mission</h2>
                <div className="heading-line"></div>
            </div>
            <br/>
                <p className="text-paragraph full-text centered orange">
                    "To deploy impactful and innovative scholarship programs, that provides educational opportunities <br/> to orphans, fatherless, and less privileged students to empower and uplift them and, foster <br/> their journey towards becoming productive members of society."
                </p>
        </div>

        <div className="text-heading">
                <h2>Values</h2>
                <div className="heading-line"></div>
            </div>
            <ul>
                <ol className="fancy-title"><i class="fa-solid fa-handshake-angle"></i> Empathy and Compassion</ol>
                <br/>
                <p>
                    We cultivate a deep understanding of the challenges faced by orphans, the fatherless, and less privileged students and our actions are guided by empathy and compassion, driving us to make a positive impact in their lives.
                </p>
                <br/>
                <ol className="fancy-title"><i class="fa-solid fa-user-graduate"></i> Education</ol>
                <br/>
                <p>
                We believe in the transformative power of education. We are dedicated to providing opportunities for learning and skill development, empowering individuals to break the cycle of disadvantage and become leaders in their communities.
                </p>
                <br/>
                <ol className="fancy-title"><i class="fa-solid fa-magnifying-glass"></i> Integrity and Transparency</ol>
                <br/>
                <p>
                We hold ourselves to the highest standards of integrity and transparency in all our interactions. Our stakeholders can trust that their support is utilized efficiently, and we are committed to open communication about our activities, challenges, and successes.
                </p>
                <br/>
                <ol className="fancy-title"><i class="fa-solid fa-lightbulb"></i>	Innovation and Adaptability</ol>
                <br/>
                <p>
                We embrace innovation and continuously seek new, effective ways to address the evolving needs of our beneficiaries. We remain adaptable, ready to adjust our strategies to better serve those we aim to uplift.
                </p>
                <br/>
                <ol className="fancy-title"><i class="fa-solid fa-file-shield"></i> Stewardship of Resources</ol>
                <br/>
                <p>
                We are diligent stewards of the resources entrusted to us. We manage our funds responsibly, ensuring that every contribution is maximized to create a meaningful and lasting impact on the lives of our beneficiaries.
                </p>
                <br/>
                <ol className="fancy-title"><i class="fa-solid fa-check"></i> Excellence</ol>
                <br/>
                <p>
                Our commitment to excellence extends to every aspect of our service. We strive to provide not only financial support but also a seamless and supportive experience for our beneficiaries, stakeholders, and partners.
                </p>
                <br/>
               
            </ul>
            <div className="text-heading">
                <h2>Our Impact</h2>
                <div className="heading-line"></div>
            </div>
            <p><strong>Nurturing Academic Journeys from Primary to Secondary Education</strong></p>
            <p>Some of the students we've supported embarked on their educational journey with us during their primary school days. It is heartening to report that these individuals are now thriving in secondary schools, eagerly anticipating the acquisition of their Senior Secondary School Leaving Certificates—a testament to the lasting impact of our foundation on their educational trajectories.</p>
            <p><strong>Educational Milestones Achieved:</strong></p>
            <p>Our impact is evident in the successful fostering of students' education throughout their secondary years. Many of our beneficiaries have not only completed their secondary education but have also seamlessly transitioned into universities, where they continue to excel and make the foundation proud with their remarkable achievements.</p>
            <p><strong>Comprehensive Support for Undergraduates</strong></p>
            <p>Presently, we are providing substantial support to a cohort of students in their undergraduate studies. Beyond covering tuition fees, our commitment extends to supporting their accommodation needs, recognizing the importance of a conducive living environment for academic success. Additionally, we are proud to share that some of our undergraduate beneficiaries have been granted access to postgraduate scholarships upon the completion of their undergraduate studies, opening doors to advanced academic pursuits and furthering their journey toward excellence.
            <br/>
            <br/>
            This impact report reflects not just educational achievements but also the broader commitment of our foundation to nurturing and empowering individuals throughout various stages of their academic pursuits. We look forward to continuing this trajectory of success, guided by our dedication to creating lasting positive change in the lives of those we serve.
            </p>
            <div className="text-heading">
                <h2>Information About Our Partners</h2>
                <div className="heading-line"></div>
            </div>
            <b>EMPIRE TRUST MICROFINANCE BANK</b>
            <p>Empire Trust Microfinance Bank is licensed by the Central Bank of Nigeria with the objectives to:
            <br/>•	Provide financial services to Micro, Small and Medium scale enterprises and other low-income people in Nigeria in form of working capital and loans.
            <br/>•	Provide the services of intervening and enhancing the capacity of the economically active population struggling to run a business to earn a living.
            <br/>•	Accept various type of deposit from individuals, associations and corporate organisations.
            <br/>•	Embark on other permissible activities as stipulated by prudential guidelines of Central Bank of Nigeria.
            </p>
            <b>CITYGATE GLOBAL INVESTMENT LIMITED</b>
            <p>
            Citygate Global Investment Ltd is a Microfinance Institution founded in June 2007 to engage in Finance business (Microfinance Finance) and is a registered member of Association of Non-Bank Microfinance Institution of Nigeria (AMFIN) and also a registered Money Lending Company in all the States of its operation. It was created with the objective to finance: 
            <br/>•	Vibrant businesses especially Small and Medium Scale Enterprises (SME).
            <br/>•	Individuals in the working space both private and public for their intermediary funds (Salary Advance)
            <br/>•	Contractors’ blue chips Local Purchasing Order (LPO Finance),
            <br/>•	Business Assets (Assets Lease)
            <br/>•	Empowering Nigerian Women engaging in Trading (Retail Lending)
            <br/>Citygate Global focuses on these segments of the Nigerian economy by doing everything possible to assist the populace to have access to fund and Liquidity to run a viable business and improve their lives. 

            </p>

        
        
        </div>
       
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

export default About