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

const getAuthUser = async (req, res) => {
  const user = await User.findById(req.user.userId);
  res.json(user);
};

const mail = async (email, name) => {
  const info = await transporter.sendMail({
    from: '"testPage', // sender address
    to: email, // list of receivers
    subject: "Activete your account", // Subject line
    html: `<h2>Welcome, ${name}</h2>
  <a href='http://localhost:3000/activate?email=${email}'> Activate your account </a>`, // html body
  });
};

const activateUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
    user.activate = true
    await user.save()
    res.send({
        status: 'success'
    })
}
export default { register, login, getAuthUser, mail,  activateUser };
