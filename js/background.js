var html = document.documentElement.innerHTML; //текст документа
var htmlComments = /<!--\s?([\s\S]*?)-->/gim; //html комментарии
var jsComments = /\/\/.*|\/\*[^]*?\*\//gim; //js комментарии
//var jsComments = /<script[\s\S]?>[\s\S]?\/\/.*[\s\S]?<\/script>/gim; //js комментарии
var phpArray = /array([\s\S]*?)\(([\s\S]*?)\)([\s\S]*?)/gim; //вывод php
//var phpArray = /\/\/.*|\/\*[^]*?\*\//gim; //вывод php
var resultComments = {}; //результаты складываем сюдой

resultComments = {
	"html":html.match(htmlComments, ""),
	"js":html.match(jsComments, ""),
	"php":html.match(phpArray, ""),
	"emptyBlocks":$('body :empty'),
	"hiddenBlocks":$('body :hidden')
}

console.log(resultComments);


// /(<[^>]+>).*?\\/.*?\\/.*?(\\/)(\\/).*?(<[^>]+>)/

// ('|<title.*?>(.*)</title>|sei', $str, $arr)



//var jsComments = /<script([\s\S]*?)?>([\s\S]*?)(\/\*[^]*?\*\/)([\s\S]*?)<\/script>/gim; //js комментарии
//console.log(html.match(jsComments, ""));