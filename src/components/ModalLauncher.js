import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './ModalLauncherStyles';
import Modal from './Modal';

class ModalLauncher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
    };
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { buttonLabel, children, classes } = this.props;
    const { showModal } = this.state;

    return (
      <div>
        <button
          type="button"
          className={classes.modalButton}
          onClick={() => this.handleToggleModal()}
        >
          {buttonLabel}
        </button>

        {showModal &&
          <Modal onCloseRequest={() => this.handleToggleModal()}>
            {children}
          </Modal>}
      </div>
    );
  }
}

ModalLauncher.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  classes: PropTypes.object,
};

export default injectSheet(styles)(ModalLauncher);
