import {Component} from 'react'
import Papa from 'papaparse'
import {Button} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'

class FileReader extends Component {
  state = {csvFile: ''}

  handleChange = event => {
    this.setState({
      csvFile: event.target.files[0],
    })
  }

  postData = async totalData => {
    const url = 'http://localhost:3001/add-multiple/'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(totalData),
    }
    const response = await fetch(url, options)
    if (response.ok) {
      console.log('Data Insertion is successful')
    }
  }

  updateData = result => {
    const {data} = result
    const csv = Papa.unparse(data, [
      {
        quotes: false,
        quoteChar: '"',
        escapeChar: '"',
        delimiter: ',',
        header: true,
        newline: '\r\n',
        skipEmptyLines: false,
        columns: null,
      },
    ])
    let newStr = csv.replace(/"/g, '')
    newStr = newStr.replace(/}/g, '},')
    newStr = newStr.split(',')

    const arrVal = []

    newStr.map(each => {
      const eachVal = each.split('\r\n')
      const obj = {}
      eachVal.map(every => {
        const splitVal = every.split(':')
        if (splitVal.length === 2) {
          obj[splitVal[0].trim()] = splitVal[1].trim()
        }
        return null
      })
      arrVal.push(obj)
      return each
    })

    this.postData(arrVal)
  }

  importCSV = () => {
    const {csvFile} = this.state
    Papa.parse(csvFile, {
      complete: this.updateData,
      header: true,
    })
  }

  render() {
    return (
      <div className="file-reader-con d-flex flex-column align-items-center">
        <h2 className="home-heading">Upload JSON FILE</h2>
        <div className="d-flex flex-column align-items-center">
          <div className="text-center ml-4 p-3">
            <input
              className="my-4 handle-input"
              type="file"
              name="file"
              onChange={this.handleChange}
            />
          </div>
          <Button className="mb-3" type="button" onClick={this.importCSV}>
            Upload now!
          </Button>
        </div>
      </div>
    )
  }
}

export default FileReader
