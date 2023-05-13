// Constructor function to create Date Object
const now = new Date();
console.log(now);
// is type of object
console.log(typeof now);

// year, months, day, times
console.log('getFullYear:', now.getFullYear());
// month is zero based
console.log('getMonth:', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

// timestamps (milliseconds since 1st Jan 1970) Epoch time
console.log('timestamp:', now.getTime());

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

// time stamps
const before = new Date('February 1 2019 7:30:59');
const difference = now.getTime() - before.getTime();
console.log("difference ms Dates", difference);

const mins = Math.round(difference / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log("minutes:", mins);
console.log("hours:", hours);
console.log("days:", days);
console.log(`the blog was written: ${days} ago`);

// converting timestamps into date objects
const timestamp = 1675938474990;
console.log(new Date(timestamp));

// Building a digital clock
const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const html = `
        <span>${hours}</span> :
        <span>${minutes}</span> :
        <span>${seconds}</span>
    `;
    clock.innerHTML = html;
};

setInterval(tick, 1000);

// Date FNS
// https://date-fns.org/
console.log(dateFns.isToday(now));

// formatting options
// https://date-fns.org/v2.30.0/docs/format
console.log(dateFns.format(now, 'DD/MM/YYYY'));
console.log(dateFns.format(now, 'dddd, Do, MMM, YY'));
console.log(dateFns.format(now, 'dd, Do, MMMM, YY'));
console.log(dateFns.format(now, 'Do'));

// comparing dates
console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));