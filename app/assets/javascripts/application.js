//= require turbolinks
//= require jquery3

$(function() {
  console.log('Document is loaded');
});

$(document).on("turbolinks:load", function() {
  console.log('Document is loaded (turbolinks:load)');
})
