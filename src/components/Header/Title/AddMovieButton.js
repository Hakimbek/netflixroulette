import React, { Component } from "react";
import styles from "./title.module.css";

const Modal = React.lazy(() => import("../../Modal/Modal"));

class AddMovieButton extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
  }

  openModal = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <>
        <button onClick={this.openModal} className={styles.add_button}>
          + Add Movie
        </button>
        <Modal
          title={"ADD MOVIE"}
          isClicked={this.state.toggle}
          toggleFunc={this.openModal}
        />
      </>
    );
  }
}

export default AddMovieButton;
