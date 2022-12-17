import React from 'react'
import SideBar from '../api/sidemenu'
import EventApi from '../api/eventApi'
import "./eventCard.css"
import Alldropdown from './Alldropdown'
import { useContext } from 'react'
import { Context } from './../api/context';
import { useState } from 'react';
const EventPage = () => {
  const [state,setState] = useContext(Context)
  const [value,setvalue]= useState("")
  const handleOnChange =(e)=>{
    setvalue( e.currentTarget.value)
    const filteredData = EventApi.filter((item,index)=>item.name.toLowerCase().indexOf(e.currentTarget.value.toLowerCase())!== -1)
     setState({...state,cardData:filteredData})
    
  }
 
  return (
    <>
    <div className='mobile-div' id='mobile-div'>
    <Alldropdown/>
    </div>
      <div className='event-page'>
        <div className='side-bar'>
          <div >
            <h1 className='side-bar-header'>Events</h1>
          </div>
          <div className='events-list'>
            <span className='event-list'onClick={()=>{
              setState({...state,cardData:EventApi})
            }} >All</span>
             {
            SideBar.map((curr, index) => {
              return (
                <span className='event-list' key={index} onClick={()=>{
                  const filteredData = EventApi.filter((item,index)=>item.category.name===curr.name)
                 setState({...state,cardData:filteredData})
                }}>{curr.name} </span>
              )
            })
          }
          </div>
         
        </div>
        <div>
        <div className='event-cards'>
          <div className='event-search-bar' id='search-bar'>
          <input className="event-search-bar-input" type="text" placeholder="Search by Name" value={value} onChange={handleOnChange}/>
          <span className="event-search-icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg></span>
          </div>
          <div className='card-display'>
            {
            state.cardData.map((curr, index) => {
              return (
                <div className='card' key={index}>
                  <div >
                    <img className='card-media' src={(curr.image ===null)?"https://thomso.in/static/media/default_event.5e41c2c91152988c4289.png":curr.image} alt="" />
                  </div>
                  <div className='card-text'>
                    <div className='card-heading'>{curr.name}</div>
                    <div className='card-category'>{curr.category.name}</div>
                  </div>
                </div>
              )
            })
          }
          </div>
          
        </div>
        </div>
      </div>
    </>
  )
}

export default EventPage