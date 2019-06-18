var getKeyChoice = document.getElementById('userGuessIDhtml')

      document.onkeydown = function (event) {
      var userGuessIDhtml = event.key;
      getKeyChoice.textContent = userGuessIDhtml;
      
    }