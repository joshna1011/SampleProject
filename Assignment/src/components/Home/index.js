import {Component} from 'react'

import Header from '../Header'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import FileReader from '../FileReader'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <FileReader />
        </div>
      </>
    )
  }
}

export default Home
