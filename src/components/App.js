import React from 'react'

import Menu from './Navigations/Menu'
import Header from './Header'
import About from './About'
import Books from './Books'
import Footer from './Footer'
import Navigation from './Navigation'

import filters from '../mocks/filters'
import books from '../mocks/books'

class App extends React.Component {
  constructor () {
    super()
    this.selectTab = this.selectTab.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.state = {
      books,
      filters,
      menu: { open : false }
    }
  }

  toggleMenu () {
    this.setState({ menu : { open: !this.state.menu.open } })
  }

  selectTab ( category ) {
    this.setState({
      filters: filters.map(filter => ({
        ...filter, selected: filter.category === category
      })),
      books: category === 'All'? books : books.filter( book => (book.category === category) ),
    })
  }

  render() {
    const { books, filters, menu } = this.state

    const tabItems = filters.map(filter => (
      <li className={ filter.selected? 'active': '' } key={ filter.category } onClick={ this.selectTab.bind(null, filter.category) }>
        <a href="#0">{ filter.category }</a>
      </li>
    ))

    return (
      <div id="page-wrap">

        <Menu
          pageWrapId="page-wrap"
          isOpen={ menu.open }
          toggleMenu={ this.toggleMenu }
        />

        <Navigation
          toggleMenu={ this.toggleMenu }
        />

        <Header
          title="Library"
        />

        <Books
          books={ this.state.books }
          filters={ this.state.filters }
          tabItems={ tabItems }
        />

        <About/>

        <Footer/>

      </div>
    )
  }
}

export default App
