import React, { Component } from "react";

// NavBar is 'stateless functional component'
// Some developers prefer to use functions instead of classes for SFC (Stateless Functional Components)
// for example:
const NavBar = props => {
  // We can not use 'Lifecycle hooks' in stateless functional components
  // Because here we have single functional component that returns output of the component

  console.log("Navbar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="" className="navbar-brand">
        Navbar
        <span className="badge badge-pill badge-secondary ml-2">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};
export default NavBar;

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a href="" className="navbar-brand">
//           Navbar
//           <span className="badge badge-pill badge-secondary ml-2">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }
// export default NavBar;
