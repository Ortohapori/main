import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Typography, Divider, Image } from "antd";
import Icon, {
  HomeOutlined,
  UserOutlined,
  BarsOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { MdChecklist } from "react-icons/md";
import { GiCabbage, GiCarrot } from "react-icons/gi";
import Lottie from "lottie-react";
import vegetablesAnimation from "../../assets/json/vegetables.json";

const Home: React.FC = () => {
  const cardData = [
    {
      title: "Perfil",
      icon: <UserOutlined />,
      link: "/user",
      text: "Visualize ou altere suas informações.",
    },
    {
      title: "Recomencações",
      icon: <MdChecklist />,
      link: "/recommendations",
      text: "Veja recomendações de plantio para suas hortaliças.",
    },
    {
      title: "Minhas Plantações",
      icon: <GiCabbage />,
      link: "/my-plantations",
      text: "Veja as plantações que você já fez.",
    },
    {
      title: "Hortaliças",
      icon: <GiCarrot />,
      link: "/vegetables",
      text: "Veja informações sobre hortaliças.",
    },
  ];

  const { Title } = Typography;

  return (
    <div style={{ padding: 24 }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "30%", display: "flex" }}>
          <Lottie
            style={{ width: "100%", height: "100%" }}
            animationData={vegetablesAnimation}
          />
        </div>
      </div>

      <Title level={2} style={{ textAlign: "center", marginBottom: 32 }}>
        Bem-vindo à sua Horta Digital!
      </Title>

      <Divider />

      <Title level={3} style={{ textAlign: "start", marginBottom: 32 }}>
        Escolha para onde quer ir.
      </Title>
      <Row gutter={[16, 16]}>
        {cardData.map((card) => (
          <Col key={card.title} xs={24} sm={12} md={8} lg={6}>
            <Link to={card.link}>
              <Card hoverable style={{ width: 240 }}>
                <Card.Meta title={card.title} />
                <Divider />
                <div style={{ textAlign: "center" }}>
                  <Icon component={() => card.icon} />
                  <p>{card.text}</p>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
