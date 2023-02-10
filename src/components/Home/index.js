// Write your code here
import {Component} from 'react'
import './index.css'
import Login from './Login'
import Logout from './components/Logout'
import Message from './components/Message'

class Home extends Component {
  state = {text, buttonText}
  render() {
    const {text, buttonText} = this.state
    return (
      <div className="MainContainer">
        <h1>{text}</h1>
        <button>{buttonText}</button>
      </div>
    )
  }
}
export default Home
