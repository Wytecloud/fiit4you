function myFunction11(){
        var push= `
        <p>Wide Pushups</p>
        <p>Normal Pushups</p>
        <p>Slow Motion Pushup</p>`
        document.getElementById("first").style.display="none";
        document.getElementById("ch").innerHTML= " Follow your custom Arms and Chest workout below"
        document.getElementById("second").style.display="block"
        document.getElementById("exercise").innerHTML= push

    }
    function myFunction12(){
        var abs= `
        <p>Plank</p>
        <p>Mountain Climbers</p>
        <p>Sit-ups</p>`
        document.getElementById("first").style.display="none"
        document.getElementById("ch").innerHTML= " Follow your custom Abs workout below"
        document.getElementById("second").style.display="block"
        document.getElementById("exercise").innerHTML= abs

    }
    function myFunction13(){
        var legs=`<p>Squats</p>
        <p>Lunges</p>
        <p>Leg-raises</p>`
        document.getElementById("first").style.display="none"
        document.getElementById("ch").innerHTML= " Follow your custom Legs workout below"
        document.getElementById("second").style.display="block"
        document.getElementById("exercise").innerHTML= legs
    }
    function myFunction21(){
        document.getElementById("second").style.display="none"
        document.getElementById("duration").innerHTML= " Repeat workout for 2 weeks"
        document.getElementById("third").style.display="block"

    }
    function myFunction22(){
        document.getElementById("second").style.display="none"
        document.getElementById("duration").innerHTML= " Repeat workout for 3 months"
        document.getElementById("third").style.display="block"
    }
    function myFunction23(){
        document.getElementById("second").style.display="none"
        document.getElementById("duration").innerHTML= " Repeat workout for 6 months"
        document.getElementById("third").style.display="block"
    }
    function myFunction31(){
        document.getElementById("third").style.display="none"
        document.getElementById("lastpage").style.display="block"
        document.getElementById("set").innerHTML= "Do 1 set of each exercise with repetition of 5 with a rest period of about 20 seconds"

    }
    function myFunction32(){
        document.getElementById("third").style.display="none"
        document.getElementById("lastpage").style.display="block"
        document.getElementById("set").innerHTML= "Do 2 sets of each exercise with repetition of 10 with a rest period of about 15 seconds"
        
    }
    function myFunction33(){
        document.getElementById("third").style.display="none"
        document.getElementById("lastpage").style.display="block"
        document.getElementById("set").innerHTML= "Do 3 sets of each exercise with repetition of 15 with a rest period of about 10 seconds"

    }
    function myFunction4(){
        document.getElementById("userinput").style.display="none"
        var oName = document.getElementById("txtData").value;
        document.getElementById("show_name").innerHTML=oName;
    }
    function myFunction5(){
        document.getElementById("welcome").style.display="none"
        document.getElementById("first").style.display="block"
    }
    function closePrint(){
        document.getElementById("lastpage").style.display="none"
        document.getElementById("welcome").style.display="block"
    }

    function closeanime(){
        document.getElementById("animation").style.display="none";
    }
    function openanime(){
          document.getElementById("animation").style.display="block";
          document,getElementById("third").h2.style.transform
    }
    function closeanime2(){
        document.getElementById("animation2").style.display="none";
    }
    function openanime2(){
          document.getElementById("animation2").style.display="block";
    }
    function closeanime3(){
        document.getElementById("animation3").style.display="none";
    }
    function openanime3 (){
          document.getElementById("animation3").style.display="block";
    }

    function planprint(){
        var printContents = document.getElementById("printarea").innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }