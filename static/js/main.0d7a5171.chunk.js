(this["webpackJsonpehtesham1996.github.io"]=this["webpackJsonpehtesham1996.github.io"]||[]).push([[0],{21:function(e,a,t){e.exports=t(45)},26:function(e,a,t){},34:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var r=t(0),o=t.n(r),l=t(12),n=t.n(l),i=(t(26),t(2)),s=t(3),m=t(5),c=t(4),u=t(13),d=t(8),_=t.n(d),p=t(14),h=t.n(p),v=(t(34),t(35),function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{id:"home"},o.a.createElement("nav",{id:"nav-wrap"},o.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),o.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),o.a.createElement("ul",{id:"nav",className:"nav"},o.a.createElement("li",{className:"current"},o.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),o.a.createElement("li",null,o.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),o.a.createElement("li",null,o.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),o.a.createElement("li",null,o.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),o.a.createElement("li",null,o.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),o.a.createElement("li",null,o.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),o.a.createElement("div",{className:"row banner"},o.a.createElement("div",{className:"day"},o.a.createElement("main",{className:"App-main"},o.a.createElement("h1",{className:"intro"},"Hi, I'm\xa0",e.name),o.a.createElement("div",{className:"tagline"},o.a.createElement(h.a,null,e.roles.map((function(e){return o.a.createElement(_.a,{cursor:{blink:!0},key:e},e,o.a.createElement(_.a.Backspace,{count:e.length+1,delay:1e3}))})))),o.a.createElement("div",{className:"icons-social"},e.socialLinks&&e.socialLinks.map((function(e){return o.a.createElement("a",{key:e.name,target:"_blank",rel:"noopener noreferrer",href:"".concat(e.url)},o.a.createElement("i",{className:e.className}))})))))),o.a.createElement("p",{className:"scrolldown"},o.a.createElement("a",{className:"smoothscroll",href:"#about"},o.a.createElement("i",{className:"icon-down-circle"})))))}}]),t}(r.Component)),f=function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.resumeData.name,a="images/".concat(this.props.resumeData.image),t=this.props.resumeData.aboutme,r=this.props.resumeData.address.city,l=this.props.resumeData.address.state,n=this.props.resumeData.address.zip,i=this.props.resumeData.phone,s=this.props.resumeData.email,m=this.props.resumeData.resumedownload;return o.a.createElement("section",{id:"about"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"three columns"},o.a.createElement("img",{className:"profile-pic",src:a,alt:"".concat(e,"'s Profile Pic")})),o.a.createElement("div",{className:"nine columns main-col"},o.a.createElement("h2",null,"About Me"),o.a.createElement("p",null,t),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"columns contact-details"},o.a.createElement("h2",null,"Contact Details"),o.a.createElement("p",{className:"address"},o.a.createElement("span",null,e),o.a.createElement("br",null),o.a.createElement("span",null,r,o.a.createElement("br",null),l,",",n),o.a.createElement("br",null),o.a.createElement("span",null,i),o.a.createElement("br",null),o.a.createElement("span",null,o.a.createElement("a",{href:"mailto:tbakerx@gmail.com"},s)))),o.a.createElement("div",{className:"columns download"},o.a.createElement("p",null,o.a.createElement("a",{href:m,className:"button"},o.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),t}(r.Component),g=function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return o.a.createElement("section",{id:"resume"},o.a.createElement("div",{className:"row work"},o.a.createElement("div",{className:"three columns header-col"},o.a.createElement("h1",null,o.a.createElement("span",null,"Work"))),o.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map((function(e){return o.a.createElement("div",{key:e.Website,className:"row item"},o.a.createElement("div",{className:"twelve columns"},o.a.createElement("h3",null,o.a.createElement("a",{href:e.Website},e.CompanyName)),o.a.createElement("p",{className:"info"},e.specialization,o.a.createElement("span",null,"\u2022"),o.a.createElement("em",{className:"date"},e.MonthOfJoining,",",e.YearOfJoining," ","-",e.WorkingCurrently?"Present":"".concat(e.MonthOfLeaving,"-").concat(e.YearOfLeaving))),o.a.createElement("p",null,e.Achievements)))})))),o.a.createElement("div",{className:"row education"},o.a.createElement("div",{className:"three columns header-col"},o.a.createElement("h1",null,o.a.createElement("span",null,"Education"))),o.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map((function(e){return o.a.createElement("div",{key:e.UniversityName,className:"row item"},o.a.createElement("div",{className:"twelve columns"},o.a.createElement("h3",null,e.UniversityName),o.a.createElement("p",{className:"info"},e.specialization,o.a.createElement("span",null,"\u2022")," ",o.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing))))})))),o.a.createElement("div",{className:"row skill"},o.a.createElement("div",{className:"three columns header-col"},o.a.createElement("h1",null,o.a.createElement("span",null,"Skills"))),o.a.createElement("div",{className:"nine columns main-col"},o.a.createElement("p",null,e.skillsDescription),o.a.createElement("div",{className:"row"},e.skills&&e.skills.map((function(e){return o.a.createElement("div",{key:e.skillName,className:"two column software-skill-inline align-center"},o.a.createElement("div",null,o.a.createElement("img",{src:e.imgurl,className:"skillimage",alt:"skillimage"}),o.a.createElement("h6",null,e.skillName)))}))))))}}]),t}(r.Component),w=function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{id:"portfolio"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"twelve columns collapsed"},o.a.createElement("h1",null,"Projects will be uploaded soon!",o.a.createElement("br",null)," ","You can check them on CV currently."))))}}]),t}(r.Component),y=t(19),k=t(15),E=t(16),b=t(17),N=t.n(b),S=function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return o.a.createElement("section",{id:"testimonials"},o.a.createElement("div",{className:"text-container"},o.a.createElement("div",{className:"header-col"},o.a.createElement("h1",null,o.a.createElement("span",null,"Client Testimonials"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",null,o.a.createElement(y.a,{pauseOnHover:!0,getControlsContainerStyles:function(e){switch(e){case"CenterLeft":return{"margin-left":"-70px"};case"CenterRight":return{"margin-right":"-70px"};case"BottomCenter":default:return{display:"None"}}},defaultControlsConfig:{pagingDotsStyle:{fill:"white"}}},e.testimonials&&e.testimonials.map((function(e){return o.a.createElement("div",{key:e.username,className:"align-center"},o.a.createElement("div",null,o.a.createElement(E.a,{name:e.username,imgSrc:e.user_image_url,options:{tooltip:!0}})),o.a.createElement("cite",null,e.username),o.a.createElement("div",null,o.a.createElement(k.a,{countryCode:e.reviewer_country_code,svg:!0,style:{width:"2em",height:"2em"}})),o.a.createElement("div",null,o.a.createElement("blockquote",null,o.a.createElement("p",null,o.a.createElement("i",{className:"fa fa-quote-left super"})," ",e.comment," ",o.a.createElement("i",{className:"fa fa-quote-right super"})))),o.a.createElement("div",{className:"bottom"},o.a.createElement(N.a,{rating:e.value,starRatedColor:"gold",numberOfStars:5,starDimension:"20px",starSpacing:"5px",name:"rating"})))}))))," ")," ")," ")}}]),t}(r.Component),O=t(6),F=function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).submitForm=e.submitForm.bind(Object(O.a)(e)),e.state={status:""},e}return Object(s.a)(t,[{key:"submitForm",value:function(e){var a=this;e.preventDefault();var t=e.target,r=new FormData(t),o=new XMLHttpRequest;o.open(t.method,t.action),o.setRequestHeader("Accept","application/json"),o.onreadystatechange=function(){o.readyState===XMLHttpRequest.DONE&&(200===o.status?(t.reset(),a.setState({status:"SUCCESS"})):a.setState({status:"ERROR"}))},o.send(r)}},{key:"render",value:function(){var e=this.state.status,a=this.props.resumeData;return o.a.createElement("section",{id:"contact"},o.a.createElement("div",{className:"row section-head"},o.a.createElement("div",{className:"ten columns"},o.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"twelve columns"},o.a.createElement("form",{onSubmit:this.submitForm,action:a.formSpreeUrl,method:"POST"},o.a.createElement("label",null,"Email:"),o.a.createElement("input",{type:"email",name:"email"}),o.a.createElement("label",null,"Message:"),o.a.createElement("textarea",{type:"text",name:"message",style:{minHeight:"200px"}}),"SUCCESS"===e?o.a.createElement("p",null,"Thanks!"):o.a.createElement("button",null,"Submit"),"ERROR"===e&&o.a.createElement("p",null,"Ooops! There was an error."))),o.a.createElement("aside",{className:"twelve columns footer-widgets"},o.a.createElement("div",{className:"widget"},o.a.createElement("h4",null,"Linked in:",o.a.createElement("a",{href:a.linkedinId},a.name))))))}}]),t}(r.Component),q=function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return o.a.createElement("footer",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"twelve columns"},o.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map((function(e){return o.a.createElement("li",{key:e.url},o.a.createElement("a",{href:e.url},o.a.createElement("i",{className:e.className})))})))),o.a.createElement("div",{id:"go-top"},o.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},o.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(r.Component),j={imagebaseurl:"https://ehtesham1996.github.io/",name:"Ehtesham",image:"profilepic.jpg",roles:["Software Engineer","Web Developer","Full Stack Developer","MERN Stack Developer","Python Developer","Backend Engineer"],formSpreeUrl:"https://formspree.io/xbjzaddd",resumedownload:"https://drive.google.com/file/d/1pnXFkQdhVCvYbdR1V-jrs2VQn48Fc1L4/view?usp=sharing",linkedinId:"https://www.linkedin.com/in/ehtesham-hussain-a54126115/",skypeid:"Your skypeid",roleDescription:"I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.",socialLinks:[{name:"facebook",url:"https://www.facebook.com/ehtesham1996",className:"fa fa-facebook-square"},{name:"linkedin",url:"https://www.linkedin.com/in/ehtesham-hussain-a54126115/",className:"fa fa-linkedin"},{name:"stack-overflow",url:"https://stackoverflow.com/users/13173774/ehtesham",className:"fa fa-stack-overflow"},{name:"github",url:"https://github.com/ehtesham1996",className:"fa fa-github"},{name:"twitter",url:"https://twitter.com/ehteasham1996",className:"fa fa-twitter"},{name:"fiverr",url:"https://www.fiverr.com/expertsarea",className:"fa fa-fonticons"}],aboutme:"Software engineering graduate with an emphasis in web development and database security. Dedicated to implementing new strategies and improving communications between departments. Experienced in NodeJs,Python,ReactJS,MongoDB,Amazon Web Services",address:{city:"Rawalpindi",state:"Punjab ,Pakistan",zip:"46000"},phone:"+923025016114",email:"ehteasham@gmail.com",website:"https://rbhatia46.github.io",education:[{UniversityName:"COMSATS Institute of Information Technology, Islamabad",specialization:"Bachelor of Science in Computer Science (BCS)",MonthOfPassing:"Jul",YearOfPassing:"2019"},{UniversityName:"F.G Sir Syed College, The Mall, Rawalpindi",specialization:"Intermediate of Computer Science (ICS)",MonthOfPassing:"Aug",YearOfPassing:"2015"}],work:[{CompanyName:"BASKT",Website:"https://baskt.com",specialization:"Backend Developer / NodeJs Developer / AWS",YearOfJoining:"2019",MonthOfJoining:"June",WorkingCurrently:!0,MonthOfLeaving:"",YearOfLeaving:"",Achievements:"Serving\xa0as\xa0Back-end developer mainly on NodeJs and AWS based services. Learned to manage and deploy serverless architectures on AWS Lambda and using API gateway as an endpoint to build REST\xa0API. Used and developed skills in using NoSQL databases such as MongoDB, DynamoDB. Have great experience with source control tools such as Github and Codecommit. Have experience with other useful services such as Redis.io, Socket.io, ElasticSearch.\xa0Other than that developed skills in dealing with clients and Learnt to adapt to the organization's culture."},{CompanyName:"Fiverr",specialization:"Freelancing",Website:"https://fiverr.com/expertsarea",YearOfJoining:"2018",MonthOfJoining:"DEC",WorkingCurrently:!0,MonthOfLeaving:"",YearOfLeaving:"",Achievements:"Delivered over 50+ projects on Fiverr for my clients from concept to completion with positive ratings."}],skillsDescription:"FULL STACK DEVELOPER WHO WANT TO KEEP EXPLORING ",skills:[{skillName:"html-5",imgurl:"https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png"},{skillName:"css3",imgurl:"https://pngimage.net/wp-content/uploads/2018/06/logo-css-png-5.png"},{skillName:"JavaScript",imgurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"},{skillName:"reactjs",imgurl:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"},{skillName:"nodejs",imgurl:"https://images.tutorialedge.net/images/node.png"},{skillName:"npm",imgurl:"https://miro.medium.com/max/900/1*9W9ar6kWg8RTB3vYYwti-w.png"},{skillName:"mongodb",imgurl:"https://seeklogo.net/wp-content/uploads/2015/10/mongodb-logo-vector-download.jpg"},{skillName:"aws",imgurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/1280px-AWS_Simple_Icons_AWS_Cloud.svg.png"},{skillName:"firebase",imgurl:"https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png"},{skillName:"python",imgurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"},{skillName:"docker",imgurl:"https://cdn.worldvectorlogo.com/logos/docker.svg"},{skillName:"github",imgurl:"https://pngimg.com/uploads/github/github_PNG20.png"}],portfolio:[{name:"project1",description:"mobileapp",imgurl:"images/portfolio/coffee.jpg"},{name:"project2",description:"mobileapp",imgurl:"images/portfolio/project.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/project2.png"},{name:"project4",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"}],testimonials:[{id:"5da634a3353dad0001aae9ea",comment:"This guy will melt one thousand computers to help you out!",username:"aigarzon",user_image_url:null,created_at:"2019-10-15T21:07:51.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"FR",reviewer_country:"France",encrypted_order_id:"FO7125F01E244"},{id:"5e49b44aefc9f40001830883",comment:"Second order, completed sucessfully. He really understood the chores.",username:"aigarzon",user_image_url:null,created_at:"2020-02-16T23:19:02.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"FR",reviewer_country:"France",encrypted_order_id:"FO61660474D37"},{id:"5e1f1f56f162820001806aac",comment:"Nice work. Everything great. Advanced knowledge in Python.",username:"paxat1",user_image_url:null,created_at:"2020-01-15T14:22:38.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"NO",reviewer_country:"Norway",encrypted_order_id:"FO48883AEC71"},{id:"5df900c574cda5000195f0cd",comment:"Great communication and fast response whenever you wanted to ask something. The product I bought and then received was also amazing and everything worked fine!",username:"razman03",user_image_url:null,created_at:"2019-12-17T16:23:48.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"SE",reviewer_country:"Sweden",encrypted_order_id:"FO1516D06BF2"},{id:"5de8f6d898f28c00017dab91",comment:"delivered quickly and made sure to do the work properly",username:"ahmedalkhars",user_image_url:null,created_at:"2019-12-05T12:31:14.0000",value:4.7,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"US",reviewer_country:"United States",encrypted_order_id:"FO16C4791583"},{id:"5dd601b2b25b960001be207c",comment:"Absolute pleasure to deal with. 5 stars!!",username:"scarlettmusic",user_image_url:null,created_at:"2019-11-21T04:03:30.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"AU",reviewer_country:"Australia",encrypted_order_id:"FO8F2777ED41"},{id:"5dd4bbc6b25b960001bdfb5a",comment:"friendly professional and gave me a discount for a quality work. delivered the work as stated that he would. thanks mate.",username:"rxlhfao",user_image_url:null,created_at:"2019-11-20T04:06:57.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"SG",reviewer_country:"Singapore",encrypted_order_id:"FO26BD009C82"},{id:"5dd16df8338c170001ac48c0",comment:"Awesome work!",username:"afreecuntree",user_image_url:"https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/0be5e77533daf68ae837b070b2c57690-813857381573879054.1944919/7C520950-4798-4C0B-9A27-8DB95406F381",created_at:"2019-11-17T15:58:47.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"SG",reviewer_country:"Singapore",encrypted_order_id:"FO817959BFBA6"},{id:"5dd0e54224289b000196a6bf",comment:"Thank you for the timely delivery once again. :) Even though I had to made changes twice, he was patient with me and edited the changes with no questions asked. Highly recommended. :)",username:"terry_c",user_image_url:null,created_at:"2019-11-17T06:37:25.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"BS",reviewer_country:"Bahamas",encrypted_order_id:"FO510D890A9A5"},{id:"5dc797cf11dc4000011ec6ef",comment:"He is a very knowledgeable person whom cares to explain whatever you need to understand !",username:"brawnyth",user_image_url:null,created_at:"2019-11-10T04:54:50.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"SG",reviewer_country:"Singapore",encrypted_order_id:"FO515DC4D6CD8"},{id:"5dc7534a79430c0001bcc519",comment:"Seller response very fast and be patiented.",username:"williamwangkai",user_image_url:null,created_at:"2019-11-10T00:10:10.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"SG",reviewer_country:"Singapore",encrypted_order_id:"FO410D0EE72E6"},{id:"5dc733bd24289b000195a836",comment:"Work was delivered earlier than expected and program works well according to requirements. Thank you for the great help and highly recommended. Will come back for repeat order. :)",username:"terry_c",user_image_url:null,created_at:"2019-11-09T21:47:20.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"BS",reviewer_country:"Bahamas",encrypted_order_id:"FO6F22609F83"},{id:"5dc0539b83aa04000113fe24",comment:"Absolutely amazing, he will help you right up until the task/project requirements are fulfilled. He always hears with you and gives you follow-up throughout the process. He leaves comments in his work, which make it easier to understand and learn at the same time. Communication is also on top. It felt like talking to a friend, to be honest. I will definitely use expertsarea again. Two thumbs up from me!",username:"flooda94",user_image_url:null,created_at:"2019-11-04T16:37:18.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"NO",reviewer_country:"Norway",encrypted_order_id:"FO8192C520EF7"},{id:"5db68a317c70550001798db6",comment:"Great work by this man!",username:"fredrikedlund",user_image_url:null,created_at:"2019-10-28T06:29:59.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"SE",reviewer_country:"Sweden",encrypted_order_id:"FO6F1416F663"},{id:"5db1f518f1400700019f89e8",comment:"It was very easy and he was understanding of functions.",username:"ohhkevy",user_image_url:null,created_at:"2019-10-24T19:17:01.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"CA",reviewer_country:"Canada",encrypted_order_id:"FO6F11C8A403"},{id:"5da0ab4f7f046e0001ecbf45",comment:"Great communication & delivery",username:"bin_omar",user_image_url:null,created_at:"2019-10-11T16:18:47.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"SA",reviewer_country:"Saudi Arabia",encrypted_order_id:"FO3858571512"},{id:"5d98f0d3a805560001d8ed86",comment:"Very quick responses, timely work delivery, and amazing work performance and quality. Would highly recommend.",username:"buzzbuzz1",user_image_url:null,created_at:"2019-10-05T19:38:32.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"US",reviewer_country:"United States",encrypted_order_id:"FO3D54558705"},{id:"5d71b10a8fff900001a233b9",comment:"Good. Thanks.",username:"zmarcoz",user_image_url:null,created_at:"2019-09-06T03:45:10.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"US",reviewer_country:"United States",encrypted_order_id:"FO4108552B306"},{id:"5d5802843c13f2000168b0b5",comment:"Good job. Thanks",username:"zmarcoz",user_image_url:null,created_at:"2019-08-17T14:10:51.0000",value:5,work_sample:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_medium,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/e18fa7043eee0d5ce10c6516d10da1b4-1565892809/100_.PNG",work_sample_small:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_small,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/e18fa7043eee0d5ce10c6516d10da1b4-1565892809/100_.PNG",score:0,reviewer_country_code:"US",reviewer_country:"United States",encrypted_order_id:"FO613BB9FDC06"},{id:"5d02bc920ff69200019d0267",comment:"Exceptional commitment and great Python expertise. Will work with him again anytime. Thank you!",username:"wolfgangmaennel",user_image_url:"https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/profile/photos/65215616/original/18198640_10154434914725965_8367619549936263643_n.jpg",created_at:"2019-06-13T21:18:22.0000",value:5,work_sample:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_medium,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/1d1a380e4eff43a2ed27b87b93eefd69-1560251875/Capture.PNG",work_sample_small:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_small,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/1d1a380e4eff43a2ed27b87b93eefd69-1560251875/Capture.PNG",score:0,reviewer_country_code:"DE",reviewer_country:"Germany",encrypted_order_id:"FO2CF7211B06"},{id:"5cf824e54fed36000193a900",comment:"Great and very capable guy. This is the second time I have worked with him and it will certainly not be the last time. I look forward to more projects together. Thanks!",username:"wolfgangmaennel",user_image_url:"https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/profile/photos/65215616/original/18198640_10154434914725965_8367619549936263643_n.jpg",created_at:"2019-06-05T20:25:24.0000",value:5,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"DE",reviewer_country:"Germany",encrypted_order_id:"FO2CF41DDB86"},{id:"5cd3dc9e8f8ffc0001ae4ad3",comment:"The seller is good at what is doing.GREAT JOB",username:"mofetoluwa27",user_image_url:null,created_at:"2019-05-09T07:54:44.0000",value:4.3,work_sample:null,work_sample_small:null,score:0,reviewer_country_code:"GB",reviewer_country:"United Kingdom",encrypted_order_id:"FO2CDEF16E86"},{id:"5ccde25707d2530001bd3d6a",comment:"Even though the project was complicated, he provided high quality code and was quick in his responses. I would definitely recommend!",username:"bijlesaanhuis",user_image_url:"https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/461f7dc4afa0d9701f544638cb5ddab6-1568232056466/888f84c4-69e6-4648-9620-28c01b0aada7.jpg",created_at:"2019-05-04T19:13:07.0000",value:5,work_sample:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_medium,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/e337bdd283ef7656a9f248d1b0388a34-1556890359/delivery_image.png",work_sample_small:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_small,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/e337bdd283ef7656a9f248d1b0388a34-1556890359/delivery_image.png",score:0,reviewer_country_code:"NL",reviewer_country:"Netherlands",encrypted_order_id:"FO5100F87E325"},{id:"5ca11be5111c51000128dd26",comment:"This project was tricky and wasn't easy. He was able to help and also check with me until the project meet the criteria that I wanted. best python programmer on fiverr.",username:"azozalsaed",user_image_url:"https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/profile/photos/64971034/original/1779953_715848218459203_577565510_n.jpg",created_at:"2019-03-31T19:58:54.0000",value:5,work_sample:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_medium,q_auto,f_auto,q_auto,f_auto/v1/deliveries/102005629/original/Capture.PNG",work_sample_small:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_small,q_auto,f_auto,q_auto,f_auto/v1/deliveries/102005629/original/Capture.PNG",score:null,reviewer_country_code:"US",reviewer_country:"United States",encrypted_order_id:"FO19905F79C5"},{id:"5c97de17871f9d00011d9a50",comment:"Seller was very responsive and delivered my project quickly. I would highly recommend working with him.",username:"jessirojas",user_image_url:"https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/45ff6dbc5ac9ae30276783f4365e2316-1551821383632/26d1bdf3-68ec-435b-880d-e4e6b20eb4d7.JPG",created_at:"2019-03-24T19:53:19.0000",value:5,work_sample:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_medium,q_auto,f_auto,q_auto,f_auto/v1/deliveries/101801797/original/delivery_image.PNG",work_sample_small:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_small,q_auto,f_auto,q_auto,f_auto/v1/deliveries/101801797/original/delivery_image.PNG",score:null,reviewer_country_code:"US",reviewer_country:"United States",encrypted_order_id:"FO81180AED8E3"},{id:"5c8491fd3928650001e18c06",comment:"I'm a repeat customer.  I can't say anything more positive about this guy.  From his timely communication, his design skills to the finished product.  It's all a smooth process.  DEFINITELY recommended!",username:"wirelesscop",user_image_url:"https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/703c56c7446df8299f02caf7a2adf53d-1577036920684/f8db27f3-81af-418e-a0aa-de9f6d25081d.jpg",created_at:"2019-03-10T06:28:31.0000",value:5,work_sample:null,work_sample_small:null,score:null,reviewer_country_code:"US",reviewer_country:"United States",encrypted_order_id:"FO6130351FF86"},{id:"5c81651b3928650001e0d95b",comment:"Very good.",username:"timotheehenry",user_image_url:"https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/profile/photos/61821975/original/photo.jpg",created_at:"2019-03-07T19:53:33.0000",value:5,work_sample:null,work_sample_small:null,score:null,reviewer_country_code:"DE",reviewer_country:"Germany",encrypted_order_id:"FO597DA3BF41"},{id:"5c81263504041b0001396189",comment:"Very great as usual. Always hire him for important and complex tasks, and he delivers timely and effectively. Outstanding work.",username:"keyston12",user_image_url:null,created_at:"2019-03-07T14:28:31.0000",value:5,work_sample:null,work_sample_small:null,score:null,reviewer_country_code:"US",reviewer_country:"United States",encrypted_order_id:"FO4E418FE885"},{id:"5c7af0258896c500013ad25f",comment:"Very advanced skills. The best on Fiverr! Really. Always outstanding and always exceeds expectations.",username:"keyston12",user_image_url:null,created_at:"2019-03-02T21:06:20.0000",value:5,work_sample:null,work_sample_small:null,score:null,reviewer_country_code:"US",reviewer_country:"United States",encrypted_order_id:"FO4E3BE6A625"},{id:"5c77916a04041b000137f5a9",comment:"Expertsarea is truly an expert. He delivered quality work in a very short period of time. Will definitely go with him again for further work.",username:"msiddi49",user_image_url:"https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/d545c0311fae6d6bd9dbb22f826ed4b8-750167801573449518.627542/E34D4BA8-7B00-4896-93A0-E07B2A78D644",created_at:"2019-02-28T07:45:23.0000",value:5,work_sample:null,work_sample_small:null,score:null,reviewer_country_code:"US",reviewer_country:"United States",encrypted_order_id:"FO3CA70AA305"},{id:"5c72d635c3dd7100017f6701",comment:"I have been customer for long now, he always deliver on time and do as he promise",username:"azozalsaed",user_image_url:"https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/profile/photos/64971034/original/1779953_715848218459203_577565510_n.jpg",created_at:"2019-02-24T18:08:00.0000",value:5,work_sample:null,work_sample_small:null,score:null,reviewer_country_code:"US",reviewer_country:"United States",encrypted_order_id:"FO5CA409D003"},{id:"5c6a60c27275a4000151d3ee",comment:"Incredible service. Python script did exactly what I wanted it to do. I can highly recommend him!",username:"wolfgangmaennel",user_image_url:"https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/profile/photos/65215616/original/18198640_10154434914725965_8367619549936263643_n.jpg",created_at:"2019-02-18T09:08:53.0000",value:5,work_sample:null,work_sample_small:null,score:null,reviewer_country_code:"DE",reviewer_country:"Germany",encrypted_order_id:"FO3115AB34D18"},{id:"5c6a1a237275a4000151c845",comment:"I am a repeat 3x customer.  I really can't say anything more positive about my experiences.  Again, I came up with an idea and he put it into motion.  Every time I sent him messages and questions ...and there have been a LOT...he replies almost immediately.  And that's with 8 hour time difference.  He's a new comer to Fiverr.  Give him a chance! A+",username:"wirelesscop",user_image_url:"https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/703c56c7446df8299f02caf7a2adf53d-1577036920684/f8db27f3-81af-418e-a0aa-de9f6d25081d.jpg",created_at:"2019-02-18T06:04:47.0000",value:5,work_sample:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_medium,q_auto,f_auto,q_auto,f_auto/v1/deliveries/100846732/original/portfolio.PNG",work_sample_small:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_small,q_auto,f_auto,q_auto,f_auto/v1/deliveries/100846732/original/portfolio.PNG",score:null,reviewer_country_code:"US",reviewer_country:"United States",encrypted_order_id:"FO3E30FFB8C6"},{id:"5c6741137275a400015179a2",comment:"third time to order from him look no further he did such an awesome work.",username:"azozalsaed",user_image_url:"https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/profile/photos/64971034/original/1779953_715848218459203_577565510_n.jpg",created_at:"2019-02-15T22:47:01.0000",value:5,work_sample:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_medium,q_auto,f_auto,q_auto,f_auto/v1/deliveries/100807508/original/output_project5.PNG",work_sample_small:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_small,q_auto,f_auto,q_auto,f_auto/v1/deliveries/100807508/original/output_project5.PNG",score:null,reviewer_country_code:"US",reviewer_country:"United States",encrypted_order_id:"FO59762816C1"},{id:"5c6697153dc3b9000168343e",comment:"He is very honesty man, and very helpful, great, great service 10/10",username:"yousefomer",user_image_url:null,created_at:"2019-02-15T10:52:27.0000",value:5,work_sample:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_medium,q_auto,f_auto,q_auto,f_auto/v1/deliveries/100762102/original/output.png",work_sample_small:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_small,q_auto,f_auto,q_auto,f_auto/v1/deliveries/100762102/original/output.png",score:null,reviewer_country_code:"US",reviewer_country:"United States",encrypted_order_id:"FO264DE57742"},{id:"5c5eab25d2a0e600013e0712",comment:"I had to contact him again after his work on my main project, this guy is very professional and helpful to work with. he will make sure to fulfill your requirements",username:"azozalsaed",user_image_url:"https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/profile/photos/64971034/original/1779953_715848218459203_577565510_n.jpg",created_at:"2019-02-09T10:31:55.0000",value:5,work_sample:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_medium,q_auto,f_auto,q_auto,f_auto/v1/deliveries/100624607/original/Screenshot_20190209_141023.png",work_sample_small:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_small,q_auto,f_auto,q_auto,f_auto/v1/deliveries/100624607/original/Screenshot_20190209_141023.png",score:null,reviewer_country_code:"US",reviewer_country:"United States",encrypted_order_id:"FO4971F6D842"},{id:"5c5da66a040bba000110f9be",comment:"the seller is awesome he is fast and done the project exactly as requested he responded fast to my questions and kept me updated!!",username:"azozalsaed",user_image_url:"https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/profile/photos/64971034/original/1779953_715848218459203_577565510_n.jpg",created_at:"2019-02-08T15:58:26.0000",value:5,work_sample:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_medium,q_auto,f_auto,q_auto,f_auto/v1/deliveries/100601950/original/Screenshot_20190208_182251.png",work_sample_small:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_small,q_auto,f_auto,q_auto,f_auto/v1/deliveries/100601950/original/Screenshot_20190208_182251.png",score:null,reviewer_country_code:"US",reviewer_country:"United States",encrypted_order_id:"FO411503D3BC7"},{id:"5c5c87620aa1630001c8e861",comment:"Very skilled and cooperative",username:"keyston12",user_image_url:null,created_at:"2019-02-07T19:34:05.0000",value:5,work_sample:null,work_sample_small:null,score:null,reviewer_country_code:"US",reviewer_country:"United States",encrypted_order_id:"FO3E27C95DA6"},{id:"5c5481bdf2559500016ff43d",comment:"Did great work. Fast, and excellent communication in english.",username:"timotheehenry",user_image_url:"https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/profile/photos/61821975/original/photo.jpg",created_at:"2019-02-01T18:15:22.0000",value:5,work_sample:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_medium,q_auto,f_auto,q_auto,f_auto/v1/deliveries/100410969/original/sample-timothee.png",work_sample_small:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_small,q_auto,f_auto,q_auto,f_auto/v1/deliveries/100410969/original/sample-timothee.png",score:null,reviewer_country_code:"DE",reviewer_country:"Germany",encrypted_order_id:"FO6114527A5A5"},{id:"5c4dbfbeb02ff200018110ee",comment:"I REALLY can't say anything MORE POSITIVE about this guy.  As I stated in my previous feedback about another custom project he created for me, he's AMAZING!  Again, I had an idea...and wasn't sure how to get it put into reality.  Awesome creativity, communication and an intense desire to give you what you're looking for. A+++++!  Thanks!",username:"wirelesscop",user_image_url:"https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/703c56c7446df8299f02caf7a2adf53d-1577036920684/f8db27f3-81af-418e-a0aa-de9f6d25081d.jpg",created_at:"2019-01-27T14:36:23.0000",value:5,work_sample:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_medium,q_auto,f_auto,q_auto,f_auto/v1/deliveries/100270185/original/Capture.PNG",work_sample_small:"https://fiverr-res.cloudinary.com/image/upload/t_smartwm/t_delivery_small,q_auto,f_auto,q_auto,f_auto/v1/deliveries/100270185/original/Capture.PNG",score:null,reviewer_country_code:"US",reviewer_country:"United States",encrypted_order_id:"FO615F1F31008"},{id:"5c4339e30c3b790001cff6b6",comment:"So I had this idea.  I initially reached out to another developer who created something that worked, BUT it was in command prompt and confusing for the end user.  Not happy with it, I found Ehtesham. I explained my frustrations and he created this AWESOME program that is SO EASY to use.  Fantastic communications, work and follow up. A+!  Thank you!",username:"wirelesscop",user_image_url:"https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/703c56c7446df8299f02caf7a2adf53d-1577036920684/f8db27f3-81af-418e-a0aa-de9f6d25081d.jpg",created_at:"2019-01-19T15:11:23.0000",value:5,work_sample:null,work_sample_small:null,score:null,reviewer_country_code:"US",reviewer_country:"United States",encrypted_order_id:"FO49636F4862"}]},D=function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(u.Helmet,null,o.a.createElement("title",null,j.name,"'s Portfolio")),o.a.createElement(v,{resumeData:j}),o.a.createElement(f,{resumeData:j}),o.a.createElement(g,{resumeData:j}),o.a.createElement(w,{resumeData:j}),o.a.createElement(S,{resumeData:j}),o.a.createElement(F,{resumeData:j}),o.a.createElement(q,{resumeData:j}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.0d7a5171.chunk.js.map