import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  Link,
  TextField,
} from '@material-ui/core';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles((theme) => ({
  cancel: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.primary.main,
  },
  forgot: {
    margin: theme.spacing(3),
  },
}));

function LogIn() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyle();
  return (
    <div>
      <Box mr={3}>
        <Button color="inherit" variant="outlined" onClick={handleClickOpen}>
          Log In
        </Button>
        <Dialog open={open} onClose={handleClose} maxWidth="xs">
          <DialogTitle id="form-dialog-title" style={{ textAlign: 'center' }}>
            Log In
          </DialogTitle>
          <DialogContent>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          </DialogContent>

          <DialogActions>
            <Button
              onClick={handleClose}
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.cancel}
            >
              Cancel
            </Button>
            <Button
              onClick={handleClose}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log in
            </Button>
          </DialogActions>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" className={classes.forgot}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" className={classes.forgot}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Dialog>
      </Box>
    </div>
  );
}

export default LogIn;
