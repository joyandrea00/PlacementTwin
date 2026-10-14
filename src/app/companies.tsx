import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CompaniesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Companies 🏢</Text>

      <Text style={styles.subtitle}>
        Explore companies and prepare for your placement.
      </Text>

      <Text style={styles.sectionTitle}>Top Companies</Text>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.logo}>☁️</Text>

        <View style={styles.content}>
          <Text style={styles.companyName}>Amazon</Text>
          <Text style={styles.description}>
            Cloud, software and technology opportunities
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.logo}>🪟</Text>

        <View style={styles.content}>
          <Text style={styles.companyName}>Microsoft</Text>
          <Text style={styles.description}>
            Software, cloud and AI opportunities
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.logo}>🔵</Text>

        <View style={styles.content}>
          <Text style={styles.companyName}>Google</Text>
          <Text style={styles.description}>
            Software engineering and technology roles
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.logo}>⚡</Text>

        <View style={styles.content}>
          <Text style={styles.companyName}>Cloudflare</Text>
          <Text style={styles.description}>
            Cloud, CDN, DNS and cybersecurity
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
    marginBottom: 30,
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

  logo: {
    fontSize: 30,
    marginRight: 14,
  },

  content: {
    flex: 1,
  },

  companyName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#171A2B',
  },

  description: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
    lineHeight: 18,
  },

  arrow: {
    fontSize: 28,
    color: '#5B67F1',
  },
});