import React from 'react'

export const CardMovieApp = ({movie}) => {
  return (
    <>
      <div className="card m-3 card-movie">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..."/>
        <div className="card-body d-flex justify-content-center flex-column">
          <h5 className="card-title text-center">{ movie.title }</h5>
          <a href="#" className="btn btn-primary">Detalle</a>
        </div>
      </div>
    </>
  )
}
