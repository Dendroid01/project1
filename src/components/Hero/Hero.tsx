import BgTablet from '../../assets/bg-tablet.png';
import BgDesktop from '../../assets/bg-desktop.png';
import BgMobile from '../../assets/bg-mobile.png';
import Button from '../mobileButton';

const Hero = () => {
    return (
        <section id="main" className="flex min-h-118.75 flex-col pl-4 md:pl-10 lg:pl-21.25 mb-12 md:mb-4 lg:mb-25">
            <div className="flex flex-col gap-1 mb-9 lg:mb-23">
                <h1 className="text-h3 md:text-h1-desktop font-bold text-black text-justify">
                    Hey, I'm Nick
                </h1>
                <p className="text-body md:text-body-desktop font-regular text-grey-dark text-justify">
                    Frontend developer
                </p>
            </div>

            <div className="flex flex-col relative h-94.5 md:h-63 lg:h-98 gap-6 md:gap-4 lg:gap-6 ">
                <hr className="w-6 border-2 border-lavender m-0"/>
                <p className="text-body md:text-body-desktop w-72.5 md:w-111.25 md:mb-6 lg:mb-8.5 md:h-22.5 font-regular text-grey-dark mt">
                    Help you to create high-quality digital products that your clients will love and let your
                    business thrive
                </p>
                <Button>Get in touch</Button>

                <picture className="absolute right-0 bottom-0 z-10">
                    <source media="(min-width: 1024px)" srcSet={BgDesktop} />
                    <source media="(min-width: 768px)" srcSet={BgTablet} />
                    <img
                        src={BgMobile}
                        alt="Nick"
                        className="object-cover"
                    />
                </picture>
            </div>
        </section>
    );
};

export default Hero;