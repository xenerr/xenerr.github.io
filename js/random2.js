var photo = $('.grid img');
photo.each(function(i,e){
  $(this).css({
    'max-width' : (29 + (Math.random() * 37) + 'vw')
  });
});

var photoWrapper = $('.grid .photo');
photoWrapper.each(function(i,e){
  randomNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    if((i + 1) % randomNumber == 0){
       $(e).addClass('random-left');
    }
});

var photoWrapper = $('.grid .photo');
photoWrapper.each(function(i,e){
  randomNumber = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
    if((i + 1) % randomNumber == 0){
       $(e).addClass('float-left');
    }
});

var photoWrapper = $('.grid .photo');
photoWrapper.each(function(i,e){
  randomNumber = Math.floor(Math.random() * (8 - 3 + 1)) + 3;
    if((i + 1) % randomNumber == 0){
       $(e).addClass('random-top');
    }
});