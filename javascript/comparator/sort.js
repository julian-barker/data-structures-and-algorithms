'use strict';

function compareYear(a, b) {
  return b.year - a.year;
}

function compareTitle(a, b) {
  a = stripArticle(a.title);
  b = stripArticle(b.title);
  return a.localeCompare(b);
}

function stripArticle(title) {
  return title.replace(/^(a|an|the)\s/i, '');
}

module.exports = { compareYear, compareTitle };
