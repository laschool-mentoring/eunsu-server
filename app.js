const express = require('express');

const app = express();

app.set('port', process.env.PORT || 8080);

app.use((req, res, next) => {
    console.log('모든 요청에서 실행되는 부분입니다.');
    next();
});

app.get('/test', (req, res, next) => {
    res.send('Hello kblaschool');
    console.log('Test Server');
});

app.get('/error', (req, res, next) => {
    throw new Error('에러 처리 미들웨어 실행');
})

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), "번 포트에서 대기 중");
});