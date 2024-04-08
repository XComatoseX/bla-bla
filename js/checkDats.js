document.addEventListener("DOMContentLoaded", (event) => {
  setInterval(() => {
  
    const startDate = new Date('2024-02-09');
   
    // Получаем текущую дату
    const currentDate = new Date();
    
    // Вычисляем количество дней между двумя датами
    const daysDiff = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
    
    // Вычисляем количество прошедших суббот
    let saturdaysCount = 0;
    for (let i = 0; i <= daysDiff; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        if (date.getDay() === 6) { // 6 - это код субботы в JavaScript (0 - воскресенье, 1 - понедельник, ..., 6 - суббота)
            saturdaysCount++;
        }
    }
    
    daysCounter.textContent = `${daysDiff}`
    saturdayCounter.textContent = `${saturdaysCount}`
    secCounter.textContent =  `${Math.floor((currentDate - startDate) / 1000)}`
   
   });
});
