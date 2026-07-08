interface InterestItemProps {
    icon: React.ReactNode;
    title: string;
    items: string[];
}


const InterestItem = ({ icon, title, items }: InterestItemProps) => {
        return (
            <div className="flex flex-row gap-2">
                <div className="size-11 rounded-full border-2 border-lavender flex items-center justify-center text-lavender shrink-0">
                    {icon}
                </div>

                <div className="flex flex-col gap-1">
                    <h3 className="text-subtitle-2 font-semibold text-black">
                        {title}
                    </h3>
                    <p className="text-body font-regular text-black">
                        {items.join(' | ')}
                    </p>
                </div>
            </div>
        );
    };

export default InterestItem;