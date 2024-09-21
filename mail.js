import nodemailer from 'nodemailer';

const SendMail = (name, email, message,phoneNumber) => {
  // Set up Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER_EMAIL,
      pass: 'your-email-password',
    },
  });

  // Set up email options
  const mailOptions = {
    from: email,
    to: 'AKASH@gmail.com',
    subject: `${name} submitted form`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n Contact me at ${phoneNumber}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      // Handle error (e.g., log error or return a response)
    } else {
      console.log('Email sent: ' + info.response);
      // Handle success (e.g., log success or return a response)
    }
  });
};


export default SendMail;