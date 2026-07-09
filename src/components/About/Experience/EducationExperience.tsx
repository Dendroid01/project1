import experienceData from "./experienceData";
import TimelineItem from "./TimelineItem";
import Button from '../../mobileButton';

const EducationExperience = () => {

    return (
        <section className="flex flex-col px-4 md:px-10 lg:px-0 mb-25 md:mb-20 gap-7 md:gap-11">
            <h2 className="text-subtitle md:text-h3 font-semibold md:font-bold">Education & Experience</h2>

            <div className="flex flex-col gap-3 md:gap-6 mb-5">
                {experienceData.map((item) => (
                    <TimelineItem
                        key={item.id}
                        period={item.period}
                        title={item.title}
                        company={item.company}
                        mdTitle={item.mdTitle}
                        mdCompany={item.mdCompany}
                    />
                ))}
            </div>
            <Button className="md:hidden">Get in Touch</Button>
        </section>
    )
        ;
};

export default EducationExperience