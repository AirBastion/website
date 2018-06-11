import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import isNil from 'lodash/fp/isNil';
import styles from './ModalStyles';
import PDFViewer from './PDFViewer';


class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
    }
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleKeyUp = (e) => {
    const { onCloseRequest } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener('keyup', this.handleKeyUp, false);
      },
    };

    if (keys[e.keyCode]) { keys[e.keyCode](); }
  }

  handleOutsideClick = (e) => {
    const { onCloseRequest } = this.props;

    if (!isNil(this.modal)) {
      if (!this.modal.contains(e.target)) {
        onCloseRequest();
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    }
  }

  onUpdateHeight = (size) => {
    alert('updating');
  }


  render () {
    const {
      onCloseRequest,
      docPath,
      title,
      classes,
    } = this.props;


    return (
      <div className={classes.modalOverlay}>
        <div
          className={classes.modal}
          ref={node => (this.modal = node)}
        >
          <div className={classes.modalContent}>
            <PDFViewer filePath={docPath} title={title} onUpdateHeight={this.updateHeight} />
          </div>
        </div>

        <button
          type="button"
          className={classes.closeButton}
          onClick={onCloseRequest}
        />
      </div>
    );
  }
}

Modal.propTypes = {
  onCloseRequest: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  sheet: PropTypes.object,
  classes: PropTypes.object,
};

export default injectSheet(styles)(Modal);
