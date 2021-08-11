
      var nav = document.querySelector('nav');

      window.addEventListener('scroll', function(){
        if (window.pageYOffset > 100){
          nav.classList.add('bg-dark', 'shadow');
        } else {
          nav.classList.remove('bg-dark', 'shadow');
        }
      });

      function myFunction() {
        document.getElementByiD('quickinquiry').disabled = true;
      }
      function myFunction (){
  var element = document.getElementById("quickinquiry");
  element.classList.toggle("btn");
}


      window.addEventListener('show.bs.modal', function (e) { console.log ("el modal   quickinquiry   se esta mostrando");
        });

       window.addEventListener('shown.bs.modal', function (e) { console.log ("el modal  quieckinquiry   se mostro");
        });

       window.addEventListener('hide.bs.modal', function (e) { console.log ("the modal is hiding");
        });

       window.addEventListener('hidden.bs.modal', function (e) { console.log ("the modal is hidden");
        });
