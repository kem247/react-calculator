import React from "react";
import { Container } from "react-bootstrap";
import KeyPadRow from "./KeyPadRow";
import Button from "./Button";

const KeyPad = (props) => (
  <section className="keypad">
    <KeyPadRow>
      <Button type="primary" onButtonPress={props.onButtonPress}>
        C
      </Button>
      <Button type="primary" onButtonPress={props.onButtonPress}>
        &larr;
      </Button>
      <Button type="operator" onButtonPress={props.onButtonPress}>
        %
      </Button>
      <Button type="operator" onButtonPress={props.onButtonPress}>
        /
      </Button>
    </KeyPadRow>

    <KeyPadRow>
      <Button onButtonPress={props.onButtonPress}>9</Button>
      <Button onButtonPress={props.onButtonPress}>8</Button>
      <Button onButtonPress={props.onButtonPress}>7</Button>
      <Button type="operator" onButtonPress={props.onButtonPress}>
        *
      </Button>
    </KeyPadRow>

    <KeyPadRow>
      <Button onButtonPress={props.onButtonPress}>6</Button>
      <Button onButtonPress={props.onButtonPress}>5</Button>
      <Button onButtonPress={props.onButtonPress}>4</Button>
      <Button type="operator" onButtonPress={props.onButtonPress}>
        -
      </Button>
    </KeyPadRow>

    <KeyPadRow>
      <Button onButtonPress={props.onButtonPress}>3</Button>
      <Button onButtonPress={props.onButtonPress}>2</Button>
      <Button onButtonPress={props.onButtonPress}>1</Button>
      <Button type="operator" onButtonPress={props.onButtonPress}>
        +
      </Button>
    </KeyPadRow>

    <KeyPadRow>
      <Button onButtonPress={props.onButtonPress}>0</Button>
      <Button onButtonPress={props.onButtonPress}>.</Button>
      <Button onButtonPress={props.onButtonPress}>=</Button>
    </KeyPadRow>
  </section>
);

export default KeyPad;
