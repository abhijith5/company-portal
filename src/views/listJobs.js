import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrubs from '../components/breadcrubs/breadcrubs';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import PaginationTable from '../components/table/paginationTable';
import BasicTable from '../components/table/basicTable';


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
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} variant="h4" component="h4">
                        All Jobs
                    </Typography>

                    <Breadcrubs
                        links={["Home", "Jobs"]}
                        active="All Jobs"
                    ></Breadcrubs>
                    <div className={classes.newJob}>
                        <Grid container spacing={3} style={{ padding: "15px" }}>
                            <BasicTable></BasicTable>
                        </Grid>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}
