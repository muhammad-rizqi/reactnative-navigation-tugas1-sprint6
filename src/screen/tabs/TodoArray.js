import React, {Component} from 'react';
import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../../styles/styles';

export class TodoArray extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      todos: [
        {
          title: 'Belajar React Native',
          checked: false,
        },
        {
          title: 'Belajar Async Storage',
          checked: false,
        },
        {
          title: 'Belajar API',
          checked: false,
        },
      ],
    };
  }

  addTodo() {
    const {input, todos} = this.state;

    this.setState({
      todos: [{title: input, checked: false}, ...todos],
    });
  }

  deleteTodo(id) {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter((todo, index) => index !== id),
    });
  }

  checkTodo(id) {
    const {todos} = this.state;
    this.setState({
      todos: todos.map((todo, index) => {
        return {
          title: todo.title,
          checked: index == id ? !todo.checked : todo.checked,
        };
      }),
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Todo Array</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            style={[styles.textInput, {flex: 1}]}
            placeholder="Tell me what to do?"
            onChangeText={(value) => this.setState({input: value})}
          />
          <TouchableOpacity
            style={styles.circleButton}
            onPress={() => this.addTodo()}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>

        <View>
          {this.state.todos.map((todo, index) => (
            <View style={styles.todoItem} key={index}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/icon/underline-button.png')}
                  style={styles.smallIcon}
                />
              </TouchableOpacity>
              <Text
                style={{
                  flex: 1,
                  textDecorationLine: todo.checked ? 'line-through' : 'none',
                }}>
                {todo.title}
              </Text>
              <TouchableOpacity onPress={() => this.checkTodo(index)}>
                <Image
                  source={
                    todo.checked
                      ? require('../../assets/icon/check-box.png')
                      : require('../../assets/icon/blank-check-box.png')
                  }
                  style={styles.smallIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.deleteTodo(index)}>
                <Image
                  source={require('../../assets/icon/rubbish-bin-delete-button.png')}
                  style={styles.smallIcon}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default TodoArray;
