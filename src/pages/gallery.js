import Footer from "../layout/footer"
import Header from "../layout/header"
import image_1 from "../Assets/Images/photos/IMG_7050.jpg"
import { useEffect, useRef } from "react";
import { useState } from "react";
import GalleryImage from "../components/galleryImage";
import ImageGallery from "react-image-gallery";
import { Gallery } from "react-grid-gallery";




const Media = ({number}) => {

const [fullGallery, setFullGallery] = useState();
const [shownPic, setShownPic] = useState(undefined)
const [imageCount, setImageCount] = useState(8)
const loadButtonRef = useRef()
const loadPlaceholder = useRef()

const imagePath = require.context('../Assets/Images/photos', false, /\.(png|jpe?g|svg)$/)
const images = imagePath.keys().map(imagePath)

useEffect(()=>{
  loadButtonRef.current.click()
}, [])

const loadImages = () => {
  loadPlaceholder.current.style.display = 'block'
  setImageCount(imageCount+imageCount)
  const collectedImages = []
  images.forEach(image=>{
  images.indexOf(image) < imageCount ? collectedImages.push({src: image, filename: image.replace('./', '')}) : console.log('none');
  setFullGallery(collectedImages)
  console.log(collectedImages)
})
loadPlaceholder.current.style.display = 'none'
}
   
return(
    <>
    <Header />
    <div className="title-banner" style={{backgroundImage: `url(${image_1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', color: 'white', backgroundPosition: '0px 50%'}}>
            <h1> Gallery</h1>

        </div>
    <div className="" style={{margin: "20px 10px"}}>

  <ul class="nav nav-underline mb-5" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-pictures-tab" data-bs-toggle="pill" data-bs-target="#pills-pictures" type="button" role="tab" aria-controls="pills-pictures" aria-selected="true"><i class="fa-regular fa-image"></i> Pictures</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-videos-tab" data-bs-toggle="pill" data-bs-target="#pills-videos" type="button" role="tab" aria-controls="pills-videos" aria-selected="false"><i class="fa-solid fa-video"></i> Videos</button>
  </li>
  
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-pictures" role="tabpanel" aria-labelledby="pills-pictures-tab" tabindex="0">
  <h5 ref={loadPlaceholder}>Loading images...</h5>
    <div className="gallery">
    {
      fullGallery ? fullGallery.map((image, index)=>{
        return(
          <GalleryImage src={image.src} className="gallery-image" action={()=>{setShownPic(image.src)}} />
        )
      })
      :
      null
    }
    </div>
    <br/>
    <div className="gallery-btn-con">
    <button className="btn btn-primary primary-button gallery-load-button" ref={loadButtonRef} onClick={loadImages}>Load More</button>
    </div>
  </div>
  <div class="tab-pane fade"id="pills-videos" role="tabpanel" aria-labelledby="pills-videos-tab" tabindex="0">
        <div className="video-box">
        <iframe className="video" src="https://www.youtube.com/embed/7LfraYHgPIg"/>
            <div className="video-text">
                <h1>Endowment Fund Cheque Presentation</h1>
                <p>The Endowment Fund Cheque Presentation to Victor Ajakaye on the 8th of September 2022 at Empire Trust Microfinance Bank.</p>
            </div>
        </div>
        <br/>
        <div className="video-box">
        <iframe className="video" src="https://www.youtube.com/embed/K9B6WVPq1bM"/>
            <div className="video-text">
                <h1>Future Plans for Citygate Global Foundation</h1>
                <p> Dr. Oluseun Durojaye, Group Managing Director of the Citygate Global Group, Founder and Trustee of Citygate Global Foundation, shares the  plans for the growth and reach of the foundation and also encourages Foundation beneficiaries of continued support for the remainder of their education.</p>
            </div>
        </div>
        <br/>
        <div className="video-box">
        <iframe className="video" src="https://www.youtube.com/embed/uZVLJpe9t5s"/>
            <div className="video-text">
                <h1>2024 Citygate Global Foundation <br/> Meet & Greet</h1>
                <p>Highlights from the 2024 Citygate Foundation Meet & Greet event.</p>
            </div>
        </div>
  </div>


  </div>
  <div class="modal fade" id="galleryModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content" >
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img className="open-image" src={shownPic} />
      </div>
    </div>
  </div>
</div>
</div>

    <Footer />
    </>
)
}

export default Media