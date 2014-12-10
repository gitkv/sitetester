var html = document.documentElement.innerHTML; //док
var htmlComments = /<!--\s?([^]*?)-->/gim; //html комментарии
var jscode = /<script.*?>[^]*?<\/script>/gim; //js код
var jsComments = /[^'":]\/\/.*|\/\*[^]*?\*\//gim; //js комментарии
var phpArray = /array\s*(\([^]*?\))?(\s*)?(\{[^]*?\})?/gim; //принтанутый php
var results = {}; //результаты складываем сюдой

var allJsTags = html.match(jscode, ""); //ищем все теги script
var allJsString = ''; //для хранения строки всего JS кода

//соеденяем JS в строку
for(var i=0; i<allJsTags.length; i++) {
    var notag = allJsTags[i].replace(/<(\/)?script.*?>/gim,''); //удаляем теги JS из текста
    allJsString = allJsString+notag;
}

//складываем результаты
results = {
	"htmlComents":html.match(htmlComments, ""),
	"jsComments":allJsString.match(jsComments, ""),
	"phpCode":html.match(phpArray, ""),
	"emptyBlocks":$('body *:empty').not('br, hr, style, script, noscript, textarea, img, input, iframe'),
	"hiddenBlocks":$('body *:hidden').not('br, hr, style, script, noscript, textarea, img, input, iframe, li, ul, p, a, select, option')
}

//$('body').append( "<div class='EXTST_OVERLAY'></div>" );
//$('body').append( "<div class='EXTST_POPUP'>Test</div>" );

//var extst_popup = $('body').find('.EXTST_POPUP');

//extst_popup.html("<div class='test'>OK</div>");

console.log(results);

/*
*
* [^'":]\/\/.*|\/\*[^]*?\*\/ это любые JS комменты
* <script.*?>[^]*?<\/script> это все скрыпты
* array\s*(\([^]*?\))?(\s*)?(\{[^]*?\})? принтанутые масивы из php посредством print_r() или var_dump()
*
* */