import ButtonPrimary from "../ButtonPrimary";
import Tag from "./Tag";
import { Link } from "react-router-dom";

const ProjectCard = ({ data }) => {
  return (
    <div className="max-w-sm flex flex-col shadow-lg hover:shadow-xl duration-300">
      <Link to={"/project/" + data.slug.current}>
        <img src={data.image.asset.url} alt={data.title} />
      </Link>
      <div className="flex flex-col space-y-4 h-full justify-between  p-4">
        <div className="flex flex-col space-y-4 items-start">
          <div className="flex flex-wrap content-start">
            {data.tags.map((tag) => {
              return <Tag key={tag}>{tag}</Tag>;
            })}
          </div>
          <Link
            className="font-bold text-2xl md:text-3xl"
            to={"/project/" + data.slug.current}
          >
            {data.title}
          </Link>
          <p className="text-sm md:text-base">{data.header}</p>
        </div>
        <div className="flex justify-end">
          <ButtonPrimary
            size={"text-base"}
            to={"/project/" + data.slug.current}
          >
            Read more
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
