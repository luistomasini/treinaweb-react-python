import { Button } from "@mui/material";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, Nome, Valor } from "./Lista.style";

const Lista = () => {
    return(
        <ListaStyled>
            <ItemLista>
                <Foto src="https://github.com/luistomasini.png"></Foto>
                <Informacoes>
                    <Nome>Luis Tomasini</Nome>
                    <Valor>R$ 100,00 por hora</Valor>
                    <Descricao>Aulas de Programação</Descricao>
                    <Button>Marcar Aula</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src="https://github.com/luistomasini.png"></Foto>
                <Informacoes>
                    <Nome>Luis Tomasini</Nome>
                    <Valor>R$ 100,00 por hora</Valor>
                    <Descricao>Aulas de Programação</Descricao>
                    <Button>Marcar Aula</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src="https://github.com/luistomasini.png"></Foto>
                <Informacoes>
                    <Nome>Luis Tomasini</Nome>
                    <Valor>R$ 100,00 por hora</Valor>
                    <Descricao>Aulas de Programação</Descricao>
                    <Button>Marcar Aula</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src="https://github.com/luistomasini.png"></Foto>
                <Informacoes>
                    <Nome>Luis Tomasini</Nome>
                    <Valor>R$ 100,00 por hora</Valor>
                    <Descricao>Aulas de Programação</Descricao>
                    <Button>Marcar Aula</Button>
                </Informacoes>
            </ItemLista>
        </ListaStyled>
    )
}

export default Lista;