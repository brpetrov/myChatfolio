$(document).ready(function() {

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



  $('.thumb').on('mousedown', function() {
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
      fontSize: '10rem'
    }, 3000);
    $(".chatbox").scrollTop($(".chatbox")[0].scrollHeight);


    $(this).on('mouseup', function() {
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
    }, 1500);
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



  $(document).mouseup(function(e) {

    // if the target of the click isn't the container
    if (!infoContainer.is(e.target) && infoContainer.has(e.target).length === 0) {
      infoContainer.hide('slide', {
        direction: 'right'
      }, 500);
    }
  });

  // Show info block on click
  $('.info').on('click', function() {
    $(".info-block").show('slide', {
      direction: 'right'
    }, 500);
  });


  // remove Blinking Effect on click
  $('.blink').on('click', function() {
    $(this).removeClass('blink');
  })


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

});
