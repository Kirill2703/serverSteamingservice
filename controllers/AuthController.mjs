import User from "../Models/user.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import transporter from "../mail/transporter.mjs";

const register = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = new User(req.body);
    await user.save();
    mail(req.body.email, req.body.name);
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User Not Found",
    });
  }


  const checkPassword = await bcrypt.compare(req.body.password, user.password);

  if (!checkPassword) {
    return res.status(404).json({
      status: "error",
      message: "Password invalid",
    });
  }

  console.log(user);

  if (!user.activate) {
    return res.status(400).json({
      status: "error",
      message: "Check your e-mail",
    });
  }

  const token = jwt.sign({ userId: user._id }, "sault", { expiresIn: "24h" });

  res.json({
    token,
    user,
  });
};

 const recoverPassword = async (req, res) => {
   try {
     const { email } = req.body;

     // Найти пользователя по его email
     const user = await User.findOne({ email });

     // Проверка наличия пользователя
     if (!user) {
       return res.status(404).json({
         status: "error",
         message: "User Not Found",
       });
     }

     // Отправить уведомление пользователю о смене пароля
     await mailRecover(email, user.name);

     res.json({
       status: "success",
     });
   } catch (error) {
     res.status(500).json({
       status: "error",
       message: "Failed to update password",
     });
   }
};
 const updatePassword = async (req, res) => {
   try {
     const { email, password } = req.body;

     // Найти пользователя по его email
     const user = await User.findOne({ email });

     // Проверка наличия пользователя
     if (!user) {
       return res.status(404).json({
         status: "error",
         message: "User Not Found",
       });
     }

     user.password = await bcrypt.hash(password, 10);
     await user.save()



     // Отправить уведомление пользователю о смене пароля
     await mailUpdate(email, user.name);

     res.json({
       status: "success",
     });
   } catch (error) {
     res.status(500).json({
       status: "error",
       message: "Failed to update password",
     });
   }
 };


const getAuthUser = async (req, res) => {
  const user = await User.findById(req.user.userId);
  res.json(user);
};

const mail = async (email, name) => {
  const info = await transporter.sendMail({
    from: "testPage", 
    to: email, 
    subject: "Activate your account", 
    html: `<h2>Welcome, ${name}</h2>
  <a href='http://localhost:3000/activate?email=${email}'> Activate your account </a>`, 
  });
};

const mailRecover = async (email, name) => {
  const info = await transporter.sendMail({
    from: 'testPage', 
    to: email, // 
    subject: "Change your password", 
    html: `<h2>Hello, ${name}</h2>
  <a href='http://localhost:3000/change-password?email=${email}'> Change your password </a>`, 
  });
};
const mailUpdate = async (email, name) => {
  const info = await transporter.sendMail({
    from: "testPage",
    to: email, //
    subject: "Change your password",
    html: `<h2>Hello, ${name}</h2>
    Password  is update!
   <a href='http://localhost:3000/login> </a>`,
  });
};

const activateUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  user.activate = true;
  await user.save();
  res.send({
    status: "success",
  });
};
export default {
  register,
  login,
  getAuthUser,
  mail,
  activateUser,
  recoverPassword,
  updatePassword,
};
