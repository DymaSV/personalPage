import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: "center",
        '& > *': {
            margin: theme.spacing(2),
        },
    },
    large: {
        width: theme.spacing(9),
        height: theme.spacing(9),
        margin: 'auto'
    },
    text: {
        textAlign: 'center',

    },
}));
export default function RecommendationCard(props) {
    const [wrap, setWrap] = useState(true);
    const classes = useStyles();
    return (
        <div>
            <Card variant="outlined">
                <CardContent>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}>
                        <Grid item xs={12} sm={12}>
                            <Avatar className={classes.large} alt={props.name} src={props.avatar} />
                        </Grid>
                        <Grid item xs={12} sm={12} className={classes.text}>
                            <Typography variant="h7" component="h3">
                                {props.name}
                            </Typography>
                        </Grid>
                    </Grid>
                    {wrap
                        ? <Typography noWrap variant="body2" component="p">{props.message}</Typography>
                        : <Typography variant="body2" component="p">{props.message}</Typography>}
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => { setWrap(!wrap) }}>See More</Button>
                </CardActions>
            </Card>
        </div >
    )
}
