import Container from '../Container';
import SkillItemPlaceHolder from './SkillItemPlaceholder';

const Skillset = () => {
  return (
    <section className="bg-lightGray mt-40">
      <Container className="flex flex-col items-center px-8 py-16 space-y-16">
        <h2 className="font-bold text-center	text-2xl">
          My current skillset, more to acquire!
        </h2>
        <div className="flex w-full justify-between flex-wrap">
          <SkillItemPlaceHolder />
          <SkillItemPlaceHolder />
          <SkillItemPlaceHolder />
          <SkillItemPlaceHolder />
          <SkillItemPlaceHolder />
          <SkillItemPlaceHolder />
          <SkillItemPlaceHolder />
        </div>
      </Container>
    </section>
  );
};

export default Skillset;
