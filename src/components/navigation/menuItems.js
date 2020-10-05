
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { RiDashboard3Line } from "react-icons/ri";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React from "react";
import ManageJobs from "../../views/manageJobs"
import ListJobs from '../../views/listJobs';

export default {
    items: [
        {
            path: "/dashboard",
            // exact: true,
            main: () => <div>home!</div>,
            Icon: RiDashboard3Line,
            name: "dashboard",
            label: "Dashboard",
            multiMenu: false,
            items: []
        },
        {
            // path: "/bubblegum",
            // main: () => <div>bubblegum!</div>,
            Icon: RiDashboard3Line,
            name: "jobs",
            label: "Jobs",
            multiMenu: true,
            items: [
                {
                    path: "/manage-jobs",
                    main: () => <ManageJobs></ManageJobs>,
                    Icon: RiDashboard3Line,
                    name: "manageJobs",
                    label: "Manage Jobs",
                    multiMenu: false,
                },
                {
                    path: "/list-jobs",
                    main: () => <ListJobs></ListJobs>,
                    Icon: RiDashboard3Line,
                    name: "listjobs",
                    label: "List Jobs",
                    multiMenu: false,
                },
                {
                    path: "/published-jobs",
                    main: () => <ListJobs></ListJobs>,
                    Icon: RiDashboard3Line,
                    name: "publishedjobs",
                    label: "Published Jobs",
                    multiMenu: false,
                },
                {
                    path: "/unpublished-jobs",
                    main: () => <ListJobs></ListJobs>,
                    Icon: RiDashboard3Line,
                    name: "unpublishedjobs",
                    label: "Un Published Jobs",
                    multiMenu: false,
                }
            ]
        },
        {
            path: "/shoelaces",
            main: () => <div>shoelaces!</div>,
            Icon: RiDashboard3Line,
            name: "Home3",
            label: "Hom3",
            items: [],
            multiMenu: false,

        }
    ]
}