import React, { useState } from 'react';
import VideoFrame from '../components/video-frame';
import RecommendationCardSlider from '../components/recommendation-card-slider';
import Navigator from '../components/navigator';
import ProjectTab from '../components/project-tab';
import Contacts from '../components/contacts';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const cardItems = [
  {
    message: 'sdfsdfffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
    avatar: 'https://cdn.pixabay.com/photo/2016/09/17/00/53/cat-1675429_960_720.jpg',
    name: 'Red cat'
  },
  {
    message: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    avatar: 'https://ichef.bbci.co.uk/news/320/cpsprodpb/EB24/production/_112669106_66030514-b1c2-4533-9230-272b8368e25f.jpg',
    name: 'Red dog'
  },
  {
    message: 'cvbcvvvvvvvvvvvvvvvvvvvvvvvvvvvl',
    avatar: 'https://cdn.pixabay.com/photo/2016/09/17/00/53/cat-1675429_960_720.jpg',
    name: 'Red cat'
  },
  {
    message: 'vbbbbbbbbbbbbbbbbbbbbbbb',
    avatar: 'https://cdn.pixabay.com/photo/2016/09/17/00/53/cat-1675429_960_720.jpg',
    name: 'Red cat'
  },
]

export default function Home() {
  return (
    <div>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center">
        <Grid item xs={12}>
          <VideoFrame src={'https://youtu.be/-OKArNxRCSA'} />
        </Grid>
        <Paper elevation={1} style={{ margin: "10px", padding: "10px" }}>
          <Typography variant="h6" component="h3">
            References
          </Typography>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs={12} sm={4}>
              <RecommendationCardSlider items={cardItems} />
            </Grid>
            <Grid item xs={1} sm={1}></Grid>
            <Grid item xs={12} sm={4}>
              <RecommendationCardSlider items={cardItems} />
            </Grid>
          </Grid>
        </Paper>
        <Grid item xs={12}>
          <Paper elevation={1} style={{ margin: "10px", padding: "10px" }}>
            <Typography variant="h6" component="h3">
              Projects
          </Typography>
            <ProjectTab></ProjectTab>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={1} style={{ margin: "10px", padding: "10px" }}>
            <Typography variant="h6" component="h3">
              Contact
          </Typography>
            <Contacts></Contacts>
          </Paper>
        </Grid>
      </Grid >
    </div >
  );
}

