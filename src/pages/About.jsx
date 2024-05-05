import ButtonPrimary from '../components/ButtonPrimary';
import Container from '../components/Container';
import CvItem from '../components/cv/CvItem';
import CvSection from '../components/cv/CvSection';
import Skillset from '../components/skillset/Skillset';
import { useEffect } from 'react';
import useFetchData from '../hooks/fetch-data';
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = useFetchData('*[_type == "about"]');
  const info = data?.[0];

  return (
    <>
      <header className="bg-lightGray py-16">
        <Container className="flex flex-col lg:flex-row px-16 items-center space-x-0 lg:space-x-32 space-y-16 lg:space-y-0">
          <div className="flex flex-col space-y-6 max-w-3xl">
            <h1 className="font-semibold text-3xl md:text-4xl">
              A little about me
            </h1>
            <h2 className="font-light text-gray text-base md:text-xl">
              Explore this section to discover the projects that I've poured my
              skills and passion into, exemplifying the best of my front-end
              development and design expertise
            </h2>
          </div>
          <ButtonPrimary
            target="_blank"
            to="https://drive.google.com/file/d/1K_3gUEUn5A68jndEPwwoIO6JZFdYDEcJ/view?usp=sharing"
          >
            View&nbsp;CV
          </ButtonPrimary>
        </Container>
      </header>
      {info && (
        <>
          <CvSection sectionTitle={'Experience'}>
            {info.experience.map((element, idx) => {
              return (
                <CvItem
                  key={idx}
                  isPresent={element.isPresent}
                  period={element.period}
                  title={element.title}
                  organization={element.organization}
                  location={element.location}
                  description={element.description}
                />
              );
            })}
          </CvSection>

          <CvSection sectionTitle={'Education'}>
            {info.education.map((element, idx) => {
              return (
                <CvItem
                  key={idx}
                  isPresent={element.isPresent}
                  period={element.period}
                  title={element.title}
                  organization={element.organization}
                  location={element.location}
                  description={element.description}
                />
              );
            })}
          </CvSection>
        </>
      )}

      <section>
        <Skillset />
      </section>
    </>
  );
};

export default About;
