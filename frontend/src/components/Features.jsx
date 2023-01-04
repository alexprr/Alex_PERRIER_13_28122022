import FeaturesItem from "./FeaturesItem"

import { features } from "../utils/constants"

import "../styles/home.css"

const Features = () => {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {features.map(feature => (
                <FeaturesItem
                    key={feature.key}
                    title={feature.title} 
                    paragraph={feature.paragraph}
                    image={feature.image}
                    alt={feature.alt}
                />
            ))}
        </section>
    )
}

export default Features