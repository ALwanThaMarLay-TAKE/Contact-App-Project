import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const nav = useNavigate()
  return (
    <div>
       
          <button onClick={() => {
            nav('/')
        }}>
             sign in
        </button>
    </div>
  )
}

export default SignUp