import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import RecommendationCard from '../components/recommendation-card';

export default function RecommendationCardList(props) {
    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="center">
            {props.items.map((value, index) => {
                return <RecommendationCard
                    key={index}
                    name={value.name}
                    avatar={value.avatar}
                    message={value.message} />
            })}
        </Grid >
    )
}