'use strict';

const inputNameList = ['kanji_sei']

var defaults = {};
defaults.form_data = {};
$.each(inputNameList, function (index, element) {
  defaults.form_data[element] = ''
});

chrome.storage.sync.get(defaults, function(items) {
    $.each(inputNameList, function (index, element) {
      $(`input[name="${element}"]`).val(items.form_data[element]);
    });
});

$('input').on('change', function() {
  var entity = {};
  entity.form_data = {};
  $.each(inputNameList, function (index, element) {
    entity.form_data[element] = $(`input[name="${element}"]`).val()
  });

  chrome.storage.sync.set(entity, function() {
      console.log('Settings saved');
  });
});
