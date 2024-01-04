import React from 'react';
import {Text} from 'react-native';
import Estilo from '../estilo';

export default props => {
  return (
    <>
      <Text style={Estilo.txtG}>Membros da família</Text>
      {props.children}
    </>
  );
};
