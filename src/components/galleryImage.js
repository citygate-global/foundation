const GalleryImage = ({src, key, display, action}) => {
    return(
        <>
        <img className="gallery-image" src={src} number={key} style={{display:display}} data-bs-toggle="modal" data-bs-target="#galleryModal" onClick={action}/>
        </>
    )
}

export default GalleryImage