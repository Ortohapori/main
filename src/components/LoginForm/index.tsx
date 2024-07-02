import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom"; // Se estiver usando react-router

const LoginForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    // Lógica para enviar os dados de login para o backend
    console.log("Dados de login:", values);
  };

  return (
    <div
      style={{
        backgroundColor: "#e0f2f1",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <Form
        form={form}
        name="login"
        onFinish={onFinish}
        scrollToFirstError
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Horta Comunitária
        </h2>
        <p style={{ textAlign: "center", marginBottom: "30px" }}>
          Acesse sua conta
        </p>

        <Form.Item
          name="username"
          rules={[
            { required: true, message: "Por favor, insira seu usuário!" },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Usuário" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Por favor, insira sua senha!" }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Senha" />
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit">
            Acessar
          </Button>
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <Link to="/register">Cadastrar</Link>{" "}
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
