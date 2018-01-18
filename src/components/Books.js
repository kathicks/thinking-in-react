import React from 'react'

const Books = ({books, filters, tabItems}) => (

  <section id="books">
    <div className="container">
      <div className="row">
          <div className="col-lg-12 text-center">
              <h2>Books</h2>
              <hr className="star-primary" />
          </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="nav nav-pills text-center">
            { tabItems }
          </ul>
        </div>
      </div>
      <div className="row book-list">
        { books.map( book => (
          <div className="col-xs-6 col-sm-3" key={ book.title }>
            <div className="thumbnail">
              <img alt="" className="img-responsive" src={ book.cover }/>
            </div>
          </div>
        )) }
      </div>
    </div>
  </section>
)

export default Books
