import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Avatar,
  Descriptions,
  Row,
  Col,
  Card,
  Space,
  Select,
} from "antd";
import Icon, {
  UserOutlined,
  HomeOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { vegetables } from "../Vegetables/index.tsx";

const User: React.FC = () => {
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Gabriel Terres",
    email: "gabriel@gmail.com",
    tipoDeColheita: "Hidropônica",
    melhorEstacaoCultivo: "Verão",
    irrigacao: "Diária",
    temperatura: "Frio",
    biografia: "Formando de CC na ULBRA, apaixonado por hortas urbanas!",
    hortalicasPlantadas: ["Alface", "Tomate"],
  });

  useEffect(() => {
    form.setFieldsValue(userData);
  }, [userData, form]);

  const onFinish = (values: any) => {
    // Lógica para atualizar os dados do usuário no backend
    console.log("Novos dados do usuário:", values);
    values.hortalicasPlantadas = ["Alface", "Tomate"];
    setUserData(values);
    setIsEditing(false);
  };

  return (
    <div style={{ padding: 24 }}>
      <Row gutter={16}>
        <Col xs={24} md={8}>
          {" "}
          <Card
            cover={
              <img
                src={"src/assets/img/gabriel.jpg"}
                alt={"gabriel"}
                style={{ width: "100%", height: 300, objectFit: "revert" }}
              />
            }
            actions={[
              <EditOutlined
                key="edit"
                onClick={() => setIsEditing(!isEditing)}
              />,
            ]}
          >
            <Descriptions layout="vertical" title="Informações do Perfil">
              <Descriptions.Item label="Nome">
                {userData.name}
              </Descriptions.Item>
              <Descriptions.Item label="E-mail">
                {userData.email}
              </Descriptions.Item>
            </Descriptions>
            <p style={{ marginTop: 16 }}>{userData.biografia}</p>
          </Card>
          <h2>Atividades Recentes</h2>
          <Card title={"Hortaliças Plantadas"}>
            <ul>
              {userData.hortalicasPlantadas.map((hortalica) => (
                <li key={hortalica}>{hortalica}</li>
              ))}
            </ul>
          </Card>
        </Col>
        <Col xs={24} md={16}>
          {" "}
          <Card title={"Minhas Preferências"}>
            <Form form={form} onFinish={onFinish} layout="vertical">
              <Form.Item label="E-mail" name="email">
                <Input disabled={true} />
              </Form.Item>
              <Form.Item label="Nome" name="name">
                <Input disabled={!isEditing} />
              </Form.Item>
              <Form.Item label="Biografia" name="biografia">
                <Input.TextArea disabled={!isEditing} />
              </Form.Item>
              <Form.Item label="Tipo de Colheita" name="tipoDeColheita">
                {/* <Input disabled={!isEditing} /> */}
                <Select
                  disabled={!isEditing}
                  showSearch
                  placeholder="Selecione um tipo de Irrigação"
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    { value: "1", label: "Hidropônica" },
                    { value: "2", label: "Orgânica" },
                    { value: "3", label: "Convencional" },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Melhor Estação de Cultivo"
                name="melhorEstacaoCultivo"
              >
                {/* <Input disabled={!isEditing} /> */}
                <Select
                  disabled={!isEditing}
                  showSearch
                  placeholder="Selecione um tipo de Irrigação"
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    { value: "1", label: "Verão" },
                    { value: "2", label: "Inverno" },
                    { value: "3", label: "Primavera" },
                    { value: "4", label: "Outono" },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Irrigação" name="irrigacao">
                {/* <Input disabled={!isEditing} /> */}
                <Select
                  disabled={!isEditing}
                  showSearch
                  placeholder="Selecione um tipo de Irrigação"
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    { value: "1", label: "Diária" },
                    { value: "2", label: "Semanal" },
                    { value: "3", label: "Mensal" },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Temperatura" name="temperatura">
                {/* <Input disabled={!isEditing} /> */}
                <Select
                  disabled={!isEditing}
                  showSearch
                  placeholder="Selecione um tipo de Irrigação"
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    { value: "1", label: "Frio" },
                    { value: "2", label: "Quente" },
                    { value: "3", label: "Normal" },
                  ]}
                />
              </Form.Item>

              {isEditing && (
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Salvar
                  </Button>
                </Form.Item>
              )}
            </Form>
          </Card>
          {/* Seção de Recomendações */}
          {/* <h2>Recomendações Personalizadas</h2> */}
          {/* ... conteúdo das recomendações */}
          {/* Seção de Estatísticas */}
          {/* <h2>Estatísticas</h2> */}
          {/* ... conteúdo das estatísticas */}
        </Col>
      </Row>
    </div>
  );
};

export default User;
