import React from 'react'
import { Link } from 'react-router-dom'
Link
const Footer = () => {
  return (
    <div style={{height:'300px'}} className='mt-5 container w-100'>
     <div className="d-flex justify-content-between">
      {/* into */}
      <div style={{width:'380px'}}>
        <h5>
        Travel</h5>
        <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
        <p>Code licensed MIT, docs CC BY 3.0.</p>
        <p>Currently v5.3.3.</p>
      </div>
      {/* link */}
      <div className="d-flex flex-column">
        <h5>Links</h5>
        <Link to={'/'}style={{textDecoration:'none',color:'black'}}>Home page</Link>
        <Link to={'/services'}style={{textDecoration:'none',color:'black'}}>Services page</Link>
        <Link to={'/products'}style={{textDecoration:'none',color:'black'}}>Products page</Link>

      </div>
      
      {/* contact */}
      <div className="d-flex flex-column">
        <h5>Contact</h5>
        <div className="d-flex">
          <input placeholder='Enter your email' type="text" className="form-control me-2" />
          <button className='btn btn-info'><i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <a style={{textDecoration:'none',color:'black'}} target='_blank' href="https://x.com/home?lang=en"><i className="fa-brands fa-twitter"></i></a>
          <a style={{textDecoration:'none',color:'black'}} target='_blank' href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>  
          <a style={{textDecoration:'none',color:'black'}} target='_blank' href="https://www.instagram.com/"><i className="fa-brands fa-facebook"></i></a>
          <a style={{textDecoration:'none',color:'black'}} target='_blank' href="https://www.instagram.com/"><i className="fa-brands fa-linkedin"></i></a>
          <a style={{textDecoration:'none',color:'black'}} target='_blank' href="https://www.instagram.com/"><i className="fa-brands fa-github"></i></a>  
          <a style={{textDecoration:'none',color:'black'}} target='_blank' href="https://www.instagram.com/"><i className="fa-solid fa-phone"></i></a>
        </div>
      </div>
     </div>
     <p className='text-center mt-3'>Copyright &copy; July 2024 Interior Design App</p>
      </div>
  )
}

export default Footer