// document.ready(function(){

//   document.getElementById("searchbar").focus();

//   document.getElementById("donate-buttons").on('click', '.btn-blue', function(e) {
//     e.preventDefault();
//     document.getElementByClassName("active").classList.remove("active");
//     document.getElementById("other-input").style.display = "none".siblings('#other').style.display = "";
//     this.filter('.btn-blue').classList.add("active");
//     let value = this.data('impact');
//     this.closest('div').find('p').innerText = "" + value;
//     document.getElementById("other-input").find('input').value = '';  
//   });
    
//   document.getElementByClassName("btn-green").addEventListener('click', (e) => {
//     let dollar;
//     let input = document.getElementById("other-input").find('input').value;
//     if ( !input ) {
//       dollar = document.getElementByClassName("active").data('dollars');
//      } else if ( document.querySelector.trim(input) === '' || isNaN(input)) {
      
      
//       console.log('Yes');
//       dollar = "Please enter a number."; 
//     } else {
//       dollar = input;
//     }
//     document.getElementById("price").innerText = ""+dollar;
//   });

//   document.getElementById("other").addEventListener('click', (e) => {
//     e.preventDefault(); 
//     let buttons = this.parent('#donate-buttons');
//     buttons.find('.active').classList.remove("active");
//     let other = this.style.display = "none".siblings('#other-input');
//     other.style.display = "";
//     other.find('input').focus();
//     let pText = buttons.siblings('p');
//     pText.innerText = "Thank you!";
//     let oValue = other.find('input');
//     oValue.keyup(function() {
//       if ( oValue.value > 50 ) {
//         pText.innerText = "Thank you!" + " You're donation covers housing and counseling services for " + oValue.val/(25 + " people.");
//       } else {
//         pText.innerText = "Thank you!";
//       }
//     });
//   }); 

// });

window.addEventListener('load', () => {

  let donate_btn = document.querySelectorAll('#donate-amount');
  let donate = document.querySelector('#donate');
  let input_amount = document.querySelector('#other-input');
  let input = input_amount.querySelector('input');

  let modal = document.querySelector('.modal');

  let amount;
  let title;

  // Looping through each button and adding click event
  donate_btn.forEach( el => {
    el.addEventListener('click', () => {
      remove_active();

      el.classList.add('active');

      // Reset Amount and Title value
      amount = '';
      title = '';

      if(el.dataset.dollars == 'other'){
        input_amount.style.display = 'block';
        input.value = '';
      }
    });
  });

  donate.addEventListener('click', event => {
    event.preventDefault();

    donate_btn.forEach( el => {
      if(el.classList.contains('active')){
        
        if(el.dataset.dollars !== 'other'){
          amount = el.dataset.dollars;
          title = el.dataset.impact;
        }else{
          if(input.value != '0'){
            amount = input.value;
            if(amount > 25){
              title = `Covers housing or counseling services for ${Math.floor((amount / 25))} people`;
            }else {
              title = input.dataset.impact;
            }
          }
        }
      }
    });

    modal.querySelector('#price').textContent = `$${amount}`;
    modal.querySelector('em').textContent = `${title}`;
  })

  // Remove 'active' from button and hiding input field
  function remove_active(){
    donate_btn.forEach( el =>{
      el.classList.remove('active');

      input_amount.style.display = 'none';
    });
  }
});