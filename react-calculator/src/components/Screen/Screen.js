import React from "react";
import Result from "./Result";
import ComputationScreen from "./ComputationScreen";

const Screen = (props) => (
  <section className="screen">
    <Result>{props.result}</Result>
    <ComputationScreen>{props.equation}</ComputationScreen>
  </section>
);

export default Screen;
