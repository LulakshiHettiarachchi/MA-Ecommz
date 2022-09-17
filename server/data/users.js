import bcrypt from "bcryptjs";

const users = [
  {
    name: "Abdulgafar4",
    email: "tajudeenabdulgafar4@gmail.com",
    password: bcrypt.hashSync("aa11ss22", 10),
    isAdmin: true,
  },
  {
    name: "User",
    email: "user@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
