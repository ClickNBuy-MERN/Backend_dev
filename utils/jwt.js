// const sendToken = (user, statusCode, res) => {
//   // Create JWT token
//   const token = user.getJWTToken();

//   //setting the cookie
//   const options = {
//     expires: new Date(
//       Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true,
//   };

//   res.status(statusCode).cookie("token", token, options).json({
//     success: true,
//     token,
//     user,
//   });
// };
// module.exports = sendToken;



// utils/jwt.js
const sendToken = (user, statusCode, res) => {
  // Create JWT Token
  const token = user.getJWTToken();

  // Options for cookie
  const options = {
      expires: new Date(
          Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
      ),
      httpOnly: true
  };

  res.status(statusCode)
      .cookie('token', token, options)
      .json({
          success: true,
          token,
          user
      });
};

module.exports = sendToken;