import styled from "styled-components";
import React, {Fragment} from "react";
import {Outlet, useNavigate} from "react-router-dom";

interface Props {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LayoutContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    height: 60px;
    background: #000;
    color: #fff;
    padding: 16px;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 18px;
`;

const LogoutButton = styled.span`
    position: absolute;
    top: 20px;
    right: 16px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    
    &:hover {
        text-decoration: underline;
    }
`;

const RoutesContainer = styled.div`
    display: flex;
    height: fit-content;
    gap: 8px;
    color: #fff;
    font-size: 14px;
    margin-left: 24px;
`;

const Route = styled.span`
    cursor: pointer;
    
    &:hover {
        text-decoration: underline;
    }
`;

const Body = styled.main`
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 12px;
    padding: 24px;
    flex-wrap: wrap;
`;

const Footer = styled.footer`
    margin-top: auto;
    background: #000;
    width: 100%;
    padding: 24px;
    color: #fff;
`;

const AuthorizedLayout: React.FC<Props> = ({ isLoggedIn, setIsLoggedIn })  => {

    const navigate = useNavigate();

    return (
        <LayoutContainer>
            <Header>
                Gym
                <RoutesContainer>
                    {isLoggedIn ? (
                        <Fragment>
                            <Route onClick={() => navigate("/home")}>
                                Home
                            </Route>
                            <Route onClick={() => navigate("/activities")}>
                                Actividades
                            </Route>
                        </Fragment>
                    ) : (
                        <Route onClick={() => navigate("/login")}>
                            Login
                        </Route>
                    )}
                </RoutesContainer>
                {isLoggedIn && (
                    <LogoutButton onClick={() => {
                        setIsLoggedIn(false);
                        navigate("/login", {
                            replace: true
                        });
                    }}>
                        Cerrar Sesión
                    </LogoutButton>
                )}
            </Header>
            <Body>
                <Outlet/>
            </Body>
            <Footer>
                Copyright &copy; Gym 2025
            </Footer>
        </LayoutContainer>
    );
}

export default AuthorizedLayout;