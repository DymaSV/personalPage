import React, { useState } from 'react';
import VideoFrame from '../components/video-frame';
import RecommendationCardSlider from '../components/recommendation-card-slider';
import Navigator from '../components/navigator';
import Grid from '@material-ui/core/Grid';

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
        <Navigator />
        <Grid item xs={12}>
          <VideoFrame src={'https://youtu.be/-OKArNxRCSA'} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <RecommendationCardSlider items={cardItems} />
        </Grid>
        <Grid item xs={0} sm={1}></Grid>
        <Grid item xs={12} sm={4}>
          <RecommendationCardSlider items={cardItems} />
        </Grid>
      </Grid >
    </div >
  );
}

