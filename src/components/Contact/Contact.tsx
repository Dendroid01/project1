import ContactForm from "./ContactForm";
import backgroundImage from "../../assets/backgroundImage.png"

const About = () => {
    return (
        <div className="flex justify-center items-center py-15 px-2.5"
             style={{
                 backgroundImage: `url(${backgroundImage})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
             }}>
            <ContactForm/>
        </div>
    )
        ;
};

export default About;