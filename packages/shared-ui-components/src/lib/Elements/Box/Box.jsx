import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import injectSheet from 'react-jss';
// import capitalize from '../../../../../utils/src/lib/capitalize';
// import styles from './Box.styles';

const variantMapping = {
  div: 'div',
  span: 'span',
  section: 'section',
  article: 'article',
  main: 'main',
  code: 'code',
  aside: 'aside',
  header: 'header',
  footer: 'footer',
  nav: 'nav',
};

const Box = forwardRef((props, ref) => {
  const {
    classes,
    className,
    variant,
    bgcolor,
    children,
    gap,
    flexWrap,
    boxGridColumnLayout,
    maxWidth,
    position,
    flexGrow,
    fullWidth,
    flexDirection,
    padding,
    p,
    paddingTop,
    pt,
    paddingBottom,
    pb,
    paddingLeft,
    pl,
    paddingRight,
    pr,
    margin,
    m,
    marginRight,
    mr,
    marginLeft,
    ml,
    marginBottom,
    mb,
    marginTop,
    mt,
    contain,
    justifyContent,
    alignItems,
    display,
    ...rest
  } = props;

  const BoxComponent = variant ? variantMapping[variant] : 'div';
  return (
    <BoxComponent
      // className={classNames({
      //   [classes.root]: true,
      //   [classes.boxDisplay]: display,
      //   [classes[`boxBg${capitalize(bgcolor)}`]]: bgcolor,
      //   [classes[`boxPosition${capitalize(position)}`]]: position,
      //   [classes.boxPosition]: position,
      //   [classes.boxFullWidth]: fullWidth,
      //   [classes.boxGap]: gap,
      //   [classes.boxFlexWrap]: flexWrap,
      //   [classes.boxFlexGrow]: flexGrow,
      //   [classes.boxFlexDirection]: flexDirection,
      //   [classes.boxGridColumnLayout]: boxGridColumnLayout,
      //   [classes.boxMaxWidth]: maxWidth,
      //   [classes.boxPaddingTop]: paddingTop || pt,
      //   [classes.boxPaddingBottom]: paddingBottom || pb,
      //   [classes.boxPaddingLeft]: paddingLeft || pl,
      //   [classes.boxPaddingRight]: paddingRight || pr,
      //   [classes.boxMarginTop]: marginTop || mt,
      //   [classes.boxMarginBottom]: marginBottom || mb,
      //   [classes.boxMarginLeft]: marginLeft || ml,
      //   [classes.boxMarginRight]: marginRight || mr,
      //   [classes.contain]: contain,
      //   [classes[`justifyContent${capitalize(justifyContent)}`]]: justifyContent,
      //   [classes[`alignItems${capitalize(alignItems)}`]]: alignItems,
      //   [className]: className,
      // })}
      ref={ref}
      {...rest}
    >
      {children}
    </BoxComponent>
  );
});

Box.defaultProps = {
  className: '',
  children: '',
  bgcolor: '',
  variant: 'div',
  gap: 0,
  flexWrap: false,
  boxGridColumnLayout: '',
  position: '',
  fullWidth: false,
  flexGrow: 0,
  flexDirection: '',
  justifyContent: '',
  alignItems: '',
  padding: null,
  p: null,
  paddingTop: null,
  pt: null,
  paddingBottom: null,
  pb: null,
  paddingLeft: null,
  pl: null,
  paddingRight: null,
  pr: null,
  margin: null,
  m: null,
  marginRight: null,
  mr: null,
  marginLeft: null,
  ml: null,
  marginBottom: null,
  mb: null,
  marginTop: null,
  mt: null,
  maxWidth: null,
  contain: false,
  display: '',
};

Box.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  className: PropTypes.string,
  variant: PropTypes.string,
  bgcolor: PropTypes.string,
  gap: PropTypes.number,
  flexWrap: PropTypes.bool,
  boxGridColumnLayout: PropTypes.string,
  position: PropTypes.string,
  fullWidth: PropTypes.bool,
  flexGrow: PropTypes.number,
  flexDirection: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  p: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  paddingTop: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  pt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  paddingBottom: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  pb: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  paddingLeft: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  pl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  paddingRight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  pr: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  margin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  m: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  marginRight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  mr: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  marginLeft: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  ml: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  marginBottom: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  mb: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  marginTop: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  mt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  maxWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  contain: PropTypes.bool,
  display: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
};

// export default injectSheet(styles)(Box);
export default Box;
