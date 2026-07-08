import InterestItem from './InterestItem';
import InterestData from './InterestData';

const InterestList = () => {
    return (

        <section className="flex flex-col px-4 mb-12 gap-7">
            <h2 className="text-subtitle font-semibold">Interests</h2>
            <div className="flex flex-col gap-6">
                {InterestData.map((interest) => (
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