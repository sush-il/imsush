const apiURL = import.meta.env.VITE_API_URL;
const adminUsername = import.meta.env.VITE_ADMINLOGINID;
const adminPassword = import.meta.env.VITE_ADMINPASSWORD;

export const getMainData = async () => {
  try {
    const response = await fetch(
      apiURL
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Couldn't get featured projects: " + error);
  }
};

export const authorizeAdmin = async (
  enteredUsername: string,
  enteredPassword: string
) => {
  try {
    if (
      enteredUsername === adminUsername &&
      enteredPassword === adminPassword
    ) {
      return true;
    }
    return false;
  } catch (error) {
    console.log("Couldn't Login Admin: " + error);
  }
};
