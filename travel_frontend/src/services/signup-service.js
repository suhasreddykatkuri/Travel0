import axios from "axios";

export const signupHandler = async (username, number, email, password, setAlert) => {
  try {
    console.log("camefro",username,number,email,password);
    const data = await axios.post(
      "http://localhost:3500/api/auth/register",
      {
        username: username,
        number: number,
        email: email,
        password: password,
      }
    );
    console.log("Signed Up");
    console.log(data);
    setAlert({
      open: true,
      message: `Account Created:: username - ${username}`,
      type: "success"
    })
  } catch (err) {
    console.log("error adding user to database");
  }
};
