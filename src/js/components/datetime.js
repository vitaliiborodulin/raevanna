// $("input[type=date]").flatpickr();
$(".form__date").flatpickr({
    locale: "ru",
    dateFormat: "d.m.Y",
    // minDate: "today",
    // defaultDate: ["today"],
    disableMobile: "true"
});

$(".form__time").flatpickr({
    locale: "ru",
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true,
    // minTime: "09:00",
    // maxTime: "22:30",
    // defaultDate: "13:45"
    disableMobile: "true"
});