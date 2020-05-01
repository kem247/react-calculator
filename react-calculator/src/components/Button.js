import React from "react";

const Button = (props) => {
  const classes = ["btn"];

  if (typeof props !== "undefined" && typeof props.type !== "undefined")
    classes.push("btn-" + props.type);
  return (
    <Button className={classes.join(" ")} onClick={props.onButtonPress}>
      {props.children}
    </Button>
  );
};
export default Button;
