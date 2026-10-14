import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ProgressScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Progress 📊</Text>

      <Text style={styles.subtitle}>
        Track your placement preparation journey.
      </Text>

      <View style={styles.scoreCard}>
        <Text style={styles.scoreLabel}>Overall Readiness</Text>
        <Text style={styles.score}>65%</Text>

        <View style={styles.progressBackground}>
          <View style={styles.progress} />
        </View>

        <Text style={styles.scoreText}>
          You're making good progress!
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Practice Progress</Text>

      <View style={styles.card}>
        <Text style={styles.icon}>🧠</Text>

        <View style={styles.content}>
          <Text style={styles.cardTitle}>Aptitude</Text>
          <Text style={styles.cardSubtitle}>
            0 / 10 questions completed
          </Text>
        </View>

        <Text style={styles.percentage}>0%</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.icon}>💻</Text>

        <View style={styles.content}>
          <Text style={styles.cardTitle}>Coding</Text>
          <Text style={styles.cardSubtitle}>Practice coming soon</Text>
        </View>

        <Text style={styles.percentage}>0%</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.icon}>🗣️</Text>

        <View style={styles.content}>
          <Text style={styles.cardTitle}>Interview</Text>
          <Text style={styles.cardSubtitle}>Practice coming soon</Text>
        </View>

        <Text style={styles.percentage}>0%</Text>
      </View>

      <Text style={styles.sectionTitle}>Achievements 🏆</Text>

      <View style={styles.achievementCard}>
        <Text style={styles.trophy}>🎯</Text>

        <View style={styles.content}>
          <Text style={styles.cardTitle}>
            Placement Journey Started
          </Text>
          <Text style={styles.cardSubtitle}>
            Keep practicing to unlock more achievements.
          </Text>
        </View>
      </View>
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

  scoreCard: {
    backgroundColor: '#5B67F1',
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
  },

  scoreLabel: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  score: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: '800',
    marginVertical: 10,
  },

  progressBackground: {
    height: 8,
    backgroundColor: '#858DF3',
    borderRadius: 10,
    overflow: 'hidden',
  },

  progress: {
    width: '65%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },

  scoreText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 12,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#171A2B',
    marginBottom: 15,
  },

  card: {
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

  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#171A2B',
  },

  cardSubtitle: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
    lineHeight: 18,
  },

  percentage: {
    fontSize: 16,
    fontWeight: '700',
    color: '#5B67F1',
  },

  achievementCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },

  trophy: {
    fontSize: 32,
    marginRight: 14,
  },
})