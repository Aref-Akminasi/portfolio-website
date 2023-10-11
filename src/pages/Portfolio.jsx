import PortfolioHeader from '../components/headers/PortfolioHeader';
import { useEffect } from 'react';
import Container from '../components/Container';
import useFetchData from '../hooks/fetch-data';
import ProjectCard from '../components/project-card/ProjectCard';
import ProjectsContainer from '../components/ProjectsContainer';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = useFetchData(
    '*[_type == "projects"]{ title, header, tags, slug, image { asset->{ url } }, liveDemoLink, githubLink, steps[]{ title, text, img{ asset->{ url } } } }'
  );

  return (
    <>
      <PortfolioHeader />
      <Container className="mt-40 flex flex-col space-y-16 p-8">
        <ProjectsContainer>
          {projects &&
            projects.map((project, idx) => {
              return <ProjectCard data={projects[idx]} key={project.title} />;
            })}
        </ProjectsContainer>
      </Container>
    </>
  );
};

export default Portfolio;
