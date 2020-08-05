const { assert, should } = require('chai');
const { call, sendRawTransaction } = require('../server/chain');

describe('test for TodoListContract', () => {

  it('GetTodoListItems', async () => {
    const res = await call('TodoList', 'getTodoItems', []);
    assert.equal(res.output.result.length, 2);
  });

  it('AddTodoItem', async () => {
    const item_val = 12;

    await sendRawTransaction('TodoList', 'addTodoItem', parseInt(12));

    const res = await call('TodoList', 'getTodoItems', []);
    assert.equal(res.output.result.length, 2);
    assert.equal(res.output.result[0][0], item_val);
  });

  it('DelTodoItem', async () => {
    await sendRawTransaction('TodoList', 'deleteTodoItem', parseInt(0));

    const res = await call('TodoList', 'getTodoItems', []);

    assert.equal(res.output.result.length, 2);
    assert.equal(res.output.result[0].length, 0);
  });
})
