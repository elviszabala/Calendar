import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

export default function App() {
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const [events, setEvents] = useState([
    {
      id: 1,
      description: 'Reunión con el equipo',
      date: moment(selectedDate).set({ hour: 14, minute: 0 }).format('YYYY-MM-DD'),
    },
    {
      id: 2,
      description: 'Cita médica',
      date: moment(selectedDate).add(1, 'days').set({ hour: 11, minute: 0 }).format('YYYY-MM-DD'),
    },
    {
      id: 3,
      description: 'Almuerzo con cliente',
      date: moment(selectedDate).add(2, 'days').set({ hour: 13, minute: 0 }).format('YYYY-MM-DD'),
    },
  ]);

  const handleDateSelected = (date) => {
    setSelectedDate(date.format('YYYY-MM-DD'));
  };

  const filteredEvents = events.filter(event => event.date === selectedDate);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendario Semanal</Text>
      <CalendarStrip
        style={{ height: 100, paddingTop: 20, paddingBottom: 10, width: 300 }}
        onDateSelected={handleDateSelected}
        selectedDate={moment(selectedDate)} // Marca la fecha seleccionada
      />
      <Text style={styles.infoText}>Eventos del {moment(selectedDate).format('DD MMMM YYYY')}:</Text>
      {filteredEvents.length > 0 ? (
        filteredEvents.map(event => (
          <Text key={event.id} style={styles.eventText}>
            {event.description}
          </Text>
        ))
      ) : (
        <Text style={styles.eventText}>No hay eventos para este día.</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  eventText: {
    fontSize: 14,
    marginVertical: 5,
  },
});
