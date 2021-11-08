import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../Responsive";

const Components = styled.div`
    height: 60vh;
    /* border: 1px solid grey; */
    background-color: #fcf5f5;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })}
`;
const Inputcontainer = styled.div`
    border: 0.5px solid grey;
    height: 40px;
    display: flex;
    justify-content: space-between;
    width: 50%;
    background-color: white;
    ${mobile({ width: "80%" })}
`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding: 20px;
`;
const Button = styled.div`
    border: none;
    cursor: pointer;
    flex:1;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Newsletter = () => {
    return (
        <Components>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favourite products.</Desc>
            <Inputcontainer>
                <Input placeholder="Your email" />
                <Button>
                    <SendIcon />
                </Button>
            </Inputcontainer>
        </Components>
    );
};

export default Newsletter;
