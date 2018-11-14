import image from './cool-background.png';

export default {
  // Prevent page scrolling when modal is open
  '@global': {
    body: {
      overflow: 'hidden'
    }
  },

  // Modal wrapper
  overlay: {
    background: 'white',
    color: 'white',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    padding: '1rem',
    backgroundImage: 'rgba(0, 0, 0, 0.7)',
    zIndex: '9999',
    opacity: 1,
    animation: 'show .5s ease',
    overflowX: 'hidden',
    overflowY: 'auto'
  },

  card: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: '3rem',
    fontFamily: 'Impact',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },

  childCard: {
    alignItem: 'center',
    flexBasis: 'auto'
  },
  black: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
    // backgroundImage: 'url("img/cool-background.png")'
  }
};
