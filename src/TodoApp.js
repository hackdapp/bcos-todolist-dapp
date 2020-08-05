import React, { Component } from 'react';
import styled from 'styled-components';
import { getTodoItems, addTodoItem, delTodoItem } from './api/todolist'

class TodoApp extends Component {
    render() {
        return (
          <Container>
            <Header>
              <H1>TodoList DApp.</H1>
              <H2>Lets get started in developping blockchain-based apps</H2>
            </Header>
            <TodoListContainer>
              <InputText
                value={this.state.newItem}
                placeholder="What needs to be done ?"
                onChange={e => this.setState({ newItem: e.target.value })}
                onKeyDown={this.handleSubmit}
              />
              {this.state.todoItems.length > 0 &&
                <List>
                  {this.state.todoItems.map((item, itemIndex) =>
                    <TodoItem key={itemIndex}>
                      <ItemLabel>{item.value}</ItemLabel>
                      <DestroyBtn
                        onClick={() => this.handleDeleteTodoItem(itemIndex)}
                      >
                        ×
                      </DestroyBtn>
                    </TodoItem>
                  )}
                </List>
              }
            </TodoListContainer>
            <PendingContainer>
              <Pending
                active={this.state.pending}
                activeColor="red"
              >
                Transaction Pending
              </Pending>
              <Pending
                active={this.state.calling}
                activeColor="#5eef8b"
              >
                Reading Blockchain
              </Pending>
            </PendingContainer>
          </Container>
        );
    }

    constructor(props) {
        super(props);

        this.state = {
            todoItems: [],
            newItem: '',
            pending: false,
            calling: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteTodoItem = this.handleDeleteTodoItem.bind(this);
    }

  async componentWillMount() {
      const todoItems = await this.handleQueryTodoItems();
      console.log(todoItems)
      this.setState({
          todoItems
      });
  }

  async handleSubmit({ key }) {
      if (key !== 'Enter') return;

      this.setState({ pending: true });


      await addTodoItem(this.state.newItem);

      const todoItems = await this.handleQueryTodoItems();
      this.setState({
          todoItems,
          newItem: '',
          pending: false
      });

  }

  async handleQueryTodoItems() {
      this.setState({
          calling: true
      });

      const todoItems = await getTodoItems();
      this.setState({
          calling: false
      });
      return todoItems;
  }

  async handleDeleteTodoItem(position) {
      this.setState({
          pending: true
      });

     await delTodoItem(position);

    const todoItems = await this.handleQueryTodoItems();
    this.setState({
      todoItems,
      pending: false
    });
  }
}

export default TodoApp;

const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const H1 = styled.h1 `
  color: #ead7d7;
  font-size: 100px;
  margin-bottom: -20px;
`;

const H2 = styled.h2 `
  color: #d2bebe;
  font-size: 35px;
`;

const TodoListContainer = styled.section `
  background: #fff;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

const InputText = styled.input `
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  width: 440px;

  position: relative;
  margin: 0;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;

  &:focus {
    outline: none;
  }
`;

const List = styled.ul `
  width: 440px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const TodoItem = styled.li `
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemLabel = styled.label `
  white-space: pre-line;
  word-break: break-all;
  padding: 15px 60px 15px 15px;
  margin-left: 45px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
`;

const Button = styled.button `
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  appearance: none;
  font-smoothing: antialiased;
  outline: none;
`;

const DestroyBtn = styled(Button)`
  position: absolute;
  top: 0;
  right: -50px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  cursor: pointer;
`;

const PendingContainer = styled.div `
  position: fixed;
  top: 1px;
  font-size: 20px;
  right: 1px;
`;

const Pending = styled.div `
  color: ${props => props.active ? props.activeColor || 'red' : '#c7c7c7'};
`;

