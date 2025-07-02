import React, { useState, useEffect } from 'react';
import './Events.css';
import { Link } from 'react-router-dom';

const EVENTS = [
  { date: '2025-01-15', title: 'Village Festival' },
  { date: '2025-02-20', title: 'Community Meeting' },
  { date: '2025-03-10', title: 'Health Camp' },
  { date: '2025-01-26', title: 'Republic Day Celebration' },
];

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function getEventsForDate(dateStr) {
  return EVENTS.filter(e => e.date === dateStr);
}

function getUpcomingEvents() {
  const today = new Date();
  return EVENTS.filter(e => new Date(e.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}

const Events = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(
    `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
  );

  useEffect(() => {
    document.body.classList.add('events-bg');
    return () => {
      document.body.classList.remove('events-bg');
    };
  }, []);

  // Calendar generation
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let day = 1; day <= lastDate; day++) {
    days.push(day);
  }

  // Navigation
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(y => y - 1);
    } else {
      setCurrentMonth(m => m - 1);
    }
  };
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(y => y + 1);
    } else {
      setCurrentMonth(m => m + 1);
    }
  };

  // Special dates for highlight
  const specialDates = EVENTS.map(e => e.date);

  // Render
  return (
    <div>
      <header className="events-header">
        <h1>EVENTS</h1>
      </header>
      <div className="events-black-bg">
        <main>
          <div className="events-layout">
            <aside className="events-sidebar">
              <h3>MENU</h3>
              <ul className="sidebar-menu">
                <li><Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Register a new event</Link></li>
                <li>Upcoming Events</li>
                <li>History of Events</li>
                
                <li>Event Gallery</li>
                <li>Terms and Conditions</li>
              </ul>
            </aside>
            <div className="events-main">
              <div className="calendar-container">
                <div className="month-year">
                  <button className="month-nav" onClick={prevMonth}>&lt;</button>
                  <span>{monthNames[currentMonth]} {currentYear}</span>
                  <button className="month-nav" onClick={nextMonth}>&gt;</button>
                </div>
                <div className="calendar-row calendar-weekdays">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div className="calendar-cell calendar-weekday" key={day}>{day}</div>
                  ))}
                </div>
                <div className="calendar-row calendar-days">
                  {days.map((day, idx) => {
                    if (day === null) {
                      return <div className="calendar-cell empty-cell" key={idx}></div>;
                    }
                    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                    const isToday =
                      day === today.getDate() &&
                      currentMonth === today.getMonth() &&
                      currentYear === today.getFullYear();
                    const isSpecial = specialDates.includes(dateStr);
                    return (
                      <div
                        className={`calendar-cell${isToday ? ' today' : ''}${isSpecial ? ' special-day' : ''}${selectedDate === dateStr ? ' selected-day' : ''}`}
                        key={idx}
                        onClick={() => setSelectedDate(dateStr)}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="event-list">
                <h2>Events on <span className="selected-date">{selectedDate}</span></h2>
                <ul className="events">
                  {getEventsForDate(selectedDate).length > 0 ? (
                    getEventsForDate(selectedDate).map((event, i) => (
                      <li key={i}>{event.title}</li>
                    ))
                  ) : (
                    <li>No events for this day.</li>
                  )}
                </ul>
                <h2>Upcoming Events</h2>
                <ul className="events">
                  {getUpcomingEvents().length > 0 ? (
                    getUpcomingEvents().map((event, i) => (
                      <li key={i}><strong>{event.title}</strong> - {event.date}</li>
                    ))
                  ) : (
                    <li>No upcoming events.</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Events; 