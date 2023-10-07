import ButtonPrimary from '../ButtonPrimary';
import Tag from './Tag';

const ProjectCard = ({ data }) => {
  return (
    <div className="max-w-sm flex flex-col space-y-4">
      <img className="" src={data.image.asset.url} />
      <div className="flex flex-col space-y-4 h-full justify-between">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-wrap content-start">
            {data.tags.map((tag) => {
              return <Tag key={tag}>{tag}</Tag>;
            })}
          </div>
          <h3 className="font-bold text-2xl md:text-3xl">{data.title}</h3>
          <p className="text-sm md:text-base">{data.header}</p>
        </div>
        <div className="flex justify-end">
          <ButtonPrimary size={'text-base'} to="/">
            Read more
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
