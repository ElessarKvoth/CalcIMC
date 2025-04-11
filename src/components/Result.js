// Importa as bibliotecas necessárias
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Classificacao from './Classificacao';

// recebe o IMC como propriedade
const Result = ({ imc }) => {
  // Retorna a estrutura de exibição do resultado
  return (

    <View>
     
      <Text style={styles.result}>Seu IMC é: </Text>
     
      <Text style={styles.res}>{imc}</Text>
      

    </View>
  );
};

const styles = StyleSheet.create({
  result: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
  res: {
    fontSize: 50,
    textAlign: 'center',
    color: '#fff',
    marginTop: 5,
  },
});

// Exporta o componente Result para ser usado em outros lugares
export default Result;
