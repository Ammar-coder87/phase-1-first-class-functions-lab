// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const firstTowdrivers = drivers.slice(0, -2);
return firstTowdrivers;

}
console.log(returnFirstTwoDrivers());



const returnLastTwoDrivers = function(drivers) {
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const lastTowdrivers = drivers.slice(-2);
    return lastTowdrivers;
}
console.log(returnLastTwoDrivers());
//>>


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function fareMultiplier(fare) {
       return fare * integer;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
console.log(fareDoubler(10));
console.log(fareTripler(10));



function selectDifferentDrivers(drivers, selectDriver) {
    
return selectDriver(drivers);
}

console.log(selectDifferentDrivers(selectingDrivers, returnLastTwoDrivers));
console.log(selectDifferentDrivers(selectingDrivers, returnFirstTwoDrivers));









