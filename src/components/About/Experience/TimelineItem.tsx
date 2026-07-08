interface TimelineItemProps {
    period: string;
    title: string;
    company: string;
}

const TimelineItem = ({ period, title, company }:TimelineItemProps) => {
    return (
        <div className="flex flex-row gap-1 pb-3 border-b border-grey-light">
            <div className="text-body font-regular text-black w-30 h-5">{period}</div>
            <div className="flex flex-col gap-2">
                <h3 className="text-subtitle-2 font-semibold">{title}</h3>
                <p className="text-body font-regular text-black">{company}</p>
            </div>
        </div>
    );
};

export default TimelineItem;