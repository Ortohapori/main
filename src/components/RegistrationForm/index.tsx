import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    // Lógica para enviar os dados de registro para o backend
    console.log("Dados de registro:", values);
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
        name="register"
        onFinish={onFinish}
        scrollToFirstError
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Horta Comunitária
        </h2>
        <p style={{ textAlign: "center", marginBottom: "30px" }}>
          Cadastre seus dados em nosso aplicativo
        </p>

        <Form.Item
          name="name"
          rules={[{ required: true, message: "Por favor, insira seu nome!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Nome" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { type: "email", message: "O e-mail inserido não é válido!" },
            { required: true, message: "Por favor, insira seu e-mail!" },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="E-mail" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Por favor, insira sua senha!" }]}
          hasFeedback
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Senha" />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Por favor, confirme sua senha!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("As senhas não coincidem!");
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Confirmar Senha"
          />
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit">
            Cadastrar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistrationForm;
