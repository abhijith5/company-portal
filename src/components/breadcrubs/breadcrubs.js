import React from 'react'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

export default function Breadcrubs(props) {
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                {props.links.map((link) => (
                    <Typography color="inherit" style={{ fontSize: "12px" }}>
                        {link}
                    </Typography>
                ))}
                <Typography color="textPrimary" style={{ fontSize: "12px" }}>
                    {props.active}
                </Typography>
            </Breadcrumbs>
        </div>
    )
}
