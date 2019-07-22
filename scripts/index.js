$(document).ready(function() {


	// $(document).on('click','button', function() {
	// 	console.log('i was clicked');
	// 	var $this = $(this);
	// 	var $display = $this.attr('data-number');
	// 	console.log(display);
	// 	});

	// var $form = $('#Calculator');
	// var $display = $('.display');

	// $form.on('click', function(e){
	// 	e.preventDefault();
	// 	var $input = $form.display('value');
	// 	var value = $input.val();
	// 	var $numbertodisplay = displaytext(value);

	// 	$dispayCurrent.append($numbertodisplay);


	// });



 //  // creates a todo list item
 //  function displaytext(value) {
 //    $numbertodisplay.append($display);

 //  }

 // HINTS + next steps:
	// * USE isNaN() function the check if the value variable is a number
	// * IF it is a number display the current number (focus on doing single digit numbers for now)
	// * Else DO SOMETHING WITH THE OPERATOR

	// VARIABLE THAT CAN BE ACCESSED ANYWHERE
	var $input = $('#Calculator input'); // this selects all inputs the input
	var $display = $('.display'); // this selects the display
	var currentTotal = '0';
  var currentNumber = '';
  var currentOperator = 'x';
  var finalTotal = calculate();

	// when you click on an input
	$input.on('click', function(){
		var value = $(this).val(); // "this" is the thing you clicked on which is the input, get it's value
		displayValue(value); // call the function that displays the number
	});

  // show a value in the display-ORIGINAL:
  // function displayValue(value) {
  //   $display.text(value);

  // }

	// initialze the display on page load to the current number
	// displayValue(currentNumber);

  // EXTRACTED CALCULATE FUNCTION
  // removed the params because they are already available globally
  // var $finalTotal = $-- AA tried this
  function calculate() {
    var num1 = parseFloat(currentTotal); // change the strings to numbers for math
    var num2 = parseFloat(currentNumber); // change the strings to numbers for math
    switch(currentOperator) {
      case '+':
        return num1 + num2; // removed the quotes because we want a expression not a string
      case '-':
        return num1 - num2; // removed the quotes because we want a expression not a string
      case '*':
        // THIS WAS - NOT *
        return num1 * num2; // removed the quotes because we want a expression not a string
      case '/':
        return num1 / num2; // removed the quotes because we want a expression not a string
      default:
        return 0; // always have a default value just in case
    }
  }

// AA APEND VERSION
  function displayValue(value) {
    	if (value === 'C'){
        currentNumber = '';
        // TODO reset the currentTotal
        currentTotal = currentNumber;
        // TODO reset the operator
        currentOperator = 'x';
    		$display.text(currentNumber);

    	} else if (value === '='){

        // YOU DIDN'T NEED TWO SWITCH STATMENTS, just the one in the calculate function


       



        // TIFFANY CODE BELOW:
        console.log('=', finalTotal);
        finalTotal = calculate().toString(); // calcualte the new currentTotal and change it back to a string
        currentNumber = ''; // reset the current number
        $display.text(finalTotal); // show current total


        // AA- would i create a new variable for final total above in the calc statement
        // AA- new function to display new total?


        // then preform the calculation with the operator, currentNumber, and
        // currentTotal
        // function calculate(currentTotal, currentOperator, currentNumber) {
        //   return currentTotal + currentOperator + currentNumber;
        //   console.log(calculate);
        // }

    	} else if(!isNaN(value)) {
        // numbers
        console.log('is a number', value);
        currentNumber+=value;
        $display.text(currentNumber);

      }


      else {
        // operator
        console.log('operator ', value);
        currentOperator = value;
        // TODO set currentTotal equal to currentNumber
        currentTotal = currentNumber;
        // TODO reset currentNumber to default
        currentNumber = '';

    	}

  }

  // function displayResult(value) {
  // 	eval(string);
  // }






// var $display = $('.display-box')

//   $('#button').on('click', function() {
//     var $this = $(this);
//     var number = $this.attr('data-number');
//     // var operator = $this.attr('data-operator');
//     var toDisplay = wordsToDisplay(number);
//     alert(toDisplay);
//     console.log(number);
//   });


  // $('#button').on('click', function() {
  //   var $this = $(this);
  //   var name = $this.attr('name');
  //   var toDisplay = wordsToDisplay(name);
  //   alert(toDisplay);
  // });

//   var $button = $('button');
//   var $display = $('.display-box')
//   	$button.on('click',function(event) {
//   		event.preventDefault();
//   		var $input = $display.find('.xxx');
//   	});


// // use these functions for each command
//   function capitalize(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   function capitalizeEachWord(string) {
//     var array = string.split(' ');
//     array = array.map(capitalize);
//     return array.join(' ');
//   }

//   var cap = capitalizeEachWord('this is a test');
//   console.log(cap);


//   $(document).on('click','button', function() {
// 	console.log('i was clicked on the doc');
// 	var $this = $(this);
// 	var $listItem = $this.closest('.list-item');
// 	$listItem.remove();
	// can only pull from another function thing by CLASS so make sure to give that new div a class
	// last week we used siblings for dropdown because its within the class
	// here we want to select the closest item from that div class
	// then we select the variable and remove it!



// var $container = $('.container-pararaph').closest('.container');



});






  //   $('#number-form').on('submit', function(e) {
  //   e.preventDefault();
  //   var $this = $(this);
  //   var $input = $this.find('input');
  //   var value = $input.val();
  //   validate(value);
