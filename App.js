import React from "react";
import { Container, TitleList, List, RowData, InfoData, ValueData, BtnView } from "./src/styles/custom_adm"; 

const App = () => {
  return(
    <Container>
    <TitleList>Usários</TitleList>
    <List>
      <RowData>
        <InfoData>
          <ValueData>Maria</ValueData>
        </InfoData>
        <BtnView>Detalhes</BtnView>
      </RowData>

      <RowData>
        <InfoData>
          <ValueData>Juliana</ValueData>
        </InfoData>
        <BtnView>Detalhes</BtnView>
      </RowData>

      <RowData>
        <InfoData>
          <ValueData>Thaiane</ValueData>
        </InfoData>
        <BtnView>Detalhes</BtnView>
      </RowData>

      <RowData>
        <InfoData>
          <ValueData>Bárbara</ValueData>
        </InfoData>
        <BtnView>Detalhes</BtnView>
      </RowData>
    </List>
    </Container>
  );
};


export default App;