import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Button } from 'react-native'
import Heading from "./Heading"
import Input from "./src/Input"
import TButton  from "./src/Button"
import TodoList from "./src/TodoList"
import getStyleSheet from './styles';

let todoIndex = 0;
class App extends Component {

  constructor() {
    super()
    this.state = {
      inputValue:'',
      todos:[],
      type:'All',
      darkTheme: false
    }    

    this.toggleTheme = this.toggleTheme.bind(this);

    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplate = this.toggleComplate.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setType = this.setType.bind(this);
  }

  toggleTheme() {
    this.setState({darkTheme: !this.state.darkTheme})
  };

  setType(type) {
    this.setState( { type })
  }

  inputChange(inputValue) {
    console.log(' Input Value: ', inputValue)
    this.setState({ inputValue })
  }

  render () {

    const styles = getStyleSheet(this.state.darkTheme);

    const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;

    const { inputValue, todos }  = this.state
    return (
      <View style={styles.container}>
        <View style={styles.box} >
          <Button title={backgroundColor} onPress={this.toggleTheme} ></Button>
          <Text>
          {backgroundColor}
          </Text>
        </View>
        <ScrollView keyboardShouldPersistTaps="always"
          style={StyleSheet.content}>
            <Heading/>
            <Input
              inputValue={inputValue}
              inputChange={(text) => this.inputChange(text)} />
            <TodoList
              toggleComplate={this.toggleComplate}
              deleteTodo={this.deleteTodo}
              todos={todos} />
            <TButton submitTodo={this.submitTodo}/>
          </ScrollView>

      </View>
    )
  }

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) {
      return;
    }

    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complate:false
    }

    todoIndex++;
    const todos = [...this.state.todos, todo]
    this.setState( { todos, inputValue:''}, ()=>{
    })
  }

  deleteTodo( todoIndex ) {
    let { todos } = this.state;
    todos = todos.filter( (todo) => todo.todoIndex !== todoIndex)
    this.setState({ todos })
  }

  toggleComplate( todoIndex ) {
    
    let { todos } = this.state;
    
    todos.forEach((todo) => {
      if (todo.todoIndex == todoIndex) {
        todo.complate = !todo.complate;
      }
    })

    this.setState({ todos });
  }
}

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:"#f5f5f5"
//   }, 
//   content: {
//     flex: 1,
//     paddingTop: 60
//   }
// })

export default App