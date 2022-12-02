import React, { Component } from "react";
import styles from "./setting.module.css";
import dots from "../../../../../../assets/image/dots.png";
import close from "../../../../../../assets/image/close.png";

const Modal = React.lazy(() => import("../../../../Modal/Modal"));
const DeleteModal = React.lazy(() => import("../../../../Modal/DeleteModal"));

class MovieSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settingToggle: true,
      editMovieToggle: false,
      deleteMovieToggle: false,
    };
  }

  clickSettings = () => {
    this.setState({ ...this.state, settingToggle: !this.state.settingToggle });
  };

  editMovie = () => {
    this.setState({
      ...this.state,
      editMovieToggle: !this.state.editMovieToggle,
    });
  };

  deleteMovie = () => {
    this.setState({
      ...this.state,
      deleteMovieToggle: !this.state.deleteMovieToggle,
    });
  };

  render() {
    {
      return this.state.settingToggle ? (
        <button
          onClick={this.clickSettings}
          className={styles.movie_settings__dots_button}
        >
          <img src={dots} alt="dots" />
        </button>
      ) : (
        <>
          <div className={styles.movie_settings__edit_delete}>
            <button
              onClick={this.clickSettings}
              className={styles.movie_settings__close}
            >
              <img src={close} alt="close" />
            </button>
            <button
              onClick={this.editMovie}
              className={styles.movie_settings__buttons}
            >
              Edit
            </button>
            <button
              onClick={this.deleteMovie}
              className={styles.movie_settings__buttons}
            >
              Delete
            </button>
          </div>
          <Modal
            title={"EDIT MOVIE"}
            isClicked={this.state.editMovieToggle}
            toggleFunc={this.editMovie}
          />
          <DeleteModal
            isClicked={this.state.deleteMovieToggle}
            toggleFunc={this.deleteMovie}
          />
        </>
      );
    }
  }
}

export default MovieSetting;
