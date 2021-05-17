import React, { Component } from "react";
import styled from "@emotion/styled";
import { Button } from "antd";
import { connect } from "react-redux";
import { add, set } from "./../../store/counter/action";

interface Prop {
  counter: number;
  add: () => object;
  set: (counter: number) => object;
}
class TestPage extends Component<Prop, {}> {
  render() {
    const { counter, add, set } = this.props;
    return (
      <Container>
        <p>{counter}</p>
        <Button onClick={add}>Add</Button>
        <Button onClick={() => set(0)}>set 0</Button>
      </Container>
    );
  }
}

export default connect(
  // mapStateProps
  (state: { counter: number }) => ({ counter: state.counter }),
  // mapDispatchProps
  {
    add,
    set,
  }
)(TestPage);

const Container = styled.div`
  height: 100vh;
`;
