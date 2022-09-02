import React from 'react'
import '../style/contact.css';

export default function Contact() {
   
  return (
    <>
    <div className="container-fluid mx-auto">
    <div className="first">
      
     
      <div className="form-container">
        <div className="row mx-auto">
          
          <div className="col-md-7 col-12">
          <div className="text">
         <h1>Let's Talk</h1>
         <describe>I have intrest to do freeliancing and contribute in open-source
          if you any want my contribution or have any question contact me!
         </describe>
      </div>
            <form action="/contact" method='post'id="form">
              <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-12">
                <div className='inputgroup'>
                <input type="text" placeholder='Full name' />
                            </div>          
                </div>
                <div className="col-md-6 col-12">
                <div className='inputgroup'>
                <input type="email" placeholder='Email' />
             </div>  
             
            
        </div>
       
              </div>
              <div className="row">
              <div className="inputgroup" id="subject">
                <input type="text" placeholder='Subject'style={{width:"93.5%"}}/>
              </div>
              </div> 
              <div className="row" id="textarea">
                <div className="col">
                <textarea  class="area" rows="6"style={{width:"93.5%"}} placeholder="Message"></textarea>
                </div>
              
              </div>
              <div className="row mt-2 pd-2 button">
                <button type="Submit" className=' form-btn'>Send</button>
                </div>    
                </div>                                                                                      
            </form>
          </div>
          <div className="col-md-5 col-12">photo</div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
