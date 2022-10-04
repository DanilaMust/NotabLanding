export function validation() {
    console.log('oo')
    const form = document.getElementById("form");
    form.addEventListener("submit", formSend);
  
    async function formSend(e) {
      e.preventDefault();
  
      let error = formValidate(form);
    }
  
    function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll(".req");
  
      for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);
  
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
  
    function formAddError(input) {
      input.parentElement.classlist.add("error");
      input.classlist.add("error");
    }
    function formRemoveError(input) {
      input.parentElement.classlist.remove("error");
      input.classlist.remove("error");
    }
}

// "use strict"

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('form');
//     form.addEventListener('submit', formSend)
// });

// async function formSend(e) {
//     e.preventDefault();

//     let error = formValidate(form);
// };

// function formValidate(form) {
//     let error = 0;
//     let formReq = document.querySelectorAll('.req');

//     for(let index = 0; index < formReq.length; index++) {
//         const input = formReq[index];
//         formRemoveError(input);

//         if (input.value === '') {
//             formAddError(input);
//             error++;
//         }

//         // if(input.classList.contains('__email')) {
//         //     if(emailTest(input)) {
//         //         formAddError(input);
//         //         error++;
//         //     }           
//         // }
//     }
// };

// function formAddError(input) {
//     input.parentElement.classlist.add('error');
//     input.classlist.add('error');
// };
// function formRemoveError(input) {
//     input.parentElement.classlist.remove('error');
//     input.classlist.remove('error');
// };
// // function emailTest(input) {
// //     return !/^\w+([\.-]?\w+)*@\w+([\.-}?\w+)*(\.\w{2,8})+$/.test(input.value);
// // };