import React from "react";
import { connect } from "react-redux";
import { loginStart } from "../../store/auth/slice";
import { Timer } from "../timer/Timer";

class GreetComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      timer: null,
      timer2: null,
      timer3: null,
      timer4: null,
    };
    this.anotherproperty = "somevalue";
    this.headingRef = React.createRef();
  }

  updateAnotherProperty = () => {
    console.log(this.headingRef.current);
    this.anotherproperty = "some another value";
    // this.state = { timer: new Date().toISOString() }
    this.setState({
      timer: new Date().toISOString(),
      timer2: new Date().toISOString(),
    });
  }

  render() {
    console.log("render method");
    return (
      <>
        <h1 ref={this.headingRef}>Hello {this.props.name}</h1>
        <p>{this.props.isLoading ? 'Is Loading' : 'Not loading'}</p>
        <Timer timer={this.state.timer} />
        <button onClick={this.updateAnotherProperty}>Click Me!</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.auth.loading
})

const mapDispatchToProps = (dispatch) => ({
  loginStart: () => dispatch(loginStart()),
});

// const connectComp = connect(mapStateToProps, mapDispatchToProps);
// export const Greet = connectComp(GreetComponent);
export const Greet = connect(mapStateToProps, mapDispatchToProps)(GreetComponent);
// export const Greet = GreetComponent;