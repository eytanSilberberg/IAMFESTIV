import { Hero } from '../cmps/home/hero'
import { FeaturedFestival } from '../cmps/home/FeaturedFestival';
export const Home = () => {
    return <section className="home main-layout">
        <Hero />
        <FeaturedFestival />
    </section>
};
