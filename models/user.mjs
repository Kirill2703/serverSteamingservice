import mongoose from "mongoose";
import bcrypt from "bcrypt"

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  activate: {type: Boolean, default:false},
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{4,}$/.test(
          v
        );
      },
      message: (props) => `${props.value} is not a valid password!`,
    },
  },
  createdAt: { type: Date, default: new Date() },
  subscribe: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subscribe" }]
});

// schema.pre('save', async function () {
//   this.password = await bcrypt.hash(this.password, 10)
// })

const User = mongoose.model('User', schema)

export default User