import React from "react";

const layout = props => (
  <React.Fragment>
    {/* A JSX comment */}
    {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
    <main>{props.children}</main>
  </React.Fragment>
);

export default layout;
