import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

const PTDItem = ({ date, id, name, listSelection }) => {
  const classes = useStyles();
  const [visiility, showAndHide] = useState(true);

  return (
    <div
      className={classes.root}
      onMouseEnter={()=>showAndHide(!visiility)}
      onMouseLeave={()=>showAndHide(!visiility)}
      onClick={() => (listSelection( id, name, date ))}
      key={id}
      style={{ border: 'solid', margin: '5px' }}
    >
      <Typography variant='h1' gutterBottom>
        { name }
      </Typography>
      <div hidden={visiility}>X</div>
    </div>
  );
};

export default PTDItem;
