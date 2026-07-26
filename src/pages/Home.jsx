import { lazy, Suspense } from 'react';
import MainLayout from '../layouts/MainLayout';

// Lazy loading major sections for code splitting & high performance
const Hero = lazy(() => import('../components/Hero/Hero'));
const Stats = lazy(() => import('../components/Stats/Stats'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs/WhyChooseUs'));
const Programs = lazy(() => import('../components/Programs/Programs'));
const Pricing = lazy(() => import('../components/Pricing/Pricing'));
const Trainers = lazy(() => import('../components/Trainer/Trainers'));
const Gallery = lazy(() => import('../components/Gallery/Gallery'));
const Testimonial = lazy(() => import('../components/Testimonial/Testimonial'));
const BMICalculator = lazy(() => import('../components/BMI/BMICalculator'));
const FAQ = lazy(() => import('../components/FAQ/FAQ'));
const Contact = lazy(() => import('../components/Contact/Contact'));

// Section Skeleton Fallback
const SectionFallback = () => (
  <div className="w-full py-24 bg-zinc-950 flex items-center justify-center">
    <div className="flex items-center gap-3">
      <div className="w-4 h-4 rounded-full bg-lime-400 animate-ping" />
      <span className="text-xs uppercase font-bold tracking-widest text-zinc-400">Loading APEX Experience...</span>
    </div>
  </div>
);

const Home = () => {
  return (
    <MainLayout>
      <Suspense fallback={<SectionFallback />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Stats />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <WhyChooseUs />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Programs />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Pricing />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Trainers />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Gallery />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Testimonial />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <BMICalculator />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </MainLayout>
  );
};

export default Home;
