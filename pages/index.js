import React, { useState } from 'react';
import VideoFrame from '../components/video-frame';
import RecommendationCardList from '../components/recommendation-card-list';
import Navigator from '../components/navigator';
import Grid from '@material-ui/core/Grid';

const messages = [
  'The cat is a domestic species of small carnivorous mammal.',
  'The cat is a domestic species of small carnivorous mammal.',
  'The cat is a domestic species of small carnivorous mammal.',
  'The cat is a domestic species of small carnivorous mammal.'];
const avatars = [
  'https://cdn.pixabay.com/photo/2016/09/17/00/53/cat-1675429_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/09/17/00/53/cat-1675429_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/09/17/00/53/cat-1675429_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/09/17/00/53/cat-1675429_960_720.jpg'];
const names = [
  'Red cat',
  'Red cat',
  'Red cat',
  'Red cat'];

export default function Home() {
  return (
    <div>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center">
        <Navigator/>
        <Grid item xs={12}>
          <VideoFrame src={'https://youtu.be/-OKArNxRCSA'} />
        </Grid>
        <Grid item xs={12}>
          <RecommendationCardList
            names={names}
            avatars={avatars}
            messages={messages} />
        </Grid>
      </Grid >
    </div >
  );
}

