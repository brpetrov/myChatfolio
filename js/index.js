$(document).ready(function() {


// CHECK IF MOBILE OR PC
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;

} else{
  isMobile=false;
}


  // variable for time
  var time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
  var container = $(".question-block");
  var infoContainer = $(".info-block");

  // HIDE INFO BLOCK
  $(infoContainer).hide();

  // Hide Emojo block at start
  $(".emoji-block").hide();

  // GREETING MESSAGE
  $(".first-msg").css("display", "none");
  setTimeout(function() {
    $(".chat-bubble-left").hide();
    $(".first-msg").css("display", "table");
    $('.time-left').html(time);
  }, 2500);

  // SCROLL All THE WAY DOWN
  $(".chatbox").scrollTop($(".chatbox")[0].scrollHeight);

  // Show question block on click
  $('#msg-btn').on('click', function() {
    $(container).show('slide', {
      direction: 'down'
    }, 500);
  });

  // HIDE QUESTION BLOCK
  $(document).mouseup(function(e) {

    // if the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide('slide', {
        direction: 'down'
      }, 300);
    }
  });

  $('.go-back-question').on('click',function(){
    container.hide('slide', {
      direction: 'down'
    }, 500);
  })



  // Send message
  $('.baloon').on('click', function() {

    var $newDiv = $("<div/>").attr("class", "right-msg");
    $newDiv.html($(this).html());
    $(this).prop('disabled', 'true').switchClass("baloon", "baloon-disabled", 500);
    container.hide('slide', {
      direction: 'down'
    }, 300);

    setTimeout(function() {
      $(".chatbox").append($newDiv);
      $(".chatbox").scrollTop($(".chatbox")[0].scrollHeight);
      $(".chatbox").append($bubblesLeft);
    }, 300);

  });

  if(isMobile==true){
    $(".personal-heading").on('click', function(){
      $(".personal").show();
      $(".work-related").hide();
      $(this).css("opacity", "0.5");
      $('.work-related-heading').css("opacity","0.9");
    })

    $(".work-related-heading").on('click', function(){
      $(".personal").hide();
      $(".work-related").show();
      $(this).css("opacity", "0.5");
      $('.personal-heading').css("opacity","0.9");
    })
  }


  // REPLY message

  $("button").on('click', function() {
    var $newDiv = $("<div/>").attr("class", "left-msg");
    var $timeDiv = $("<div/>", {
      "class": "time-left"
    });
    var time = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
    $timeDiv.html(time);
    var $imgDiv = $('<div/>', {
      "class": "img-left"
    }).append([$('<img/>', {
      "class": "theimg"
    }).attr("src", "img/boyan.jpg")]);


    var $bubblesLeft =
      $('<div/>', {
        "class": "chat-bubble-left"
      }).append([
        $('<div/>', {
          "class": "typing"
        }).append([
          $('<div/>', {
            "class": "dot"
          }),
          $('<div/>', {
            "class": "dot"
          }),
          $('<div/>', {
            "class": "dot"
          })
        ])
      ]);

    function repplyFunction(bubbleTime, messageTime, text) {
      setTimeout(function() {
        $(".chatbox").append($bubblesLeft);
        $(".chatbox").scrollTop($(".chatbox")[0].scrollHeight);
      }, bubbleTime);

      setTimeout(function() {
        $(".chat-bubble-left").remove();
        $newDiv.html(text);
        $newDiv.append($timeDiv);
        $newDiv.append($imgDiv);
        $(".chatbox").append($newDiv);
        $(".chatbox").scrollTop($(".chatbox")[0].scrollHeight);
      }, messageTime);
    }

    switch (this.id) {
      case 'one':
        repplyFunction(2000, 3500, "Duna sucks");
        break;
      case 'two':
        repplyFunction(2000, 3500, "Duna NE SUCKVA");
        break;
      case 'three':
        repplyFunction(2000, 3500, "Sut, consectetur adipiscing elit, sed do eiusmod tempor incididunt");
        break;
      case 'four':
        repplyFunction(2000, 3500, "adipiscing elit, sed do eiusmod tempor incididun");
        break;
      case 'five':
        repplyFunction(2000, 3500, "Duna NE SUCKVA");
        break;
      case 'six':
        repplyFunction(2000, 3500, "adipiscing elit, sed do eiusmod tempor incididun");
        break;
      case 'seven':
        repplyFunction(2000, 3500, "adipiscing elit, sed do eiusmod tempor incididun");
        break;
      case 'eight':
        repplyFunction(2000, 3500, "adipiscing elit, sed do eiusmod tempor incididun");
        break;
      case 'nine':
        repplyFunction(2000, 3500, "adipiscing elit, sed do eiusmod tempor incididun");
        break;
    }

  });

  // THUMB



  $('.thumb').on('mousedown touchstart', function(e) {
    e.preventDefault();
    var $thumbRight =
      $('<div/>', {
        "class": "thumb-right"
      }).append([
        $('<i/>', {
          "class": "fas fa-thumbs-up"
        })
      ]);
    $thumbRight.addClass('anim-wiggle anim-wiggle2');
    $(".chatbox").append($thumbRight);
    $thumbRight.animate({
      fontSize: '8rem'
    }, 3000);
    $(".chatbox").scrollTop($(".chatbox")[0].scrollHeight);


    $(this).on('mouseup touchend', function(e) {
      e.preventDefault();
      $thumbRight.removeClass('anim-wiggle anim-wiggle2');
      $thumbRight.stop();
      $(".chatbox").scrollTop($(".chatbox")[0].scrollHeight);
    });


  });


  //SHOW EMOJI BLOCK
  $('.emoji-btn').on('click', function() {
    $(".emoji-block").show('slide', {
      direction: 'down'
    }, 500);
  });

  // Send EMOJIS
  var emojiContainer = $('.emoji-block')
  $('.emoji').on('click', function() {

    var $newDiv = $("<div/>").attr("class", "right-msg-emoji");
    var $leftDiv = $("<div/>").attr("class", "left-msg-emoji");
    $newDiv.html($(this).html());
    $leftDiv.html($(this).html());
    emojiContainer.hide('slide', {
      direction: 'down'
    }, 300);

    setTimeout(function() {
      $(".chatbox").append($newDiv);
      $(".chatbox").scrollTop($(".chatbox")[0].scrollHeight);
    }, 300);

    setTimeout(function() {
      $(".chatbox").append($leftDiv);
      $(".chatbox").scrollTop($(".chatbox")[0].scrollHeight);
    }, 1200);
  });

  // HIDE EMOJI BLOCK ON click outside div

  $(document).mouseup(function(e) {

    // if the target of the click isn't the container nor a descendant of the container
    if (!emojiContainer.is(e.target) && emojiContainer.has(e.target).length === 0) {
      emojiContainer.hide('slide', {
        direction: 'down'
      }, 300);
    }
  });


// INFO BLOCK

  $(document).mouseup(function(e) {

    // if the target of the click isn't the container
    if (!infoContainer.is(e.target) && infoContainer.has(e.target).length === 0) {
      infoContainer.hide('slide', {
        direction: 'right'
      }, 500);
    }
  });

  $('.go-back-info').on('click',function(){
    infoContainer.hide('slide', {
      direction: 'right'
    }, 500);
  })

  // Show info block on click
  $('.info').on('click', function() {
    $(".info-block").show('slide', {
      direction: 'right'
    }, 500);
  });


  // remove Blinking Effect on click
  $('.blink').on('click touch', function() {
    $(this).removeClass('blink');
  })

if(isMobile===false){
  window.addEventListener("load", () => {
   let long;
   let lat;
   let tempDes = $('.temp-desc');
   let location = $('.location');

   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(position => {
       long = position.coords.longitude;
       lat = position.coords.latitude;

       const proxy = "https://cors-anywhere.herokuapp.com/";

       const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=a50043b0d7747b34eb686ff3f35c324f`
       fetch(api)
         .then(response => {
           return response.json();
         })
         .then(data => {
           console.log(data);
           // SET DOM TO API
          location.html(data.name + " " + Math.round(data.main.temp) +"°C");
          var iconcode = data.weather[0].icon;
          var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
          $('#wicon').attr('src', iconurl);


         })
     })
   }
 })
}


$('.form-button').one('click touch',function(e){
e.preventDefault();

 $(".chatbox").append('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfK_R2vatfEbNOD3XqdTLV4olXz1WrREEACI_qRgCX8Vd_Cdg/viewform?embedded=true"  frameborder="0" marginheight="0" marginwidth="0"></iframe>');
 $(".chatbox").scrollTop($(".chatbox")[0].scrollHeight);
 $(this).css("opacity","0.5");
})

});
