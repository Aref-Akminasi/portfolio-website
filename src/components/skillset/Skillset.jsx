import Container from '../Container';
import SkillItem from './SkillItem';
import FetchData from '../../hooks/FetchData';

const Skillset = () => {
  const data = FetchData(
    '*[_type == "skillset"]{ skills[]{ _key, title, "imageUrl": img.asset->url } }'
  );

  return (
    <section className="bg-lightGray mt-40">
      <Container className="flex flex-col items-center px-8 py-16 space-y-16">
        <h2 className="font-bold text-center	text-2xl">
          My current skillset, more to acquire!
        </h2>
        <div className="flex w-full justify-between flex-wrap items-stretch flex-col lg:flex-row space-y-4 lg:space-y-0">
          {data &&
            data[0].skills.map((skill) => (
              <SkillItem
                key={skill._key}
                title={skill.title}
                imageUrl={skill.imageUrl}
              />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Skillset;
