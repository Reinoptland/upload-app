import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import CircularProgress from 'material-ui/Progress/CircularProgress'
import deepOrange from 'material-ui/colors/orange';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

function UploadAnim(props) {
  const { classes } = props;
  return (
    <div>
      <CircularProgress className={classes.progress} style={{ color: deepOrange[500] }} thickness={4} />
    </div>
  );
}

UploadAnim.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadAnim);