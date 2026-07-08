import ContactForm from "./ContactForm";
import backgroundImage from "../../assets/backgroundImage.png"

const About = () => {
    return (
        <section id="contact" className="flex justify-center items-center py-15 px-2.5"
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