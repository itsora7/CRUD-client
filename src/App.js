import "./App.css";
import { Container } from "react-bootstrap";
import { UserForm } from "./component/userForm/UserForm.js";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { fetchUsers } from "./helper/axiosHelper";
import { UserTable } from "./component/userTable/UserTable";

function App() {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const { users } = await fetchUsers();
    setUsersList(users);
  };
  console.log(usersList);
  return (
    <div className=" ">
      <section className="form mb-5">
        <Container>
          <UserForm getUsers={getUsers} />
          <hr />
        </Container>
      </section>
      <section className="table mt-5">
        <Container>
          <div>{usersList.length} Users Found!</div>
          <UserTable usersList={usersList} getUsers={getUsers} />
        </Container>
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
