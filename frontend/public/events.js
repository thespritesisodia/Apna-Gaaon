// Utility function to generate the calendar for the current or selected month
function generateCalendar(year, month) {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = ''; // Clear previous calendar
  
    // Create a header for the current month and year
    const monthYear = document.createElement('div');
    monthYear.id = 'month-year';
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    monthYear.textContent = `${monthNames[month]} ${year}`;
    calendar.appendChild(monthYear);
  
    // Weekdays header
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weekdaysRow = document.createElement('div');
    weekdaysRow.classList.add('calendar-row');
    weekdays.forEach(day => {
      const cell = document.createElement('div');
      cell.classList.add('calendar-cell');
      cell.textContent = day;
      weekdaysRow.appendChild(cell);
    });
    calendar.appendChild(weekdaysRow);
  
    // Days grid
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
  
    const daysRow = document.createElement('div');
    daysRow.classList.add('calendar-row');
  
    // Fill empty cells before the first day
    for (let i = 0; i < firstDay; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.classList.add('calendar-cell', 'empty-cell');
      daysRow.appendChild(emptyCell);
    }
  
    // Fill actual days
    for (let day = 1; day <= lastDate; day++) {
      const dayCell = document.createElement('div');
      dayCell.classList.add('calendar-cell');
      dayCell.textContent = day;
  
      // Highlight today's date
      const today = new Date();
      if (
        day === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
      ) {
        dayCell.classList.add('today');
      }

            // Highlight special dates (e.g., 26th Jan - Republic Day)
            const specialDates = ['2025-01-26']; // Array of special dates
            const currentDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            if (specialDates.includes(currentDate)) {
              dayCell.classList.add('special-day');
            }
        
  
      // Add click event to display selected date's events
      dayCell.addEventListener('click', () => {
        const selectedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        document.getElementById('selected-date').textContent = selectedDate;
        displayEvents(selectedDate);
      });
  
      daysRow.appendChild(dayCell);
    }
  
    calendar.appendChild(daysRow);
  }
  
  // Display events for a given date
  function displayEvents(selectedDate) {
    const events = [
      { date: '2025-01-15', title: 'Village Festival' },
      { date: '2025-02-20', title: 'Community Meeting' },
      { date: '2025-03-10', title: 'Health Camp' }
    ];
  
    const eventsList = document.getElementById('events');
    eventsList.innerHTML = ''; // Clear previous events
  
    const eventsForDate = events.filter(event => event.date === selectedDate);
  
    if (eventsForDate.length > 0) {
      eventsForDate.forEach(event => {
        const li = document.createElement('li');
        li.textContent = event.title;
        eventsList.appendChild(li);
      });
    } else {
      const noEvents = document.createElement('li');
      noEvents.textContent = 'No events for this day.';
      eventsList.appendChild(noEvents);
    }
  }
  
  // Initialize the calendar
  function initCalendar() {
    const today = new Date();
    generateCalendar(today.getFullYear(), today.getMonth());
  
    // Set default selected date to today
    const defaultDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    document.getElementById('selected-date').textContent = defaultDate;
    displayEvents(defaultDate);
  }
  
  // Run the calendar initialization on page load
  document.addEventListener('DOMContentLoaded', initCalendar);