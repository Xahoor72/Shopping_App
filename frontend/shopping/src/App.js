import React, { useState, useEffect } from "react";
import './App.css';
function App() {
  const [data, setdata] = useState({
    itemList : null
});
const [totalPrice,settotalPrice]=useState(0);


useEffect(() => {
    
    fetch("http://127.0.0.1:5000/").then((res) =>
        res.json().then((data) => {
            // Setting a data from api
            console.log(data.data);
            setdata((prevState)=>({...prevState, itemList : data.data}))
        })
    );
}, []);
const updateTotalPrice = (price,quantity,event) =>{
  console.log(event);
  if(event.target.checked===true)
  {
    settotalPrice(totalPrice+(quantity*price))
  }
  else {
    settotalPrice(totalPrice-(quantity*price))
  }
}
  return (
    <div className="App">
    <header className="App-header">
        <h1>Items</h1>
        
        {data.itemList!==null? data.itemList.map((item,index)=>(

         <div key= {index} style= {{border : '1px solid white'}}>
           <input
            type="checkbox"
            
            onClick={(e)=>updateTotalPrice(item.unitPrice,item.quantity,e)}
           />
           <span>{item.itemName}</span>
           <br/>
           <span>{item.unitPrice}</span>
           <br/>
           <span>{item.quantity}</span>
           <br/>
           <span>{item.isPurchased}</span>
           <br/>
           
         </div>
        )):null}
         <div>
            Total Price :{totalPrice}
         </div>
    </header>
</div>
  );
}

export default App;
