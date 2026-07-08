import experienceData from "./experienceData";
import TimelineItem from "./TimelineItem";
import Button from '../../mobileButton';

const EducationExperience = () => {

    return (
        <section className="flex flex-col px-4 mb-25 gap-7">
            <h2 className="text-subtitle font-semibold">Education & Experience</h2>

            <div className="flex flex-col gap-3 mb-5">
                {experienceData.map((item) => (
                    <TimelineItem
                        key={item.id}
                        period={item.period}
                        title={item.title}
                        company={item.company}
                    />
                ))}
            </div>
            <Button>Get in Touch</Button>
        </section>
    )
        ;
};

export default EducationExperience