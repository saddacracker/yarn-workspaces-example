const boxWrapper = (theme) => ({
  root: {
    padding: (props) => ((props.p || props.padding) ? theme.spacing((props.p || props.padding)) : null),
    margin: (props) => ((props.m || props.margin) ? theme.spacing((props.m || props.margin)) : null),
  },
  boxDisplay: {
    display: (props) => (props.display ? props.display : 'block'),
    '& > *': {
      width: '100%',
    },
  },
  boxMaxWidth: {
    maxWidth: (props) => (props.maxWidth ? props.maxWidth : 'none'),
  },
  boxFlexWrap: {
    flexWrap: 'wrap',
  },
  boxPositionRelative: {
    position: 'relative',
  },
  boxPositionAbsolute: {
    position: 'absolute',
  },
  boxPositionFixed: {
    position: 'fixed',
  },
  boxPositionStatic: {
    position: 'static',
  },
  boxPositionSticky: {
    position: 'sticky',
  },
  boxGridColumnLayout: {
    gridTemplateColumns: (props) => (props.boxGridColumnLayout ? `${props.boxGridColumnLayout}` : 'repeat(auto-fill, 1fr)'),
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(auto-fill,minmax(300px, 1fr)) !important',
    },
  },
  boxGap: {
    gap: (props) => (props.gap ? theme.spacing(props.gap) : theme.spacing(0.5)),
  },
  boxFullWidth: {
    width: '100%',
  },
  boxBgPrimary: {
    backgroundColor: theme.palette.primary.main,
  },
  boxBgSecondary: {
    backgroundColor: theme.palette.secondary.main,
  },
  boxBgTertiary: {
    backgroundColor: theme.palette.primary.light,
  },
  boxPaddingTop: {
    paddingTop: (props) => ((props.pt || props.paddingTop) ? theme.spacing((props.pt || props.paddingTop)) : 0),
  },
  boxPaddingBottom: {
    paddingBottom: (props) => ((props.pb || props.paddingBottom) ? theme.spacing((props.pb || props.paddingBottom)) : 0),
  },
  boxPaddingLeft: {
    paddingLeft: (props) => ((props.pl || props.paddingLeft) ? theme.spacing((props.pl || props.paddingLeft)) : 0),
  },
  boxPaddingRight: {
    paddingRight: (props) => ((props.pr || props.paddingRight) ? theme.spacing((props.pr || props.paddingRight)) : 0),
  },
  boxMarginTop: {
    marginTop: (props) => ((props.mt || props.marginTop) ? theme.spacing((props.mt || props.marginTop)) : 0),
  },
  boxMarginBottom: {
    marginBottom: (props) => ((props.mb || props.marginBottom) ? theme.spacing((props.mb || props.marginBottom)) : 0),
  },
  boxMarginLeft: {
    marginLeft: (props) => ((props.ml || props.marginLeft) ? theme.spacing((props.ml || props.marginLeft)) : 0),
  },
  boxMarginRight: {
    marginRight: (props) => ((props.mr || props.marginRight) ? theme.spacing((props.mr || props.marginRight)) : 0),
  },
  boxPosition: {
    bottom: (props) => (props.bottom ? props.bottom : 'auto'),
    top: (props) => (props.bottom ? props.bottom : 'auto'),
    left: (props) => (props.bottom ? props.bottom : 'auto'),
    right: (props) => (props.bottom ? props.bottom : 'auto'),
  },
  boxFlexGrow: {
    flexGrow: (props) => (props.flexGrow ? props.flexGrow : 0),
  },
  boxFlexDirection: {
    flexDirection: (props) => (props.flexDirection ? props.flexDirection : 'row'),
  },
  contain: {
    width: 'fit-content',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
});

export default boxWrapper;
