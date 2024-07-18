import axios from "axios";

export const loginHandler = async (number, password, setAlert) => {
  try {
    console.log("camelog",password,number);
    const {
      data: { accessToken, username },
    } = await axios.post(
      "http://localhost:3500/api/auth/login",
      {
        number: number,
        password: password,
      }
    );
    console.log("Logged IN");
    console.log({ accessToken, username });
    localStorage.setItem("token", accessToken);
    localStorage.setItem("username", username);
    setAlert({
      open: true,
      message: "Login Successful!",
      type: "success"
    })
    return { accessToken, username };
  } catch (err) {
    console.log("unable to login");
  }
};
