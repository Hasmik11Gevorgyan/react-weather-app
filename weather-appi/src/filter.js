import React, { useState } from "react";



export default function Filter({items}){
    const [searchTerm,setSearchTerm] = useState("")
    const filteredItems = items.filter((item)=> {
        item.includes(searchTerm)
    })
    return(
        <div>
            <input type="text" placeholder="search"  onChange={(e)=> setSearchTerm(e.target.value)}/>
            <ul>
                {filteredItems.map((item,index)=>(
                    <li key={index}>
                    {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}