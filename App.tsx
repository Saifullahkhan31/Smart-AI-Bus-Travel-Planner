import { View, Text, StyleSheet } from 'react-native';
import { Colors } from './src/constants/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Smart AI Bus Travel Planner ✦
      </Text>
      <Text style={styles.sub}>
        Project initialized successfully with Expo Go! 🚀
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  sub: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 8,
  },
});