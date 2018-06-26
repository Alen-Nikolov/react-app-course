import React from 'react';

const movie = (props) => {

  return (
    <div>
      <span>{props.movie}</span>
      <span>Free places: { props.spaces}</span>
      <button disabled={props.spaces===0} onClick={()=>props.reserve(props.movie)}>Reserve</button>
    </div>
  )
}

export default movie;
