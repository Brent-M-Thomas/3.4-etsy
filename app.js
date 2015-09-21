(function() {

// var mainContentEl = document.querySelector('.main-template');

// var templateFromQuery = function(query) {
//   var el = document.querySelector(query);
//   return Handlebars.compile(el.innerHTML);
// };

// var template = templateFromQuery('.item');

// loadEtsy('abstract painting', function(query) {
//     var addItem = template(query);

//     mainContentEl.innerHTML += addItem;
//   });

var contentEl = document.querySelector('.main-content');

function registerByQuery(querySelector) {
  var templateString = document.querySelector(querySelector).innerHTML;
  templateString = templateString.replace('&gt;', '>');
  return Handlebars.compile(templateString);
}

function registerPartialByQuery(name) {
  var templateString = document.querySelector('#' + name + '-partial').innerHTML;
  return Handlebars.registerPartial(name, templateString);
}

registerPartialByQuery('item');

var handlebarsTemplate = registerByQuery('#main-template');

loadEtsy('abstract painting', function(data) {
  var allItems = '';

  allItems = handlebarsTemplate(data);

  contentEl.innerHTML = allItems;
});

})();
