import React from 'react';

const Article = (props) => {

  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態 : </label>
      <input id="check" type="checkbox" checked = {props.isPublished} onClick={() => props.toggle()}/>
      
    </React.Fragment>
  );
};

export default Article;
