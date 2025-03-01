import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// import Icon from '@material-ui/core/Icon';


function SidebarItem({ open, depthStep = 10, depth = 0, submenu, expanded, item, ...rest }) {
    const [collapsed, setCollapsed] = React.useState(true);
    const { label, items, Icon, path, subMenu, onClick: onClickProp } = item;


    function toggleCollapse() {
        setCollapsed(prevValue => !prevValue);
    }

    function onClick(e) {
        if (Array.isArray(items)) {
            toggleCollapse();
        }
        if (onClickProp) {
            onClickProp(e, item);
        }
    }

    let expandIcon;

    if (Array.isArray(items) && items.length) {
        expandIcon = !collapsed ? (
            <ExpandLessIcon
                className={
                    "sidebar-item-expand-arrow" + " sidebar-item-expand-arrow-expanded"
                }
            />
        ) : (
                <ExpandMoreIcon className="sidebar-item-expand-arrow" />
            );
    }

    return (
        <>
            <ListItem
                className="sidebar-item"
                onClick={onClick}
                button
                dense
                {...rest}
                style={{ justifyContent: "space-between" }}
            >
                <Link to={path} style={{ textDecoration: "none", color: "#607d8b"}}>
                    <div
                        style={{ paddingLeft: depth * depthStep }}
                        className={!subMenu ? "sidebar-item-content" : "sidebar-item-content-subment"}
                    >

                        {Icon && <Icon className="sidebar-item-icon" fontSize="2.6rem" style={{ color: "#94A8BD" }} />}
                        <div className="sidebar-item-text" style={{paddingLeft:"1rem"}}>
                            {label}
                        </div>
                    </div>
                </Link>
                {open ? expandIcon : null}
            </ListItem>
            <Collapse in={!collapsed} timeout="auto" unmountOnExit>
                {Array.isArray(items) ? (
                    <List disablePadding dense>
                        {items.map((subItem, index) => (
                            <React.Fragment key={`${subItem.name}${index}`}>
                                {subItem === "divider" ? (
                                    <Divider style={{ margin: "6px 0" }} />
                                ) : (
                                        <SidebarItem
                                            depth={depth + 1}
                                            depthStep={depthStep}
                                            item={subItem}
                                            submenu={false}
                                        />
                                    )}
                            </React.Fragment>
                        ))}
                    </List>
                ) : null}
            </Collapse>
        </>
    );
}

function Sidebar({ items, depthStep, depth, expanded, open }) {
    return (
        <div className="sidebar">
            <List disablePadding dense>
                {items.map((sidebarItem, index) => (
                    <React.Fragment key={`${sidebarItem.name}${index}`}>
                        {sidebarItem === "divider" ? (
                            <Divider style={{ margin: "6px 0" }} />
                        ) : (
                                <SidebarItem
                                    open={open}
                                    depthStep={depthStep}
                                    depth={depth}
                                    expanded={expanded}
                                    item={sidebarItem}
                                />
                            )}
                    </React.Fragment>
                ))}
            </List>
        </div>
    );
}

export default Sidebar;
