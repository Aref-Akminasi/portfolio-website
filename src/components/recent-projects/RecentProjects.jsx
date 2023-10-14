import Container from '../Container';
import SectionTitle from '../section-title/SectionTitle';
import ProjectCard from '../project-card/ProjectCard';
import ButtonPrimary from '../ButtonPrimary';
import ProjectsContainer from '../ProjectsContainer';
import useFetchData from '../../hooks/fetch-data';

const RecentProjects = () => {
  const data = useFetchData(
    '*[_type == "portfolio"]{ projects[]->{ title, header, tags, slug, image { asset->{ url } }, liveDemoLink, githubLink, steps[]{ title, text, img{ asset->{ url } } } } | order(projects[].order asc) }'
  );

  let projects = data?.[0].projects;
  return (
    <section>
      <Container className="mt-40 flex flex-col space-y-16 p-8">
        <SectionTitle>Recent projects</SectionTitle>
        <ProjectsContainer>
          {projects && (
            <>
              <ProjectCard data={projects[0]} />
              <ProjectCard data={projects[1]} />
              <ProjectCard data={projects[2]} />
            </>
          )}
        </ProjectsContainer>
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
