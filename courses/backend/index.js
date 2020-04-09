const express = require('express');

const app = express();

app.get('/', (require, response) => {
  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Victor de Oliveira'
  });
});

app.listen(3333);