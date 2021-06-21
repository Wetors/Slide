
$(function(){
   let images = ['imge1.jpg', 'imge2.jpg', 'imge3.jpg', 'imge4.jpg', 'imge5.jpg', 
               'imge6.jpg', 'imge7.jpg', 'imge8.jpg', 'imge9.jpg', 'imge10.jpg'];
   let Iteration = 0;
   let stop;
   let = slideShow = $('.slideShow');

   function clickChangeImages(e){
       if($(this).hasClass('next')){
          Iteration++;
          if(Iteration >= images.length){
              Iteration = 0;
          };
          slideShow[0].src = 'image/' + images[Iteration];
          slideShow.fadeIn(500);
          clearTimeout(stop);
          stop = setTimeout(changeImages, 5000);
       }else if($(this).hasClass('back')){
          Iteration--;
          if(Iteration <= 0){
              Iteration = images.length - 1; 
          };
          slideShow[0].src = 'image/' + images[Iteration];
          slideShow.fadeIn(500);
          clearTimeout(stop);
          stop = setTimeout(changeImages, 5000);
       };
   };

   function changeImages(){
       if(Iteration >= images.length){
           Iteration = 0;
       };
       slideShow[0].src = 'image/' + images[Iteration];
       slideShow.fadeIn(500);
       Iteration++;
       stop = setTimeout(changeImages, 3000); 
   };

   $('div > button').on('click', clickChangeImages);
   changeImages();
});

