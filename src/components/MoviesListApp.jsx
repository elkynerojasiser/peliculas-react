import React from 'react'
import { CardMovieApp } from './CardMovieApp'

export const MoviesListApp = ({movies}) => {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-10">
          <div className="row">
            {
              movies.map( movie => 
                <div key={movie.id} className="col-sm-12 col-md-6 col-lg-4">
                  <CardMovieApp movie={movie} />
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}
