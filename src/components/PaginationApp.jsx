import React from 'react'

export const PaginationApp = ({updatePage}) => {
  const onChangePage = (event, page) => {
    event.preventDefault()
    updatePage(page)
  }
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
              </li>
              {Array.from(
                { length: 10 },
                (_, i) => <li className="page-item"><a href='#' onClick={ (event) => { onChangePage(event, i+1) } } className="page-link" >{i+1}</a></li>
              )}
              <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
