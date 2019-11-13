import React, {useState, useEffect} from "react"
import breadsticks from "../assets/breadsticks.jpeg"
import pizza from "../assets/pizza.jpeg"
import pizza2 from "../assets/pizza2.jpeg"
import pzone from "../assets/pzone.jpg"
import salad from "../assets/salad.jpeg"
import sandwich from "../assets/sandwich.jpg"
import {FaArrowRight} from "react-icons/fa"


var data=[
    {id:1,name:"pizza",description:"delicious pizza pie!", price:"7.99", image:pizza},
    {id:2,name:"pizza",description:"delicious pizza pie!", price:"7.99", image:pizza2},
    {id:3,name:"pzone",description:"pizza huts take on the classic calzone!", price:"5.99", image:pzone},
    {id:4,name:"salad",description:"watch your figure, not the flavor!!", price:"7.99", image:salad},
    {id:5,name:"sandwich",description:"yummy warm sandwiches!", price:"7.99", image:sandwich},
    {id:6,name:"breadsticks",description:"gooey dipping breadsticks!", price:"7.99", image:breadsticks},
]


const Deals =() =>{
    const [items,setItems] =useState([data]);
    const [loaded,setLoaded] =useState(false)
    const [firstBatch, setFirstBatch] =useState(false)

    useEffect(()=>{
    
       paginate(data)

    },[])

    const paginate=(data)=>{
        var dataitems=data;
        var paginated=[];
        var lastIndex=2*3;
        var firstIndex=6-3;
        paginated=dataitems.slice(firstIndex,lastIndex)
        setItems(paginated)
        setLoaded(true)
        setFirstBatch(false)
        
    }

    const moreItems=()=>{
        console.log("more items fired")
        var dataitems=data
        var paginated=[];
        var lastIndex=1*3;
        var firstIndex=3-3;
        paginated=dataitems.slice(firstIndex,lastIndex)
        setItems(paginated)
        setFirstBatch(true)
        if(firstBatch){
            paginate(data)
        }
    }

    if(!loaded){
        return "Loading..."
    }
    return(
        <div className="deals-container">
        <div className='deals-card-header'>
        <h1>DEALS</h1>
        </div>
        <div className='deals-card-body'>
        {items.map((i,index)=>(
            <div key={index} className='deal-div'>
            <img style={{width:"100%"}}src={i.image} alt="food-item"/>
            <h3>{i.name}</h3>
            <h5>{i.description}</h5>
            <button className='order-btn' data-price={i.price}><h4>Order Now</h4></button>
            </div>
        ))}
        <div className='next-items-div'>
        <div className='next-div'>
        <div className='icon-div' onClick={moreItems}>
        <FaArrowRight/>
        </div>
        <h5>All Deals</h5>
        </div>
        </div>
        </div>
        </div>
    )
}


export default Deals