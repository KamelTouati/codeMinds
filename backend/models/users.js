const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { UserRole } = require("../utils/enums");

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: { type: String, select: false },
    profileImage: String,
    role: {
      type: String,
      enum: [UserRole.ADMIN, UserRole.STUDENT, UserRole.TEACHER],
      default: UserRole.STUDENT,
    },
    groupId: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
    modules: [{ type: mongoose.Schema.Types.ObjectId, ref: "Module" }],
  },
  {
    timestamps: true,
  }
);

//* hash the password before store it to db
userSchema.pre("save", async function (next) {
  if (this.password) {
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(this.password, salt);
    this.password = password;
  }
  next();
});

userSchema.statics.login = async function (email, password) {
  //* this key word  here have access to Users model
  const user = await this.findOne({ email }).select("+password");
  if (user != null) {
    const check = await bcrypt.compare(password, user.password);
    if (check) {
      return user;
    } else {
      throw Error("INCORRECT_PASSWORD");
    }
  } else {
    throw Error("NO_USER_WITH_THIS_EMAIL");
  }
};

userSchema.statics.resetPassword = async function (email, password) {
  let user = await this.findOne({ email });
  if (user != null) {
    //* passord will be hashed with pre "save"
    user.password = password;
    await user.save();
  } else {
    throw new Error("Email does not exist");
  }
};

const Users = mongoose.model("User", userSchema);
module.exports = Users;
