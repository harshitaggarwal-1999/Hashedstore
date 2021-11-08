import {
    Facebook,
    Instagram,
    LinkedIn,
    MailOutline,
    PhoneOutlined,
    Pinterest,
    RoomOutlined,
    Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import logo from "C:/Users/HARSHIT/Desktop/development/hashed-store/src/images/logo.5836bf52.png";
import { mobile } from "../Responsive";

const Container = styled.div`
    /* border: 1px solid grey; */
    height: 38vh;
    display: flex;
    margin-top: 20px;
    ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
    /* border: 1px solid grey; */
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const Logo = styled.div`
    display: flex;
    margin-bottom: 20px;
    /* border: 1px solid grey; */
`;

const LogoImg = styled.img`
    background-image: url(${logo});
    width: 30px;
    height: 30px;
    margin: 5px;
`;

const LogoLabel = styled.span`
    padding: 5px;
    margin-top: auto;
    margin-bottom: auto;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
`;

const Desc = styled.div`
    margin-bottom: 20px;
    /* border: 1px solid grey; */
`;

const Socialiconcontainer = styled.div`
    display: flex;

    /* border: 1px solid grey; */
`;
const SocialIcon = styled.div`
    /* border: 1px solid red; */
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid red; */
    /* transform: scale(1.8); */
    color: #${(props) => props.colour};
    transition: all 0.5s ease;
    &:hover {
        transform: scale(1.1);
    }
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;



const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>
                    <LogoImg src={logo} />
                    <LogoLabel>MyHashStore</LogoLabel>
                </Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum id magni reprehenderit voluptas delectus! Assumenda
                    consequuntur eius eligendi incidunt! Eius dolorum ullam
                    dolor at, placeat quae quod necessitatibus! Cupiditate vero
                    voluptas qui recusandae similique.
                </Desc>
                <Socialiconcontainer>
                    <SocialIcon colour="4267B2">
                        <Facebook fontSize="large" cursor="pointer" />
                    </SocialIcon>
                    <SocialIcon colour="8a3ab9">
                        <Instagram fontSize="large" cursor="pointer" />
                    </SocialIcon>
                    <SocialIcon colour="1DA1F2">
                        <Twitter fontSize="large" cursor="pointer" />
                    </SocialIcon>
                    <SocialIcon colour="c8232c">
                        <Pinterest fontSize="large" cursor="pointer" />
                    </SocialIcon>
                    <SocialIcon colour="0e76a8">
                        <LinkedIn fontSize="large" cursor="pointer" />
                    </SocialIcon>
                </Socialiconcontainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <RoomOutlined style={{ marginRight: "10px" }} />  DLF Phase 2, Gurugram, Haryana 122002
                </ContactItem>
                <ContactItem>
                    <PhoneOutlined style={{ marginRight: "10px" }} /> +91 98105 24948
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} />{" "}
                    harshitagg0310@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;
