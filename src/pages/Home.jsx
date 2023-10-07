import Welcome from '../components/welcome/Welcome';
import AboutMe from '../components/about-me/AboutMe';
import Skillset from '../components/skillset/Skillset';
import RecentProjects from '../components/recent-projects/RecentProjects';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Welcome />
      <AboutMe />
      <Skillset />
      <RecentProjects />
    </>
  );
};

export default Home;
