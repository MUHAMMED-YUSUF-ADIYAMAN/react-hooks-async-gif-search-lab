import React from 'react'

const GifList = ({gifts}) => {
  
  return (
    <div>
      <ul>
        {gifts.data.slice(0,3).map((gift)=>(<li style={{margin:"10px"}}  key={gift.images.original.url}><img style={{"maxHeight":"200px"}}   src={gift.images.original.url} /></li>))}
      </ul>
    </div>
  )
}

export default GifList