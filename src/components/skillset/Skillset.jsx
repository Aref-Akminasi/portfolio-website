import Container from '../Container';
import client from '../../hooks/SanityClient';
import { useState, useEffect } from 'react';
import SkillItem from './SkillItem';

const Skillset = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    let isMounted = true; // flag to check if component is still mounted

    const fetchData = async () => {
      try {
        const data = await client.fetch(
          '*[_type == "skillset"]{ skills[]{ _key, title, "imageUrl": img.asset->url } }'
        );

        if (isMounted) {
          // only update state if component is still mounted
          setSkills(data[0].skills);
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
    <section className="bg-lightGray mt-40">
      <Container className="flex flex-col items-center px-8 py-16 space-y-16">
        <h2 className="font-bold text-center	text-2xl">
          My current skillset, more to acquire!
        </h2>
        <div className="flex w-full justify-between flex-wrap items-stretch flex-col lg:flex-row space-y-4 lg:space-y-0">
          {skills.length > 0 &&
            skills.map((skill) => (
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
