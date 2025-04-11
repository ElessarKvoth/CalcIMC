import React from 'react';
import { Text, StyleSheet } from 'react-native';

const IdealWeight = ({ altura }) => {
  const alturaMetros = altura / 100; // Converte altura de centímetros para metros
  const pesoMinimo = (18.5 * alturaMetros * alturaMetros).toFixed(2); // Calcula o peso mínimo ideal
  const pesoMaximo = (24.9 * alturaMetros * alturaMetros).toFixed(2); // Calcula o peso máximo ideal

  //mostra o peso ideal na tela
  return (
    <Text style={styles.idealWeight}>
      Seu peso ideal está entre {pesoMinimo}kg e {pesoMaximo}kg
    </Text>
  );
};

const styles = StyleSheet.create({
  idealWeight: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    color: '#59ff59',
  },
});

export default IdealWeight;