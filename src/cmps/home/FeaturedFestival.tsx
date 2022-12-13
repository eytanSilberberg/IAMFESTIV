import { WhatsHot } from "./featured-festival/whats-hot";

const links = [
    { title: 'whats-hot', text: 'What\'s Hot' },
    { title: 'for you', text: 'For you' },
    { title: 'countries', text: 'Countries' },
    { title: 'featured', text: 'Featured' },
    { title: 'genres', text: 'Genres' },
    { title: 'activities', text: 'Activities' },
    { title: 'get-inspired', text: 'Get Inspired' },
]


export const FeaturedFestival = () => {
    return (
        <section className='featured-festival full main-layout'>

            <div className='nav-wrapper full main-layout'>
                <nav>
                    {links.map((link, idx) => {
                        return <a key={idx} href={link.title}>{link.text}</a>
                    })}
                </nav>
            </div>
            <div className="whats-hot full">
                    <WhatsHot />
            </div>
        </section>

    );
};
