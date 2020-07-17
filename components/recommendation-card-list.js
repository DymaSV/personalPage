import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import RecommendationCard from '../components/recommendation-card';

export default function RecommendationCardList(props) {
    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="center">
            {props.messages.map((value, index) => {
                return <RecommendationCard
                    key={index}
                    name={props.names[index]}
                    avatar={props.avatars[index]}
                    message={value} />
            })}
        </Grid >
    )
}