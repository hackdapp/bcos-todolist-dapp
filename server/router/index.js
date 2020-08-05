const express = require('express');
const _ = require('lodash');
const { call, sendRawTransaction } = require('../chain');
const router = express.Router();
router.use((req, res, next) => {
  next();
});


const prefix = '/todo';

router.get(`${prefix}/list`, async function (req, res) {
  const ret = await call('TodoList', 'getTodoItems', []).then((res) => {
    return response2json(res.output.result,['value', 'active'], 'arrayOfObject');
  })
  res.send(ret);
});

router.post(`${prefix}`, async function (req, res) {
  const { item } = req.body;

  const ret = await sendRawTransaction('TodoList', 'addTodoItem', parseInt(item));
  res.send(ret);
});

router.delete(`${prefix}/:id`, async function (req, res) {
  const id = req.params.id;

  const ret = await sendRawTransaction('TodoList', 'deleteTodoItem', parseInt(id));
  res.send(ret);
});


function response2json(response, key_params, type)  {
  switch (type) {
      case 'arrayOfObject':
          {
              const result = [];
              response.forEach((paramValues, paramIndex) => {
                  const paramName = key_params[paramIndex];

                  paramValues.forEach((paramValue, itemIndex) => {
                      const item = _.merge({}, _.get(result, [itemIndex], {}));
                      item[paramName] = paramValue;
                      result[itemIndex] = item;
                  })
              });

              return result;
          }
      default:
          return response;
  }
}

module.exports = router;

