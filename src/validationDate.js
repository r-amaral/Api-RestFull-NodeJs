import moment from 'moment';

export function validationDate(user) {

    let currentDate = new Date();

    user = moment(user).format('DD/MM/YYYY');

    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const currentDay = currentDate.getDate();

    let birthDateYear = +user.slice(6, 10);
    let birthDateMonth = +user.slice(4, 5);
    let birthDateDay = +user.slice(0, 2);

    let age = currentYear - birthDateYear;

    if (currentMonth < birthDateMonth || currentMonth == birthDateMonth && currentDay < birthDateDay) age--;

    if (age < 18) return false;

    return true;
}

