import React, { Component, useState } from "react";
import api from "../../services/api";
// import { Container } from './styles';

export default function Login({ history }) {
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/sessions", { email: email });

    const { _id } = response.data;

    localStorage.setItem("user", _id);
    history.push("/dashboard"); // Usado para navegação automatica, quando o
    //usuário clicar em login o history irá manda-lo para a /dashboard
  }

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre{" "}
        <strong>talentos</strong> para sua empresa
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlfor="email">E-MAIL</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <button className="btn" type="submmit">
          Entrar
        </button>
      </form>
    </>
  );
}
