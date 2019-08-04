import React from 'react'


const Card = (props) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${props.id}?200x200`} alt='pics' />
      <div>
        <h2>{props.name}</h2>
        <h4>{props.username}</h4>
        <p>{props.email}</p>
      </div>
    </div>
  )
}

export default Card;