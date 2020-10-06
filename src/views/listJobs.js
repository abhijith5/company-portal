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
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';

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

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function ListJobs() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
                            <AppBar position="static" style={{ background: "none", color: "black", boxShadow: "none" }}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                >
                                    <Tab label="All Jobs" {...a11yProps(0)} />
                                    <Tab label="Published Jobs" {...a11yProps(1)} />
                                    <Tab label="Un Published Jobs" {...a11yProps(2)} />
                                </Tabs>
                            </AppBar>
                            <TabPanel value={value} index={0}>
                                <BasicTable></BasicTable>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <BasicTable></BasicTable>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <h6>Unpublished jobs not available</h6>
                            </TabPanel>
                        </Grid>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}
