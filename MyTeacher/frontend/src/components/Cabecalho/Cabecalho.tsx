import { CabecalhoCointainer, Logo } from "./Cabecalho.style";

const Cabecalho = () => {
    return (
        <CabecalhoCointainer>
            <div>
                <Logo src="/imagens/myteacher.png"/>
            </div>

            <p>Encontre o professor perfeito!</p>
        </CabecalhoCointainer>
    )
}

export default Cabecalho;