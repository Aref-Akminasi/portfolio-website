import React from 'react';

const Container = (props) => {
  const classes = 'container mx-auto ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Container;
