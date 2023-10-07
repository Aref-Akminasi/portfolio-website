const ProjectsContainer = (props) => {
  return (
    <div className="px-2 md:px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">
      {props.children}
    </div>
  );
};

export default ProjectsContainer;
