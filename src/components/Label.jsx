import React from 'react'
import { useNavigate } from 'react-router-dom'

function Label() {
  const navigate = useNavigate()
  return (
    <div className='navbar'>
    <h1 className="logo" onClick={() => navigate('/')}> <i className="fa-solid fa-hat-cowboy"></i> Wardrobe <span className='logospan'>Trends</span> </h1>
    </div>
  )
}

export default Label