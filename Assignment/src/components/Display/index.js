import {Component} from 'react'
import {Button} from 'react-bootstrap'

import Header from '../Header'
import DisplayItem from '../DisplayItem'

import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'

class Display extends Component {
  state = {obtainedData: []}

  getData = async () => {
    const url = 'http://localhost:3001/'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    this.setState({obtainedData: data})
  }

  render() {
    const {obtainedData} = this.state
    return (
      <>
        <Header />
        <div className="m-4">
          <Button onClick={this.getData} className="my-4">
            Show Data
          </Button>
          <div className="display-body-con bg-secondary text-white">
            <h1 className="display-section-heading">Extracted Data</h1>
            <ul className="display-ul">
              <li className="row-header">
                <p className="col-user">USERID</p>
                <p className="col-id">ID</p>
                <p className="col-title">TITLE</p>
                <p className="col-body">BODY</p>
              </li>

              {obtainedData.map(each => {
                const {id} = each
                return <DisplayItem key={id} data={each} />
              })}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Display
