// components/TaskList.js
import React from 'react';
import { FlatList, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Icono para eliminar tarea

const TaskList = ({ tasks, removeTask }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <View style={styles.taskItem}>
          <Text style={styles.taskText}>{item.name}</Text>
          <TouchableOpacity onPress={() => removeTask(item.id)}>
            <AntDesign name="delete" size={20} color="red" />
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#1e1e1e',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#121212',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  taskText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default TaskList;
