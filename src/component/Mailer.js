import React, { useState } from 'react';
import emailjs from 'emailjs-com';

/*This Code is Written by Badal Agarwal*/

export default function Mailer() {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(// After Signing Up in EmailJS
            "service_7n171er",//change this with your Email Service Id by creating a New Email Service
            "template_l4w71ln", //change this with your Email Template Id by creating a New Template
            e.target, 
            "user_Yx4ex9c0CHeDShmearzoa" // change this with your User Id by Going in Integrations and copying the one starting with user........
            ).then( res=> {

                alert("Your Form has been Successfully Submitted. You'll be Contacted if this is not a Test/Spam Message.");
            
            }).catch(err=> alert("Form Details not Submitted! Kindly Try Again."));

    }

    return (
    <div className="container border"
            style={{marginTop: "50px",
            width: '50%',
            backgroundImage: `url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v960-ning-30.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=63dd5f402645ef52fb7dfb592aec765a')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            }}>

        <h1 style={{
                        marginTop: "25px", 
                        textAlign: "center", 
                        fontSize: "25px" 
        }}>   Emailme | Contact Form using React and Emailjs</h1>
        
            <form className="row" style={{ margin: "25px 85px 75px 100px"}} onSubmit={sendEmail}>

                <label>Name</label>
                <input type="text" name="name" className='form-control'/>

                <label>Email</label>
                <input type="email" name="user_email" className='form-control'/>
    
                <label>Message</label>
                <textarea name="message" rows="4" className='form-control'></textarea>

                <input type="submit" 
                    value="Send Now" 
                    className='form-control btn btn-primary'
                    style={{marginTop: "30px"}}/>
            </form>
    </div>

    );
}
