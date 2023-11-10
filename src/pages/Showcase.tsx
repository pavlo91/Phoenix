import Footer from 'components/footers/Footer';
import AdvanceFeatures from 'components/modules/showcase/AdvanceFeatures';
import Cta from 'components/modules/showcase/Cta';
import Demos from 'components/modules/showcase/Demos';
import EssentialFeatures from 'components/modules/showcase/EssentialFeatures';
import Faq from 'components/modules/showcase/Faq';
import Feature from 'components/modules/showcase/Feature';
import FeatureFigma from 'components/modules/showcase/FeatureFigma';
import Header from 'components/modules/showcase/Header';
import ImportantApplications from 'components/modules/showcase/ImportantApplications';
import NecessaryPages from 'components/modules/showcase/NecessaryPages';
import PreFooter from 'components/modules/showcase/PreFooter';
import ShowcaseNavbar from 'components/navbars/ShowcaseNavbar';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import { useAppContext } from 'providers/AppProvider';
import { useEffect, useMemo } from 'react';

const Showcase = () => {
  useSettingsMountEffect({
    showSettingPanelButton: false
  });
  const {
    config: { theme },
    setConfig
  } = useAppContext();

  const mountTheme = useMemo(() => {
    return theme;
  }, [theme]);

  useEffect(() => {
    setConfig({
      theme: 'light'
    });
    return () => {
      setConfig({
        theme: mountTheme
      });
    };
  }, []);

  return (
    <>
      <ShowcaseNavbar />
      <Header />
      <Demos />
      <AdvanceFeatures />
      <EssentialFeatures />
      <Feature />
      <ImportantApplications />
      <NecessaryPages />
      <FeatureFigma />
      <Faq />
      <Cta />
      <PreFooter />
      <Footer className="d-flex justify-content-center bg-soft border-0" />
    </>
  );
};

export default Showcase;
