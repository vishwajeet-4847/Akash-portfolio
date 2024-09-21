import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import ServerlessHttp from 'serverless-http';
import { fileURLToPath } from 'url';
import path from 'path';
import { configDotenv } from 'dotenv';
import SendMail from './mail.js';

configDotenv();

// if (!process.env.POSTGRES_URL) {
//     console.error('Missing POSTGRES_URL in .env file');
//     process.exit(1);
//   }

import pg from 'pg';

const { Pool } = pg;
const db = new  Pool({
    connectionString: process.env.POSTGRES_URL,
  });
db.connect((err)=>{
    if(err){
        console.log("something went wrong");
        
    }
});


const __dirname = path.dirname(fileURLToPath(import.meta.url));


const port =10000;
const app = express();


let skillCard =[
    ["bi bi-camera", "Photography","As a passionate photographer, I strive to capture the beauty and essence of the world through my lens. With a keen eye for detail and composition, I create visually stunning images that tell a story and evoke emotion. My expertise spans various photography styles, from landscapes and portraits to street and conceptual photography. I have honed my skills in using advanced camera equipment and editing software to enhance my photos and bring my creative vision to life. Photography allows me to express myself artistically and share my unique perspective with others."],
    [
       "bi bi-pen-fill", " Content Writing","As a skilled content writer, I craft compelling and engaging pieces that resonate with my audience. With a strong command of language and a creative flair, I produce high-quality content across various formats, including articles, blogs, and social media posts. My ability to research and understand diverse topics allows me to write informative and persuasive content that meets the needs of my clients and readers. I focus on creating clear, concise, and impactful writing that captures attention and drives engagement. Writing is my passion, and I take pride in delivering content that informs, entertains, and inspires."
    ],
    [
       "bi bi-youtube", " Youtuber"," As a dedicated YouTuber, I take pride in creating engaging and informative content. With a passion for video production, I combine creativity and technical skills to produce high-quality videos that captivate my audience. My proficiency in video editing, storytelling, and audience engagement has led to steady growth in subscribers and views. I'm adept at using various editing software and have a keen eye for detail, ensuring my videos have a polished and professional look. My ability to connect with viewers and provide valuable content makes me a standout creator in the YouTube community."
    ],
    [
        "bi bi-camera-reels","Video Editor","As a proficient video editor, I excel in transforming raw footage into captivating and cohesive stories. With a strong eye for detail and a deep understanding of visual storytelling, I utilize advanced editing software to enhance the quality and impact of my videos. My skills include cutting and splicing clips, adding transitions, sound design, color correction, and incorporating special effects. I am adept at matching the editing style to the content's tone and purpose, ensuring a polished and professional final product. Video editing allows me to bring creative visions to life and create engaging visual experiences for my audience."
    ]

]
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index.ejs' );
});
app.get('/home', (req, res) => {
    res.render('home.ejs',{title:"Home",skills:skillCard} );
});
app.get('/youtube', (req, res) => {

    res.render('youtube.ejs',{title:"Youtube"} );
});
app.get('/about', (req, res) => {
    res.render('about.ejs',{title:"About"} );
});
app.get('/contact', (req, res) => {
    res.render('contact.ejs',{title:"Contact"} );
});
app.get('/services', (req, res) => {
    res.render('services.ejs',{title:"Services"} );
});
app.get('/subscribe', (req, res) => {
    res.status(301).redirect("https://www.youtube.com/@TeraYaarAkashKumar")
    
});
app.get('/contactme', (req, res) => {
    res.status(301).redirect("https://vishwajeet-4847.github.io/PRODIGY_WD_04/")
    
});
app.get('/facebook', (req, res) => {
    res.status(301).redirect("https://www.facebook.com/profile.php?id=100022133301727")
    
});
app.get('/instagram', (req, res) => {
    res.status(301).redirect("https://www.instagram.com/the_aksshhh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==")
    
});
app.get('/collaboration', (req, res) => {
    res.status(301).redirect("https://www.instagram.com/chalchitradarpan?igsh=MWd5OHRsYW1lZnM5MQ==")
    
});
app.get('/whatsapp', (req, res) => {
    res.status(301).redirect("https://wa.me/+919142652153")
    
});
app.get('/linkedin', (req, res) => {
    res.status(301).redirect("https://www.linkedin.com/in/akash-kumar-1ab1642aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")
    
});


// post req handling

app.post("/submit-email", (req, res) => {
    res.render('home.ejs',{title:"Home"} );
});
app.post("/contactform", (req, res) => {
    app.use(bodyParser.urlencoded({ extended: true }));
   let  Name = req.body.name;
   let  msg=req.body.message;
   let email = req.body.email;
   let PhoneNumber = req.body.phone
//    SendMail(name, email, message, phoneNumber);
   
    res.render('contact.ejs',{title:"Contact",response:Name} );
    db.query(`INSERT INTO public.subscribers(
            name, email, mobile, message)
            VALUES ($1,$2,$3,$4);`,[Name,email,PhoneNumber,msg],(err)=>{
            console.log("error",err);
        });
        
});

// export  const handler = ServerlessHttp(app);
// module.exports.handler = ServerlessHttp(app);
app.listen(port, (req, res) => {                           
    console.log(`Server is running on port ${port}`);
});

