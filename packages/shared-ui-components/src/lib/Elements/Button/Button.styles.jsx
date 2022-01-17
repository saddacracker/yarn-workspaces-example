const button = (theme) => ({
  root: {
    border: 'none',
    display: 'flex',
    width: 'max-content',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textTransform: (props) => (props.uppercase ? 'uppercase' : 'none'),
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    textDecoration: 'none',
    fontFamily: theme.typography.button.fontFamily,
    fontWeight: theme.typography.button.fontWeight,
    letterSpacing: 1.25,
    margin: 0,
    boxSizing: 'border-box',
    position: 'relative',
    whiteSpace: 'nowrap',
  },
  iconPositionBefore: {
    flexDirection: 'row',
  },
  iconPositionAfter: {
    flexDirection: 'row-reverse',
  },
  iconPositionTop: {
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  iconPositionBottom: {
    flexWrap: 'wrap',
    flexDirection: 'column-reverse',
  },
  buttonFullWidth: {
    width: '100%',
  },
  buttonIcon: {
    marginRight: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
    marginBottom: (props) => (props.iconPosition === 'top' ? theme.spacing(0.5) : 0),
    marginTop: (props) => (props.iconPosition === 'bottom' ? theme.spacing(0.5) : 0),
  },
  buttonRounded: {
    borderRadius: (props) => (props.rounded ? theme.border(props.rounded) : 0),
  },
  buttonColorPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.secondary.main,
    },
  },
  buttonColorSecondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.secondary.dark,
    },
    '& span > img': {
      filter: 'brightness(0%)',
    },
  },
  buttonColorTertiary: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.dark,
    },
  },
  buttonColorBlack: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.common.black,
      backgroundColor: theme.palette.common.white,
    },
  },
  buttonColorWhite: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.common.black,
    },
    '& span > img': {
      filter: 'brightness(0%)',
    },
  },
  buttonColorNone: {
    backgroundColor: 'none',
    color: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.secondary.dark,
    },
  },
  buttonVariantBorderColorPrimary: {
    border: `2px solid ${theme.palette.primary.main}`,
    backgroundColor: 'transparent !important',
    color: theme.palette.primary.main,
    '&:hover': {
      border: `2px solid ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main,
    },
  },
  buttonVariantBorderColorSecondary: {
    border: `2px solid ${theme.palette.secondary.main}`,
    backgroundColor: 'transparent !important',
    color: theme.palette.secondary.main,
    '&:hover': {
      border: `2px solid ${theme.palette.common.white}`,
      color: theme.palette.common.white,
    },
    '& span > img': {
      filter: 'brightness(100%)',
    },
  },
  buttonVariantBorderColorTertiary: {
    border: `2px solid ${theme.palette.primary.light}`,
    backgroundColor: 'transparent !important',
    color: theme.palette.primary.light,
  },
  buttonVariantBorderColorBlack: {
    border: `2px solid ${theme.palette.common.black}`,
    backgroundColor: 'transparent !important',
    color: theme.palette.common.black,
  },
  buttonVariantBorderColorWhite: {
    border: `2px solid ${theme.palette.common.white}`,
    backgroundColor: 'transparent !important',
    color: theme.palette.common.white,
    '& span > img': {
      filter: 'brightness(100%)',
    },
  },
  buttonVariantBorderColorGrey: {
    border: `2px solid ${theme.palette.grey.main}`,
    backgroundColor: 'transparent !important',
    color: theme.palette.grey.main,
  },
  buttonVariantNoborderColorWhite: {
    border: 'none',
    backgroundColor: 'transparent !important',
    color: theme.palette.common.white,
    '& span > img': {
      filter: 'brightness(100%)',
    },
  },
  buttonLinkUnderline: {
    position: 'relative',
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: 0,
      left: 0,
      height: 2,
      width: '100%',
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.border(1),
    },
  },
  buttonSizeXsmall: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    fontSize: 11,
    '& > span > img': {
      // height: 22,
      marginTop: theme.spacing(-0.5),
      marginBottom: theme.spacing(-0.75)
    },
  },
  buttonSizeSmall: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    '& > span > img': {
      // height: 22,
      marginTop: theme.spacing(-1),
      marginBottom: theme.spacing(-0.75)
    },
  },
  buttonSizeRegular: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    '& > span > img': {
      // height: 22,
      marginTop: theme.spacing(-1.5),
      marginBottom: theme.spacing(-0.75)
    }
  },
  buttonSizeLarge: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    '& > span > img': {
      // height: 22,
      marginTop: theme.spacing(-2),
      marginBottom: theme.spacing(-0.75)
    }
  },
  buttonSizeXlarge: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    '& > span > img': {
      // height: 22,
      marginTop: theme.spacing(-3),
      marginBottom: theme.spacing(-0.75)
    }
  },
  buttonDisabled: {
    cursor: 'not-allowed',
    backgroundColor: 'transparent !important',
    color: theme.palette.error.main,
    PointerEvent: 'none',
    '&:hover': {
      backgroundColor: 'transparent !important',
      color: theme.palette.error.main,
    },
    border: `2px solid ${theme.palette.error.main}`,
    '& span > img': {
      filter: 'brightness(100%)',
    },
  },
  noPadding: {
    padding: 0,
  },
  loadingIcon: {
    animationName: '$rotation',
    animationDuration: '2s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    height: 22,
  },
  '@keyframes rotation': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(359deg)',
    },
  },
});

export default button;
