import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  const initForm = {
    username: "",
    email: "",
    password: "",
  };

  const { formState, onInputChange, onResetForm, username, email, password } = useForm(initForm);

  return (
    <>
      <h1>Formulario con custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        autoComplete="off"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="goiko@gmail.com"
        name="email"
        autoComplete="off"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        autoComplete="off"
        value={password}
        onChange={onInputChange}
      />

      {username === "strider2" && <Message />}

      <button onClick={ onResetForm } className='btn btn-primary mt-2'>Borrar</button>
    </>
  );
};
