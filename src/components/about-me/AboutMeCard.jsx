const AboutMeCard = (props) => {
  return (
    <div className="max-w-sm bg-lightGray p-12 flex flex-col space-y-8 shadow-md">
      {props.icon}
      <h3 className="font-bold text-xl md:text-2xl">{props.title}</h3>
      <p className="font-regular text-base">{props.paragraph}</p>
    </div>
  );
};

export default AboutMeCard;
