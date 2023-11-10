import AddressSection from 'components/modules/landing/default/address/AddressSection';
import Blog from 'components/modules/landing/default/blog/Blog';
import Brands from 'components/modules/landing/default/Brands';
import Cta from 'components/modules/landing/default/Cta';
import Features from 'components/modules/landing/default/features/Features';
import Footer from 'components/modules/landing/default/Footer';
import FunFacts from 'components/modules/landing/default/fun-facts/FunFacts';
import Gallery from 'components/modules/landing/default/Gallery';
import HeroHeader from 'components/modules/landing/default/HeroHeader';
import Pricing from 'components/modules/landing/default/pricing/Pricing';
import TeamSection from 'components/modules/landing/default/team/TeamSection';
import Testimonial from 'components/modules/landing/default/testimonial/Testimonial';
import DefaultLandingNavbar from 'components/navbars/default-landing-navbar/DefaultLandingNavbar';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';

const Default = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true
  });

  return (
    <div className="bg-white">
      <DefaultLandingNavbar />
      <HeroHeader />
      <Brands />
      <Features />
      <Testimonial />
      <FunFacts />
      <Gallery />
      <Pricing />
      <Blog />
      <AddressSection />
      <TeamSection />
      <Cta />
      <Footer />
    </div>
  );
};

export default Default;
