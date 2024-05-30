import Footer from "../layout/footer"
import Header from "../layout/header"
import apply from '../Assets/Images/apply.jpg'

const Application = () => {
    return(
        <>
        <Header/>
        <div className="title-banner" style={{backgroundImage: `url(${apply})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', color: 'white'}}>
            <h1> Application</h1>

        </div>

        <div className="main-body lower-body">
        <div className="text-heading">
                <h2>Criteria for Applying</h2>
                <div className="heading-line"></div>
        </div>
        <p>
        <b>1.	Orphan Status</b>
        <br/><br/>o	Submission of a valid death certificate for parents, clearly indicating the date of demise.
        <br/><br/>o	For Primary and \Secondary School Students, submission of evidence of enrolment in school, along with recommending letter and contact details from principal/ teacher.
        <br/><br/>o	For Undergraduates, Submission of a valid admission letter from a recognized educational institution confirming the applicant's enrolment and course of study.
        <br/><br/>o	Detailed breakdown of tuition fees and other associated school expenses.
        <br/><br/>o	Verification of the school's accreditation and recognition.

        <br/><br/><b>2.	Fatherless Applicants</b>
        <br/><br/>o	Submission of a valid death certificate for parents, clearly indicating the date of demise.
        <br/><br/>o	Evidence establishing that the father was the primary provider and that the mother is unable to support the child's educational needs adequately.
        <br/><br/>o	For Primary and \Secondary School Students, submission of evidence of enrolment in school, along with recommending letter and contact details from principal/ teacher.
        <br/><br/>o	For Undergraduates, Submission of a valid admission letter from a recognized educational institution confirming the applicant's enrolment and course of study.
        <br/><br/>o	Detailed breakdown of tuition fees and other associated school expenses.
        <br/><br/>o	Verification of the school's accreditation and recognition.

        <br/><br/><b>3.	Motherless Exceptions</b><br/>
        In cases where the mother was the primary provider, exceptions will be considered. Applicants must provide clear documentation supporting this exceptional circumstance.
        <br/><br/>o	Submission of a valid death certificate for parents, clearly indicating the date of demise.
        <br/><br/>o	Evidence establishing that the mother was the primary provider and that the father is unable to support the child's educational needs adequately.
        <br/><br/>o	For Primary and \Secondary School Students, submission of evidence of enrolment in school, along with recommending letter and contact details from principal/ teacher.
        <br/><br/>o	For Undergraduates, Submission of a valid admission letter from a recognized educational institution confirming the applicant's enrolment and course of study.
        <br/><br/>o	Detailed breakdown of tuition fees and other associated school expenses.
        <br/><br/>o	Verification of the school's accreditation and recognition.

        <br/><br/><b>4.	Less Privileged Criteria</b>
        <br/><br/>o	Submission of evidence demonstrating that the applicant's family lives below the poverty line.
        <br/><br/>o	Alternatively, proof of residency in an orphanage or similar institution, confirming the applicant's less privileged status.
        <br/><br/>o	For Primary and \Secondary School Students, submission of evidence of enrolment in school, along with recommending letter and contact details from principal/ teacher.
        <br/><br/>o	For Undergraduates, Submission of a valid admission letter from a recognized educational institution confirming the applicant's enrolment and course of study.
        <br/><br/>o	Detailed breakdown of tuition fees and other associated school expenses.
        <br/><br/>o	Verification of the school's accreditation and recognition.

        </p>

        <div className="text-heading">
                <h2>Application Guide</h2>
                <div className="heading-line"></div>
        </div>
        <p>
        1.	Prospective applicants should obtain and complete the official Citygate Global Foundation Scholarship Application Form, available on the foundation's official website (below) 
        \
        
        or designated offices.
        <br/><br/>2.	Attach all required supporting documents, including but not limited to the death certificate(s), evidence of income loss, proof of orphanage residency, admission letter, and detailed tuition and school expense information.
        <br/><br/>3.	Submit the completed application form and supporting documents through the designated channels (see contact information provided on the site or use the site application form, ensuring that all information is accurate and verifiable.
        <br/><br/>4.	Applications will undergo a thorough review process, including verification of documents and adherence to the specified criteria.
        <br/><br/>5.	Shortlisted candidates may be required to participate in interviews or additional assessments to assess their suitability for the scholarship.
        <br/><br/>The Citygate Global Foundation Scholarship aims to provide educational opportunities to deserving individuals, and adherence to these criteria ensures a fair and transparent selection process.

        </p>

        <div className="text-heading">
                <h2>Application Form</h2>
                <div className="heading-line"></div>
        </div>
        <div class="alert alert-warning" style={{width: 'fit-content'}} role="alert">
        <h5>Online Application</h5>
            Click below to open the form. <br/><br/>
            <button className="btn primary-button" data-bs-toggle="modal" data-bs-target="#applicationModal"><i class="fa-regular fa-file"></i> Open Application Form</button>
        </div>
        <br/>
        <div className="text-heading">
                <h2>Testimonials from Past Beneficiaries</h2>
                <div className="heading-line"></div>
        </div>
        </div>
        <div class="modal modal-lg fade" id="applicationModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">SCHOLARSHIP APPLICATION FORM</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfyRuiQpGn698IIqhUENwcjkpGwkSRqaus9ULRCrsVEpLEedg/viewform?embedded=true" width="100%" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        
      </div>
    </div>
  </div>
</div>
        <Footer />
        </>
    )
}

export default Application