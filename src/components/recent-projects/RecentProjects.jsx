import Container from '../Container';
import SectionTitle from '../section-title/SectionTitle';
import ProjectCard from '../project-card/ProjectCard';
import ButtonPrimary from '../ButtonPrimary';

const RecentProjects = () => {
  return (
    <section>
      <Container className="mt-40 flex flex-col space-y-16 p-8">
        <SectionTitle>Recent projects</SectionTitle>
        <div className="px-2 md:px-8 flex flex-col items-center space-y-16 lg:space-y-0 lg:flex-row lg:space-x-16 lg:items-stretch">
          <ProjectCard
            tags={['Tailwind', 'Sass', 'TypeScript']}
            heading={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at porta nisi. Vestibulum accumsan ex felis, ismod mi suscipit vel. In quis ultricies justo, ut pulvinar mauris.'
            }
          />
          <ProjectCard
            tags={['Tailwind', 'Sass', 'TypeScript', 'React.js']}
            heading={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at porta nisi. Vestibulum accumsan ex felis, ismod mi suscipit vel. In quis ultricies justo, ut pulvinar mauris.'
            }
          />
          <ProjectCard
            tags={['Tailwind', 'Sass', 'TypeScript']}
            heading={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at porta nisi. Vestibulum accumsan ex felis, ismod mi suscipit vel. In quis ultricies justo, ut pulvinar mauris.'
            }
          />
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
