import Line from './Line';

const SectionTitle = (props) => {
  return (
    <div className="flex items-center space-x-4">
      <Line />
      <h2 className="text-gray font-bold text-2xl md:text-4xl">
        {props.children}
      </h2>
    </div>
  );
};

export default SectionTitle;
