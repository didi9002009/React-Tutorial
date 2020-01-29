import React from "react";

const withComponent = (WrappedComponent, incrementNumber) => {
  class withCounter extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0
      };
    }
    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return withCounter;
};
export default withComponent;
