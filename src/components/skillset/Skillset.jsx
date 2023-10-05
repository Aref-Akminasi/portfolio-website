import Container from '../Container';
import SkillItemPlaceHolder from './SkillItemPlaceholder';
import client from '../../hooks/SanityClient';
import { useState, useEffect } from 'react';

const Skillset = () => {
  const [skills, setSkills] = useState([]);
  const [loaded, setLoaded] = useState();
  useEffect(() => {
    client
      .fetch(
        '*[_type == "skillset"]{ skills[]{ title, "imageUrl": img.asset->url } }'
      )
      .then((document) => {
        if (document && document.length > 0) {
          setSkills(document[0].skills);
        }
      })
      .catch((err) => {
        console.error('error occurred!', err);
      });
  }, []);

  const imgLoadHandler = () => {
    setLoaded((prev) => prev + 1);
  };

  return (
    <section className="bg-lightGray mt-40">
      <Container className="flex flex-col items-center px-8 py-16 space-y-16">
        <h2 className="font-bold text-center	text-2xl">
          My current skillset, more to acquire!
        </h2>
        <div className="flex w-full justify-between flex-wrap items-stretch flex-col lg:flex-row space-y-4 lg:space-y-0">
          {skills.length > 0 ? (
            skills.map((skill) => (
              <div
                key={skill.title}
                className="flex flex-col items-center space-y-4 justify-between"
              >
                <img
                  src={skill.imageUrl}
                  alt={skill.title}
                  className="skill h-20"
                  onLoad={imgLoadHandler}
                />
                <h4 className="text-base text-gray">{skill.title}</h4>
              </div>
            ))
          ) : (
            <>
              <SkillItemPlaceHolder />
              <SkillItemPlaceHolder />
              <SkillItemPlaceHolder />
              <SkillItemPlaceHolder />
              <SkillItemPlaceHolder />
              <SkillItemPlaceHolder />
              <SkillItemPlaceHolder />
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Skillset;
