import React, {useState} from 'react';
import {Button, Text} from 'react-native';
import Estilo from './estilo';

export default ({inicial = 0, passo = 1}) => {
  const [numero, setNumero] = useState(inicial);

  const incr = () => setNumero(numero + passo);
  const decr = () => setNumero(numero - passo);

  return (
    <>
      <Text style={Estilo.txtG}>{numero}</Text>
      <Button title="+" onPress={incr} />
      <Button title="-" onPress={decr} />
    </>
  );
};
