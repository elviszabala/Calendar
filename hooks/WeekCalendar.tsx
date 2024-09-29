import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WeekView from 'react-native-week-view';
import moment from 'moment';

const WeekCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Ejemplo de eventos
  const events = [
    {
      id: 1,
      description: 'Reunión con el equipo',
      startDate: moment().set({ hour: 14, minute: 0 }).toDate(),
      endDate: moment().set({ hour: 15, minute: 0 }).toDate(),
    },
    {
      id: 2,
      description: 'Cita médica',
      startDate: moment().add(1, 'days').set({ hour: 11, minute: 0 }).toDate(),
      endDate: moment().add(1, 'days').set({ hour: 12, minute: 0 }).toDate(),
    },
    {
      id: 3,
      description: 'Almuerzo con cliente',
      startDate: moment().add(2, 'days').set({ hour: 13, minute: 0 }).toDate(),
      endDate: moment().add(2, 'days').set({ hour: 14, minute: 0 }).toDate(),
    },
  ];

  const handleEventPress = (event) => {
    setSelectedEvent(event);
  };

  return (
    <View style={styles.container}>
      {/* Vista de la semana con eventos */}
      <WeekView
        events={events}
        selectedDate={new Date()} // Fecha inicial de la semana
        numberOfDays={7} // Mostrar 7 días (una semana)
        onEventPress={handleEventPress}
        headerStyle={styles.headerStyle}
        hoursInDisplay={12} // Número de horas visibles
        formatDateHeader="ddd D" // Formato para los encabezados de día
      />

      {/* Mostrar la información del evento seleccionado */}
      {selectedEvent && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Evento: {selectedEvent.description}</Text>
          <Text style={styles.infoText}>Hora de inicio: {moment(selectedEvent.startDate).format('LT')}</Text>
          <Text style={styles.infoText}>Hora de fin: {moment(selectedEvent.endDate).format('LT')}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  headerStyle: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginTop: 20,
  },
  infoText: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default WeekCalendar;
