(function() {

var mainContentEl = document.querySelector('.main-content');

var templateFromQuery = function(query) {
  var el = document.querySelector(query);
  return Handlebars.compile(el.innerHTML);
};

var template = templateFromQuery('#item');

loadEtsy.data.forEach(function(item) {
    var addItem = template(item);

    mainContentEl.innerHTML += addItem;
  });

})();
