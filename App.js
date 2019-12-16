import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native'
import Heading from "./Heading"
import Input from "./src/Input"
import Button from "./src/Button"
import TodoList from "./src/TodoList"

let todoIndex = 0;
class App extends Component {

  constructor() {
    super()
    this.state = {
      inputValue:'',
      todos:[],
      type:'All'
    }

    this.submitTodo = this.submitTodo.bind(this);
  }

  inputChange(inputValue) {
    console.log(' Input Value: ', inputValue)
    this.setState({ inputValue })
  }
  render () {

    const { inputValue, todos }  = this.state
    return (
      <View style={styles.container}>

        <ScrollView keyboardShouldPersistTaps="always"
          style={StyleSheet.content}>
            <Heading/>
            <Input
              inputValue={inputValue}
              inputChange={(text) => this.inputChange(text)} />
            <TodoList todos={todos} />
            <Button submitTodo={this.submitTodo}/>
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
      console.log('State :' , this.state)
    })
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f5f5f5"
  }, 
  content: {
    flex: 1,
    paddingTop: 60
  }
})

export default App