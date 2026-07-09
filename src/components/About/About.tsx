import backgroundImage from '../../assets/backgroundImage.png';
import aboutImage from '../../assets/photo-about.png';
import InterestList from "./Interest/InterestList";
import EducationExperience from "./Experience/EducationExperience";
import Button from "../mobileButton.tsx";

const About = () => {
    return (
        <>
            <section id="about" className="flex flex-col px-4 mb-6 md:mb-10 lg:mb-14 lg:pl-21.25 gap-9 md:gap-20 md:px-10">
                <h2 className="text-subtitle font-semibold text-black md:text-h2 md:font-bold">About me</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-9 md:gap-11 lg:gap-39.5">
                    <div
                        className="size-72.5 lg:size-103 rounded-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
                        style={{backgroundImage: `url(${backgroundImage})`}}>
                        <img src={aboutImage} alt="Nick Richardson"
                             className="size-[256.21px] lg:size-91 bg-grey-light rounded-full"/>
                    </div>
                    <div className="flex flex-col md:w-88 lg:w-134.25 gap-6 mb-6 md:py-6 lg:py-23">
                        <hr className="w-6 border border-lavender m-0"/>
                        <p className="text-body font-regular md:text-body-desktop text-grey-dark mt md:mb-5 lg:mb-9.5">
                            <span className="text-subtitle-2 font-semibold text-black md:text-subtitle-desktop">Nick Richardson</span> -
                            specialist
                            in Frontend
                            development. Clear code is my passion.
                            <br/> Solving issues through negotiations
                        </p>
                        <Button className="hidden md:flex">Get in touch</Button>
                    </div>
                </div>
            </section>
            <div className="flex flex-col lg:flex-row lg:px-21.25 lg:gap-54.25">
                <InterestList/>
                <EducationExperience/>
            </div>
        </>
    )
        ;
};

export default About;