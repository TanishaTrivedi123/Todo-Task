import React, { useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userdata } from "../store/userSlice";

const Form = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await axios.post("http://localhost:8080/api/signup", {
        name,
        email,
        password,
      });

      if (response) {
        dispatch(userdata(response.data));
        navigate("/todo-task");
        return toast.success(`${response.data.name} Welcome in todo app`);
      }
    } catch (error) {
      return toast.error(error.response?.data?.msg || "Internal Server Error");
    }
  };

  return (
    <>
      <div className="Form">
        <h2>Register</h2>
        <input ref={nameRef} type="text" placeholder="Enter your full name" />
        <input ref={emailRef} type="email" placeholder="Enter your email" />
        <input ref={passwordRef} type="password" placeholder="........." />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Form;
