import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  headerTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },
  backgroundStyle: {
    backgroundColor: '#6750a4',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function HeaderComponent({ title }) {
  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.headerTextStyle}>{title}</Text>
    </View>
  );
}
