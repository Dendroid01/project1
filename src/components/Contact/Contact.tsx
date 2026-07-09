import ContactForm from "./ContactForm";
import backgroundImage from "../../assets/backgroundImage.png"

const About = () => {
    return (
        <section id="contact" className="flex h-188.25 md:h-177 justify-center items-center"
             style={{
                 backgroundImage: `url(${backgroundImage})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
             }}>
            <ContactForm/>
        </section>
    )
        ;
};

export default About;