const axios = require('axios');

const request = axios.create({
  baseURL: '/api/v1',
  timeout: 5000
})

request.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export function getTodoItems(){
  return request({
    url: '/todo/list',
    method: 'get',
  });
}

export function addTodoItem(item){
  return request({
    url: '/todo',
    method: 'post',
    data: {
      item
    }
  })
}

export function delTodoItem(id){
  return request({
    url: `/todo/${id}`,
    method: 'delete',
  })
}

