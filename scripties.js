document.body.onload = function(){

    document.getElementById("denpijl").addEventListener("click", function(evt){
      console.log(evt);

      alert("den klik heeft gewerkt");

    });

    var element = document.getElementById("ToggleColor");

    element.addEventListener("click", function(){
      element.classList.toggle("btn-primary");
      element.classList.toggle("btn-dark");
    });

    document.getElementById("submitRecept").addEventListener("click", function(){
        var inputValue = document.getElementById("receptInput").value;
        //databaseshit

        document.getElementById("receptInput").value = "";

        alert(inputValue + " is toegevoegd aan de receptlijst");
    })
    document.getElementById("receptInput").addEventListener("keydown", function(evt){
        console.log(evt);

        if(evt.key == "Enter"){
            var inputValue = document.getElementById("receptInput").value;
            //databaseshit
            document.getElementById("receptInput").value = "";
        }
    })
  }