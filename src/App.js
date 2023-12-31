import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import ListaProdutos from './components/produtos/ListaProdutos';
// import UsuarioLogado from './components/UsuarioLogado';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import ParImpar from './components/ParImpar';
// import Diferenciar from './components/Diferenciar';
// import ContadorV2 from './components/contador/ContadorV2';
// import Pai from './components/indireta/Pai';
//import Pai from './components/direta';
//import Contador from './components/Contador';
// import Botao from './components/Botao';
// import Titulo from './components/Titulo';
// import Aleatorio from './components/Aleatorio';
// import MinMax from './components/MinMax';
// import Comp, {Comp1, Comp2} from './components/Mult';
// import Primeiro from './components/Primeiro';

export default () => (
  <SafeAreaView style={style.App}>
    <ListaProdutos />
    {/* 
    <UsuarioLogado usuario={{nome:'Maria', email:'maria@hotmail.com'}}/>
    <UsuarioLogado usuario={{nome:'Maria'}}/>
    <UsuarioLogado usuario={{email:'maria@hotmail.com'}}/>
    <UsuarioLogado usuario={null}/>
    <UsuarioLogado usuario={{}}/>
    <Familia>
      <Membro nome='José' sobrenome='Pereira'/>      
      <Membro nome='Silvia' sobrenome='Pereira'/>      
    </Familia>
    <Familia>
      <Membro nome='Maria' sobrenome='Silva'/>      
      <Membro nome='Antônio' sobrenome='Silva'/>      
    </Familia>
    <ParImpar num={3} />
    <Diferenciar />
    <ContadorV2/>
    <Pai />
    <Pai />    
    <Contador inicial={100} passo={13} />
    <Contador />
    <Comp />
    <Botao />
    <Titulo principal = "Tela de Cadastro de Produto" secundario = "Tela de cadastro"/>
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <MinMax min={3} max={20} />
    <MinMax min={1} max={94} />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
