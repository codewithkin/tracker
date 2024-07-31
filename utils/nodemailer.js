import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "kinzinzombe07@gmail.email",
    pass: "vvdh lzyz wkod mixq",
  },
});

async function main(content, to) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Kin Leon Zinzombe" <kinzinzombe07@gmail.com>', // sender address
    to: to,
    subject: "Location", // Subject line
    text: content, // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

export default main;
