import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FetchData from '../../hooks/FetchData';
import Container from '../../components/Container';
import NavBack from './NavBack';
import Tag from '../../components/project-card/Tag';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonSecondary from '../../components/ButtonSecondary';
import Step from './Step';

const ProjectDetails = () => {
  const { slug } = useParams();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const displayPlaceholder = setTimeout(() => {
      setLoaded(true);
      console.log('Log after 5 seconds');
    }, 1000);
    return () => {
      clearTimeout(displayPlaceholder);
    };
  });

  const data = FetchData(
    `*[_type == "projects" && slug.current == '${slug}']{title,header,slug,tags,image {asset->{url}},liveDemoLink,githubLink,steps[]{title,text,img{asset->{url}}}}`
  );
  let project = data?.[0];

  return project && loaded ? (
    <>
      <section className="bg-lightGray p-8 md:p-16">
        <Container className="px-4 md:px-16 flex flex-col md:flex-row space-y-16 md:space-y-0 items-start md:items-center space-x-0 md:space-x-32">
          <div className="max-w-3xl flex flex-col items-start space-y-6">
            <NavBack to="/portfolio">Portfolio</NavBack>
            <h1 className="font-semibold text-3xl md:text-4xl">
              {project.title}
            </h1>
            <h2 className="font-light text-base md:text-xl text-gray">
              {project.header}
            </h2>
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-8">
              {project.githubLink && (
                <ButtonSecondary
                  size="text-sm"
                  to={project.githubLink}
                  target="_blank"
                >
                  View project on GitHub
                </ButtonSecondary>
              )}
              <ButtonPrimary
                size="text-sm"
                to={project.liveDemoLink}
                target="_blank"
              >
                View project demo
              </ButtonPrimary>
            </div>
          </div>
          <div className="flex flex-col space-y-2 items-start">
            <h2 className="font-semibold text-xl">Built with</h2>
            {project.tags.map((tag) => {
              return <Tag key={tag}>{tag}</Tag>;
            })}
          </div>
        </Container>
      </section>

      <section className="p-8 lg:p-16 bg-lightGray mt-40 flex flex-col space-y-16">
        {project.steps.map((step) => {
          return (
            <Step
              key={step.title}
              title={step.title}
              text={step.text}
              imgUrl={step.img.asset.url}
            />
          );
        })}
      </section>
    </>
  ) : (
    <>
      <section className="bg-lightGray p-8 md:p-16">
        <Container className="px-4 md:px-16 flex flex-col md:flex-row space-y-16 md:space-y-0 items-start md:items-center space-x-0 md:space-x-32">
          <div className="w-full flex flex-col items-start space-y-6">
            <h1 className="font-semibold text-3xl md:text-4xl placeholder h-16 w-3/4 lg:w-1/3  rounded-full"></h1>
            <h2 className="font-light text-base md:text-xl text-gray placeholder h-8 w-1/2 lg:w-1/4 rounded-full"></h2>
          </div>
        </Container>
      </section>

      <section className="p-8 lg:p-16 bg-lightGray mt-40 flex flex-col space-y-16">
        <Container className="flex flex-col lg:flex-row items-center p-4 lg:px-16 lg:items-start justify-between space-x-4 space-y-4 lg:space-y-0">
          <div className="w-full lg:w-1/2 h-96 flex flex-col space-y-4 placeholder"></div>
          <div className="w-full lg:w-1/3 h-96 placeholder"></div>
        </Container>
        <Container className="flex flex-col lg:flex-row items-center p-4 lg:px-16 lg:items-start justify-between space-x-4 space-y-4 lg:space-y-0">
          <div className="w-full lg:w-1/2 h-96 flex flex-col space-y-4 placeholder"></div>
          <div className="w-full lg:w-1/3 h-96 placeholder"></div>
        </Container>
      </section>
    </>
  );
};

export default ProjectDetails;
