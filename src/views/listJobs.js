import { FormLabel, Paper } from '@material-ui/core'
import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrubs from '../components/breadcrubs/breadcrubs';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Chip from '@material-ui/core/Chip';
import Select from '@material-ui/core/Select';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    newJob: {
        marginTop: "15px",
        flexGrow: 1,

    },
    customInput: {
        margin: "10px"
    },


});


export default function ManageJobs() {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} variant="h4" component="h4">
                        List
                    </Typography>

                    <Breadcrubs
                        links={["Home", "Jobs"]}
                        active="List Jobs"
                    ></Breadcrubs>
                    <div className={classes.newJob}>
                        <Grid container spacing={3}>
               
                        </Grid>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}
