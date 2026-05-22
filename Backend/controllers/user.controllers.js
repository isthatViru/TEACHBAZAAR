const Users = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const BlackListToken = require("../model/blackListToken");
const register = async (req, res) => {
  const { name, email, password, role, phone } = req.body;

  const profilePhoto = req.file;

  if (!name || !email || !password || !role) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {

    const existingUser = await Users.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Users.create({
      name,
      email,
      password: hashedPassword,
      role,
      phone,
      profilePhoto: profilePhoto ? profilePhoto.buffer : null,
    });

    const token = jwt.sign(
      {
        id: newUser._id,
        role: newUser.role,
        email: newUser.email,
        name: newUser.name,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // FIXED
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",

      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        phone: newUser.phone,
        profilePhoto: newUser.profilePhoto,
      },
    });

  } catch (error) {

    console.error("Error registering user:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const logout = async (req, res) => {
  try {

    // Get token from cookies
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "No token found",
      });
    }

    // Decode token to get expiry
    const decoded = jwt.decode(token);

    // Save token in blacklist
    await BlackListToken.create({
      token,
      expiresAt: new Date(decoded.exp * 1000),
    });

    // Clear cookie
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // true in production with HTTPS
    });

    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });

  } catch (error) {
    console.error("Logout Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};



module.exports = { register,logout };