import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default () => {
    console.warn("Teste")
    return (
        <Text style={Estilo.txtG}>Primeiro componente</Text>
    )
}
