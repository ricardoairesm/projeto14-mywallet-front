import styled from "styled-components";
import { AiOutlineExport } from "react-icons/ai"
import { AiOutlineMinusCircle } from "react-icons/ai"
import { AiOutlinePlusCircle } from "react-icons/ai"

export default function Home() {
    return (
        <>
            <Corpo>
                <TopTitle>
                    <h1>Olá, Fulano</h1>
                    <AiOutlineExport></AiOutlineExport>
                </TopTitle>
                <WhiteBoard>
                    <h1>Não há registros de entrada ou saída</h1>
                </WhiteBoard>
                <NovaEntrada>
                    <h1><AiOutlinePlusCircle color="white" fontSize="22px" /></h1>
                    <h2>Nova <br />entrada</h2>
                </NovaEntrada>
                <NovaSaida>
                    <h1><AiOutlineMinusCircle color="white" fontSize="22px" /></h1>
                    <h2>Nova <br />saída</h2>
                </NovaSaida>
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
h1{
    margin-right:163px;
}

`
const WhiteBoard = styled.div`
position: absolute;
box-sizing:border-box;
padding-left:73px;
padding-right:73px;
width: 326px;
height: 446px;
left: 25px;
top: 78px;
display:flex;
align-items:center;
justify-content:center;
background: #FFFFFF;
border-radius: 5px;
h1{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
}
`

const NovaEntrada = styled.div`
position: absolute;
width: 155px;
height: 114px;
left: 25px;
top: 537px;
background: #A328D6;
border-radius: 5px;
h1{
    position: absolute;
    left: 6.25%;
    right: 6.25%;
    top: 6.25%;
    bottom: 6.25%;
}
h2{
    position: absolute;
    width: 64px;
    height: 40px;
    left: 10px;
    top: 65px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
}
`
const NovaSaida = styled.div`
position: absolute;
width: 156px;
height: 114px;
left: 195px;
top: 537px;
background: #A328D6;
border-radius: 5px;
h1{
    position: absolute;
    left: 6.25%;
    right: 6.25%;
    top: 6.25%;
    bottom: 6.25%;
}
h2{
    position: absolute;
    width: 64px;
    height: 40px;
    left: 10px;
    top: 65px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
}
` 