import {Component} from 'react'

import Header from '../Header'
import DisplayItem from '../DisplayItem'

import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'

class Display extends Component {
  state = {realData: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'http://localhost:3001/'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    this.setState({realData: data})
  }

  render() {
    const {realData} = this.state
    return (
      <>
        <Header />
        <div className="display-body-con bg-secondary text-white">
          <h1 className="display-section-heading">Extracted Data</h1>
          <ul className="display-ul">
            <li className="row-header">
              <p className="col-user">USERID</p>
              <p className="col-id">ID</p>
              <p className="col-title">TITLE</p>
              <p className="col-body">BODY</p>
            </li>

            {realData.map(each => {
              const {id} = each
              return <DisplayItem key={id} data={each} />
            })}
          </ul>
        </div>
      </>
    )
  }
}

export default Display
