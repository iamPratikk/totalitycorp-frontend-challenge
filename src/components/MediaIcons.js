import React from 'react'
import img1 from '../linkedin.png'
import img2 from '../facebook.png'
import img3 from '../pinterest.png'
import img4 from '../instagram.png'
import img5 from '../twitter.png'

function MediaIcons() {
  return (
    <div className='media-container' >
        <img src={img1} alt='Linkedin'/>
        <img src={img2} alt='Facebook'/>
        <img src={img3} alt='Pinterest'/>
        <img src={img4} alt='Instagram'/>
        <img src={img5} alt='Twitter'/>
    </div>
  )
}

export default MediaIcons