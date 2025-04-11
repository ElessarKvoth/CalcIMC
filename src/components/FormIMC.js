import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import { useState } from 'react';
import Classificacao from './Classificacao';
import IdealWeight from './IdealWeight';

const FormIMC = () => {
  // Estados para armazenar peso, altura e o IMC calculado
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);

  // Função para calcular o IMC
  const calcularIMC = () => {
    if (peso && altura) {
      const alturaMetros = parseFloat(altura) / 100; // Converte altura para metros
      const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2); // Calcula o IMC
      setImc(imcCalculado); // Atualiza o estado com o IMC calculado
    }
  };

  return (
    <View style={styles.formContainer}>
      {/* Campo de entrada para o peso */}
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        placeholderTextColor="#fff"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      {/* Campo de entrada para a altura */}
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        placeholderTextColor="#fff"
        value={altura}
        onChangeText={setAltura}
      />
      {/* Botão para calcular o IMC */}
      <Button title="Calcular IMC" onPress={calcularIMC} />
      {/* Exibe os resultados apenas se o IMC for calculado */}
      {imc && <Result imc={imc} />}
      {imc && <Classificacao imc={imc} />}
      {imc && <IdealWeight altura={altura} />}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#0b304b',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0a7ac9', 
  },
  input: {
    height: 40,
    borderColor: '#0a7ac9',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
    color: '#fff',
    textDecorationColor: '#f0f',
    overlayColor: '#f0f'
  },
});

export default FormIMC;
