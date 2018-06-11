import React from "react";
import PropTypes from 'prop-types';
import { WidthProvider, Responsive } from "react-grid-layout";
import injectSheet, { ThemeProvider } from 'react-jss';

// archives
import Who from './Archives/Who.pdf';
import What from './Archives/What.pdf';
import Mission from './Archives/Mission.pdf';
import Relationship from './Archives/Relationship.pdf';
import Role from './Archives/Role.pdf';
import Values from './Archives/Values.pdf';
import Contracts from './Archives/Contracts.pdf';
// import Risks from './Archives/Risks.pdf';

import styles from './IcoStyles';
import Modal from './Modal';
import PDFViewer from './PDFViewer';
import Copyright from './Copyright';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};

var docs = {
  missionPath: Mission,
  whoPath: Relationship,
  risksPath: What,
  contractsPath: Contracts,
  valuesPath: Values,
  rolesPath: Role,
};

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

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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


class ResponsiveLocalStorageLayout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
      showModal: false,
      docPath: '',
      title: ''
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

  handleToggleModal = (event) => {
    this.setState({ showModal: !this.state.showModal });
  }

  handleClick = (event, id) => {
    switch (id) {
      case 'contracts':
        this.setState((prevState, props) => {
          return {
            docPath: docs.contractsPath,
            title: capitalizeFirstLetter(id),
            showModal: true
          }
        });
        break;
      case 'who':
        id = capitalizeFirstLetter(id) + " We Are";
        this.setState((prevState, props) => {
          return {
            docPath: docs.whoPath,
            title: id,
            showModal: true
          }
        });
        break;
      case 'role':
        id = "Your " + capitalizeFirstLetter(id);
        this.setState((prevState, props) => {
          return {
            docPath: docs.rolesPath,
            title: id,
            showModal: true
          }
        });
        break;
      case 'mission':
        id = "Our " + capitalizeFirstLetter(id);
        this.setState((prevState, props) => {
          return {
            docPath: docs.missionPath,
            title: id,
            showModal: true
          }
        });
        break;
      case 'values':
        this.setState((prevState, props) => {
          return {
            docPath: docs.valuesPath,
            title: capitalizeFirstLetter(id),
            showModal: true
          }
        });
        break;
      case 'risks':
        this.setState((prevState, props) => {
          return {
            docPath: docs.risksPath,
            title: capitalizeFirstLetter(id),
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
    const { classes } = this.props;
    var {showModal, title, docPath } = this.state;
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
              <Modal onCloseRequest={() => this.handleToggleModal()} title={title} docPath={docPath}>
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
