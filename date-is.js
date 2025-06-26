function isValid(date) {
       if ( date instanceof new Date ){
            return !isNaN(date.getTime())
      }
      if (typeof date === 'number') {
            return!isNaN(date)
      }
}

function isAfter(date1,date2) {
      return date1 > date2
}
function isBefore(date1,date2) {
      return date1 < date2
}
function isFuture(date) {
      const taym = new Date()
      if ((isValid)&&(isAfter(date,taym))){
            return true
      }
      return false
}

function isPast(date) {
      const taym = new Date()
      if ((isValid)&&(isBefore(date,taym))){
            return true
      }
      return false
}



console.log(
 isFuture(new Date(2046, 6, 10)))



