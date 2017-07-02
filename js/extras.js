import "./../css/style.scss";

document.addEventListener('DOMContentLoaded' , function(){

  var button2 = document.querySelectorAll('.button2'); //tablica
  var prices = document.querySelector('#prices');
  var article = prices.querySelectorAll('article'); //tablica

  button2[0].addEventListener('click' , function(){
      article[0].style.backgroundColor = "#27c7ab" ;
      //problem ze zrobieniem tego dla pseudoelementu
      article[0].querySelector('h4').style.color = "#fff";
      article[0].querySelector('.roundPrice').style.color = "#27c7ab";
      article[0].querySelectorAll('li:nth-child(2n+1)').forEach(function(element){element.style.backgroundColor = "#fff"});
      this.style.backgroundColor = "#fff";
      this.style.color = "#27c7ab" ;
    });

  button2[1].addEventListener('click' , function(){
      article[1].style.backgroundColor = "#27c7ab" ;
      //problem ze zrobieniem tego dla pseudoelementu
      article[1].querySelector('h4').style.color = "#fff";
      article[1].querySelector('.roundPrice').style.color = "#27c7ab";
      article[1].querySelectorAll('li:nth-child(2n+1)').forEach(function(element){element.style.backgroundColor = "#fff"});
      this.style.backgroundColor = "#fff";
      this.style.color = "#27c7ab" ;
    });

  button2[2].addEventListener('click' , function(){
      article[2].style.backgroundColor = "#27c7ab" ;
      //problem ze zrobieniem tego dla pseudoelementu
      article[2].querySelector('h4').style.color = "#fff";
      article[2].querySelector('.roundPrice').style.color = "#27c7ab";
      article[2].querySelectorAll('li:nth-child(2n+1)').forEach(function(element){element.style.backgroundColor = "#fff"});
      this.style.backgroundColor = "#fff";
      this.style.color = "#27c7ab" ;
    });


})
