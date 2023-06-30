import axios from "axios";
import { parseCookies } from "nookies";

type routesType = "signin" | "signup" | "getuser";

const { "easyevent.token": token } = parseCookies();

export const apiEasyEvent = axios.create({ baseURL: "http://localhost:5000" });

if (token) apiEasyEvent.defaults.headers["Authorization"] = `Bearer ${token}`;

export async function apiRequest(requestMethod: "get" | "post" | "delete" | "update", route: routesType, data?: object) {
  let promise;

  switch (requestMethod) {
    case "get":
      promise = await apiEasyEvent.get(`/${route}`);
      break;
    case "post":
      promise = await apiEasyEvent.post(`/${route}`, data);
      break;
    case "delete":
      promise = await apiEasyEvent.delete(`/${route}`);
      break;
    case "update":
      promise = await apiEasyEvent.put(`/${route}`, data);
      break;
    default:
      throw new Error("Invalid request method");
  }

  return promise;
}

// export async function apiPost(route: string, data: object) {
//   const promise = await apiEasyEvent
//     .post(`/${route}`, data)
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       return err;
//     });

//   return promise;
// }
