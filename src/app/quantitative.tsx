import { StyleSheet, Text,TouchableOpacity, View } from 'react-native';

export default function QuantitativeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quantitative Aptitude 🔢</Text>

      <Text style={styles.question}>
        What is 20% of 100?
      </Text>

      <TouchableOpacity style={styles.answer}>
  <Text>A. 10</Text>
</TouchableOpacity>
      <TouchableOpacity style={styles.answer}>
  <Text>B. 20</Text>
</TouchableOpacity>
      <TouchableOpacity style={styles.answer}>
  <Text>C. 30</Text>
</TouchableOpacity>
      <TouchableOpacity style={styles.answer}>
  <Text>D. 40</Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#171A2B',
    marginBottom: 30,
  },

  question: {
    fontSize: 20,
    fontWeight: '700',
    color: '#171A2B',
    marginBottom: 25,
  },

  answer: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 15,
    marginBottom: 12,
    fontSize: 16,
    color: '#171A2B',
  },
});