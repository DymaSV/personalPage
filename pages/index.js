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
      <VideoFrame src={'https://vimeo.com/243556536'} />
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <RecommendationCard 
          name='Red Cat' 
          avatar='https://cdn.pixabay.com/photo/2016/09/17/00/53/cat-1675429_960_720.jpg' 
          message='The cat is a domestic species of small carnivorous mammal.
           It is the only domesticated species in the family 
           Felidae and is often referred to as the domestic cat to distinguish 
           it from the wild members of the family.'/>
        </Grid>
      </Grid>
    </div>
  );
}

