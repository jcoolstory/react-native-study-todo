import React from 'react'
import { View } from 'react-native'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, toggleComplate }) =>{
    todos = todos.map((todo,i) => {
        return (
            <Todo
                deleteTodo={deleteTodo}
                toggleComplate={toggleComplate}
                key={i}
                todo={todo}/>
        )
    })

    return (
        <View>
            {todos}
        </View>
    )
}

export default TodoList