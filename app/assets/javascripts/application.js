// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

$(document).ready(function(){
    $(".first").click(function(){
        $(".sub1").toggle();
        $(".sub2").hide();
        $(".sub3").hide();
        $(".sub4").hide();
    });
    $(".second").click(function(){
        $(".sub2").toggle();
        $(".sub1").hide();
        $(".sub3").hide();
        $(".sub4").hide();
    });
    $(".third").click(function(){
        $(".sub3").toggle();
        $(".sub1").hide();
        $(".sub2").hide();
        $(".sub4").hide();
    });
    $(".fourth").click(function(){
        $(".sub4").toggle();
        $(".sub1").hide();
        $(".sub2").hide();
        $(".sub3").hide();
    });
});