
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { RiDashboard3Line, RiSearchEyeLine, RiSettings2Line, RiBriefcase2Line, RiProfileLine, RiFileList3Line, RiAirplayLine } from "react-icons/ri";
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
            subMenu: false,
            items: []
        },
        {
            // path: "/bubblegum",
            // main: () => <div>bubblegum!</div>,
            Icon: RiSearchEyeLine,
            name: "jobs",
            label: "Jobs",
            multiMenu: true,
            subMenu: false,
            items: [
                {
                    path: "/manage-jobs",
                    main: () => <ManageJobs></ManageJobs>,
                    Icon: RiBriefcase2Line,
                    name: "manageJobs",
                    label: "Manage Jobs",
                    multiMenu: false,
                    subMenu: true,
                },
                {
                    path: "/list-jobs",
                    main: () => <ListJobs></ListJobs>,
                    Icon: RiFileList3Line,
                    name: "listjobs",
                    label: "List Jobs",
                    multiMenu: false,
                    subMenu: true,

                },
                // {
                //     path: "/published-jobs",
                //     main: () => <ListJobs></ListJobs>,
                //     Icon: RiAirplayLine,
                //     name: "publishedjobs",
                //     label: "Published Jobs",
                //     multiMenu: false,
                //     subMenu:true,

                // },
                // {
                //     path: "/unpublished-jobs",
                //     main: () => <ListJobs></ListJobs>,
                //     Icon: RiAirplayLine,
                //     name: "unpublishedjobs",
                //     label: "Un Published Jobs",
                //     multiMenu: false,
                //     subMenu:true,

                // }
            ]
        },
        {
            path: "/settings",
            main: () => <div>Settings</div>,
            Icon: RiSettings2Line,
            name: "settings",
            label: "Settings",
            items: [],
            multiMenu: false,
            subMenu: false,
        },
        {
            path: "/profile",
            main: () => <div>Profile</div>,
            Icon: RiProfileLine,
            name: "profile",
            label: "Profile",
            items: [],
            multiMenu: false,
            subMenu:false,

        }
    ]
}