var $ = require('jquery')

/**
 *
 * @param name
 * @param params
 * @returns {Helpers.loadTemplate.cache}
 */
function loadTemplate(name, params) {
  var template = loadTemplate.cache[name];
  if (typeof params.spineIndex !== 'undefined') {
    if ($(template).attr('id')) {
      var id = $(template).attr('id');
      template = template.replace(id, id + '-' + params.spineIndex);
    } 
    if ($(template).children().first().attr('id')) {
      var cid = $(template).children().first().attr('id');
      template = template.replace(cid, cid + '-' + params.spineIndex);
    } 
  }
  return template;
};

/**
 *
 * @type {{fixed_book_frame: string, single_page_frame: string, scrolled_book_frame: string, reflowable_book_frame: string, reflowable_book_page_frame: string}}
 */
loadTemplate.cache = {
  "fixed_book_frame": '<div id="fixed-book-frame" class="clearfix book-frame fixed-book-frame"></div>',

  "single_page_frame": '<div><div id="scaler"><iframe scrolling="no" class="iframe-fixed"></iframe></div></div>',

  "simple_single_page_frame": '<iframe></iframe>',

  //"single_page_frame" : '<div><iframe scrolling="no" class="iframe-fixed" id="scaler"></iframe></div>',

  "simple_scrolled_book_frame": '<div id="simple-reflowable-book-frame"></div>',

  "scrolled_book_frame": '<div id="reflowable-book-frame" class="clearfix book-frame reflowable-book-frame"><div id="scrolled-content-frame"></div></div>',

  "reflowable_book_frame": '<div id="reflowable-book-frame" class="clearfix book-frame reflowable-book-frame"></div>',
  "reflowable_book_page_frame": '<div id="reflowable-content-frame" class="reflowable-content-frame"><iframe scrolling="no" id="epubContentIframe"></iframe></div>'
};

module.exports = loadTemplate;
