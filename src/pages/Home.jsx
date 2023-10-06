import Welcome from '../components/welcome/Welcome';
import AboutMe from '../components/about-me/AboutMe';
import Skillset from '../components/skillset/Skillset';
import RecentProjects from '../components/recent-projects/RecentProjects';

const Home = () => {
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
