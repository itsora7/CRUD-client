import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { postUser } from "../../helper/axiosHelper.js";
import { CustomInputField } from "../customInputField/CustomInputField.js";
import { toast } from "react-toastify";

export const UserForm = ({ getUsers }) => {
  const [newUser, setNewUser] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await postUser(newUser);
    toast[status](message);
    //OR
    //toast.success(message)
    //toast.error(message)
    status === "success" && getUsers();
  };

  const inputFields = [
    {
      name: "fName",
      label: "Fast Name",
      type: "text",
      placeholder: "Please enter your first name",
      required: true,
    },
    {
      name: "lName",
      label: "Last Name",
      type: "text",
      placeholder: "Please enter your last name",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Please enter your email",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "*********** ",
      required: true,
    },
  ];
  //   console.log(newUser);
  return (
    <Form className="mt-5" onSubmit={handleOnSubmit}>
      <h2>New Registration Form!</h2>

      {inputFields.map((item, i) => (
        <CustomInputField key={i} {...item} onChange={handleOnChange} />
      ))}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
