import React, {ReactDOM}  from 'react';
import PropTypes from 'prop-types';
import { WidthProvider, Responsive } from 'react-grid-layout';
import injectSheet, { ThemeProvider } from 'react-jss';
import styled from 'styled-components';
// archives
import Who from './Archives/Who.pdf';
import What from './Archives/What.pdf';
import Mission from './Archives/Mission.pdf';
import Relationship from './Archives/Relationship.pdf';
import Role from './Archives/Role.pdf';
import Values from './Archives/Values.pdf';
import Contracts from './Archives/Contracts.pdf';
// import Risks from './Archives/Risks.pdf';

import styles from './DocsStyles';
import Modal from '../Modal';
import PDFViewer from '../PDFViewer';
import Copyright from '../Copyright';

import './styles.css';

import 'bulma/css/bulma.css';

var docs = {
  missionPath: Mission,
  whoPath: Relationship,
  risksPath: What,
  contractsPath: Contracts,
  valuesPath: Values,
  rolesPath: Role
};

const Title = ({ className, children }) => {
  if (className) {
    return <h1 className={className}>{children}</h1>;
  }
  return <h1>{children}</h1>;
};

const StyledTitle = styled(Title)`
  color: white;
  font-size: 2.3em;
  text-align: center;
  line-height: 1.4em;
  font-weight: 600;
`;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/* Functional components */
//
// function Card(props){
//   return (
//     <div key={props.card.key} className={props.card.classes.card}  data-grid={{ w: 4, h: 6, x: 2, y: 6, static: true }}>
//       <a href="#" onClick={(e, id) => props.card.handleClick('contracts')}>
//         <span className={props.card.classes.childCard}>{props.card.name}</span>
//       </a>
//     </div>
//   )
// }

class BoxesSlide extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      docPath: '',
      title: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  handleToggleModal = event => {
    this.setState({ showModal: !this.state.showModal });
    // document.getElementsByClassName("aws-sld__bullets")[0].style.display = 'flex';
  };

  handleClick = (event, id) => {
    switch (id) {
      case 'contracts':
        this.setState((prevState, props) => {
          return {
            docPath: docs.contractsPath,
            title: capitalizeFirstLetter(id),
            showModal: true
          };
        });
        document.getElementsByClassName("aws-sld__bullets")[0].style.display = 'none';
        break;
      case 'who':
        id = capitalizeFirstLetter(id) + ' We Are';
        this.setState((prevState, props) => {
          return {
            docPath: docs.whoPath,
            title: id,
            showModal: true
          };
        });
        document.getElementsByClassName("aws-sld__bullets")[0].style.display = 'none';
        break;
      case 'role':
        id = 'Your ' + capitalizeFirstLetter(id);
        this.setState((prevState, props) => {
          return {
            docPath: docs.rolesPath,
            title: id,
            showModal: true
          };
        });
        document.getElementsByClassName("aws-sld__bullets")[0].style.display = 'none';
        break;
      case 'mission':
        id = 'Our ' + capitalizeFirstLetter(id);
        this.setState((prevState, props) => {
          return {
            docPath: docs.missionPath,
            title: id,
            showModal: true
          };
        });
        document.getElementsByClassName("aws-sld__bullets")[0].style.display = 'none';
        break;
      case 'values':
        this.setState((prevState, props) => {
          return {
            docPath: docs.valuesPath,
            title: capitalizeFirstLetter(id),
            showModal: true
          };
        });
        document.getElementsByClassName("aws-sld__bullets")[0].style.display = 'none';
        break;
      case 'risks':
        this.setState((prevState, props) => {
          return {
            docPath: docs.risksPath,
            title: capitalizeFirstLetter(id),
            showModal: true
          };
        });
        document.getElementsByClassName("aws-sld__bullets")[0].style.display = 'none';
        break;
      default:
        return "Sorry! Docs haven't been able to load";
    }

    //this.setState(!this.state.showModal);
  };

  render() {
    const { classes } = this.props;
    var { showModal, title, docPath } = this.state;
    return (
      <React.Fragment>
        <section className="section">
            <div className="columns is-variable is-centered mg-top">
              <div className="column">
                <StyledTitle>
                  Everything you need to know in just one single place
                </StyledTitle>
              </div>
            </div>
        </section>

        <section className="section">
          <div className="columns is-multiline is-desktop is-centered is-vcentered">
            <div className="column is-4">
              <div key="4" className="card card--modifier">
                <div className="card-content">
                  <a
                    href="#"
                    className="card--link"
                    onClick={(e, id) => this.handleClick(e, 'contracts')}
                  >
                    <span className="card--child">CONTRACTS</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div key="5" className="card card--modifier">
                <div className="card-content">
                  <a
                    href="#"
                    className="card--link"
                    onClick={(e, id) => this.handleClick(e, 'who')}
                  >
                    <span className="card--child">WHO WE ARE</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div key="6" className="card card--modifier">
                <div className="card-content">
                  <a
                    href="#"
                    className="card--link"
                    onClick={(e, id) => this.handleClick(e, 'role')}
                  >
                    <span className="card--child">YOUR ROLE</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="column is-4 side">
              <div key="1" className="card card--modifier">
                <div className="card-content">
                  <a
                    href="#"
                    className="card--link"
                    onClick={(e, id) => this.handleClick(e, 'mission')}
                  >
                    <span className="card--child">OUR MISSION</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div key="2" className="card card--modifier">
                <div className="card-content">
                  <a
                    href="#"
                    className="card--link"
                    onClick={(e, id) => this.handleClick(e, 'values')}
                  >
                    <span className="card--child">VALUES</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div key="3" className="card card--modifier">
                <div className="card-content">
                  <a
                    href="#"
                    className="card--link"
                    onClick={(e, id) => this.handleClick(e, 'risks')}
                  >
                    <span className="card--child">RISKS</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {showModal && (
          <Modal
            onCloseRequest={() => this.handleToggleModal()}
            title={title}
            docPath={docPath}
          />
        )}

        {/* <section className="section no-padding">
          <div className="container">
            <div className="columns is-variable is-centered mg-top">
              <div className="column">
                <Copyright />
              </div>
            </div>
          </div>
        </section> */}
        <br />
      </React.Fragment>
    );
  }
}

BoxesSlide.proptypes = {
  classes: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  isMobile: PropTypes.bool.isRequired
};

const theme = {
  //: Background
};

const Boxes = injectSheet(styles)(BoxesSlide);

export default Boxes;
