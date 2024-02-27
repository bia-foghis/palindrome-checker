document.addEventListener('DOMContentLoaded', function() {
  const checkButton = document.getElementById('check-btn');
  const result = document.getElementById('result');
  const textInput = document.getElementById('text-input');

  checkButton.addEventListener('click', function() {
      const inputValue = textInput.value.trim();

      if (inputValue === '') {
          alert('Please input a value');
          return;
      }

      const cleanInput = inputValue.replace(/[^0-9a-z]/gi, '').toLowerCase();
      const reversedInput = cleanInput.split('').reverse().join('');

      if (cleanInput === reversedInput) {
          result.textContent = `${inputValue} is a palindrome`;
      } else {
          result.textContent = `${inputValue} is not a palindrome`;
      }
  });
});