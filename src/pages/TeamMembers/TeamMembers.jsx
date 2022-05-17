import React, { useEffect, useState } from 'react'
import '../client/Client.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import axios from 'axios';

const TeamMembers = () => {

  const [activeFilter, setActiveFilter] = useState(1)
  const [filterClients, setFilterClients] = useState([])
  const [listBy, setListBy] = useState(10)
  const [rowNo, setRowNo] = useState(5)
  const [clients, setClients] = useState([])


  const url = process.env.REACT_APP_TEAMMEMBER_URL;

  useEffect(()=>{
    axios.get(url).then(res =>{
      // console.log(res.data.data)
      setClients(res.data.data)
      setFilterClients(res.data.data.slice(0, listBy))
        })
        .catch(err=>{
                console.log(err)
            })

            setRowNo(5)
        }, [])



useEffect(() => {
  
setFilterClients(clients.slice(0, listBy))
if(clients.length%listBy === 0){

  setRowNo(Math.floor(clients.length/listBy))
}else{

  setRowNo(Math.floor(clients.length/listBy+1))
}

}, [listBy])


  
  
  const handleWorkFilter = (item) => {
    // const listby = listBy.value;
    setActiveFilter(item)
    
    setTimeout(() =>{
      // setFilterClients(clients.slice(2, 4))
      
      if(item === '1'){
        
        setFilterClients(clients.slice(parseInt(item)*parseInt(listBy)-parseInt(listBy), parseInt(item)*parseInt(listBy)))
      }else{
        setFilterClients(clients.slice(parseInt(item)*parseInt(listBy)-parseInt(listBy), parseInt(item)*parseInt(listBy)))
        
      }
    }, 500)
  }

  const next = () => {
    setTimeout(() =>{
      // setFilterClients(clients.slice(2, 4))
      
      if(activeFilter !== rowNo){
        setActiveFilter(activeFilter + 1)
        // handleWorkFilter(activeFilter)
        setFilterClients(clients.slice(parseInt(activeFilter+1)*parseInt(listBy)-parseInt(listBy), parseInt(activeFilter+1)*parseInt(listBy)))
  
        // console.log(activeFilter)
      } 
     
    }, 500)
   
}

const prev = () => {
  setTimeout(() =>{
    // setFilterClients(clients.slice(2, 4))
    
    if(activeFilter !== 1){
      setActiveFilter(activeFilter - 1)
      // handleWorkFilter(activeFilter)
      setFilterClients(clients.slice(parseInt(activeFilter-1)*parseInt(listBy)-parseInt(listBy), parseInt(activeFilter-1)*parseInt(listBy)))

      // console.log(activeFilter)
    } 
   
  }, 500)
}


  return (
    <div className="teammembers client">
      <div className="client__container">
        
        <div className="client__container-list">
            <h3 className="bold-text">Team Members</h3>
            <div className="client__container-list-heading">

              <ul className="p-text">
                <li><input type="checkbox" name="all-clients" /></li>
                  <li>Full Name</li>
                  <li>Email</li>
                  <li>Phone Number</li>
                  <li>Gender</li>
                  <li>Edit</li>

              </ul>
            </div>
            <div className="client__customer">

                {filterClients?.map((client, index) =>(
                  <div className="client__customer-list">
                  <ul className="bold-text">
                    <li><input type="checkbox" name={index} /></li>
                    <li>
                      <div className="client__customer-dp"
                        style={{backgroundImage: `url(${client.image})`}}
                      
                      ></div>
                      {`${client.firstname} ${client.lastname}`}
                    </li>
                    <li>{client.email}</li>
                    <li>{client.phone}</li>
                    <li>{client.gender}</li>
                    <li><EditOutlinedIcon className="cursor" fontSize="small"/><MoreHorizOutlinedIcon className="cursor" fontSize="small"/></li>
  
                </ul>
              </div>
                ))}
              </div>
            <div className="client__container-list-footer">
              <div className="client__container-footer-left">
                <p className="p-text">showing</p>
                <select name="client-column" id="client-column"
                  onChange={(e) => {
                    setListBy(e.target.value)

                  }}
                  value={listBy}
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                </select>
                <p className="p-text">of {clients.length}</p>
              </div>
              <div className="client__container-footer-right">
                <ArrowBackIosNewIcon className="cursor" fontSize="small" onClick={() => prev()}/>
                <p className="p-text cursor" onClick={() => prev()}>Prev</p>
                {Array.from({length: rowNo}).map((item, index) => (
                    <div 
                    onClick={() => handleWorkFilter(index + 1)}
                    className={activeFilter === index + 1 ? "client__container-footer-count app__flex active" : "client__container-footer-count app__flex"}
                    >{index+1}</div>
                ))}
                <p className="p-text cursor"
                  onClick={() => next()}
                >Next</p>
                <ArrowForwardIosIcon className="cursor " fontSize="small" onClick={() => next()}/>
                
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMembers
