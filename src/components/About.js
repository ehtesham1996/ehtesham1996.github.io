import React, { Component } from 'react';
export default class About extends Component {
  render() {

    if(this.props.resumeData){
      var name = this.props.resumeData.name;
      var profilepic= "images/"+this.props.resumeData.image;
      var aboutme = this.props.resumeData.aboutme;
      var city = this.props.resumeData.address.city;
      var state = this.props.resumeData.address.state;
      var zip = this.props.resumeData.address.zip;
      var phone= this.props.resumeData.phone;
      var email = this.props.resumeData.email;
      var resumeDownload = this.props.resumeData.resumedownload;
    }
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt={name+"'s Profile Pic"} />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{aboutme}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{city}<br />
						         {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span><a href="mailto:tbakerx@gmail.com">{email}</a></span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" target="_blank"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}