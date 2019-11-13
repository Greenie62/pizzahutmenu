import React, {useEffect, useState} from "react"
import menu from "../menuitems/menu.json"
import deserts from "../menuitems/deserts.gif"
import gooeycrust from "../menuitems/gooeycrust.png"
import pasta from "../menuitems/pasta.jpg"
import pizzaitem from "../menuitems/pizzaitem.jpg"
import salad from "../menuitems/salad.jpeg"
import soda from "../menuitems/soda.jpeg"



const Menu =() =>{
    const [items,setItems] =useState([pizzaitem,deserts,gooeycrust,pasta,soda,salad])
    const [loaded, setLoaded] = useState(false)
    useEffect(()=>{
        var counter=0;
        console.log(menu)
        menu.forEach((i,index)=>{
            i.image=items[index]
            counter++;
        })
        if(counter === menu.length){
        setItems(menu)
        setLoaded(true)
        }
    },[])

    if(!loaded){
        return "Loading..."
    }
    return(
        <div className="menu-container">
        <h1>Menu Options</h1>
        <div className='menu-grid'>
        {items.map(i=>(
            <div key={i.id} className='menu-div'>
            <h3 className='h3-title' style={{position:"relative",top:"20px", color:"white"}}>{i.name}</h3>
            <img style={{height:"200px"}}src={i.image} alt="image" className='menu-image'/>
            </div>
        ))}
        </div>
        </div>
    )
}


export default Menu