import React from 'react';
import {View, StyleSheet} from 'react-native';

import Botao from './components/Botao';
// import Titulo from './components/Titulo';
// import Aleatorio from './components/Aleatorio';
// import MinMax from './components/MinMax';
// import Comp, {Comp1, Comp2} from './components/Mult';
// import Primeiro from './components/Primeiro';

export default () => (
  <View style={style.App}>
    <Botao />
    {/* <Comp />
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
  </View>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
