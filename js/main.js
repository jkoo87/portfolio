$(()=> {

    $("#mainPage").hide();
    $("#boxMain").hide();
    $(".titleButton").hide();
    $("#titleSubName").css({
      transition: "all 1s cubic-bezier(0.03, 0.63, 0.77, 1.21)",
      "font-size": "0px"
    });
    $(".titleContainer").css({
      "visibility": "visible"
    });


    $(".aboutContainer, .projectsContainer, .contactContainer").hide();
    $(".link > a").hide();
    $("#contactIcons").hide();
    $(".projectDescription").hide();

    setTimeout(()=> {
      $(".skipButton").animate( { "opacity": 1} )
      $(".titleContainer").css({
        "font-size": "50px",
        transform: "perspective( 500px ) rotateY(-50deg) rotateX(-30deg)",
        "-webkit-transform": " perspective( 500px ) rotateY(-50deg) rotateX(-30deg)",
        "border-top": "7px solid",
        "border-bottom": "7px solid",
      });
      $("#titleName").css({
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


    function resetFlip(){
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
          "font-size": "80px",
          "padding": "0 40px"
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
        $(".skipButton").animate( { "opacity": 0} , 500 )
      }, 3500)
    }, 6000);

    $(".titleButton, .skipButton").click(()=>{
      $(".titleButton, .skipButton, #subName, #myName, #titleSubName, #titleName" ).css({
          "font-size": "0px"
      });
      $(".titleButton").hide()
      $(".skipButton").hide()
      $(".titleContainer").css({
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
      setTimeout(()=>{
        $("#mainPage").show();
      }, 500)

      $(".about,#myPicWrapper, .projects, .contactMe").css({
        "opacity":"1",
      });

      setTimeout(()=>{
        $(".about > *").css({
          "font-size": "25px",
          "padding": "5px"
        });
      }, 2400)
      setTimeout(()=>{
        $(".projects > *").css({
          "font-size": "25px",
          "padding": "5px"
        });
      }, 2650)
      setTimeout(()=>{
        $(".contactMe > *").css({
          "font-size": "25px",
          "padding": "5px"
        });
      }, 2900)

    })

    $(".menuButton").click(()=>{
        $(".project > .projectDescription").slideUp();
        $("#about, #projects, #contact").animate({
          "width": "33.3333%"
        });
        $("#about > a, #projects > a, #contact > a").delay(500).fadeIn('slow')
        $(".aboutContainer, .contactContainer, .projectsContainer").fadeOut()
        $(".menuButton").animate( { "opacity": 0} , 500 )
        $("#myPicWrapper").animate( { "width": "0%", "min-width": "0px"} )
        $("#contactIcons").fadeOut();

    })

    $("#about > a").click(()=>{
        $("#about").animate({
          "width": "100%"
        });
        $("#projects, #contact").animate({
          "width": "0%"
        });
        $("#about > a, #projects > a, #contact > a").fadeOut(1000);
        $("#contactIcons").fadeIn();
        $(".menuButton").animate( { "opacity": 1} , 500 )
        $("#myPicWrapper").animate( { "width": "40%", "min-width": "300px",  } , 500 )
        $(".aboutContainer").delay(1300).fadeIn(1000)

    })
    $("#projects > a").click(()=>{
        $("#projects").animate({
          "width": "100%"
        });
        $("#about, #contact").animate({
          "width": "0%",
        });
        $("#about > a, #projects > a, #contact > a").fadeOut(1000)
        $(".menuButton").animate( { "opacity": 1} , 500 )
        $(".projectsContainer").delay(1300).fadeIn(1000)

        //image/navbar on click replace png to gif and show its description

        $("#projectOne, #projectOnelink").click(()=>{
            $(".project > .projectDescription:not(#projectOne > .projectDescription)").slideUp();
            setTimeout(()=>{
              $("#projects").animate({
                  scrollTop: $("#projects").scrollTop() + $("#projectOne").offset().top-70});
                  $("#projectOne > .projectDescription").slideDown();
            }, 400)
        });
        $("#projectTwo, #projectTwolink").click(()=>{
            $(".project > .projectDescription:not(#projectTwo > .projectDescription)").slideUp();
            setTimeout(()=>{
              $("#projects").animate({
                  scrollTop: $("#projects").scrollTop() + $("#projectTwo").offset().top-70});
                  $("#projectTwo > .projectDescription").slideDown();
            }, 400)
           });
        $("#projectThree, #projectThreelink").click(()=>{
            $(".project > .projectDescription:not(#projectThree > .projectDescription)").slideUp();
            setTimeout(()=>{
              $("#projects").animate({
                  scrollTop: $("#projects").scrollTop() + $("#projectThree").offset().top-70});
                  $("#projectThree > .projectDescription").slideDown();
            }, 400)
        });
        $("#projectFour, #projectFourlink").click(()=>{
            $(".project > .projectDescription:not(#projectFour > .projectDescription)").slideUp();
            setTimeout(()=>{
              $("#projects").animate({
                  scrollTop: $("#projects").scrollTop() + $("#projectFour").offset().top-70});
                  $("#projectFour > .projectDescription").slideDown();
            }, 400)
        });
        $("#projectFive, #projectFivelink").click(()=>{
            $(".project > .projectDescription:not(#projectFive > .projectDescription)").slideUp();
            setTimeout(()=>{
              $("#projects").animate({
                  scrollTop: $("#projects").scrollTop() + $("#projectFive").offset().top-70});
                  $("#projectFive > .projectDescription").slideDown();
            }, 400)
        });

        //on scroll change navbar a class
        function goToByScroll(id){
            id += "link"
            $("#"+id).addClass('active');
            $("#navbar > .linkContainer > li").not("#"+id).removeClass('active');
        }
        $("#projects").scroll(function(){
          if ($(this).scrollTop() === 0){
            $("#navbar> .linkContainer > li").removeClass('active');
            $("#projectsPageTitle").addClass('projectsPageTitleActive');
          } else {
            $("#projectsPageTitle").removeClass('projectsPageTitleActive');
            $(".project").each(function(i){
              if($(this).position().top <= $(this).scrollTop()+300){
                goToByScroll($(this).attr("id"));
              }
            })
          }
        }).scroll()


        //on hover change img
        $("#projectOne").on({
        mouseenter: function() {
            $("#projectOne > img").attr("src", "./css/img/projects/simon.gif");
          },
          mouseleave: function() {
            $("#projectOne > img").attr("src", "./css/img/projects/simon.png");
          }
        });
        $("#projectTwo").on({
        mouseenter: function() {
            $("#projectTwo > img").attr("src", "./css/img/projects/cookingMyself.gif");
          },
          mouseleave: function() {
            $("#projectTwo > img").attr("src", "./css/img/projects/cookingMyself.png");
          }
        });
        $("#projectThree").on({
        mouseenter: function() {
            $("#projectThree > img").attr("src", "./css/img/projects/goldinauts.gif");
          },
          mouseleave: function() {
            $("#projectThree > img").attr("src", "./css/img/projects/goldinauts.png");
          }
        });
        $("#projectFour").on({
        mouseenter: function() {
            $("#projectFour > img").attr("src", "./css/img/projects/slugingDC.gif");
          },
          mouseleave: function() {
            $("#projectFour > img").attr("src", "./css/img/projects/slugingDC.png");
          }
        });
        $("#projectFive").on({
        mouseenter: function() {
            $("#projectFive > img").attr("src", "./css/img/projects/portfolio.gif");
          },
          mouseleave: function() {
            $("#projectFive > img").attr("src", "./css/img/projects/portfolio.png");
          }
        });
    })


    $("#contact > a").click(()=>{
        $("#contact").animate({
          "width": "100%"
        });
        $("#projects, #about").animate({
          "width": "0%",
        });
        $("#about > a, #projects > a, #contact > a").fadeOut(1000)
        $(".menuButton").animate( { "opacity": 1} , 500 )
        $(".contactContainer").delay(1300).fadeIn(1000)

        $("#emailWrapper").on({
          mouseenter: () => {
            $("#email > a").fadeIn();
            $("#emailWrapper").animate({
              "margin-left": "-140px"
            })
          },
          mouseleave: () => {
            $("#email > a").fadeOut();
            $("#emailWrapper").animate({
              "margin-left": "0px"
            })
          }
        });
        $("#githubWrapper").on({
          mouseenter: () => {
            $("#github > a").fadeIn();
            $("#githubWrapper").animate({
              "margin-left": "-80px"
            })
          },
          mouseleave: () => {
            $("#github > a").fadeOut();
            $("#githubWrapper").animate({
              "margin-left": "0px"
            })
          }
        });
        $("#linkedInWrapper").on({
          mouseenter: () => {
            $("#linkedIn > a").fadeIn();
            $("#linkedInWrapper").animate({
              "margin-left": "-90px"
            })
          },
          mouseleave: () => {
            $("#linkedIn > a").fadeOut();
            $("#linkedInWrapper").animate({
              "margin-left": "0px"
            })
          }
        });
    })





});
