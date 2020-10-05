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


const names = [
    { title: 'Oliver Hansen1' },
    { title: 'Oliver Hansen2' },
    { title: 'Oliver Hansen3' },
    { title: 'Oliver Hansen4' },
    { title: 'Oliver Hansen5' },

];

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

    const [chips, setChipsData] = useState([])


    const selectedSkillsData = () => {
        console.log(chips)
        let result = []

        chips.map((data, index) => (
            result.push(
                <>
                    <ul style={{ display: "inline-block", listStyleType: "none", paddingLeft: "5px" }}>
                        <li key={index}>
                            <Chip
                                // icon={icon}
                                label={data && data.title}
                                onDelete={data && handleDelete(data.title)}
                                className={classes.chip}
                            />
                        </li>
                    </ul>

                </>
            )
        ))

        return result
    }

    const setChipsDataFunction = (value) => {
        setChipsData(oldArray => [...oldArray, value]);
    }
    const handleDelete = (chipToDelete) => () => {
        setChipsData((chips) => chips.filter((chip) => chip.title != chipToDelete));
    };

    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} variant="h4" component="h4">
                        Manage Jobs
                    </Typography>

                    <Breadcrubs
                        links={["Home", "Jobs"]}
                        active="Manage Jobs"
                    ></Breadcrubs>
                    <div className={classes.newJob}>
                        <Grid container spacing={3}>
                            {/* <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                                <Button variant="contained" color="secondary">
                                    Save As Draft
                                </Button>
                                <Button variant="contained" color="primary">
                                    Publish
                                </Button>
                            </Grid> */}
                            <Grid item xs={12}>
                                <FormLabel component="legend">Title</FormLabel>
                                <TextField
                                    style={{ width: "100%", marginTop: "10px" }}
                                    required
                                    id="outlined-required"
                                    // label="Title"
                                    placeholder="title"
                                    variant="outlined"
                                    size="small"

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormLabel component="legend">Job Role</FormLabel>
                                <TextField
                                    style={{ width: "100%", marginTop: "10px" }}
                                    required
                                    id="outlined-required"
                                    // label="Role"
                                    placeholder="role"
                                    variant="outlined"
                                    size="small"

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormLabel component="legend">Job Description</FormLabel>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    rowsMin={6}
                                    placeholder="description"
                                    style={{ width: "100%", marginTop: "10px", padding: "10px" }}
                                />

                            </Grid>

                            <Grid item xs={12} md={4}>
                                <FormLabel component="legend">Salary</FormLabel>
                                <TextField
                                    style={{ width: "100%", marginTop: "10px" }}
                                    required
                                    id="outlined-required"
                                    // label="Role"
                                    placeholder="salary"
                                    variant="outlined"
                                    size="small"

                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <FormLabel component="legend">Equity</FormLabel>
                                <TextField
                                    style={{ width: "100%", marginTop: "10px" }}
                                    required
                                    id="outlined-required"
                                    // label="Role"
                                    placeholder="equity"
                                    variant="outlined"
                                    size="small"

                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <FormLabel component="legend">Minimum Experience</FormLabel>
                                <TextField
                                    style={{ width: "100%", marginTop: "10px" }}
                                    required
                                    id="outlined-required"
                                    // label="Role"
                                    placeholder="min experience"
                                    variant="outlined"
                                    size="small"

                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormLabel component="legend">Area</FormLabel>
                                <TextField
                                    style={{ width: "100%", marginTop: "10px" }}
                                    required
                                    id="outlined-required"
                                    // label="Role"
                                    placeholder="are"
                                    variant="outlined"
                                    size="small"

                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormLabel component="legend">City</FormLabel>
                                <TextField
                                    style={{ width: "100%", marginTop: "10px" }}
                                    required
                                    id="outlined-required"
                                    // label="Role"
                                    placeholder="city"
                                    variant="outlined"
                                    size="small"

                                />
                            </Grid>

                            <Grid item xs={6} md={3}>

                                <FormControlLabel
                                    style={{ marginTop: "2rem" }}
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange}
                                            // style={{  marginTop: "10px" }}
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="ESOP"
                                />
                            </Grid>
                            <Grid item xs={6} md={3}>

                                <FormControlLabel
                                    style={{ marginTop: "2rem" }}

                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange}
                                            // style={{ marginTop: "10px" }}
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="Remote Work"
                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <FormLabel component="legend">Skill Set</FormLabel>

                                <Autocomplete
                                    id="combo-box-demo"
                                    style={{ width: "100%", marginTop: "10px" }}
                                    options={names}
                                    getOptionLabel={(option) => option.title}
                                    onChange={(event, value) => value && setChipsDataFunction(value)}

                                    renderInput={(params) =>
                                        <TextField
                                            {...params}
                                            size="small"
                                            style={{ width: "100%", marginTop: "10px" }}
                                            // label="Combo box"
                                            variant="outlined" />}
                                />
                                {selectedSkillsData()}

                            </Grid>
                            <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                                <Button variant="contained" color="secondary" style={{ marginRight: "15px" }}>
                                    Save As Draft
                                </Button>
                                <Button variant="contained" color="primary">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}
