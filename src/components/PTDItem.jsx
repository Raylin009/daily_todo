import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Btn from '@material-ui/core/Button';
import Moment from 'moment';
// import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
// import Moment = require('moment');

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  botton: {
    margin: theme.spacing(1),
  },
}));

const PTDItem = ({ date, id, name, listSelection }) => {
  const classes = useStyles();

  const [visiility, showAndHide] = useState(true);
  // const week = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  const week = Moment(date).format('dddd');
  const dateMonth = Moment(date).format('MMM Do');
  return (
    <div className={classes.botton}>
      <Btn
        variant="outlined"
        className={classes.button}
        fullWidth={true}
        onClick={() => (listSelection(id, name, date))}
      >
        <Typography variant='h4' gutterBottom>
          {week}
        </Typography>
        <Typography variant='h6' gutterBottom>
          {dateMonth}
        </Typography>
        {/* {console.log(dateName)} */}
      </Btn>
    </div>

    // <Card>
    //   <div
    //     className={classes.root}
    //     onMouseEnter={()=>showAndHide(!visiility)}
    //     onMouseLeave={()=>showAndHide(!visiility)}
    //     onClick={() => (listSelection( id, name, date ))}
    //     key={id}
    //     style={{ border: 'solid', margin: '5px' }}
    //   >
    //     <Typography variant='h3' gutterBottom>
    //       { name }
    //     </Typography>
    //     {/* <div hidden={visiility}>X</div> */}
    //   </div>
    // </Card>
  );
};

export default PTDItem;
