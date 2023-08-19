import Blogs from '@/components/homepagesection/Blogs';
import Courses from '@/components/homepagesection/Courses';
import CustomerReviews from '@/components/homepagesection/CustomerReviews';
import Features from '@/components/homepagesection/Features';
import Hero from '@/components/homepagesection/Hero';
import Services from '@/components/homepagesection/Services';
import Subscribe from '@/components/homepagesection/Subscribe';
import SuperQuality from '@/components/homepagesection/SuperQuality';

const Home = () => {
  return (
    <main className="relative">
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Features />
      </section>
      <section className="padding">
        <Courses />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <Blogs />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x w-full py-16 sm:py-32">
        <Subscribe />
      </section>
    </main>
  );
};
export default Home;
