var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
    
    url = 'http://www.imdb.com/title/tt1229340/';

    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);

            var title, release, rating;
            var json = { title : "", release : "", rating : ""};

            var test = $('.title-wrapper').children().text();
            console.log(test)

            res.send('Check console')

            
        }
    })
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;