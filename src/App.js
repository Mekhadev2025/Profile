import './App.css'
import {useState} from 'react'
import MyButton from './Components/MyButton'
 import ProfileCard from './Components/ProfileCard'
import profiles from '/home/mekha/github/pwr/my-first-app/src/fakeData.js'

//want to make a counter app
//1.make a button
//2.detect a buttton 
//function ()
//{ return 2 
//}

// or
//() =>{
  //  return 2 
//}



function App()
{

const [count,setCount]=useState(20)
// setCount(count +1)        // increamenting a state variable 

//regular variable


    const myAge=20
    console.log(myAge)
    



return (
<>
<h2 style ={{ color:'red' }}>{count}</h2>
<button onClick={() => {
setCount(count+1)
     
    }}>+ </button> 

<button onClick={()=> 
  {
setCount(count -1)


    }}>-</button>


<MyButton title="Buy This Tomorrow" color="red"/>
<MyButton title="SELL NOW " color="green"/>

{profiles.map(profile =>(
  <ProfileCard image={profile.image} 
  title ={profile.title} 
  name={profile.name} 
  description={profile.description}/>

))}

 
 </>


)

   
} 
export default App