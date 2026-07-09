import React from 'react';

interface InterestItemProps {
    icon: React.ReactNode;
    title: string;
    items: string[];
}

const InterestItem = ({ icon, title, items }: InterestItemProps) => {
    return (
        <div className="flex flex-row gap-2 md:gap-4">
            <div className="size-11 md:size-15 rounded-full border-2 border-lavender flex items-center justify-center text-lavender shrink-0">
                <span className="size-5 md:size-6 flex items-center justify-center">
                    {icon}
                </span>
            </div>

            <div className="flex flex-col gap-1 md:gap-2">
                <h3 className="text-subtitle-2 md:text-subtitle-desktop font-semibold text-black">
                    {title}
                </h3>
                <p className="text-body md:text-body-desktop font-regular text-black">
                    {items.join(' | ')}
                </p>
            </div>
        </div>
    );
};

export default InterestItem;