import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => {
  const accessToken = Cookies.get('jwt_token')

  if (accessToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Home Page protected by auth</h1>
          
          <p className="home-description">
             Home page dashbord
          </p>
       
        </div>
       
      </div>
    </>
  )
}

export default Home
