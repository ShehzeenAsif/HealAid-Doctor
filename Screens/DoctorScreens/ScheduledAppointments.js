import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from '../../components/UI/Button';

export default function ScheduledAppointments({ navigation }) {
  const appointments = [
    {
      id: "a1",
      name: "Anush",
      slot: "24 July, Monday",
      time: "11am"
    },
    {
      id: "a2",
      name: "Ramsha",
      slot: "25 July, Wednesday",
      time: "11am"
    },
    {
      id: "a3",
      name: "Hania",
      slot: "29 July, Friday",
      time: "11am"
    },
  ];

  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleCardPress = (patient) => {
    setSelectedPatient(patient);
  };

  const handleBook = () => {
    // This function will be called when the "Start Consultation" button is clicked.
    // You can implement the logic for starting the consultation here.
  };

  return (
    <View style={styles.container}>
      {appointments.map((item) => {
        return (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => handleCardPress(item)}
          >
            <Text>{item.name}</Text>
            <Text>{item.slot}</Text>
            <Text>{item.time}</Text>
            <View style={styles.buttonContainer}>
                  <Button onPress={handleBook} style={styles.button}>
                    Start Consultation
                  </Button>
            </View>

            {selectedPatient?.id === item.id && (
              <View>
                {/* Show Patient Details */}
                <Text>Name: {selectedPatient.name}</Text>
                {/* Add other patient details here */}
                
                {/* Add Prescription Option */}
                <View style={styles.buttonContainer}>
                  <Button onPress={handleBook} style={styles.button}>
                    Upload Prescription
                  </Button>
                </View>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    elevation: 3,
    borderColor: "black",
    borderRadius: 5,
    shadowRadius: 2,
  },
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
