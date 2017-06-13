$(()=> {
    $("#boxMain").hide();
    $(".titleButton").hide();

    $("#titleSubName").css({
      transition: "all 1s cubic-bezier(0.03, 0.63, 0.77, 1.21)",
      "font-size": "0px"
    });
    setTimeout(()=> {
      $(".titleContainer").css({
        "font-size": "50px",
        transition: "all 1s cubic-bezier(0.03, 0.63, 0.77, 1.21)",
        transform: "perspective( 500px ) rotateY(-50deg) rotateX(-30deg)",
        "-webkit-transform": " perspective( 500px ) rotateY(-50deg) rotateX(-30deg)",
        "border-top": "7px solid",
        "border-bottom": "7px solid",
      });
      $("#titleName").css({
        transition: "all 1s cubic-bezier(0.03, 0.63, 0.77, 1.21)",
        "font-size": "50px"
      });
    }, 2000);


    setTimeout(()=>{
      $(".titleContainer").css({
        transform: "perspective( 700px ) rotateY(-20deg) rotateX(0deg)",
        "-webkit-transform": "perspective( 600px ) rotateY(-20deg) rotateX(0deg)",
        "-webkit-transition-duration": "8s",
        "transition-duration": "8s"
      });
    }, 3000);



    let resetFlip = function(){
      $("#titleName").removeClass("flip");
    }
    let fulStack='<span>FULL-STACK </span><span> </span></br><span>WEB</span><span> </span><span>DEVELOPER</span>'


    setTimeout(()=>{
      $("#titleName").addClass("flip").text("Welcome");
      setTimeout(resetFlip, 1000)
      setTimeout(()=>{
        $("#titleSubName").css({
          "font-size": "40px"
        })
      },1000);
    }, 3500);

    setTimeout(()=> {
      $("#titleName").addClass("flip").text("My Name");
      $('#titleSubName').addClass("flip").text("is");
      $(".titleContainer").css({
        "-webkit-transition-duration": "0.5s",
        "transition-duration": "0.5s"
      });
      $(".titleContainer").css({
        transform: "perspective( 800px ) rotateY(375deg) rotateZ(-2deg)",
        "-webkit-transform": "perspective( 800px ) rotateY(375deg) rotateZ(-2deg)",
        "-webkit-transition-duration": "1s",
        "transition-duration": "1s",
      });
      setTimeout(()=>{
        $("#myName").css({
          "font-size": "80px"
        });
      }, 1000)
      setTimeout(()=>{
        $(".titleContainer").css({
          "min-height": "430px"
        });
      }, 1500)
      setTimeout(()=>{
        $(".titleContainer").css({
          transform: "perspective( 800px ) rotateY(400deg) rotateZ(-2deg)",
          "-webkit-transform": "perspective( 800px ) rotateY(400deg) rotateZ(-2deg)",
          "-webkit-transition-duration": "30s",
          "transition-duration": "30s",
        });

        $(fulStack).hide().appendTo("#subName").each(function(i) {
            $(this).delay(100 * i).fadeIn('slow').addClass('smoke').css({
                  color: "#CE2121"
            });
        });
      }, 2500)
      setTimeout(()=>{
        $("#boxMain").show()
        $(".titleButton").show()
        $(".titleButton").css({
          transition: "all 1s cubic-bezier(0.03, 0.63, 0.77, 1.21)",
          "font-size": "30px"
        });
      }, 3500)
    }, 6000);

    $(".titleButton, .skipButton").click(()=>{
      $(".titleButton, .skipButton, #subName, #myName, #titleSubName, #titleName" ).css({
          "font-size": "0px"
      });
      $(".titleButton").hide()
      $(".skipButton").hide()
      $(".titleContainer").css({
          "overflow": "hidden",
          "min-height": "0px",
          "-webkit-transition-duration": "2s",
          "transition-duration": "2s",
          transform: "perspective( 800px ) rotateY(0deg) rotateZ(0deg)",
          "-webkit-transform": "perspective( 800px ) rotateY(0deg) rotateZ(0deg)",
      });
      $("#boxMain").hide()

      setTimeout(()=>{
        $(".indexContainer").css({
          "height": "0vh",
          transition: "all 2s ease-in"
        });
      }, 500)

      $(".about, .projectsContainer, .contactMe").css({
        "opacity":"1",
                  "font-size": "20px"
      });

      setTimeout(()=>{
        $(".about > div").css({
          "font-size": "20px"
        });
      }, 4500)
      setTimeout(()=>{
        $(".projectsContainer > div").css({
          "font-size": "20px"
        });
      }, 4800)
      setTimeout(()=>{
        $(".contactMe > div").css({
          "font-size": "20px"
        });
      }, 5300)
    })


});
