import React from 'react'
import {useState} from 'react'

const user = {
    name:"Handsome Squidward",
    imageUrl:"https://dzevsq2emy08i.cloudfront.net/paperclip/project_image_uploaded_images/16875/carousel/1536182232_open-uri20180905-5748-1y9e30p?1536182232",
    imageSize:200
}

function Profile() {
    
  return (
    <>
    <h1>{user.name}</h1>
    <img src={user.imageUrl} alt={'photo of ' + user.name} 
    className='avatar'
    style={{
        width:user.imageSize,
        height:user.imagesize
    }}/>
    </>
  )
}

export default Profile