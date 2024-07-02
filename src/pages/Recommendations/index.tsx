import React from "react";
import { Card, Row, Col, Tag, Typography } from "antd";
import { useNavigate } from "react-router-dom";

interface IVegetable {
  id: number;
  image: string;
  nome_popular: string;
  nome_cientifico: string;
  descricao: string;
  tipo_de_colheita: string;
  melhor_estacao_para_cultivo: string;
  epoca_e_regioes_para_plantio: string;
  solo: string;
  temperatura: string;
  semeadura: string;
  espacamento: string;
  transplantio: string;
  irrigacao: string;
  adubacao: string;
  colheita: string;
  recomendacoes_de_aproveitamento: string;
  resistencia_a_pragas: string;
}

// Tipo de colheita
// Melhor estação para cultivo
// Irrigação
// Temperatura

const vegetables: IVegetable[] = [
  {
    id: 1,
    image:
      "https://images.stockcake.com/public/c/5/4/c5468fb2-c1cf-424d-aa89-431ef877be42_large/fresh-lettuce-sprout-stockcake.jpg",

    nome_popular: "Alface",
    nome_cientifico: "Lactuca sativa L.",
    descricao:
      "É uma hortaliça de folhas comestíveis. As folhas podem ser lisas ou crespas, com ou sem formação de cabeça. Também existem alfaces com folhas roxas ou folhas bem recortadas. É uma importante fonte de sais minerais, principalmente de cálcio e de vitaminas, especialmente a vitamina A. A alface deve ser colhida antes do início do pendoamento (emissão do pendão floral), momento em que as folhas começam a apresentar um sabor amargo característico. O plantio em local definitivo é feito por mudas semeadas em bandejas ou copinhos.",
    tipo_de_colheita: "Folhas",
    melhor_estacao_para_cultivo: "Primavera e Outono (clima ameno)",
    resistencia_a_pragas: "Moderada (suscetível à pulgões, lesmas e caracóis)",
    epoca_e_regioes_para_plantio:
      "Pode ser cultivada durante o ano todo, em todas as regiões do Brasil, a depender da cultivar escolhida, já que existem variedades adaptadas a climas mais quentes e outras para plantio em regiões de clima ameno.",
    solo: "O alface prefere solos argilosos, ricos em matéria orgânica.",
    temperatura:
      "Desenvolvem-se melhor em temperaturas entre 12 e 22 ºC. Suportam frio de até 7 ºC. Em temperaturas acima de 25 °C as folhas ficam grossas, menores e a planta floresce com grande facilidade prejudicando o desenvolvimento.",
    semeadura:
      "Nas sementeiras, em pequenos sulcos de 1 cm de profundidade, espaçados de 10 cm. Usam-se 2 a 3g de sementes por metro quadrado.",
    espacamento:
      "As mudas devem ser transplantadas a uma distância de 30 cm x 30 cm.",
    transplantio:
      "Quando as mudas estiverem com 2 ou 5 folhas e aproximadamente 10 em de altura, escolhendo-se as melhores mudas.",
    irrigacao:
      "Na sementeira, duas vezes por dia. Nos canteiros definitivos, diariamente.",
    adubacao:
      "Mais ou menos 25 dias após o transplante faz-se a adubação com 30g de sulfato de amônia ou 15g de uréia por metro quadrado.",
    colheita:
      "Entre 40 e 60 dias depois da semeadura pode começar a colheita das plantas mais desenvolvidas.",
    recomendacoes_de_aproveitamento:
      "Todas as folhas podem ser aproveitadas. As alfaces roxa e verde são consumidas predominantemente em saladas frescas. A alface americana é mais crocante e, além de seu uso em saladas, é indicada para o preparo de sanduíches por ser mais resistente ao calor. Podem ser limpas e embaladas em agroindústria, sendo vendidas já prontas para consumo.",
  },
  {
    id: 2,
    image:
      "https://images.stockcake.com/public/c/8/c/c8cd055f-cb3f-47c5-8102-d436405fd2c0_large/isolated-raw-potato-stockcake.jpg",
    nome_popular: "Batata",
    nome_cientifico: "Solanum tuberosum ssp. tuberosum",
    descricao:
      "Desenvolve-se bem em regiões de clima ameno para frio. Frio intenso e prolongado é prejudicial à cultura. Originária dos Andes, a batata produz caules modificados (tubérculos) ricos em carboidratos, muito utilizados na alimentação humana, esse tubérculo adapta-se melhor a solos arenosos. A batata também é fonte importante de fósforo e vitaminas do grupo B. O tubérculo com brotações é a estrutura usada para plantio das lavouras de batata para consumo. Adapta-se melhor a solos arenosos, arejados e bem drenados, o que dificulta o aparecimento de doenças. A colheita é feita quando as ramas já estão secando e tombando.",
    tipo_de_colheita: "Tubérculos/Raízes",
    melhor_estacao_para_cultivo: "Primavera",
    resistencia_a_pragas: "Alta (suscetível a besouros, pulgões e nematóides)",
    epoca_e_regioes_para_plantio:
      "No centro-sul, pode-se plantar o ano inteiro. Entretanto, os plantios de inverno e primavera são melhores que os de verão, pois a cultura se desenvolve melhor sob temperaturas amenas (entre 15° e 25°C), sofrendo menor incidência de doenças. Temperaturas altas noturnas (acima de 20°C) por mais de 60 dias inviabilizam a produção de tubérculos. O ano todo para as regiões de clima ameno. Abril a julho para as regiões de inverno sem geada.",
    solo: "Os solos arenosos são os mais indicados para o plantio da batata. Estes solos permitem uma drenagem mais eficiente, apresentam melhores respostas à adubação, facilita o desenvolvimento lateral das raízes, a produção de batatas mais uniformes e, principalmente, permite a colheita com menor índice de danos.",
    temperatura:
      "Desenvolve-se bem em regiões de clima ameno para frio entre 15 e 25º. Frio intenso e prolongado é prejudicial à cultura.",
    semeadura:
      "Em sementeiras, distribuindo as sementes em sulcos distanciados de 10 cm. Gastam-se 2 g por metro quadrado.",
    transplantio:
      "Planta-se a própria batata quando estiver com brotos de 1 a 2 cm. O diâmetro da batata-semente deve ser de 3 a 4 cm.",
    irrigacao: "Deve ser feita de 3 em 3 dias, para não encharcar o solo.",
    adubacao:
      "Deve ser aplicado 10 a 15 g de sulfato de amônia por planta antes da amontoa.",
    colheita:
      "Efetuada quando a planta estiver seca, o que acontece de 87 a 100 dias após o plantio, dependendo da cultivar.",
    espacamento:
      "Os sulcos são distanciados de 80 cm. O espaçamento entre cada batata é de 25 a 35 cm.",
    recomendacoes_de_aproveitamento:
      "A batata é uma hortaliça consumida em todo o mundo, das mais diversas formas. Acompanha carnes, peixes e aves, podendo ser cozida, assada ou frita. É utilizada na forma de purês, em massas (nhoque), salgados, tortas e sopas.",
  },
  {
    id: 3,
    image:
      "https://images.stockcake.com/public/2/7/b/27bb2e4e-ce1d-4744-be7e-bb40d94b8b49_large/fresh-cabbage-field-stockcake.jpg",
    nome_popular: "Repolho",
    nome_cientifico: "Brassica oleracea L. var. capitata",
    descricao:
      "O repolho possui folhas arredondadas dispostas umas sobre as outras, em forma de cabeça. É rico em fibras, sais minerais e vitaminas do complexo B, E e K. Temperaturas altas fazem com que as cabeças não fiquem bem formadas. O plantio é feito por mudas, semeadas em bandejas. É exigente em adubação e água, que deve ser fornecida constantemente para evitar rachaduras.",
    tipo_de_colheita: "Folhas/Cabeça",
    melhor_estacao_para_cultivo: "Outono e Inverno",
    resistencia_a_pragas:
      "Moderada (suscetível a lagartas, pulgões e besouros)",
    epoca_e_regioes_para_plantio:
      "Desenvolve-se bem sob temperaturas amenas (entre 15° e 25°C) e frias, resistindo bem a geadas leves. Entretanto, há cultivares adaptadas a temperaturas mais altas. O repolho deve ser cultivado de março a junho (plantio de inverno) e de setembro a janeiro (plantio de verão). Deve-se escolher a cultivar, de acordo com a época de plantio.",
    solo: "O solo mais apropriado para o cultivo do repolho é aquele de textura média, solto, profundo e rico em matéria orgânica.",
    temperatura:
      "Produzem melhor entre 7 e 22 ºC e suportam até geadas leves. Há cultivares híbridos que resistem até a 28 ºC",
    semeadura:
      "Na sementeira, em sulcos distanciados 10 cm uns dos outros e com 1 cm de profundidade.",
    espacamento: "80 cm x 50 no plantio de inverno e 80 cm x 40 no de verão.",
    transplantio:
      "Quando as mudas tiverem 4 ou 5 folhas e 10 a 15 cm de altura devem ser transplantadas em pequenas covas feitas em canteiros. Em grandes hortas pode-se transplantar em sulcos ou feiras. Para o transplantio da couve podem ser usadas as brotações que aparecem nas plantas em produção.",
    irrigacao:
      "Do transplantio até o pegamento regar diariamente; depois a cada 3 dias para não encharcar o solo.",
    adubacao:
      "Colocar em cada cova bem misturadas com a terra as seguintes quantidades: 1 ou 2 pás de esterco de curral bem curtido ou 500g de esterco de galinha, 100g de superfosfato simples e 30g de cloreto de potássio ou 20g de sulfato de potássio. Após 25 dias, aplicar mais 30g de sulfato de amônia ou 15g de uréia por planta.",
    colheita:
      "Entre 90 e 150 dias após a semeadura, dependendo da cultivar. A colheita pode ser feita quando as cabeças estiverem bem formadas, compactas e consistentes, antes de começarem a abrir ou racharem.",
    recomendacoes_de_aproveitamento:
      "O repolho é utilizado em saladas cruas, como chucrute, cozido e refogado. Pode ser fermentado e armazenado por longos períodos.",
  },
  {
    id: 4,
    image:
      "https://images.stockcake.com/public/3/c/6/3c6df919-efe7-47a7-8e48-0796e249bb71_large/fresh-earthy-carrot-stockcake.jpg",
    nome_popular: "Cenoura",
    nome_cientifico: "Daucus carota L.",
    descricao:
      "É uma hortaliça de raiz rica em betacaroteno, vitamina C, complexo B, potássio e sódio. As raízes são usadas em saladas, sucos, cozidos, tortas e bolos. O plantio é feito diretamente no solo com sementes, sendo muito sensível ao encharcamento e necessitando de solo arenoso para bom desenvolvimento das raízes.",
    tipo_de_colheita: "Raízes",
    melhor_estacao_para_cultivo: "Primavera e Outono",
    resistencia_a_pragas:
      "Moderada (suscetível a nematóides, pulgões e larvas minadoras)",
    epoca_e_regioes_para_plantio:
      "A cenoura pode ser cultivada durante o ano todo em regiões de clima ameno. Em regiões quentes, o cultivo é indicado de março a junho.",
    solo: "A cenoura prefere solos arenosos, profundos, bem drenados e ricos em matéria orgânica.",
    temperatura:
      "Desenvolve-se melhor em temperaturas entre 15 e 22 ºC. Suporta frio moderado, mas temperaturas altas prejudicam a formação das raízes.",
    semeadura:
      "Diretamente no solo, em sulcos de 1 cm de profundidade, distanciados de 20 cm.",
    espacamento: "30 cm x 10 cm.",
    transplantio:
      "Não é necessário, pois a cenoura é semeada diretamente no local definitivo.",
    irrigacao: "Deve ser feita com frequência, evitando encharcar o solo.",
    adubacao:
      "Aplicar 100 g de superfosfato simples e 30 g de cloreto de potássio ou 20 g de sulfato de potássio por metro quadrado.",
    colheita: "Entre 90 e 120 dias após a semeadura.",
    recomendacoes_de_aproveitamento:
      "As raízes são consumidas cruas ou cozidas, em saladas, sucos, purês, sopas, bolos e tortas.",
  },
  {
    id: 5,
    image:
      "https://images.stockcake.com/public/d/3/1/d31379dc-a1e3-4f40-acfa-bd958f37f45a_large/colorful-cauliflower-display-stockcake.jpg",

    nome_popular: "Couve-flor",
    nome_cientifico: "Brassica oleracea var. botrytis",
    descricao:
      "É uma hortaliça rica em fibras, vitaminas C e K, folato e antioxidantes. O plantio é feito por mudas, semeadas em bandejas. Necessita de solos bem drenados e ricos em matéria orgânica. Temperaturas altas prejudicam a formação da cabeça.",
    tipo_de_colheita: "Inflorescência",
    melhor_estacao_para_cultivo: "Outono e Inverno",
    resistencia_a_pragas: "Moderada (suscetível a lagartas, pulgões e ácaros)",
    epoca_e_regioes_para_plantio:
      "O plantio é indicado de março a julho em regiões de clima ameno e de junho a agosto em regiões frias.",
    solo: "Prefere solos argilosos, profundos, bem drenados e ricos em matéria orgânica.",
    temperatura:
      "Desenvolve-se melhor em temperaturas entre 15 e 20 ºC. Temperaturas acima de 25 ºC prejudicam a formação da cabeça.",
    espacamento: "30 cm x 10 cm.",
    semeadura:
      "Em sementeiras, distribuindo as sementes em sulcos distanciados de 10 cm.",
    transplantio:
      "Quando as mudas tiverem de 4 a 5 folhas verdadeiras, cerca de 30 a 40 dias após a semeadura.",
    irrigacao: "Deve ser feita regularmente, evitando o encharcamento.",
    adubacao:
      "Aplicar 100 g de superfosfato simples e 20 g de sulfato de potássio por metro quadrado.",
    colheita:
      "Entre 90 e 120 dias após a semeadura, quando a cabeça estiver compacta e bem formada.",
    recomendacoes_de_aproveitamento:
      "Pode ser consumida crua ou cozida, em saladas, sopas, refogados e gratinados.",
  },
  {
    id: 6,
    image:
      "https://images.stockcake.com/public/c/6/1/c618b2f0-30c8-44cd-829d-91af3f817ef6_large/fresh-broccoli-stand-stockcake.jpg",
    nome_popular: "Brócolis",
    nome_cientifico: "Brassica oleracea L. var. italica",
    descricao:
      "O brócolis é uma hortaliça rica em vitaminas A, C e K, fibras, cálcio e ferro. As cabeças e talos são utilizados na alimentação, sendo consumidos cozidos, ao vapor ou em saladas. O plantio é feito por mudas, sendo importante manter a irrigação constante para evitar o florescimento precoce.",
    tipo_de_colheita: "Inflorescência",
    melhor_estacao_para_cultivo: "Outono e Inverno",
    resistencia_a_pragas: "Moderada (suscetível a lagartas, pulgões e ácaros)",
    epoca_e_regioes_para_plantio:
      "Pode ser cultivado o ano todo em regiões de clima ameno, mas o plantio de outono e inverno é o mais indicado.",
    solo: "Prefere solos argilosos, profundos e ricos em matéria orgânica.",
    temperatura:
      "Desenvolve-se melhor em temperaturas entre 15 e 20 ºC. Temperaturas acima de 25 ºC prejudicam o desenvolvimento.",
    semeadura:
      "Em sementeiras, distribuindo as sementes em sulcos distanciados de 10 cm.",
    transplantio:
      "Quando as mudas tiverem de 4 a 5 folhas verdadeiras, cerca de 30 a 40 dias após a semeadura.",
    irrigacao: "Deve ser feita regularmente, evitando o encharcamento.",
    adubacao:
      "Aplicar 100 g de superfosfato simples e 20 g de sulfato de potássio por metro quadrado.",
    espacamento: "30 cm x 10 cm.",
    colheita:
      "Entre 90 e 120 dias após a semeadura, quando a cabeça estiver compacta e bem formada.",
    recomendacoes_de_aproveitamento:
      "Pode ser consumido cozido, ao vapor, em saladas, sopas e refogados.",
  },
  {
    id: 7,
    image:
      "https://images.stockcake.com/public/b/c/3/bc303f3c-80df-4cef-803f-094abb2722c5_large/dewy-green-leaves-stockcake.jpg",
    nome_popular: "Espinafre",
    nome_cientifico: "Spinacia oleracea L.",
    descricao:
      "O espinafre é uma hortaliça rica em ferro, cálcio, magnésio e vitaminas A, C e K. As folhas são consumidas cruas ou cozidas, em saladas, sopas, refogados e tortas. O plantio é feito por sementes, sendo importante manter o solo sempre úmido.",
    tipo_de_colheita: "Folhas",
    melhor_estacao_para_cultivo: "Primavera e Outono",
    resistencia_a_pragas: "Alta (suscetível a pulgões e lesmas)",
    epoca_e_regioes_para_plantio:
      "Pode ser cultivado durante o ano todo em regiões de clima ameno.",
    solo: "Prefere solos argilosos, profundos, bem drenados e ricos em matéria orgânica.",
    temperatura:
      "Desenvolve-se melhor em temperaturas entre 15 e 20 ºC. Temperaturas acima de 25 ºC prejudicam o desenvolvimento.",
    semeadura:
      "Diretamente no solo, em sulcos de 1 cm de profundidade, distanciados de 20 cm.",
    espacamento: "30 cm x 10 cm.",
    transplantio:
      "Não é necessário, pois o espinafre é semeado diretamente no local definitivo.",
    irrigacao: "Deve ser feita com frequência, evitando encharcar o solo.",
    adubacao:
      "Aplicar 100 g de superfosfato simples e 20 g de sulfato de potássio por metro quadrado.",
    colheita: "Entre 30 e 45 dias após a semeadura.",
    recomendacoes_de_aproveitamento:
      "As folhas são consumidas cruas ou cozidas, em saladas, sopas, refogados e tortas.",
  },
  {
    id: 8,
    image:
      "https://images.stockcake.com/public/e/d/d/edda4b19-d3a6-415d-b9d4-0a7697c2e7e6_large/harvested-fresh-radishes-stockcake.jpg",
    nome_popular: "Rabanete",
    nome_cientifico: "Raphanus sativus L.",
    descricao:
      "O rabanete é uma hortaliça de raiz rica em vitamina C, ácido fólico e potássio. As raízes são consumidas cruas, em saladas e conservas. O plantio é feito diretamente no solo com sementes, sendo uma cultura de ciclo rápido.",
    tipo_de_colheita: "Raízes",
    melhor_estacao_para_cultivo: "Primavera e Outono",
    resistencia_a_pragas: "Alta (suscetível a pulgões e larvas minadoras)",
    epoca_e_regioes_para_plantio:
      "Pode ser cultivado durante o ano todo em regiões de clima ameno.",
    solo: "Prefere solos argilosos, profundos, bem drenados e ricos em matéria orgânica.",
    temperatura:
      "Desenvolve-se melhor em temperaturas entre 15 e 20 ºC. Temperaturas acima de 25 ºC prejudicam o desenvolvimento.",
    semeadura:
      "Diretamente no solo, em sulcos de 1 cm de profundidade, distanciados de 20 cm.",
    espacamento: "30 cm x 10 cm.",
    transplantio:
      "Não é necessário, pois o rabanete é semeado diretamente no local definitivo.",
    irrigacao: "Deve ser feita com frequência, evitando encharcar o solo.",
    adubacao:
      "Aplicar 100 g de superfosfato simples e 20 g de sulfato de potássio por metro quadrado.",
    colheita: "Entre 20 e 30 dias após a semeadura.",
    recomendacoes_de_aproveitamento:
      "As raízes são consumidas cruas, em saladas e conservas.",
  },
  {
    id: 9,
    image:
      "https://images.stockcake.com/public/f/7/0/f70d4fef-fe8c-4c8b-8577-70f68d77c66a_large/fresh-beets-bowl-stockcake.jpg",
    nome_popular: "Beterraba",
    nome_cientifico: "Beta vulgaris L.",
    descricao:
      "A beterraba é uma hortaliça de raiz rica em açúcares, vitamina C, potássio e ácido fólico. As raízes e folhas são consumidas cruas ou cozidas, em saladas, sucos, sopas e refogados. O plantio é feito por sementes diretamente no solo.",
    tipo_de_colheita: "Raízes",
    melhor_estacao_para_cultivo: "Outono e Inverno",
    resistencia_a_pragas:
      "Moderada (suscetível a nematóides, pulgões e lagartas)",
    epoca_e_regioes_para_plantio:
      "Pode ser cultivada durante o ano todo em regiões de clima ameno.",
    solo: "Prefere solos argilosos, profundos, bem drenados e ricos em matéria orgânica.",
    temperatura:
      "Desenvolve-se melhor em temperaturas entre 15 e 20 ºC. Temperaturas acima de 25 ºC prejudicam o desenvolvimento.",
    semeadura:
      "Diretamente no solo, em sulcos de 1 cm de profundidade, distanciados de 20 cm.",
    espacamento: "30 cm x 10 cm.",
    transplantio:
      "Não é necessário, pois a beterraba é semeada diretamente no local definitivo.",
    irrigacao: "Deve ser feita com frequência, evitando encharcar o solo.",
    adubacao:
      "Aplicar 100 g de superfosfato simples e 20 g de sulfato de potássio por metro quadrado.",
    colheita: "Entre 60 e 90 dias após a semeadura.",
    recomendacoes_de_aproveitamento:
      "As raízes e folhas são consumidas cruas ou cozidas, em saladas, sucos, sopas e refogados.",
  },
  {
    id: 10,
    image:
      "https://images.stockcake.com/public/a/1/6/a16ec631-649d-4d7c-ab24-c28b7296dd5e_large/pumpkin-patch-visit-stockcake.jpg",
    nome_popular: "Abóbora",
    nome_cientifico: "Cucurbita maxima Duch.",
    descricao:
      "A abóbora é uma hortaliça rica em vitamina A, fibras e minerais. Os frutos são consumidos cozidos, assados ou em sopas, e as sementes torradas. O plantio é feito por sementes diretamente no solo.",
    tipo_de_colheita: "Frutos",
    melhor_estacao_para_cultivo: "Primavera",
    resistencia_a_pragas: "Alta (suscetível a brocas e pulgões)",
    epoca_e_regioes_para_plantio:
      "Pode ser cultivada durante o ano todo em regiões de clima quente e temperado.",
    solo: "Prefere solos argilosos, profundos, bem drenados e ricos em matéria orgânica.",
    temperatura:
      "Desenvolve-se melhor em temperaturas entre 20 e 30 ºC. Temperaturas abaixo de 10 ºC prejudicam o desenvolvimento.",
    semeadura: "Diretamente no solo, em covas de 2 cm de profundidade.",
    espacamento: "1,5 m x 1,5 m.",
    transplantio:
      "Não é necessário, pois a abóbora é semeada diretamente no local definitivo.",
    irrigacao: "Deve ser feita com frequência, evitando encharcar o solo.",
    adubacao:
      "Aplicar 100 g de superfosfato simples e 20 g de sulfato de potássio por cova.",
    colheita: "Entre 90 e 120 dias após a semeadura.",
    recomendacoes_de_aproveitamento:
      "Os frutos são consumidos cozidos, assados ou em sopas, e as sementes torradas.",
  },
];

const calculateRanking = (vegetable: IVegetable, userData?: any) => {
  // Retorna um número de 1 a 10
  return Math.floor(Math.random() * 10) + 1;
};

const Recommendations = () => {
  const navigate = useNavigate();
  return (
    <Row gutter={[16, 16]}>
      {vegetables
        .map((vegetable) => ({
          ...vegetable,
          ranking: calculateRanking(vegetable),
        }))
        .sort((a, b) => a.ranking - b.ranking)
        .map((vegetable) => (
          <Col key={vegetable.id} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card
              onClick={() => navigate(`/vegetables/${vegetable.id}`)}
              hoverable
              title={
                <>
                  <Tag
                    color={getRankingColor(vegetable.ranking)}
                    style={{ marginBottom: 8 }}
                  >
                    {vegetable.ranking}
                  </Tag>
                  {vegetable.nome_popular}
                </>
              }
              cover={<img alt="example" src={vegetable.image} />}
              style={{
                height: "400px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <Typography.Text strong style={{ objectFit: "cover" }}>
                Nome Cientifico
              </Typography.Text>
              <Typography style={{ objectFit: "cover" }}>
                {vegetable.nome_cientifico}
              </Typography>
              <Typography.Text strong style={{ objectFit: "cover" }}>
                Tipo de Colheita
              </Typography.Text>
              <Typography style={{ objectFit: "cover" }}>
                {vegetable.tipo_de_colheita}
              </Typography>
              <Typography.Text strong style={{ objectFit: "cover" }}>
                Estação para Cultivo
              </Typography.Text>
              <Typography style={{ objectFit: "cover" }}>
                {vegetable.melhor_estacao_para_cultivo}
              </Typography>
              {/* <Typography.Text strong style={{ objectFit: "cover" }}>
                Irrigação
              </Typography.Text>
              <Typography style={{ objectFit: "cover" }}>
                {vegetable.irrigacao}
              </Typography> */}
              {/* <Typography.Text strong style={{ objectFit: "cover" }}>
                Temperatura
              </Typography.Text>
              <Typography style={{ objectFit: "cover" }}>
                {vegetable.temperatura}
              </Typography> */}
            </Card>
          </Col>
        ))}
    </Row>
  );
};

// Função auxiliar para definir a cor do Tag com base no ranking
const getRankingColor = (ranking: number) => {
  switch (ranking) {
    case 1:
      return "cyan";
    case 2:
      return "gold";
    case 3:
      return "lime";
    case 4:
      return "geekblue";
    default:
      return "volcano";
  }
};

export default Recommendations;
