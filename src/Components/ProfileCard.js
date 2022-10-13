import React from 'react'
import profiles from '/home/mekha/github/pwr/my-first-app/src/fakeData.js'

console.log(profiles)
  

const ProfileCard = ({name,title,description,image}) => {
  return (
    <div style={{backgroundColor:"white" ,margin:10,borderRadius:"15px"}}>
      <div style={{display:'flex' ,justifyContent:'center'}}>
             <img src={image} alt='' height='70px' style={{borderRadius:"10px"}}></img>


<div>
   <h2 style={{marginLeft:'10px'}}>{name}</h2>
  <h4 style={{marginLeft:'10px'}}>{title}</h4>
  </div>
</div> 
<div style={{display:'flex',justifyContent:'center'}}>
  <p style={{fontSize:'10px',padding:5}}>{description} </p>
</div>
        </div>
        

       
  )
}

export default ProfileCard


