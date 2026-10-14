import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router} from 'expo-router';
export default function AptitudeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Aptitude Practice 🧠</Text>

      <Text style={styles.subtitle}>
        Test your quantitative and logical reasoning skills.
      </Text>

      <View style={styles.progressCard}>
        <Text style={styles.progressTitle}>Your Progress</Text>
        <Text style={styles.progressText}>0 / 10 Questions</Text>

        <View style={styles.progressBackground}>
          <View style={styles.progress} />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Topics</Text>

      <TouchableOpacity
  style={styles.topicCard}
  onPress={() => router.push('/quantitative')}
>
        <Text style={styles.icon}>🔢</Text>

        <View style={styles.content}>
          <Text style={styles.topicTitle}>Quantitative Aptitude</Text>
          <Text style={styles.topicSubtitle}>
            Numbers, percentages, ratios and averages
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.topicCard}>
        <Text style={styles.icon}>🧩</Text>

        <View style={styles.content}>
          <Text style={styles.topicTitle}>Logical Reasoning</Text>
          <Text style={styles.topicSubtitle}>
            Patterns, puzzles and logical thinking
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.topicCard}>
        <Text style={styles.icon}>📊</Text>

        <View style={styles.content}>
          <Text style={styles.topicTitle}>Data Interpretation</Text>
          <Text style={styles.topicSubtitle}>
            Charts, tables and data-based questions
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#171A2B',
    marginTop: 20,
  },

  subtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 8,
    marginBottom: 25,
  },

  progressCard: {
    backgroundColor: '#5B67F1',
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
  },

  progressTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  progressText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
    marginVertical: 12,
  },

  progressBackground: {
    height: 8,
    backgroundColor: '#858DF3',
    borderRadius: 10,
    overflow: 'hidden',
  },

  progress: {
    width: '0%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#171A2B',
    marginBottom: 15,
  },

  topicCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    fontSize: 28,
    marginRight: 14,
  },

  content: {
    flex: 1,
  },

  topicTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#171A2B',
  },

  topicSubtitle: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
    lineHeight: 18,
  },

  arrow: {
    fontSize: 26,
    color: '#5B67F1',
  },
});