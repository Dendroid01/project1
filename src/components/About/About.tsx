import backgroundImage from '../../assets/backgroundImage.png';
import aboutImage from '../../assets/photo-about.png';

const About = () => {
    return (
        <>
            <section className="flex flex-col px-4 mb-12 gap-9">
                <h2 className="text-subtitle font-semibold">About me</h2>
                <div className="flex flex-col items-center gap-9">
                    <div
                        className="size-72.5 rounded-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
                        style={{backgroundImage: `url(${backgroundImage})`}}>
                        <img src={aboutImage} alt="Nick Richardson"
                             className="size-[256.21px] bg-grey-light rounded-full"/>
                    </div>
                    <div className="flex flex-col gap-6 mb-6">
                        <hr className="w-6 border border-lavender m-0"/>
                        <p className="text-body font-regular text-grey-dark mt text-justify">
                            <span className="text-subtitle-2 font-semibold text-black ">Nick Richardson</span> -
                            specialist
                            in Frontend
                            development. Clear code is my passion. Solving issues
                            through negotiations
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
        ;
};

export default About;