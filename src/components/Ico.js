import React from "react";
import PropTypes from 'prop-types';
import { WidthProvider, Responsive } from "react-grid-layout";
import injectSheet, { ThemeProvider } from 'react-jss';

import styles from './IcoStyles';
import Modal from './Modal';
import PDFViewer from './PDFViewer';
import Copyright from './Copyright';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};

const docs = {
  missionPath: './components/Archives/Who.pdf',
  whoPath: './components/Archives/Who.pdf',
  risksPath: './components/Archives/Who.pdf',
  contractsPath: './components/Archives/Who.pdf',
  valuesPath: './components/Archives/Who.pdf',
  rolesPath: './components/Archives/Who.pdf'
}

/* Helper functions */
function generatePDFWith(path) {
  // this should be the children :D :D
  return <PDFViewer file={path} />
}

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

/* Functional components */

function Card(props){
  return (
    <div key={props.card.key} className={props.card.classes.card}  data-grid={{ w: 4, h: 6, x: 2, y: 6, static: true }}>
      <a href="#" onClick={(e, id) => props.card.handleClick('contracts')}>
        <span className={props.card.classes.childCard}>{props.card.name}</span>
      </a>
    </div>
  )
}

function generateDocView(id, state){
  var obj = generatePDFWith(id);
  console.log('registered event')
  this.setState((prevState, props) => {
    return {
      children: obj,
      showModal: !state.showModal
    }
  });
}


class ResponsiveLocalStorageLayout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
      showModal: false,
      docPath: '',
      children: null
    };
  }

  static get defaultProps() {
    return {
      className: "layout",
      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      rowHeight: 30
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('component received props')
    console.log(nextProps);
  }

  handleToggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  handleClick = (event, id) => {
    console.log('received event')
    console.log('the id is: ', id)
    switch (id) {
      case 'contracts':
        var obj = generatePDFWith(docs['contractPath']);
        console.log('registered event')
        this.setState((prevState, props) => {
          return {
            children: obj,
            showModal: true
          }
        });
        console.log(this.state.children);
        break;
      case 'who':
        var obj = generatePDFWith(docs['whoPath']);
        console.log(obj)
        this.setState((prevState, props) => {
          return {
            children: obj,
            showModal: true
          }
        });
        break;
      case 'role':
        var obj = generatePDFWith(docs['rolePath']);
        this.setState((prevState, props) => {
          return {
            children: obj,
            showModal: true
          }
        });
        break;
      case 'mission':
        var obj = generatePDFWith(docs['missionPath']);
        this.setState((prevState, props) => {
          return {
            children: obj,
            showModal: true
          }
        });
        break;
      case 'values':
        var obj = generatePDFWith(docs['valuesPath']);
        this.setState((prevState, props) => {
          return {
            children: obj,
            showModal: true
          }
        });
        break;
      case 'risks':
        var obj = generatePDFWith(docs['risksPath']);
        this.setState((prevState, props) => {
          return {
            children: obj,
            showModal: true
          }
        });
        break;
      default:
        return "Sorry! Docs haven't been able to load"
    }

    //this.setState(!this.state.showModal);
  }

  render() {
    const { classes, children } = this.props;
    var {showModal, obj } = this.state;
    return (
        <React.Fragment>
            <ResponsiveReactGridLayout
              className={classes.overlay, classes.black}
              cols={{ lg: 18, md: 16, sm: 14, xs: 10, xxs: 8 }}
              breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
              rowHeight={30}
              layouts={this.state.layouts}
            >

              <div key="4" className={classes.card}  data-grid={{ w: 4, h: 6, x: 2, y: 6, static: true }}>
                <a href="#" onClick={(e, id) => this.handleClick(e, 'contracts')}>
                  <span className={classes.childCard}>CONTRACTS</span>
                </a>
              </div>
              <div key="5" className={classes.card}  data-grid={{ w: 4, h: 6, x: 7, y: 6, static: true }}>
                <a href="#" onClick={(e, id) => this.handleClick(e, 'who')}>
                  <span className={classes.childCard}>WHO WE ARE</span>
                </a>
              </div>
              <div key="6" className={classes.card}  data-grid={{ w: 4, h: 6, x: 12, y: 6, static: true }}>
                <a href="#" onClick={(e, id) => this.handleClick(e, 'role')}>
                  <span className={classes.childCard}>YOUR ROLE</span>
                </a>
              </div>
              <div key="1" className={classes.card} data-grid={{ w: 4, h: 6, x: 2, y: 4, static: true }}>
                <a href="#" onClick={(e, id) => this.handleClick(e, 'mission')}>
                  <span className={classes.childCard}>OUR MISSION</span>
                </a>
              </div>
              <div key="2" className={classes.card} data-grid={{ w:4, h: 6, x: 7, y: 4, static: true }}>
                <a href="#" onClick={(e, id) => this.handleClick(e, 'values')}>
                  <span className={classes.childCard}>VALUES</span>
                </a>
              </div>
              <div key="3" className={classes.card}  data-grid={{ w: 4, h: 6, x: 12, y: 4, static: true }}>
                <a href="#" onClick={(e, id) => this.handleClick(e, 'risks')}>
                  <span className={classes.childCard}>RISKS</span>
                </a>
              </div>
            </ResponsiveReactGridLayout>
            {showModal &&
              <Modal onCloseRequest={() => this.handleToggleModal()}>
                {obj}
              </Modal>}

          <Copyright />
        </React.Fragment>
      );
  }
}

ResponsiveLocalStorageLayout.proptypes = {
  classes: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

const theme = {
  //: Background
}

const Boxes = injectSheet(styles)(ResponsiveLocalStorageLayout);

const BoxesSlide = () => (
  <ThemeProvider theme={theme}>
    <Boxes />
  </ThemeProvider>
)

export default BoxesSlide;
