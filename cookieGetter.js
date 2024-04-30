// WARNING: PLEASE DO NOT MODIFY IF YOU DONT WANT ANY PROBLEMS
export async function getCookie(email, password, port) {
  try {
    const response = await fetch(`http://127.0.0.1:${port}/api/getCookie?email=${email}&password=${password}`);
    const data = await response.json();
    if (data.error) {
      return "Invalid Email/ID/Number or Password";
    }
    const cookie = data.cookie.replace(/=\s+/g, '=');
    return cookie;
  } catch (error) {
    return error;
  }
}

