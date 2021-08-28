import {Component} from 'react'

import {Button} from 'react-bootstrap'
import Header from '../Header'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'

class Home extends Component {
  state = {
    formObj: {
      userIdVal: '',
      titleVal: '',
      bodyVal: '',
    },
  }

  userIdChanged = e => {
    this.setState(prevState => ({
      formObj: {...prevState.formObj, userIdVal: e.target.value},
    }))
  }

  titleChanged = e => {
    this.setState(prevState => ({
      formObj: {...prevState.formObj, titleVal: e.target.value},
    }))
  }

  bodyChanged = e => {
    this.setState(prevState => ({
      formObj: {...prevState.formObj, bodyVal: e.target.value},
    }))
  }

  formSubmit = async e => {
    e.preventDefault()
    const {formObj} = this.state
    const {userIdVal, titleVal, bodyVal} = formObj
    this.setState({
      formObj: {userIdVal: '', titleVal: '', bodyVal: ''},
    })
    const newObj = {
      userId: parseInt(userIdVal, 10),
      title: titleVal,
      body: bodyVal,
    }
    const url = 'http://localhost:3001/add-data/'
    const options = {
      method: 'POST',
      headers: {
        'CONTENT-TYPE': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(newObj),
    }
    const response = await fetch(url, options)
    console.log(response)
  }

  render() {
    const {formObj} = this.state
    const {userIdVal, titleVal, bodyVal} = formObj

    return (
      <>
        <Header />
        <div className="home-container">
          <form className="form-el" onSubmit={this.formSubmit}>
            <h1 className="form-heading">Add Data</h1>
            <label className="label-el" htmlFor="userid">
              USER ID
            </label>
            <input
              id="userid"
              placeholder="USER ID"
              onChange={this.userIdChanged}
              className="inp-el"
              type="text"
              value={userIdVal}
            />

            <label className="label-el" htmlFor="title">
              TITLE
            </label>
            <textarea
              id="title"
              placeholder="TITLE"
              onChange={this.titleChanged}
              className="inp-el"
              rows={1}
              cols={50}
              value={titleVal}
            />
            <label className="label-el" htmlFor="body">
              BODY
            </label>
            <textarea
              id="body"
              className="inp-el"
              placeholder="BODY"
              onChange={this.bodyChanged}
              rows={2}
              cols={50}
              value={bodyVal}
            />
            <Button className="submit-btn mt-3" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </>
    )
  }
}

export default Home
