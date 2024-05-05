import Container from '../Container';
import SectionTitle from '../section-title/SectionTitle';
const CvSection = (props) => {
  return (
    <section>
      <Container className="p-8 flex flex-col gap-8 lg:p-24">
        <SectionTitle>{props.sectionTitle}</SectionTitle>
        {props.children}
      </Container>
    </section>
  );
};

export default CvSection;
