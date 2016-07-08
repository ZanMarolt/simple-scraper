var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
    
    url = 'http://www.imdb.com/title/tt1229340/';

    request(url, {timeout: 10000}, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);

            var title, release, rating;
            var json = { title : "", release : "", rating : ""};

            var test = $('#title-overview-widget > div.vital > div.title_block > div > div.titleBar > div.title_wrapper > h1').text();
            console.log(test)

            res.send('I got: '+test)

            
        }
    })
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;