import styled from "styled-components";
import { Avatar } from "antd";

const Container = styled.div`
    .ant-menu-item.ant-menu-item-selected{
        background-color: #008177;
        color: #FFF;
    }
`;

const AvatarComp = styled(Avatar)`
    background-color: #008177;
    vertical-align: middle;
    margin-right: 20px;
    cursor: pointer;
    color: #FFF;
    font-weight: 600;

    &:hover {
        background-color: #00998E;
    }
`;

export { AvatarComp, Container };