import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import UsersData from "../models/user.js";

export const sendOtp = async (req, res) => {
  const email = req.query.email;
  const otp = Math.floor(1000 + Math.random() * 9000);
  const date = new Date();
  const today = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  try {
    UsersData.findOne({ email: email }).then((data) => {
      if (data != null) {
        // Send otp data email
        const transpoter = nodemailer.createTransport({
          host: process.env.MAIL_SERVER,
          port: process.env.MAIL_PORT,
          secure: false,
          auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.MAIL_USER,
          to: email,
          subject: "OTP for verification",
          text: `We have received a request to reset your password. Your OTP is ${otp}. It  will expire on ${today}/${month}/${year}. If you did not make this request, please ignore this email. Please follow the below link to reset your password: http://localhost:3000/reset?token=${data._id}`,
        };

        transpoter.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
        data.otp = { otp: otp, date: [today, month, year] };
        data.toJSON();
        data.save();
        res.status(200).json({ message: "OTP Sent", code: 200, id: data._id });
      } else {
        let randomid = Math.floor(Math.random() * 0xfffffffffff)
          .toString(16)
          .padEnd(6, "0");
        let randomid2 = Math.floor(Math.random() * 0xfffffffffff)
          .toString(16)
          .padEnd(6, "0");
        res
          .status(200)
          .json({ message: "OTP Sent", code: 200, id: randomid + randomid2 });
      }
    });
  } catch {
    res.status(200).json({ message: "Something went wrong", code: 500 });
  }
};

export const verifyOtp = async (req, res) => {
  const id = req.query.token;
  const otp = req.query.otp;
  const password = req.query.pass;
  try {
    const data = await UsersData.findById(id);
    if (data != null) {
      const hashedPassword = await bcrypt.hash(password, 10);
      let today = new Date().getDate();
      let month = new Date().getMonth();
      let year = new Date().getFullYear();
      if (data.otp[0].otp == otp) {
        if (
          data.otp[0].date[0] != today ||
          data.otp[0].date[1] != month ||
          data.otp[0].date[2] != year
        ) {
          res.status(200).json({ message: "OTP expired", code: 500 });
        } else {
          res.status(200).json({ message: "OTP verified", code: 200 });
          data.password = hashedPassword;
          data.otp = [];
          data.toJSON();
          data.save();
        }
      } else {
        res.status(200).json({ message: "Invalid OTP", code: 500 });
      }
    }
  } catch (error) {
    res
      .status(200)
      .json({ message: `Something went wrong ${error}`, code: 500 });
  }
};
