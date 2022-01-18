import React from 'react';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    marginTop: 100,
    textAlign: 'center',
  }
})

const Button = (props) => {
  const classes = useStyles()
  return (
      <button className={classes.container}>
        Im a Button Brah
      </button>
  );
}

export default Button;
