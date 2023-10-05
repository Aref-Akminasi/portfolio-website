import Container from '../components/Container';
import Welcome from '../components/welcome/Welcome';
import AboutMe from '../components/about-me/AboutMe';
import Skillset from '../components/skillset/Skillset';

const Home = () => {
  return (
    <>
      <Welcome />
      <AboutMe />
      <Skillset />
    </>
  );
};

export default Home;
