'use strict';

var defaults = {};
defaults.form_data = {};
// $.each(inputNameList, function (index, element) {
//   defaults.form_data[element] = ''
// });

chrome.storage.sync.get(defaults, function(items) {
    $.each(items.form_data, function (element, value) {
      // $(`input[name="${element}"]`).val(items.form_data[element]);
      // console.log(index)
      // 既存の HTML tbody と template の行を使って
      // table をインスタンス生成します。
      var t = document.querySelector('#productrow');

      // 新しい行を複製して表に挿入します。
      var tb = $('.form-data')[0];
      var clone = document.importNode(t.content, true);
      $(clone).find('label').html(element)
      $(clone).find('input').val(value)

      tb.appendChild(clone);

      // 新しい行を複製して表に挿入します。
      // var clone2 = document.importNode(t.content, true);
      // td = clone2.querySelectorAll("td");
      // td[0].textContent = "0384928528";
      // td[1].textContent = "Acme Kidney Beans 2";

      // tb.appendChild(clone2);
    });
});
