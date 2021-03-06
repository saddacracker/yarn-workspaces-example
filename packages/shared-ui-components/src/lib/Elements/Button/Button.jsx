import { createUseStyles } from 'react-jss';
import { capitalize } from '@saddacracker/utils';

const useStyles = createUseStyles({
  container: {
    marginTop: 100,
    textAlign: 'center',
  }
})

const Button = () => {
  const classes = useStyles()
  return (
    <button className={classes.container}>
      { capitalize("button") }
    </button>
  );
}

export default Button;
