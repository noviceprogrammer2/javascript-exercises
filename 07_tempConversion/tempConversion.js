const ftoc = function(fahrenheit) {
  let conversion = (fahrenheit-32) * (5/9)
  return (Math.round((conversion*10)/10).toFixed(1))
};

const ctof = function(celcius) {
  let conversion = (celcius) * (9/5) + 32
  return (Math.round((conversion*10)/10).toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
