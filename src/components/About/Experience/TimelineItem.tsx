interface TimelineItemProps {
    period: string;
    title: string;
    company: string;
    mdTitle?: string;
    mdCompany?: string;
}

const TimelineItem = ({ period, title, company, mdTitle, mdCompany }: TimelineItemProps) => {
    return (
        <div className="flex flex-row gap-1 md:gap-4 pb-3 border-b border-grey-light md:w-178.5 lg:w-135 md:h-25">
            <div className="text-body md:text-body-desktop font-regular text-black w-30 md:w-38 h-5 md:h-7.5">{period}</div>
            <div className="flex flex-col gap-2">
                <h3 className="text-subtitle-2 md:text-subtitle-desktop font-semibold">
                    <span className="md:hidden">{title}</span>
                    <span className="hidden md:inline">{mdTitle || title}</span>
                </h3>
                <p className="text-body md:text-body-desktop font-regular text-black">
                    <span className="md:hidden">{company}</span>
                    <span className="hidden md:inline">{mdCompany || company}</span>
                </p>
            </div>
        </div>
    );
};

export default TimelineItem;