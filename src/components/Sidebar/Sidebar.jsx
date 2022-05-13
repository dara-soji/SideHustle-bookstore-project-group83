import React, { useState } from 'react'
import './Sidebar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DataSaverOffOutlinedIcon from '@mui/icons-material/DataSaverOffOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';

const Sidebar = () => {

    const [open, setOpen] = useState(true);

    const dashboardMenu = [
        {
            title: "MANAGEMENT",
            menus: [
                { title: "Analytics", icon: <DataSaverOffOutlinedIcon fontSize="small"/> },
                { title: "Customers", icon: <PeopleAltOutlinedIcon fontSize="small"/> },
                { title: "Products", icon: <LocalOfferOutlinedIcon fontSize="small"/> },
                { title: "Orders", icon: <ShoppingCartOutlinedIcon fontSize="small"/> },
                { title: "Invoices", icon: <FileCopyOutlinedIcon fontSize="small"/> },
               
              ]

        },
        {
            title: "PAGES",
            menus: [
                { title: "Authentication", icon: <LockOutlinedIcon fontSize="small"/> },
                { title: "Calender", icon: <CalendarTodayOutlinedIcon fontSize="small"/> },
               
              ]

        },
        {
            title: "COMPONENTS",
            menus: [
                { title: "Charts", icon: <BarChartOutlinedIcon fontSize="small"/> },
               
              ]

        },

    ]

  

  return (
    <div className="sidebar">
        <div className="sidebar__logo app__flex">
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
            <h2 className="head-text sidebar__menu">Group 83</h2>
        </div>
        <div className="sidebar__dashboard-name app__flex">
            <HomeOutlinedIcon fontSize="small"/>
            <p className="p-text sidebar__menu">Dashboard</p>
        </div>
            {dashboardMenu.map((dash, index) =>(
        <div className="sidebar__management">

                    <h5 className="sidebar__management-title  p-text" key={index}>{dash.title}</h5>
                        {dash.menus.map((menu, index) =>(
                            <div className="sidebar__management-menu app__flex" key={index}>
                                {menu.icon}
                                <p className="p-text sidebar__menu">{menu.title}</p>
                                
                            </div>
                ))}
        </div>
            ))}
    </div>
  )
}

export default Sidebar