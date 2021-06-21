import React from "react";

const Like = props => {
  let movie = props.movie;
  let classes = "fa fa-heart";

  if (!movie.liked) classes += "-o";

  return (
    <i
      className={classes}
      onClick={props.onLikeToggle}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
