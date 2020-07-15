import React, { useState } from 'react';
import VideoFrame from '../components/video-frame';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import RecommendationCard from '../components/recommendation-card';

export default function Home() {
  // const [src, setSrc] = useState('https://www.w3schools.com/html/mov_bbb.mp4');

  // function handleToPlay(event) {
  //   console.log("handleToPlay")
  //   setPlaying(event)
  //   if (event) {
  //     setSrc('https://www.w3schools.com/html/mov_bbb.mp4')
  //   }
  // }

  return (
    <div>
      <VideoFrame src={'https://www.w3schools.com/html/mov_bbb.mp4'} />
      <Grid container spacing={5}>
        <Grid item xs={12} sm={3}>
          <RecommendationCard avatar='https://media.sproutsocial.com/uploads/2017/08/Social-Media-Video-Specs-Feature-Image.png' message='xvsdsdgsgsdgsdgsdgs'/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper>xvsdsdgsgsdgsdgsdgs</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper>xvsdsdgsgsdgsdgsdgs</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper>xvsdsdgsgsdgsdgsdgs</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

