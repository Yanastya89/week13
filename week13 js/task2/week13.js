function calculateDays() {
  const birthday = document.getElementById('birthday');
  const birthdayDate = new Date(birthday.value);
  const currentDate = new Date();
  const error = document.getElementById('error');
  const resultDiv = document.getElementById('result');

    // Установка года дня рождения в текущий год
  birthdayDate.setFullYear(currentDate.getFullYear());

  // Проверка, прошло ли уже день рождения в текущем году
  if (birthdayDate < currentDate) {
    // Если день рождения уже прошел в текущем году, устанавливаем год на следующий
    birthdayDate.setFullYear(currentDate.getFullYear() + 1);
  }

  // Расчет разницы в днях
  const timeDifference = birthdayDate.getTime() - currentDate.getTime();
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));


  // Проверка  на введенность данных
  if (!birthday.value) {
   error.textContent = 'Введите дату рождения';
   resultDiv.style.display = 'none';
   }
   else {
     error.textContent = '';
     // Проверка склонения слова
  let daysLeftSklonenie = 'дней';

  if (daysLeft === 1) {
    daysLeftSklonenie = 'день';
  } else if (daysLeft >= 2 && daysLeft <= 4) {
    daysLeftSklonenie = 'дня';
  }
    // Вывод результата на страницу
   resultDiv.style.display = 'block'; 
  resultDiv.textContent = 'Осталось ' + daysLeft + ' ' + daysLeftSklonenie + ' до дня рождения';
   }
}
