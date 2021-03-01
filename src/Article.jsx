import React from 'react';

const Article = (props) => {

  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <p>順番は{props.order}です。</p>
    </React.Fragment>
  );
};

export default Article;
