import Blob from './Blob';
import photoMobile from '../../assets/photo.png';
import Button from '../mobileButton';

const Hero = () => {
    return (
            <section id="main" className="flex flex-col px-4 mb-12">
                <div className="flex flex-col gap-1 mb-9">
                    <h1 className="text-h3 font-bold text-black text-justify">
                        Hey, I'm Nick
                    </h1>
                    <p className="text-body font-regular text-grey-dark text-justify">
                        Frontend developer
                    </p>
                </div>

                <div className="flex flex-col gap-6 mb-6">
                    <hr className="w-6 border border-lavender m-0"/>
                    <p className="text-body font-regular text-grey-dark mt">
                        Help you to create high-quality digital products that your clients will love and let your
                        business thrive
                    </p>
                </div>
                <div className="relative h-66.25 overflow-hidden -mr-4">
                    <Button>Get in touch</Button>
                    <Blob />
                    <img
                        src={photoMobile}
                        alt="Nick"
                        className="absolute object-cover left-17.5 -top-5 z-10 w-[537.82px] h-[345.82px]"
                    />
                </div>
            </section>
    )
        ;
};

export default Hero;