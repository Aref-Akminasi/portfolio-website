import EducationItem from './EducationItem';
import ExperienceItem from './ExperienceItem';
import LanguageItem from './LanguageItem';

const AboutCard = (props) => {
  return (
    <div className="p-12 bg-lightGray  w-full flex flex-col space-y-4">
      <h2 className="text-xl font-bold">{props.title}</h2>

      {props.title === 'Education' &&
        props.data.map((item) => (
          <EducationItem
            key={item._key}
            title={item.title}
            organization={item.organization}
            period={item.period}
          />
        ))}
      {props.title === 'Experience' &&
        props.data.map((item) => (
          <ExperienceItem
            key={item._key}
            title={item.title}
            organization={item.organization}
            period={item.period}
          />
        ))}

      {props.title === 'Languages' &&
        props.data.map((item) => (
          <LanguageItem key={item._key} title={item.title} text={item.text} />
        ))}
    </div>
  );
};

export default AboutCard;
