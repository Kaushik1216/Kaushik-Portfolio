import React from 'react'
import '../style/contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
export default function Contact(props) {
  const form=useRef()
   const sendmail =(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_8yv3on1', 'template_71fj839', form.current, '46M5VR9yZGLRuZYYn')
      .then((result) => {
         alert("your email send")
      }, (error) => {
          alert("Error occure")
      });
   }
  return (
    <>
    <div className="container-fluid mx-auto">
    <div className="first">
      
     
      <div className="form-container">
        <div className="row mx-auto">
          
          <div className="col-md-6 col-12">
          <div className="text">
         <h1 className="pageinfo">Contact me</h1>
         <h6>I have intrest to do freeliancing and contribute in open-source
          if you any want my contribution or have any question contact me!
         </h6>
      </div>
            <form ref={form} onSubmit={sendmail} id="form">
              <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-12">
                <div className='inputgroup'>
                <input type="text" placeholder='Full name' name='name' required/>
                            </div>          
                </div>
                <div className="col-md-6 col-12">
                <div className='inputgroup'>
                <input type="email" placeholder='Email' name='email' required/>
             </div>  
             
            
        </div>
       
              </div>
              <div className="row">
              <div className="inputgroup" id="subject">
                <input type="text" placeholder='Subject'name='subject' required/>
              </div>
              </div> 
              <div className="row" id="textarea">
               <div className="col">
                <textarea  className="area" rows="6"  style={{  width:"100%"}}name='text' placeholder="Message" required></textarea>
                </div>
              
              </div>
              <div className="row mt-2 pd-2 button" >
                <div className="col button2" >
                <button type="Submit" className=' form-btn'>Send</button>
                </div>
                </div>    
                </div>                                                                                      
            </form>
          </div>
          {/* <div className="col-md-2 col-12"></div> */}
          <div className="col-md-6 col-12 ">
            <div className="row">

            </div>
            <div className="row">
              <div className="h5">
              Feeling social? Find me on these online spaces too!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
