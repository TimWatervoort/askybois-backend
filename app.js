const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const gamesRouter = require('./routes/games');
const scoresRouter = require('./routes/scores');
const nameWinsRouter = require('./routes/name_wins');
const answerWinsRouter = require('./routes/answer_wins');
const bonusQuestionsRouter = require('./routes/bonus_questions');
const usersScoresRouter = require('./routes/users_scores');

const environment = process.env.NODE_ENV || 'development'
if (environment !== 'production') {
  require('dotenv').config();
}

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/games', gamesRouter);
app.use('/scores', scoresRouter);
app.use('/name_wins', nameWinsRouter);
app.use('/answer_wins', answerWinsRouter);
app.use('/bonus_questions', bonusQuestionsRouter);
app.use('/users_scores', usersScoresRouter);

module.exports = app;
