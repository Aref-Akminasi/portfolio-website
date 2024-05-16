import Container from "../Container";
import SkillItem from "./SkillItem";
import useFetchData from "../../hooks/fetch-data";

const Skillset = () => {
  const data = useFetchData(
    '*[_type == "skillset"]{ skills[]{ _key, title, "imageUrl": img.asset->url } }'
  );

  return (
    <section className="bg-lightGray mt-40">
      <Container className="flex flex-col items-center px-8 py-16 space-y-16">
        <h2 className="font-bold text-center	text-2xl">
          My current skillset, more to acquire!
        </h2>
        <div
          className={
            "grid grid-cols-2 lg:flex lg:w-full  lg:flex-wrap lg:justify-center gap-8 " +
            (data && data[0].skills.length % 2 == 0 ? "" : "odd-skill-set")
          }
        >
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
