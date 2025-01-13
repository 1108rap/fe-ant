import { message } from "antd";
import axios from "axios";

const fetchUsers = async () => {
  try {
    const result = await axios.get("http://127.0.0.1:5000/api/users");
    return result.data;
  } catch (err) {
    console.error("Error fetching data users:", err);
    throw err;
  }
};

const fetchEmployeeRef = async (setEmployee) => {
  try {
    const result = await axios.get("http://127.0.0.1:5000/api/refuseremp");
    setEmployee(result.data);
  } catch (err) {
    console.error(err);
    message.error("Error Failed to load Employees Refrence");
  }
};

const addUser = async (setLoading, values, form, fetchEmployeeRef) => {
  setLoading(true);
  try {
    await axios.post("http://localhost:5000/api/createuser", values);
    message.success("User added succesfully!");
    form.resetFields();
    fetchEmployeeRef();
  } catch (err) {
    console.error("Error create user:", err);
    message.error("Failed to add user. Please try again.");
  } finally {
    setLoading(false);
  }
};

const removeUser = async (id, fetchUsers) => {
  try {
    await axios.post(`http://127.0.0.1:5000/api/users/${id}/delete`);
    message.success("User Deleted Successfully");
    fetchUsers();
  } catch (err) {
    console.error("Error deleted user:", err);
    message.error("Failed to delete user");
  }
};

module.exports = { fetchUsers, fetchEmployeeRef, addUser, removeUser };
