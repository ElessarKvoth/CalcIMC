// Importa as bibliotecas necessárias do React Native
import { Text, StyleSheet } from 'react-native';

// Componente Title que exibe o título da aplicação
const Title = () => {
  // mostra o título
  return (
    <Text style={styles.title}>Calculadora de IMC</Text>
  );
};

// Estilos
const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0093ff',
    marginBottom: 24,
  },
});

// Exporta o componente Title para ser usado em outros lugares
export default Title;
