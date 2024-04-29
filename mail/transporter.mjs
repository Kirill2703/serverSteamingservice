import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "evstigneevkirilo88@gmail.com",
    pass: "sjadlslbuphqjnzt",
  },
});

export default transporter
