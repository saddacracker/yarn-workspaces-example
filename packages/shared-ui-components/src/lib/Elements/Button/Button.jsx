import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import styles from './Button.styles';
import { Box } from '@brcc-customer-portal/shared-ui-components';

const Button = (props) => {
  const { classes } = props;
  return (
    <Box
      variant="span"
      className={classNames({
        [classes.buttonTitle]: true
      })}
    >
      <button>Im a Button Brah</button>
    </Box>
  );
}

export default injectSheet(styles)(Button);