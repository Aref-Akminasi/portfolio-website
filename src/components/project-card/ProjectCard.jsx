import ButtonPrimary from '../ButtonPrimary';
import Tag from './Tag';

const ProjectCard = (props) => {
  return (
    <div className="max-w-sm flex flex-col space-y-4">
      <img
        className=""
        src="https://cdn.sanity.io/images/esqrof9r/production/9826e61a2977269fa79b74811194255588416124-1000x1000.png"
      />
      <div className="flex flex-col space-y-4 h-full justify-between">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-wrap content-start">
            {props.tags.map((tag) => {
              return <Tag key={tag}>{tag}</Tag>;
            })}
          </div>
          <h3 className="font-bold text-2xl md:text-3xl">UI Elements</h3>
          <p className="text-sm md:text-base">{props.heading}</p>
        </div>
        <div className="flex justify-end">
          <ButtonPrimary size={'text-base'} to={'portfolio'}>
            Read more
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
