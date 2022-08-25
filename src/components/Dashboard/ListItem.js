import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Main Imports
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from '@mui/material/Divider';

// Icon
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TableChartIcon from "@mui/icons-material/TableChart";
import PublicIcon from '@mui/icons-material/Public';
import NotesIcon from "@mui/icons-material/Notes";
import PeopleIcon from "@mui/icons-material/People";
import PasswordIcon from "@mui/icons-material/Password";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ApartmentIcon from '@mui/icons-material/Apartment';
import ViewListIcon from '@mui/icons-material/ViewList';
import CategoryIcon from '@mui/icons-material/Category';
import FilterListIcon from '@mui/icons-material/FilterList';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const role = "nodal-officer";
export const mainListItems = (
    <>
        {
            role ===  "nodal-officer" && (
                <>
                    <ListButton icon={<DashboardIcon/>} title="Dashboard" link={`/dashboard/nodal-officer`}/>
                    <ListButton icon={<InsertChartIcon/>} title="Analytics" link={`/dashboard/analytics/nodal-officer`}/>
                    <ListButton icon={<ModeEditIcon/>} title="Edit Grievance Form" link={`/dashboard/edit-grievance-form/nodal-officer`}/>
                    <Divider sx={{ my: 1 }} />
                    <DropdownListButton icon={<TableChartIcon/>} title="Base Table"
                        subMenus={[
                            {
                                id: 1,
                                icon: <PublicIcon/>,
                                title:"Countries",
                                link: "/dashboard/base_table/countries",
                            },
                            {
                                id: 2,
                                icon: <ApartmentIcon/>,
                                title:"State",
                                link: "/dashboard/base_table/state",
                            },
                            {
                                id: 3,
                                icon: <PeopleAltIcon/>,
                                title:"Roles",
                                link: "/dashboard/base_table/roles",
                            },
                            {
                                id: 4,
                                icon: <CheckCircleIcon/>,
                                title:"Total Grievance",
                                link: "/dashboard/base_table/total-grievance",
                            },
                            {
                                id: 5,
                                icon: <AssignmentTurnedInIcon/>,
                                title:"Solved Grievance",
                                link: "/dashboard/base_table/solved-grievance",
                                
                            },
                            {
                                id: 6,
                                icon: <ModeEditIcon/>,
                                title:"Unsolved Grievance",
                                link: "/dashboard/base_table/unsolved-grievance",
                            },
                        ]}
                    />
                    <Divider sx={{ my: 1 }} />
                    <DropdownListButton icon={<CategoryIcon/>} title="Categories"
                        subMenus={[
                            {
                                id: 1,
                                icon: <FilterListIcon/>,
                                title: "Main Categories",
                                link: "/dashboard/categories/main-categories"
                            },
                            {
                                id: 2,
                                icon: <FilterListIcon/>,
                                title: "Sub-Main Categories",
                                link: "/dashboard/categories/sub-main-categories"
                            }
                        ]}
                    />
                    <Divider sx={{ my: 1 }} />
                    <ListButton icon={<AccountCircleIcon/>} title="User" link={`/dashboard/user/nodal-officer`}/>
                    <ListButton icon={<PasswordIcon/>} title="Change Password" link={`/dashboard/change-password/nodal-officer`}/>
                </>
            )
        }
        {
            (role ==="joint-secretary") && (
                <>
                    <ListButton name="super-admin-dashboard" icon={<DashboardIcon/>} title="Dashboard" link={`dashboard/joint-secretary`}/>
                    <ListButton icon={<InsertChartIcon/>} title="Analytics" link={`dashboard/analytics/joint-secretary`}/>
                    <DropdownListButton icon={<TableChartIcon/>} title="Base Table"
                        subMenus={[
                            {
                                id: 1,
                                icon: <PublicIcon/>,
                                title:"Countries",
                                link: "/dashboard/base_table/countries",
                            },
                            {
                                id: 2,
                                icon: <ApartmentIcon/>,
                                title:"State",
                                link: "/dashboard/base_table/state",
                            },
                            {
                                id: 3,
                                icon: <ApartmentIcon/>,
                                title:"Total Grievance",
                                link: "/dashboard/base_table/total-grievance",
                            },
                            {
                                id: 4,
                                icon: <AssignmentTurnedInIcon/>,
                                title:"Solved Grievance",
                                link: "/dashboard/base_table/solved-grievance",
                            },
                            {
                                id: 5,
                                icon: <ModeEditIcon/>,
                                title:"Unsolved Grievance",
                                link: "/dashboard/base_table/unsolved-grievance",
                            }
                        ]}
                    />
                    <ListButton icon={<AccountCircleIcon/>} title="User" link={`/dashboard/user/joint-secretary`}/>
                    <ListButton icon={<PasswordIcon/>} title="Change Password" link={`/dashboard/change-password/joint-secretary`}/>
                </>
            )
        }
        {
            ( role === 'additional-secretary') && (
                <>
                    <ListButton name="super-admin-dashboard" icon={<DashboardIcon/>} title="Dashboard" link={`dashboard/additional-secretary`}/>
                    <ListButton icon={<InsertChartIcon/>} title="Analytics" link={`dashboard/analytics/additional-secretary`}/>
                    <ListButton icon={<ModeEditIcon/>} title="Edit Grievance Form" link={`dashboard/edit-grievance-form/additional-secretary`}/>
                    <DropdownListButton icon={<TableChartIcon/>} title="Base Table"
                        subMenus={[
                            {
                                id: 1,
                                icon: <PublicIcon/>,
                                title:"Countries",
                                link: "/dashboard/base_table/countries",
                            },
                            {
                                id: 2,
                                icon: <ApartmentIcon/>,
                                title:"State",
                                link: "/dashboard/base_table/state",
                            },
                            {
                                id: 3,
                                icon: <ApartmentIcon/>,
                                title:"Total Grievance",
                                link: "/dashboard/base_table/total-grievance",
                            },
                            {
                                id: 4,
                                icon: <AssignmentTurnedInIcon/>,
                                title:"Solved Grievance",
                                link: "/dashboard/base_table/solved-grievance",
                            },
                            {
                                id: 5,
                                icon: <ModeEditIcon/>,
                                title:"Unsolved Grievance",
                                link: "/dashboard/base_table/unsolved-grievance",
                            }
                        ]}
                    />
                    <ListButton icon={<AccountCircleIcon/>} title="User" link={`/dashboard/user/additional-secretary`}/>
                    <ListButton icon={<PasswordIcon/>} title="Change Password" link={`/dashboard/change-password/additional-secretary`}/>
                </>
            )
        }
         {
            (role === 'secretary') && (
                <>
                    <ListButton name="super-admin-dashboard" icon={<DashboardIcon/>} title="Dashboard" link={`dashboard/secretary`}/>
                    <ListButton icon={<InsertChartIcon/>} title="Analytics" link={`dashboard/analytics/secretary`}/>
                    <ListButton icon={<ModeEditIcon/>} title="Edit Grievance Form" link={`dashboard/edit-grievance-form/secretary`}/>
                    <DropdownListButton icon={<TableChartIcon/>} title="Base Table"
                        subMenus={[
                            {
                                id: 1,
                                icon: <PublicIcon/>,
                                title:"Countries",
                                link: "/dashboard/base_table/countries",
                            },
                            {
                                id: 2,
                                icon: <ApartmentIcon/>,
                                title:"State",
                                link: "/dashboard/base_table/state",
                            },
                            {
                                id: 3,
                                icon: <ApartmentIcon/>,
                                title:"Total Grievance",
                                link: "/dashboard/base_table/total-grievance",
                            },
                            {
                                id: 4,
                                icon: <AssignmentTurnedInIcon/>,
                                title:"Solved Grievance",
                                link: "/dashboard/base_table/solved-grievance",
                            },
                            {
                                id: 5,
                                icon: <ModeEditIcon/>,
                                title:"Unsolved Grievance",
                                link: "/dashboard/base_table/unsolved-grievance",
                            }
                        ]}
                    />
                    <ListButton icon={<AccountCircleIcon/>} title="User" link={`/dashboard/user/secretary`}/>
                    <ListButton icon={<PasswordIcon/>} title="Change Password" link={`/dashboard/change-password/secretary`}/>
                </>
            )
        }
        {
            role === "department-admin" && (
                <>
                    <ListButton icon={<DashboardIcon/>} title="Dashboard" link={`/dashboard/department-admin`}/>
                    <ListButton icon={<InsertChartIcon/>} title="Analytics" link={`/dashboard/analytics/department-admin`}/>
                    <ListButton icon={<AssignmentTurnedInIcon/>} title="Solved Grievance" link={`/dashboard/solved-grievance/department-admin`}/>
                    <ListButton icon={<PendingActionsIcon/>} title="Unsolved Grievance" link={`/dashboard/unsolved-grievance/department-admin`}/>
                    <ListButton icon={<PeopleIcon/>} title="Edit Profile" link={`/dashboard/edit-profile/department-admin`}/>
                </>
            )
        }
        {
            role === "user" && (
                <>
                    <ListButton icon={<DashboardIcon/>} title="Dashboard" link={`/dashboard/user`}/>
                    <ListButton icon={<NotesIcon/>} title="Lodge Grievance"  link={`/dashboard/lodge-grievance/user`}/>
                    <ListButton icon={<ViewListIcon/>} title="Grievance Registered"  link={`/dashboard/grievance-registered/user`}/>
                    <ListButton icon={<PeopleIcon/>} title="Edit Profile" link={`/dashboard/edit-profile/user`}/> 
                    <ListButton icon={<PasswordIcon/>} title="Change Password" link={`/dashboard/change-password/user`}/>

                </>
            )
        }
    </>
)

function ListButton({ icon, title, link }) {
    const navigate = useNavigate();
    const handleClick = () => navigate(link);
    return (
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    );
}

function DropdownListButton({ icon, title, subMenus }) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => setOpen(!open);
    return (
      <>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={title} />
          {open ? <ExpandLess sx={{marginLeft:'5px'}} color="action" /> : <ExpandMore sx={{marginLeft:'5px'}} color="action" />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {subMenus.map((submenu) => (
            <List component="div" disablePadding key={submenu.id} onClick={() => navigate(submenu.link)}>
              <ListItemButton>
                <ListItemIcon>{submenu.icon}</ListItemIcon>
                <ListItemText primary={submenu.title} />
              </ListItemButton>
            </List>
          ))}
        </Collapse>
      </>
    );
}