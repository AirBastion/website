export default {
  // Prevent page scrolling when modal is open
  '@global': {
    'body': {
      
    },
  },

  // Modal wrapper
  modalOverlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    padding: '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: '9999',
    opacity: 1,
    animation: 'show .5s ease',
    overflowX: 'hidden',
    overflowY: 'auto',
  },

  // Fade in open animation
  '@keyframes show': {
    '0%': {
      display: 'none',
      opacity: 0,
    },
    '1%': {
      display: 'flex',
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },

  // Modal itself
  modal: {
    width: '80% !important',
    height: '40rem',
    backgroundColor: '#fff',
    boxShadow: [0, 0, '0.625rem', 'rgba(0, 0, 0, 0.2)'],

    '@media (min-width: 576px)': {
      width: '32rem',
    },
  },

  // Close button
  closeButton: {
    position: 'fixed',
    top: 0,
    right: 0,
    background: '#fff',
    width: '2.5rem',
    height: '2.5rem',
    padding: 0,
    border: 0,
    cursor: 'pointer',
    outline: 0,
    boxShadow: [0, 0, '0.625rem', 'rgba(0, 0, 0, 0.2)'],

    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '1.2rem',
      left: '0.25rem',
      width: '2rem',
      height: '0.1rem',
      backgroundColor: '#888',
    },

    '&:before': {
      transform: 'rotate(45deg)',
    },

    '&:after': {
      transform: 'rotate(-45deg)',
    },

    '&:hover:before, &:hover:after': {
      backgroundColor: '#444',
    },
  },

  leftSide: {
    padding: '2% !important',
  },
  rightSide: {
    color: '#3B5957',
    backgroundColor: 'rgb(238, 240, 243, 0.4)',
    textShadow: '0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7)',
    borderRadius: '5px',
    boxSizing: 'border-box',
    msBoxShadow: 'inset 0 1px 2px rgba(0,0,0,.18)',
    oBoxShadow: 'inset 0 1px 2px rgba(0,0,0,.18)',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,.18)',
    webkitFontSmoothing: 'antialiased',
    border: '1px solid #bbb',
    marginTop: '2% !important',
    marginBottom: '10px',
    height: '550px',
    padding: '0'
  },
  applyStyleButton: {
    marginRight: '10px',
  },
  buttonGroupRight: {
    float: 'right',
    marginLeft: '5px',
    right: '0',
    bottom: '0',
  },
  imageContainer: {
    margin: '0',
    padding: '0',
    left: '0',
    top: '0',
    bottom: '0',
    right: '0'
  },
  ProgressBar: {
    margin: '0 150px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '50%',
  },
  loadingTag: {
    marginTop: '3px'
  }

};
