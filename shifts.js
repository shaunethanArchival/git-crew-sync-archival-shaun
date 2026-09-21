function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  let pay;
  if (hours > 8) {
    const regularPay = 8 * rate;
    const overtimeHours = hours - 8;
    const overtimePay = overtimeHours * rate * 1.5;
    pay = Math.round(regularPay + overtimePay);
  } else {
    pay = Math.round(hours * rate);
  }
  return Math.max(pay, 15);
}

module.exports = { isValidShift, calculatePay };
