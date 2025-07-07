function isValid(date) {
       if ( date instanceof  Date ){
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
      if ((isValid(date))&&(isAfter(date,taym))){
            return true
      }
      return false
}

function isPast(date) {
      const taym = new Date()
      if ((isValid(date))&&(isBefore(date,taym))){
            return true
      }
      return false
}




