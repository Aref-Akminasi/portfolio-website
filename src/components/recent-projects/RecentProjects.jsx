import Container from '../Container';
import SectionTitle from '../section-title/SectionTitle';
import client from '../../hooks/SanityClient';
import ProjectCard from '../project-card/ProjectCard';
import ButtonPrimary from '../ButtonPrimary';
import { useState, useEffect } from 'react';

const RecentProjects = () => {
  const [projects, setProjects] = useState([]);
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
    <section>
      <Container className="mt-40 flex flex-col space-y-16 p-8">
        <SectionTitle>Recent projects</SectionTitle>
        <div className="px-2 md:px-8 flex flex-col items-center space-y-16 lg:space-y-0 lg:flex-row lg:space-x-16 lg:items-stretch">
          {projects.length > 0 && (
            <>
              <ProjectCard data={projects[0]} />
              <ProjectCard data={projects[1]} />
              <ProjectCard data={projects[2]} />
            </>
          )}
        </div>
        <div className="flex justify-center">
          <ButtonPrimary size={'text-xl'} to="portfolio">
            View all projects
          </ButtonPrimary>
        </div>
      </Container>
    </section>
  );
};

export default RecentProjects;
