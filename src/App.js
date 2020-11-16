import React, { useState, useEffect }  from 'react';
import './App.css';

function App() {

  let person = {
    name : "rahul",
    job : "developer",
    familyMember : 6
  }

  let details = [
    "name : rahul",
    "job : developer", 
    "familyMember : 6"
  ]

  let h3style = {
    color : "white",
    backgroundColor : "gray",
    padding : "20px"
  };

  const batsman = ['Tamim', 'Liton', 'Sakib', 'Shommo', 'Mushfiq', 'Mahamudullah']

  const items = [
    {name : "Iphone", price : "$1200"},
    {name : "Nokia 9", price : "$900"},
    {name : "GoogleNexus", price : "$1400"},
    {name : "Rolex", price : "$24000"},
    {name : "Titan", price : "$4000"}
  ]


  return (
    <div className="App">

      <State></State>
      <User></User>
    
     <h1 style = {{color :"red"}}> My heading : { (2+3)*4-8 } </h1>

     <h2> person details : {person.name + " " + person.job} </h2>

     <div style = {{display :'flex', 
                     justifyContent :'center',
                    }}>
           {
           items.map( list => <Product product = {list}></Product>)
         }
        </div>

     <h3 style = {h3style}> {details} </h3>
     
     <Country></Country>

     <Player name = "Rubel"></Player>
     <Player name = "mustafiz"></Player>
     <Player name = {batsman[4]}></Player>

      <div style = {{display :'flex', 
                     justifyContent :'center',
                    }}>
  
      

      <ul>
        {
         batsman.map(batsman => <li> {batsman} </li>) 
        }
      </ul>
      <ul>
        {
          items.map(what => <li>{what.name}</li>)
        }
      </ul>    

      </div>
    </div>
  );
}
//component 1
function Country() {
  return <div style = {{
              border: '2px solid blue',
              margin : '20px'}}>
                <h2> Bangladesh Cricket Team </h2>
        </div>
}

//component 2
function Player(pro) {
  const playerStyle = {
    border: '2px solid red',
    margin: '20px'
  }

  return (
      <div style = {playerStyle}>
      <h1>Name : {pro.name} </h1>
      <h3>Type : All-Rounder</h3>
    </div>
  )
}

//component-3
function Product (ItemProp) {

 const productStyle = {
   border : '1px solid gray',
   borderRaduis : '5px',
   backgroundColor : 'lightgray',
   height : '200px',
   width : '200px',
   marginRight :'20px',
   marginBottom :'20px'
 } 

 const {name, price} = ItemProp.product
 return (
   <div>

    <div style = {productStyle}>
      <h3> {name} </h3>
      <h5> {price} </h5>
      <button>Buy Now</button>
    </div>
   </div>
 )
}

//component-4

function State() {

  const [count, setCount] = useState(0);

  return(
    <div>
      <h1> Count: {count} </h1>
      <button onClick = {() => setCount(count + 1)}>
      Increase</button>
      <button onClick = {() => setCount(count - 1)}>
      Decrease</button>
    </div>
  )
}

//component-5
function User(){

  const [users, setUsers]= useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))

  },[])
  return(
    <div>
      <h2>Dynamic User Data {users.length}</h2>
      <ul>
        {
          users.map( user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}


export default App;
