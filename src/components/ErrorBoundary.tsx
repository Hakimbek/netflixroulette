import React, { Component } from "react";
import Error from "./common/Error/Error";

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? (
      <Error>Something went wrong</Error>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
