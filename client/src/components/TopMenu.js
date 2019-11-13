import React, {useState} from "react"
import {FaArrowDown} from "react-icons/fa"
import pizzahut from "../pizzahut.png"
import pizzaicon from "../pizzahuticon.png"
import HoverMenu from "./HoverMenu"




const TopMenu =() =>{
        const [hovermenu,sethovermenu] =useState(false);

        const toggleHoverMenu=()=>{
            console.log(hovermenu)
            sethovermenu(!hovermenu)
        }


    return(
        <div className="TopMenu-container">
    <div className='header'>
    <div className='header-options'>
    <h3 onClick={toggleHoverMenu}>Menu <FaArrowDown/></h3>
    <h2>Deals </h2>
    </div>
<h1><img style={{height:"75px"}} src={pizzaicon} alt="icon"/><img src={pizzahut} alt="pizza"/></h1>
    </div>
    <div className='info-row'>
    <div>
        <h3>Welcome to Pizza Hut!</h3>
        <h4>(Sign In) </h4>
    </div>
    <div>
        <h3>HUT</h3>
        <h3>REWARDS</h3> |
        <h4>Join</h4>
        </div>
    </div>
    <HoverMenu hovermenu={hovermenu}/>
        </div>
    )
}


export default TopMenu