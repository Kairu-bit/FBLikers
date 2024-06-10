// WARNING: PLEASE DO NOT MODIFY
export async function getCookie(email, password, port) {
  try {
    const response = await fetch(`http://127.0.0.1:${port}/api/getCookie?email=${email}&password=${password}`);
    const data = await response.text();
    if (!data.includes("c_user")) {
      return "Invalid Email/ID/Number or Password";
    }
    return data;
  } catch (error) {
    return error;
  }
}
