import React, {useState} from "react";
import styled from "styled-components";
import {InputError, InputLabel, StyledInput} from "@components/InputComponents.tsx";
import {Button} from "@components/Buttons.tsx";
import {useNavigate} from "react-router-dom";

interface Props {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F0F0F0;
`;

const LoginTitle = styled.h1`
    margin-bottom: 8px;
`;

const LoginForm = styled.form`
    width: 280px;
    border: solid 1px #cccccc;
    border-radius: 14px;
    margin: auto;
    box-shadow: #0000001a 0 0 4px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #fff;
`;

const Login: React.FC<Props> = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(
        {
            username: "",
            password: "",
        }
    );

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(username === "admin" && password === "admin") {
            setErrors({
                username: "",
                password: "",
            });
            navigate("/activities", { replace: true })
            setIsLoggedIn(true);
            console.log("Login OK");
        } else if (!username && !password) {
            setErrors({
                username: "El campo no puede estar vacio",
                password: "El campo no puede estar vacio",
            });
        } else {
            setErrors({
                username: "El usuario o la contraseña no son validas",
                password: errors.password,
            });
        }
    }

    return (
        <LoginContainer>
            <LoginForm onSubmit={onSubmit}>
                <LoginTitle>Login</LoginTitle>
                <InputLabel htmlFor={"username"}>Usuario:</InputLabel>
                <StyledInput
                    id={"username"}
                    type={"text"}
                    max={8}
                    value={username}
                    removeMarginBottom={!!errors.username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && <InputError>{errors.username}</InputError>}
                <InputLabel htmlFor={"password"}>Contraseña:</InputLabel>
                <StyledInput
                    id={"password"}
                    type={"password"}
                    value={password}
                    removeMarginBottom={!!errors.password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <InputError>{errors.password}</InputError>}
                <Button>Iniciar Sesión</Button>
            </LoginForm>
        </LoginContainer>
    );
}

export default Login;