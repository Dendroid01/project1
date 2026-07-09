import InterestItem from './InterestItem.tsx';
import interestData from './InterestData.tsx';

const InterestList = () => {
    return (

        <section className="flex flex-col px-4 md:px-10 lg:px-0 mb-12 md:mb-19 gap-7 md:gap-12 lg:gap-11">
            <h2 className="text-subtitle md:text-h3 md:font-bold font-semibold">Interests</h2>
            <div className="flex flex-col lg:w-88.25 gap-6 md:gap-11">
                {interestData.map((interest) => (
                    <InterestItem
                        key={interest.id}
                        icon={interest.icon}
                        title={interest.title}
                        items={interest.items}
                    />
                ))}
            </div>
        </section>
    );
};

export default InterestList;