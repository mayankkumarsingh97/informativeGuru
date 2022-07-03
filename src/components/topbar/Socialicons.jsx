import React from 'react';
import { Link } from 'react-router-dom';
// import ScrollingNews from './ScrollingNews'
// import "./socialicons.css";

const Socialicons=()=> {
 
  return (
    <>
     <div className="cover01">
      
        <div className='top_left'>Linuxbymayank.com</div>
    
      <div className="search">
        <div className='my-2'>
          <input type="search"  id='top_search' className='search' placeholder='search here' />
          {/* <div className="btn btn-primary" onClick={this.clkHandler}>
            click

          </div> */}
        </div>
      </div>
      <div className="action">
      <div className="watsapp"><Link to="/facebook">facebook</Link></div>
      <div className="watsapp"><Link to="/youtube">youtube</Link></div>
      <div className="watsapp"><Link to="/insta">insta</Link></div>
      </div>
     </div>
     {/* <ScrollingNews/> */}
    </>
  )
}

export default Socialicons