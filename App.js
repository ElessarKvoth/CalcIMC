import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title'; // Título da aplicação
import FormIMC from './src/components/FormIMC'; // Formulário para calcular o IMC

export default function App() {
  return (
    <View style={styles.container}>
      <Title /> 
      <FormIMC />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    padding: 16, 
    backgroundColor: '#0d4064', 
  },
});
