import Container from '../Container';
import SectionTitle from '../section-title/SectionTitle';
import AboutMeCard from './AboutMeCard';

const AboutMe = () => {
  return (
    <section>
      <Container className="p-4 lg:p-8 mt-40 flex flex-col space-y-16">
        <SectionTitle>About Me</SectionTitle>
        <div className="flex flex-col space-x-0 space-y-16 items-center lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0 lg:justify-center">
          <AboutMeCard
            icon={
              <svg
                width="60"
                height="48"
                viewBox="0 0 60 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.8149 0.117549C35.2215 -0.341728 33.5624 0.586201 33.1032 2.17961L21.1057 44.1707C20.6464 45.7642 21.5743 47.4232 23.1678 47.8825C24.7612 48.3417 26.4202 47.4138 26.8795 45.8204L38.8769 3.82926C39.3362 2.23585 38.4083 0.576827 36.8149 0.117549ZM44.3695 11.3745C43.1979 12.5462 43.1979 14.4489 44.3695 15.6205L52.7396 24L44.3602 32.3795C43.1885 33.5511 43.1885 35.4538 44.3602 36.6255C45.5318 37.7971 47.4345 37.7971 48.6061 36.6255L59.1039 26.1277C60.2755 24.9561 60.2755 23.0533 59.1039 21.8817L48.6061 11.3839C47.4345 10.2123 45.5318 10.2123 44.3602 11.3839L44.3695 11.3745ZM15.6225 11.3745C14.4509 10.2029 12.5481 10.2029 11.3765 11.3745L0.878721 21.8723C-0.292907 23.044 -0.292907 24.9467 0.878721 26.1183L11.3765 36.6161C12.5481 37.7877 14.4509 37.7877 15.6225 36.6161C16.7941 35.4445 16.7941 33.5417 15.6225 32.3701L7.243 24L15.6225 15.6205C16.7941 14.4489 16.7941 12.5462 15.6225 11.3745Z"
                  fill="#FFDC26"
                />
              </svg>
            }
            title={'Front-end  development'}
            paragraph={
              "My passion is front-end development. During coding, I find myself and my logical thinking skills come to the forefront. Since college, I've been involved with front-end and afterward, I taught myself a lot."
            }
          />
          <AboutMeCard
            icon={
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.0395 1.75973L29.4971 6.30217L41.6978 18.5029L46.2403 13.9605C48.5866 11.6142 48.5866 7.81319 46.2403 5.46688L42.5425 1.75973C40.1962 -0.586576 36.3952 -0.586576 34.0489 1.75973H34.0395ZM27.376 8.42322L5.49908 30.3095C4.52302 31.2856 3.80974 32.4963 3.41557 33.8196L0.0932016 45.11C-0.141429 45.9077 0.0744312 46.7618 0.656314 47.3437C1.2382 47.9256 2.09225 48.1414 2.88061 47.9162L14.171 44.5938C15.4943 44.1996 16.705 43.4864 17.6811 42.5103L39.5768 20.624L27.376 8.42322Z"
                  fill="#FFDC26"
                />
              </svg>
            }
            title={'UX | UI Design'}
            paragraph={
              'During college, I gained experience in UX/UI design as my education focused a lot on the aspect of users and UX research. I have carried out multiple UX projects during my internships.'
            }
          />
          <AboutMeCard
            icon={
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48 3C48 13.65 40.0687 22.4531 29.7937 23.8125C29.1281 18.8062 26.925 14.2875 23.6719 10.7531C27.2625 4.34062 34.125 0 42 0H45C46.6594 0 48 1.34062 48 3ZM0 9C0 7.34062 1.34062 6 3 6H6C17.5969 6 27 15.4031 27 27V30V45C27 46.6594 25.6594 48 24 48C22.3406 48 21 46.6594 21 45V30C9.40313 30 0 20.5969 0 9Z"
                  fill="#FFDC26"
                />
              </svg>
            }
            title={'Personal development'}
            paragraph={
              'I really enjoy learning new things, whether they are new tools or skills that can significantly improve my workflow and efficiency. Gaining a new skill can often elevate the quality of my products to the next level'
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
