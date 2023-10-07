import PortfolioHeader from '../components/headers/PortfolioHeader';
import { useState, useEffect } from 'react';
import Container from '../components/Container';
import client from '../hooks/SanityClient';
import ProjectCard from '../components/project-card/ProjectCard';
import ProjectsContainer from '../components/ProjectsContainer';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let isMounted = true; // flag to check if component is still mounted

    const fetchData = async () => {
      try {
        const data = await client.fetch(
          '*[_type == "projects"]{ title, header, tags, slug, image { asset->{ url } }, liveDemoLink, githubLink, steps[]{ title, text, img{ asset->{ url } } } }'
        );

        if (isMounted) {
          // only update state if component is still mounted
          setProjects(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // component will unmount, set flag to false
    };
  }, []);

  return (
    <>
      <PortfolioHeader />
      <Container className="mt-40 flex flex-col space-y-16 p-8">
        <ProjectsContainer>
          {projects.length > 0 &&
            projects.map((project, idx) => {
              return <ProjectCard data={projects[idx]} key={project.title} />;
            })}
        </ProjectsContainer>
      </Container>
    </>
  );
};

export default Portfolio;
