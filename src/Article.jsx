import React, {useState} from 'react';
import LikeButton from './LikeButton';

const Article = (props) => {
  const [isPublished, togglePublished] = useState(true)

  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態 : </label>
      <input id="check" type="checkbox" checked = {isPublished} onClick={() => togglePublished(!isPublished)}/>
      <LikeButton />
    </React.Fragment>
  );
};

export default Article;
