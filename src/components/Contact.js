import React from 'react'
import '../style/contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
export default function Contact() {
  const form=useRef()
   const sendmail =(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_8yv3on1', 'template_71fj839', form.current, '46M5VR9yZGLRuZYYn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
   }
  return (
    <>
    <div className="container-fluid mx-auto">
    <div className="first">
      
     
      <div className="form-container">
        <div className="row mx-auto">
          
          <div className="col-md-7 col-12">
          <div className="text">
         <h1>Let's Talk</h1>
         <h6>I have intrest to do freeliancing and contribute in open-source
          if you any want my contribution or have any question contact me!
         </h6>
      </div>
            <form ref={form} onSubmit={sendmail} id="form" action="/contact">
              <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-12">
                <div className='inputgroup'>
                <input type="text" placeholder='Full name' name='name'/>
                            </div>          
                </div>
                <div className="col-md-6 col-12">
                <div className='inputgroup'>
                <input type="email" placeholder='Email' name='email'/>
             </div>  
             
            
        </div>
       
              </div>
              <div className="row">
              <div className="inputgroup" id="subject">
                <input type="text" placeholder='Subject'name='subject'style={{width:"93.5%"}}/>
              </div>
              </div> 
              <div className="row" id="textarea">
                <div className="col">
                <textarea  className="area" rows="6"style={{width:"93.5%"}} name='text' placeholder="Message"></textarea>
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
