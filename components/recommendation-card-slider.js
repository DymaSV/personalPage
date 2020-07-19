import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import RecommendationCard from '../components/recommendation-card';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from '@material-ui/core/IconButton';

export default function RecommendationCardSlider(props) {
    const [index, setIndex] = useState(0);
    function handleArrowBackClick(e) {
        if (index > 0) {
            const i = index - 1;
            setIndex(i);
        }
    }
    function handleArrowForwardClick(e) {
        if (index < props.messages.length - 1) {
            const i = index + 1;
            setIndex(i);
        }
    }
    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs={4} sm={4} style={{ textAlign: 'right' }}>
                <IconButton aria-label="arrow-back" onClick={handleArrowBackClick}>
                    <ArrowBackIosIcon color="primary" />
                </IconButton>
            </Grid>
            <Grid item xs={4} sm={4}>
                <RecommendationCard
                    name={props.names[index]}
                    avatar={props.avatars[index]}
                    message={props.messages[index]} />
            </Grid>
            <Grid item xs={4} sm={4}>
                <IconButton aria-label="arrow-forward" onClick={handleArrowForwardClick}>
                    <ArrowForwardIosIcon color="primary" />
                </IconButton>
            </Grid>
        </Grid >
    )
}