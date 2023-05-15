import { StyleSheet, View } from 'react-native';
import DeviceInfo from './screens/DeviceInfo.jsx';
import BatteryInfo from './screens/BatteryInfo.jsx';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      gap: 10
  },
  content: {
      flex: 1,
      gap: 20,
      padding: 20,
      alignSelf: 'center',
  },
  contentTextStyle: {
      padding: 5,
      textAlignVertical: 'center',
      minHeight: 50,
      backgroundColor: '#969',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center'
  },
});


export default function App() {
  return (
    <View style={styles.container}>
      {/*<DeviceInfo />*/}
      <BatteryInfo />
    </View>
  );
}
