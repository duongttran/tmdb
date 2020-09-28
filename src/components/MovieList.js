import React from 'react'

export default function MovieList(props) {
  if (props.movieList === null) {
    return <div>loading...</div>;
  }
  return (
    <div>
      {/* {props.movieList.map(item => {
        return (
          <div>{item.original_title}</div>
        )
      })} */}
    </div>
  )
}
