/**
 * express 모듈 불러오기
 * */
const express = require('express');

/**
 * express 모듈을 사용하여 app 서버 생성
 * */
const app = express();

/**
 * app은 REST에서 사용되는 모든 API를 사용가능
 *
 * 예: app.get(), app.post(), app.put(), app.delete()
 *
 * REST API중 get은 가장 기본적으로 사용되는 API로
 * 일반 인터넷 브라우저에서 URL에 링크를 입력할경우 (www.google.com)
 * www.google.com 이라는 get요청이 진행이됨.
 *
 * 첫번째 파라미터로 경로를 받고
 * 두번째 파라미터로 해당 경로에서 실행하고싶은 경로를 받습니다.
 * 이 코드의경우 루트 경로 '/'에 get 요청이 들어올시 'Hello World'라는
 * 글을 보내달라는 함수입니다.
 * */
app.get('/', (req, res) => res.send('Hello World!'));

/**
 * express 서버를 시작하는 가장 중요한 코드
 * app.listen()은 서버를 시작할때 사용되는 함수이며
 * 첫번째 파라미터로 서버를 시작하고싶은 포트,
 * 두번째 파라미터로 서버가 성공적으로 시작됐을 시 진행하려는 작업을 함수로 받음
 * 현재 코드는 3000번 포트에서 서버를 시작하고 완료시 'App listening on port 3000!'을 프린트하라는 코드
 * */
app.listen(3000, () => console.log('App listening on port 3000!'));