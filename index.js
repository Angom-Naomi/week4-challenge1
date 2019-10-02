//require dependencies
const chalk  = require('chalk');
const clear  = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');
const octokit = require ('@octokit/rest');
const clui = require('clui');
const config = require('configstore');
const lodash = require('lodash');
const minimist = require('minimist');
const touch = require('touch');
const simplegit =require('simple-git');

//main display header
    clear();
console.log(
  chalk.yellow(
    figlet.textSync('News Desk', {horizontalLayout: 'default' , verticalLayout:"default"}),
  )
);

//ask user to choose one news source
const askQuestions=()=>{ 
const questions=[
    {
        type: 'list',
        name: 'sources',
        message: 'Select one news source:',
        choices: [ 'BBC', 'Aljazeera', 'CNN', 'El Mundo' ],
    },
  ];
return inquirer.prompt(questions);
}

//return top headlines
var url = 'https://newsapi.org/v2/top-headlines?' +     //BBC
          'sources=bbc-news&' +
          'apiKey=d83c5b19d4f34397aaccdafa844d3ef4';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

var url = 'https://newsapi.org/v2/top-headlines?' +     //Al Jazeera
          'sources=al-jazeera-english&' +
          'apiKey=d83c5b19d4f34397aaccdafa844d3ef4';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

var url = 'https://newsapi.org/v2/top-headlines?' +     //CNN
          'sources=cnn&' +
          'apiKey=d83c5b19d4f34397aaccdafa844d3ef4';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

var url = 'https://newsapi.org/v2/top-headlines?' +     //El Mundo
          'sources=el-mundo&' +
          'apiKey=d83c5b19d4f34397aaccdafa844d3ef4';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })





