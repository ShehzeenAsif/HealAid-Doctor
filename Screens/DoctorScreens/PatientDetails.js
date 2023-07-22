import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PatientDetails({ route }) {
  const { patient } = route.params;

  return (
    <View style={styles.container}>
      <Text>{patient.name}</Text>
      <Text>{patient.slot}</Text>
      <Text>{patient.time}</Text>
      {/* Add other patient details here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
