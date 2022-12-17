import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { deleteUsers } from "../../helper/axiosHelper";
import { toast } from "react-toastify";

export const UserTable = ({ usersList, getUsers }) => {
  const handleOnDelete = async (_id) => {
    if (window.confirm("Are you sure want to delete this users?")) {
      const { status, message } = await deleteUsers(_id);
      getUsers();
      toast[status](message);
    }
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {usersList.map(({ _id, fName, lName, email }) => (
          <tr key={_id}>
            <td>{fName}</td>
            <td>{lName}</td>
            <td>{email}</td>
            <td>
              <Button variant="warning">Edit</Button>
              {""}
              <Button variant="danger" onClick={() => handleOnDelete(_id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
