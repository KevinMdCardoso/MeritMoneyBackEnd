Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  // console.log(this);
  return date;
};

Date.fromString = function(string, format = 'dd-mm-yyyy') {
  const splitResult = string.toString().split('-');
  let newString = '';
  let newDate;
  // console.log(splitResult);
  switch (format) {
    case 'yyyy-mm-dd':
      return new Date(string);
    case 'mm-dd-yyyy':
      newString = splitResult[2] + '-' + splitResult[0] + '-' + splitResult[1];
      newDate = new Date(newString);
      return newDate;
    // console.log(newDate);
    case 'dd-mm-yyyy':
      newString = splitResult[2] + '-' + splitResult[1] + '-' + splitResult[0];
      newDate = new Date(newString);
      // console.log(newDate);
      return newDate;
  }
};

Date.prototype.format = function() {
  // console.log(this.valueOf());
  var date = new Date(this.valueOf());
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return (
    day.toString().padStart(2, '0') +
    '/' +
    monthIndex.toString().padStart(2, '0') +
    '/' +
    year
  );
};
