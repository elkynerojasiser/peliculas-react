import React from 'react'
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { MoviesListApp } from '../components/MoviesListApp'
import { PaginationApp } from '../components/PaginationApp'

export const BestMoviesApp = () => {
  const [page, SetPage] = useState(1)
  const { data, isLoading, errors } = useFetch(`top_rated`,page)
  const updatePage = (newPage) => {
    SetPage(newPage)
  }
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <h1 className="text-center">
            Mejor Calificadas
          </h1>
        </div>
      </div>
      <div className="container">
        {
          isLoading ? <h4>Cargando ... </h4>
          : 
          <div>
            <MoviesListApp movies={data.results} />
            <PaginationApp updatePage={updatePage}/>
          </div>
        }
        
      </div>
    </>
  )
}
