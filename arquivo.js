$(document).ready(function (){
    

//sistema de comentarios
$('#comment').click(function() {

var input = $('#input').val();
var nome = $('#cnome').val();



 
  if(nome != 0){
   nome = nome + ':';
$('.box').append(  nome +'<br>'   + input + '<br>' +'<br>' );
$('#cnome').val('');
$('#input').val('');


$('.box-container').slideDown();


  }
});
$('#cancel').click(function(){
  $('#input').val('');
  $('#cnome').val('');

});

$('#delete').click(function(){

  
   $('.box').text(' ');


});

$('#fechar').click(function(){
$('.box-container').slideUp();


})

//dropdow cabeçalho Projetos
$('.dropdowProjetos').mouseleave(function(e){
e.preventDefault();
// $('.projetosd').css( 'cursor','pointer');
$('.projetosd').css( 'display','block');


});
$('body').click(function(){
$('.projetosd').css('display','none');
})
    


});

