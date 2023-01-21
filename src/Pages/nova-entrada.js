import styled from "styled-components";

export default function NovaEntrada() {
    return (
        <>
            <Corpo>
                <TopTitle>Nova entrada</TopTitle>
                <InputValor/>
                <InputDescricao/>
                <BotaoSalvar>Salvar entrada</BotaoSalvar>
            </Corpo>
        </>
    );
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

const TopTitle = styled.div`
position:absolute;
top:25px;
left:24px;
display:flex;
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 31px;
color: #FFFFFF;
`

const InputValor = styled.input.attrs({
    placeholder: "Valor",
})`
    &&& {
            all:unset;
            box-sizing:border-box;
            padding-left:11px;        
            width: 326px;
            height: 58px;
            position:absolute;
            top:96px;
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
  const InputDescricao = styled.input.attrs({
    placeholder: "Descrição",
})`
    &&& {
            all:unset;
            box-sizing:border-box;
            padding-left:11px;        
            width: 326px;
            height: 58px;
            position:absolute;
            top:167px;
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

const BotaoSalvar = styled.button`
all:unset;
display: flex;
justify-content:center;
align-items:center;
position: absolute;
width: 326px;
height: 46px;
top: 238px;
left:25px;
background: #A328D6;
border-radius: 5px;
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: #FFFFFF;
`
