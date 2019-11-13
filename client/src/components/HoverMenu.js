import React, {useState} from "react"



const HoverMenu =(props)=>{
    const [items, setItems] =useState(['Pizza',"P'zone","Wings","Salads", "Sides", "Pastas", "Deserts", "Drinks"])


return(
    <div className={props.hovermenu ?'hovermenu' : "hide-hovermenu"}>
    {items.map(i=>(
    <li key={i} className='hovermenu-item'><h3>{i}</h3></li>
        ))}
    </div>
)
}

export default HoverMenu;