import React from "react";
import PropTypes from 'prop-types';
import { WidthProvider, Responsive } from "react-grid-layout";
import styles from './IcoStyles';
import injectSheet from 'react-jss';
import Modal from './Modal';
import PDFViewer from './PDFViewer';

var whoPath = './components/Archives/Who.pdf'
const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};

const docs = {
  mission: {},
  who: { },
  risks: {},
  contracts: {},
  values: {},
  role: {}
}

/**
 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
 */
class ResponsiveLocalStorageLayout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
      showModal: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  static get defaultProps() {
    return {
      className: "layout",
      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      rowHeight: 30
    };
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  handleClick(event, what) {
    return <Modal onCloseRequest={() => this.handleToggleModal()} children={<PDFViewer file="" />} />
  }

  render() {
    const { classes } = this.props;
    return (
        <div>
      <div className={classes.overlay}>
        <ResponsiveReactGridLayout
          className="layout white"
          cols={{ lg: 18, md: 16, sm: 14, xs: 10, xxs: 8 }}
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          rowHeight={30}
          layouts={this.state.layouts}
        >
          <div key="4" className={classes.card}  data-grid={{ w: 4, h: 6, x: 2, y: 6, static: true }}>
            <a href="" onClick={this.handleClick('contracts')}>
              <span className={classes.childCard}>CONTRACTS</span>
            </a>
          </div>
          <div key="5" className={classes.card}  data-grid={{ w: 4, h: 6, x: 7, y: 6, static: true }}>
            <a href="" onClick={this.handleClick('who')}>
              <span className={classes.childCard}>WHO WE ARE</span>
            </a>
          </div>
          <div key="6" className={classes.card}  data-grid={{ w: 4, h: 6, x: 12, y: 6, static: true }}>
            <a href="" onClick={this.handleClick('role')}>
              <span className={classes.childCard}>YOUR ROLE</span>
            </a>
          </div>
          <div key="1" className={classes.card} data-grid={{ w: 4, h: 6, x: 2, y: 4, static: true }}>
            <a href="" onClick={this.handleClick('mission')}>
              <span className={classes.childCard}>OUR MISSION</span>
            </a>
          </div>
          <div key="2" className={classes.card} data-grid={{ w:4, h: 6, x: 7, y: 4, static: true }}>
            <a href="" onClick={this.handleClick('values')}>
              <span className={classes.childCard}>VALUES</span>
            </a>
          </div>
          <div key="3" className={classes.card}  data-grid={{ w: 4, h: 6, x: 12, y: 4, static: true }}>
            <a href="" onClick={this.handleClick('risks')}>
              <span className={classes.childCard}>RISKS</span>
            </a>
          </div>
        </ResponsiveReactGridLayout>
        <Modal onCloseRequest={() => this.handleToggleModal()} children={<PDFViewer file={whoPath} scale={5}/>}/>

      </div>
    </div>
    );
  }
}

ResponsiveLocalStorageLayout.proptypes = {
  classes: PropTypes.object,
}

export default injectSheet(styles)(ResponsiveLocalStorageLayout);

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}
