const User = require('../models').User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  try {
    const { nama, email, password, confPassword } = req.body;

    if (!nama || !email || !password || !confPassword) {
      return res.status(400).json({
        status: 'error',
        message: 'data harus di isi',
      });
    }

    if (password !== confPassword) {
      return res.status(400).json({
        status: 'error',
        message: 'password dan confPasword salah',
      });
    }

    checkUserWithEmail = await User.findOne({
      where: {
        email,
      },
    });
    if (checkUserWithEmail) {
      return res.status(400).json({
        status: 'error',
        message: 'email sudah ada',
      });
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = {
      email,
      nama,
      password: hashPassword,
    };
    await User.create(newUser);

    return res.json({
      status: 'berhasil',
      message: 'user dibuat',
      data: {
        email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: 'error',
        message: 'masukkan email dan password',
      });
    }
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'email salah',
      });
    }
    const cekPassword = await bcrypt.compare(password, user.password);
    if (!cekPassword) {
      return res.status(401).json({
        status: 'error',
        message: 'password salah',
      });
    }
    const token = jwt.sign(
      {
        email,
        password,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '120s',
      }
    );

    return res.header('Authorization', token).json({
      status: 'Berhasil',
      message: ' Login Berhasil',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
module.exports = {
  registerUser,
  loginUser,
};
