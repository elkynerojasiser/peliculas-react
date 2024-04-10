import React from 'react'
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import {MoviesListApp} from '../components/MoviesListApp'
import { PaginationApp } from '../components/PaginationApp'
export const ActualMoviesApp = () => {
  const [page, SetPage] = useState(1)
  const { data, isLoading, errors } = useFetch(`now_playing`,page)
  const updatePage = (newPage) => {
    SetPage(newPage)
  }
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <h1 className="text-center">
            En Cartelera
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
