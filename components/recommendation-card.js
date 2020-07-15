import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

export default function RecommendationCard(props) {
    return (
        <div>
            <Paper>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar><img src = {props.avatar}/></Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap>{props.message}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div >
    )
}
