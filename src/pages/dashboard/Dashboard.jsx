import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Client from '../client/Client'
import './Dashboard.scss'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Home from '../home/Home';
import Products from '../products/Products';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import '../client/Client.scss'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DataSaverOffOutlinedIcon from '@mui/icons-material/DataSaverOffOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import TeamMembers from '../TeamMembers/TeamMembers';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';



const Dashboard = () => {

    const [open, setOpen] = useState(true);

    const dashboardMenu = [
        {
            title: "MANAGEMENT",
            menus: [
                { title: "TeamMembers", icon: <PeopleAltOutlinedIcon fontSize="small"/> },
                { title: "Customers", icon: <FileCopyOutlinedIcon fontSize="small"/> },
                { title: "Products", icon: <LocalOfferOutlinedIcon fontSize="small"/> },
       
              ]

        },
        // {
        //     title: "PAGES",
        //     menus: [
        //         { title: "Authentication", icon: <LockOutlinedIcon fontSize="small"/> },
        //         { title: "Calender", icon: <CalendarTodayOutlinedIcon fontSize="small"/> },
               
        //       ]

        // },
        {
            title: "ACCOUNT",
            menus: [
                { title: "Logout", icon: <BarChartOutlinedIcon fontSize="small"/> },
               
              ]

        },

    ]

  

    const location = useLocation().pathname;
    const [path, setPath] = useState("TeamMembers");
    const [isOpen, setIsOpen] = useState(true)
    
    const openNav = () => {
        document.getElementById("sidebar").style.left = "0px";
    }
    
    const closeNav = () => {
        if(window.innerWidth>=992){
            
            if(isOpen){
                setIsOpen(false)
            }else{
                setIsOpen(true)
                
            }
        }
    }
    
    const changePathAndClose = (path) => {
        setPath(path);
        
    }
    
    
    
    useEffect(()=>{
        // setPath(location);
        if(window.innerWidth<=992){
            setIsOpen(false)            
        }
       
    }, [window.innerWidth])
   
    let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
  return (
    <div className="dashboard">
        <div className={`${isOpen? "sidebar" : "sidebar close"}`}>
            <Link className="app__link" to="/home">

        <div className={`${isOpen? "sidebar__logo app__flex" : "sidebar__logo app__flex close"}`}>
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
            <h2 className={`${isOpen? "head-text sidebar__menu" : "head-text sidebar__menu close"}`}>Group 83</h2>
        </div>
            </Link>
        <div className="sidebar__dashboard-name app__flex">
            <HomeOutlinedIcon fontSize="small"/>
            <p className={`${isOpen? "p-text  sidebar__menu" : " p-text sidebar__menu close"}`}>Dashboard</p>
        </div>
        <div className="sidebar__manage">

            {dashboardMenu.map((dash, index) =>(
                <div className="sidebar__management">

                    <h5 className={`${isOpen? "sidebar__management-title  p-text" : "sidebar__management-title  p-text close"}`} key={index}>{dash.title}</h5>
                        {dash.menus.map((menu, index) =>(
                            <Link className="app__link" to={`/${menu.title === "Logout" ? "signin" : menu.title}`}
                                 onClick={()=>changePathAndClose(menu.title)}
                            
                            >
                                <div className={`${menu.title === path ? "sidebar__management-menu app__flex active" : "sidebar__management-menu app__flex"}`} key={index}>
                                        {menu.icon}
                                        <p className={`${isOpen? "p-text sidebar__menu" : " p-text sidebar__menu close"}`}>{menu.title}</p>
                                    
                                </div>
                            </Link>
                ))}
        </div>
            ))}
            </div>
    </div>

        <div className="dashboard__content client">
        <div className="client__container">
        <MenuOutlinedIcon className="cursor menu-icon" 
            onClick={()=>closeNav()}

            fontSize="small"/>
          <div className="client__container-nav app__flex">
            
            <div className="client__container-nav-right app__flex">
                <NotificationsNoneOutlinedIcon className="cursor" fontSize="small"/>
                <SettingsOutlinedIcon className="cursor" fontSize="small"/>
                <div className="client__country-circle cursor">NG</div>

                <div className="client__avater app__flex">

                    <AccountCircleIcon className="cursor" fontSize="large"/>
                    <p className="p-text cursor">{userDetails.name}</p>
                    <KeyboardArrowDownIcon className="cursor" fontSize="small"/>
                </div>

            </div>
          </div>

          <div className="client__container-title app__flex">

            <h4 className="head-text">{path}</h4>

            <div className="client__container-title-right app__flex">

                <div className="client__container-title-search app__flex">

                    <input id="customer-search" type="search" name="search" placeholder="Search Customer" />
                    <SearchIcon className="cursor" fontSize="small"/>

                </div>
                <button className="client__container-title-btn p-text" >
                    +  Add Customers
                </button>
            </div>
          </div>
        
         <Routes>
                     <Route path="/" element={<Navigate to="/TeamMembers" />}/>
                     {/* <Route path="/Home" element={<Home />} /> */}
                     <Route path="/Customers" element={<Client />} />
                     <Route path="/Products" element={<Products   />} />
                   <Route path="/TeamMembers" element={<TeamMembers   />} />
            
                  
         </Routes>
      </div>
           
        </div>
        <div>
        </div>

    </div>
  )
}

export default Dashboard




