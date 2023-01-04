import "../styles/home.css"

const FeaturesItem = ({ title, paragraph, image, alt}) => {
    return (
        <div className="feature-item">
            <img src={image} alt={alt} className="feature-icon"/>
            <h3 className="feature-item-title">{title}</h3>
            <p>{paragraph}</p>
        </div>
    )
}

export default FeaturesItem