import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function Contacts() {

  return (
    <div>
      <Paper elevation={3} style={{ margin: "10px", padding: "10px" }}>
        <Grid container
          direction="row"
          justify="center"
          alignItems="center">
          <Grid item xs={12}>
            <TextField
              label="Email"
              style={{ margin: 8 }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'right' }}>
            <Button variant="contained" color="primary">
              Send
            </Button>
          </Grid>
        </Grid>

      </Paper>
    </div>
  );
}