import React, { Component } from "react";

// SFC (Stateless Functional Component) are preferred for 'Controlled Components'
// If a component is controlled by its parent then it is a 'Controlled Components'

// Class component example
// class Like extends Component {
//   render() {
//     let movie = this.props.movie;
//     let classes = "fa fa-heart";

//     if (!movie.liked) classes += "-o";

//     return (
//       <i
//         className={classes}
//         onClick={this.props.onLikeToggle}
//         style={{ cursor: "pointer" }}
//         aria-hidden="true"
//       ></i>
//     );
//   }
// }
// export default Like;

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
