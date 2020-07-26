import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ProjectInfo from './project-info';

export default function ProjectTab() {
  return (
    <div>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center">
        <Grid item xs={6}>
          <ProjectInfo></ProjectInfo>
        </Grid>
        <Grid item xs={6}>
          <ProjectInfo></ProjectInfo>
        </Grid>
        <Grid item xs={6}>
          <ProjectInfo></ProjectInfo>
        </Grid>
        <Grid item xs={6}>
          <ProjectInfo></ProjectInfo>
        </Grid>
        <Grid item xs={6}>
          <ProjectInfo></ProjectInfo>
        </Grid>
        <Grid item xs={6}>
          <ProjectInfo></ProjectInfo>
        </Grid>
      </Grid>
    </div>
  );
}