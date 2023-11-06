import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';
import TodoItemList from './components/todoitemlist';
import Header from './components/header';
import CreateTodoList from './components/createTodoList';

export default function App() {
  const [task, setTask] = useState([
    { text: 'Get up at 4 am', key: 1 },
    { text: 'Take bath and have coffee by 5 am', key: 2 },
    { text: 'Prepare breakfast by 6am', key: 3 },
  ]);

  const clickHandler = (key) => {
    console.log(key);
    setTask((prevTask) => {
      return prevTask.filter(task => task.key != key);
    })
  }

  const submitHandler = (text) => {
    setTask(prevTodos => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos]
    })
  }

  return (
    <View style={styles.container}>

      <Header />
      <View style={styles.content}>
        <CreateTodoList submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={task}
            renderItem={({ item }) => (
              <TodoItemList item={item} clickHandler={clickHandler} />
            )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#eee',
  },

  content: {
    padding: 12,
  },
  list: {
    marginTop: 30,
  }

});
