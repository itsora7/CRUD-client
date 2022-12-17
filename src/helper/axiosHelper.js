import axios from "axios";
const apiEP = "http://localhost:8000/users";
//send new user
export const postUser = async (obj) => {
  try {
    const { data } = await axios.post(apiEP, obj);
    return data;
  } catch (error) {
    // console.log(error)

    return {
      status: "error",
      message: error.message,
    };
  }
};

//get users
export const fetchUsers = async () => {
  try {
    const { data } = await axios.get(apiEP);
    return data;
  } catch (error) {
    // console.log(error)

    return {
      status: "error",
      message: error.message,
    };
  }
};
//delete single user
export const deleteUsers = async (_id) => {
  try {
    const { data } = await axios.delete(apiEP + "/" + _id);
    return data;
  } catch (error) {
    // console.log(error)

    return {
      status: "error",
      message: error.message,
    };
  }
};
//update single user
