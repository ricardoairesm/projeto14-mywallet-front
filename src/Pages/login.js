import axios from "axios";
import { createContext, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../Assets/imagens/MyWallet.png";
import { ThreeDots } from "react-loader-spinner";
import Context from "./Context";


export default function Login() {

    const [estado, setEstado] = useState("padrao");
    const navigate = useNavigate();
    const [info,setInfo] = useContext(Context);
    const [infoLogin, setInfoLogin] = useState({
        email: "",
        password: ""
    });

    const urlLogin = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    let a = undefined;

    function handleLogin(e) {
        setInfoLogin({
            ...infoLogin,
            [e.target.name]: e.target.value,
        })
    }

    function fazerLogin() {

        if (infoLogin.email.length != 0 &&  infoLogin.password.length != 0) {
            setEstado("Loading")
            axios.post(urlLogin, infoLogin).then(
                (response) => {
                    navigate("/habitos"); 
                    const newInfo = {...info,
                    token: response.data.token,
                    image: response.data.image
                }; 
                    setInfo(newInfo);
                }
            ).catch(
                () => alert("Email ou senha invalido!")
            );
        }

    }


    if (estado === "padrao") {
        return (
            <>
                <Corpo>

                    <Logo>
                        <img src={logo}></img>
                    </Logo>

                    <InputEmail data-test="email-input" name="email" onChange={handleLogin} />
                    <InputSenha data-test="password-input" type="password" name="password" onChange={handleLogin} />
                    <BotaoEntrar data-test="login-btn" onClick={fazerLogin}>Entrar</BotaoEntrar>


                    <Link to="/cadastro">
                        <IrCadastro data-test="signup-link">Primeira vez? Cadastre-se!</IrCadastro>
                    </Link>

                </Corpo>
            </>
        )
    }

    return (
        <>
            <Corpo>

                <Logo>
                    <img src={logo}></img>
                </Logo>

                <InputEmail disabled={true} name="email" onChange={handleLogin} />
                <InputSenha disabled={true} type="password" name="password" onChange={handleLogin} />
                <BotaoEntrar ><ThreeDots width="50px" color = "white"/></BotaoEntrar>


                <Link to="/cadastro">
                    <IrCadastro>Primeira vez? Cadastre-se!</IrCadastro>
                </Link>

            </Corpo>
        </>
    )

}


const Corpo = styled.div`
background-color: #8C11BE;
width:375px;
height:667px;
box-sizing:border-box;
position:relative;
justify-content:center;
display:flex;
`
const Logo = styled.div`
position:absolute;
top:159px;
`

const InputEmail = styled.input.attrs({
    placeholder: "E-mail",
})`
    &&& {
            all:unset;
            box-sizing:border-box;
            padding-left:11px;        
            width: 326px;
            height: 58px;
            position:absolute;
            top:233px;
            left:25px;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: black;
            ::placeholder{
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 23px;

                color: #000000;
            }    
            :disabled{
                background: #F2F2F2;
                border: 1px solid #D5D5D5;
                border-radius: 5px;
                color: #AFAFAF;
            }     
    }
  `

const InputSenha = styled.input.attrs({
    placeholder: "Senha",
})`
    &&&{
            all:unset;
            box-sizing:border-box;
            padding-left:11px;        
            width: 326px;
            height: 58px;
            position:absolute;
            top:304px;
            left:25px;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: black;
            ::placeholder{
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 23px;

                color: #000000;
            }    
            :disabled{
                background: #F2F2F2;
                border: 1px solid #D5D5D5;
                border-radius: 5px;
                color: #AFAFAF;
            } 
    }
  `

const BotaoEntrar = styled.button`
    all:unset;
    display: flex;
    justify-content:center;
    align-items:center;
    position: absolute;
    width: 326px;
    height: 46px;
    top: 375px;
    background: #A328D6;
    border-radius: 4.63636px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: #FFFFFF;

  `

const BotaoEntrarLoading = styled.button`
display:none;
all:unset;
display: flex;
justify-content:center;
align-items:center;
position: absolute;
width: 303px;
height: 45px;
top: 381px;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;

color: #FFFFFF;

`

const IrCadastro = styled.div`
all:unset;
   
position: absolute;
width: 200px;
height: 18px;
left: 92px;
top: 457px;

font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;

/* identical to box height */

color: #FFFFFF;


  `