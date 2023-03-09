
// import React from 'react';
// import * as images from '../assets/images/index';


// const people = [{
//     name:"Angela Gray", image:"../assets/images/avatar-angela-grap.webp"
// },
// { name:"Anna Kim", image:"../assets/images/avatar-anna-kim.webp"
// },
// { name:"Jacob Thompson", image:"../assets/images/avatar-jacob-thompson.webp"
// },
// { name:"Kimberly Smith", image:"../assets/images/avatar-kimberly-smith.webp"
// },
// { name:"Mark Webber", image:"../assets/images/avatar-mark-webber.webp"
// },
// { name:"Nathan Peterson", image:"../assets/images/avatar-nathan-peterson.webp"
// },
// { name:"Rizky Hasanuddin", image:"../assets/images/avatar-rizky-hasanuddin.webp"
// },
// { name:"Chess", image:"../assets/images/image-chess.webp"
// }]


// const avatars = [Object.values(images).map(img =>(<img src={img} alt="avatar" key={img}/>)) ]



// const avatarWithName = Object.keys(images).map(img => {
//   const correspondingName=img.split('-')


  


//   return(
//   <div>
//   <img src={images[img]} alt="avatar"key={img}/>
//   <p id='peppy'>{correspondingName}</p>
//   </div>
//   )})

  


// const Avatar = () => {

//   const peopleArray = people.map(person => (
//     <div>
//       <img src={images[person.image]} alt="avatar" key={person.name} />
//       <p>{person.name}</p>
//     </div>
//   ))


//   return (
//     <div className="avatar">
//       {peopleArray}
//     </div>
//   )
// }
// //   return (
// //     <div className='avatar'>
// // {avatarWithName}
// //     </div>
// //   )
// // }

// export default Avatar;


import React,{useState, useEffect} from 'react'
import axios from 'axios'



const Avatar = () => {
  
  
  
  const [data, setData] = useState([])






  useEffect(() => {
    const fetchData = async() =>{
      const result = await axios("/components/data.json")
      setData(result.data)
    }
    fetchData()
  },[])



  return (
    <div>
      
    </div>
  )
}
export default Avatar
