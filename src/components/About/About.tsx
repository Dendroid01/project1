import backgroundImage from '../../assets/backgroundImage.png';
import aboutImage from '../../assets/photo-about.png';
import InterestList from "./Interest/InterestList";
import EducationExperience from "./Experience/EducationExperience";
import Button from "../mobileButton.tsx";

const About = () => {
    return (
        <>
            <section id="about" className="flex flex-col px-4 mb-6 md:mb-10 gap-9 md:gap-20 md:px-10">
                <h2 className="text-subtitle font-semibold text-black md:text-h2 md:font-bold">About me</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-9 md:gap-11">
                    <div
                        className="size-72.5 rounded-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
                        style={{backgroundImage: `url(${backgroundImage})`}}>
                        <img src={aboutImage} alt="Nick Richardson"
                             className="size-[256.21px] bg-grey-light rounded-full"/>
                    </div>
                    <div className="flex flex-col md:w-88 gap-6 mb-6 md:py-6">
                        <hr className="w-6 border border-lavender m-0"/>
                        <p className="text-body font-regular md:text-body-desktop text-grey-dark mt md:mb-5">
                            <span className="text-subtitle-2 font-semibold text-black md:text-subtitle-desktop">Nick Richardson</span> -
                            specialist
                            in Frontend
                            development. Clear code is my passion. Solving issues
                            through negotiations
                        </p>
                        <Button className="hidden md:flex">Get in touch</Button>
                    </div>
                </div>
            </section>
            <InterestList/>
            <EducationExperience/>
        </>
    )
        ;
};

export default About;