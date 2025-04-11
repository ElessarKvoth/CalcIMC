import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Esse componente recebe o IMC como uma prop e classifica o usuário com base no valor do IMC.
const Classificacao = ({ imc }) => {
  let classificacao; // Variável para guardar a classificação do IMC.

  
  switch (true) {
    case imc < 18.5:
      classificacao = 'Abaixo do peso'; // Se o IMC for menor que 18.5, o usuário está abaixo do peso.
      break;
    case imc >= 18.5 && imc < 24.9:
      classificacao = 'Peso normal'; // IMC entre 18.5 e 24.9 é considerado peso normal.
      break;
    case imc >= 25 && imc < 29.9:
      classificacao = 'Sobrepeso'; // IMC entre 25 e 29.9 é sobrepeso.
      break;
    case imc >= 30 && imc < 34.9:
      classificacao = 'Obesidade grau 1'; // IMC entre 30 e 34.9 é obesidade grau 1.
      break;
    case imc >= 35 && imc < 39.9:
      classificacao = 'Obesidade grau 2'; // IMC entre 35 e 39.9 é obesidade grau 2.
      break;
    default:
      classificacao = 'Obesidade grau 3'; // Qualquer IMC acima de 40 é obesidade grau 3.
      break;
  }

  // Retorna um texto estilizado com a classificação do IMC.
  return (
    <Text style={styles.result}>
        {classificacao} 
    </Text>
  );
};

// Estilos para o texto da classificação.
const styles = StyleSheet.create({
  result: {
    marginTop: 20, 
    fontSize: 16, 
    textAlign: 'center', 
    color: '#62f5ff', 
  },
});

export default Classificacao; // Exporta o componente para ser usado em outros lugares.
