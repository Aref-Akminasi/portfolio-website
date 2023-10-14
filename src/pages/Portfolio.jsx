import { useEffect } from 'react';
import Container from '../components/Container';
import useFetchData from '../hooks/fetch-data';
import ProjectCard from '../components/project-card/ProjectCard';
import ProjectsContainer from '../components/ProjectsContainer';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = useFetchData(
    '*[_type == "portfolio"]{ projects[]->{ title, header, tags, slug, image { asset->{ url } }, liveDemoLink, githubLink, steps[]{ title, text, img{ asset->{ url } } } } | order(projects[].order asc) }'
  );

  let projects = data?.[0].projects;

  return (
    <>
      <Container className="p-16">
        <div className="flex flex-col space-y-6 max-w-3xl">
          <h1 className="font-semibold  text-3xl md:text-4xl">
            Featured Projects I'm Proud Of
          </h1>
          <h2 className="font-light text-gray text-base md:text-xl">
            Explore this section to discover the projects that I've poured my
            skills and passion into, exemplifying the best of my front-end
            development and design expertise
          </h2>
        </div>
      </Container>
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
