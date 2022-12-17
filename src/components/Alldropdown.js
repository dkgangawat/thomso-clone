import React from 'react'
import SideBar from './../api/sidemenu';
import "./alldropdown.css"
import { Context } from './../api/context';
import EventApi from './../api/eventApi';
const Alldropdown = () => {
  const [state,setState] = React.useContext(Context)
  const handleChange = (e)=>{
       const filteredData = EventApi.filter((curr,index)=>curr.category.name===e.currentTarget.value)
       setState({...state,cardData:filteredData})
       console.log(state);
  }
  return (
    <>
    <div className='dropdown'>
     <select className='alldropdown' onChange={handleChange}>
        <option className='dropdown-item' value="All">All</option>
    {SideBar.map((curr,index)=>{
        return(
            <option key={index} className="dropdown-item" value={curr.name}>{curr.name}</option>
        )
    })}
    </select>   
    </div>
    
    
    </>
  )
}

export default Alldropdown