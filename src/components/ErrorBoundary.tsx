import React, { Component } from "react";

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
      <h2>Something went wrong but it is okay</h2>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
