import axios from "axios";
import * as requests from "./userRequest";

async function getUsers() {
  try {
    const response = await axios.post(
      "https://nodeservices.netlify.app/api/graphql/users",
      {
        query: requests.GET_ALL_USERS(),
      },
      {
        crossdomain: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching quote:", error);
    throw error;
  }
}

export const userServices = {
  getUsers,
};
