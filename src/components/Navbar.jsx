import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import logo from "C:/Users/HARSHIT/Desktop/development/hashed-store/src/images/logo.5836bf52.png";
import { mobile } from "../Responsive";

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const Searchbox = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ marginLeft: "5px" })}
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
    justify-content: center;
    ${mobile({ marginLeft: "8px" })}
`;

const Logo = styled.div`
    justify-content: center;
    /* border: 1px solid grey; */
    display: flex;
`;

const LogoImg = styled.img`
    
    background-image: url(${logo});
    /* border: 1px solid grey; */
    width: 30px;
    height: 30px;
    margin: 5px;
    ${mobile({ width: "20px", height: "20px" })}
`;

const LogoLabel = styled.span`
    /* border: 1px solid grey; */
    padding: 5px;
    margin-top: auto;
    margin-bottom: auto;
    cursor: pointer;
    ${mobile({ fontSize: "12px"})}
`;

const Right = styled.div`
    /* border: 1px solid grey; */
    flex: 1;
    display: flex;

    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    margin-top: auto;
    margin-bottom: auto;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "10px", marginLeft: "7px" })}
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <Searchbox>
                        <Input placeholder="Search.."></Input>
                        <SearchIcon
                            style={{
                                color: "gray",
                                fontSize: 16,
                                cursor: "pointer",
                            }}
                        />
                    </Searchbox>
                </Left>
                <Center>
                    <Logo>
                        <LogoImg src={logo} />
                        <LogoLabel>MyHashStore</LogoLabel>
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign in</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
