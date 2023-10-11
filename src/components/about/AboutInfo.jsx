import AboutCard from './AboutCard';
import Container from '../Container';
import useFetchData from '../../hooks/fetch-data';

const AboutInfo = () => {
  const data = useFetchData(
    '*[_type == "about"]{languages, experience, education}'
  );
  const info = data?.[0];
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-3 justify-items-center lg:justify-items-stretch px-8 xl:px-16 mt-40 gap-8">
      {info && (
        <>
          <AboutCard title={'Education'} data={info.education} />
          <AboutCard title={'Experience'} data={info.experience} />
          <AboutCard title={'Languages'} data={info.languages} />
        </>
      )}
    </Container>
  );
};

export default AboutInfo;
