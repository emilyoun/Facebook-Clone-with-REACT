import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.css'


// function Story(props) {
//     console.log(props)
//     return (
//      <div style={{ backgroundImage: `url(${props.img})` }} className='story'>
//              <Avatar src={props.profileSrc} />
//              <h4>{props.title}</h4>
//         </div>
//     )
// }


function Story({ img, profileSrc, title }) { // ? destructing 
    console.log(img, profileSrc, title )
    return (

        <div style={{ backgroundImage: `url(${img})` }} className='story'>
            <Avatar className='story__avatar' src={profileSrc} />
            <h4>{title}</h4>

        </div>
    )
}

export default Story