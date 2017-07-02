import './../css/style.scss'

$( () =>  {

  var button2 = document.querySelectorAll('.button2'); //tablica
  var prices = document.querySelector('#prices');
  var article = prices.querySelectorAll('article'); //tablica

  //................................................ extendable menu
  $("#underOFirmie").on("mouseenter", (event) => {
    $(".unwrap").show();
  });
  $(".unwrap").on("mouseenter",  (event) => {
    $(".unwrap").show();
  });
  $("#underOFirmie").on("mouseout",  (event) => {
    $(".unwrap").hide();
  });


  //............................................... slider
  let index = 0;
  let lists = $('.slider').children('div');
  console.log(lists);

  $(lists[0]).show();

  function showNextPic() {
    $(lists[index]).hide();
    // lists[index].classList.toggle("visible");
    index++;
    if(index >= lists.length){
      index=0;
    };
    $(lists[index]).show();
  };

  $('.clickRight').on("click" , (event) => {
    console.log("click");
    showNextPic();
  });

  function showPrevPic() {
    $(lists[index]).hide();
    // lists[index].classList.toggle("visible");
    index--;
    if(index <= -1){
      index=lists.length-1;
    };
    $(lists[index]).show();
  };

  $('.clickLeft').on("click" , (event) => {
    console.log("click");
    showPrevPic();
  });


  // function showNextPic(){
  //   lists[index].classList.toggle("visible");
  //   dots[index].classList.toggle("onDot");
  //   index++;
  //   if(index >= lists.length){
  //     index=0;
  //   }
  //   lists[index].classList.toggle("visible");
  //   dots[index].classList.toggle("onDot");
  // }
  // function showPrevPic(){
  //   lists[index].classList.toggle("visible");
  //   dots[index].classList.toggle("onDot");
  //   index--;
  //   if(index <= -1){
  //     index=lists.length-1;
  //   }
  //   lists[index].classList.toggle("visible");
  //   dots[index].classList.toggle("onDot");
  // }
  //

  //................................................hidding stripe on img in galery
  $(".galleryImage").on("mouseenter",  (event) => {
    return $(event.target).find(".stripe").hide();
  }).on("mouseout",  (event) => {
    return $(event.target).find(".stripe").show();
  });

  //...............................................show description on the right

  $(".galleryImage").on("click",  (event) => {
    //..............................................changing title of the description (from stripe -> sHeader)
    $(".description").find("h2").text($(event.target).text());
    //..............................................changing description (from data-description)
    $(".description").find("p").text($(event.target).data("description"));
  });

  //.........................................making magic with pricing

  $('.button2').on("click" , (event) => {

  })

  //
  // button2[0].addEventListener('click', function () {
  //   article[0].style.backgroundColor = "#27c7ab";
  //   //problem ze zrobieniem tego dla pseudoelementu
  //   article[0].querySelector('h4').style.color = "#fff";
  //   article[0].querySelector('.roundPrice').style.color = "#27c7ab";
  //   article[0].querySelectorAll('li:nth-child(2n+1)').forEach(function (element) {
  //     element.style.backgroundColor = "#fff";
  //   });
  //   this.style.backgroundColor = "#fff";
  //   this.style.color = "#27c7ab";
  // });
  //
  // button2[1].addEventListener('click', function () {
  //   article[1].style.backgroundColor = "#27c7ab";
  //   //problem ze zrobieniem tego dla pseudoelementu
  //   article[1].querySelector('h4').style.color = "#fff";
  //   article[1].querySelector('.roundPrice').style.color = "#27c7ab";
  //   article[1].querySelectorAll('li:nth-child(2n+1)').forEach(function (element) {
  //     element.style.backgroundColor = "#fff";
  //   });
  //   this.style.backgroundColor = "#fff";
  //   this.style.color = "#27c7ab";
  // });
  //
  // button2[2].addEventListener('click', function () {
  //   article[2].style.backgroundColor = "#27c7ab";
  //   //problem ze zrobieniem tego dla pseudoelementu
  //   article[2].querySelector('h4').style.color = "#fff";
  //   article[2].querySelector('.roundPrice').style.color = "#27c7ab";
  //   article[2].querySelectorAll('li:nth-child(2n+1)').forEach(function (element) {
  //     element.style.backgroundColor = "#fff";
  //   });
  //   this.style.backgroundColor = "#fff";
  //   this.style.color = "#27c7ab";
  // });

});
