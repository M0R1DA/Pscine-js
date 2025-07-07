function addWeek(data) {
       const days= [
        'Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday', 'Sunday'
        ,'secondMonday', 'secondTuesday' , 'secondWednesday','secondThursday' , 'secondFriday' ,  'secondSaturday' , 'secondSunday'
     ]
     const r = (data - new Date('0001-01-01'))/(1000*60*60*24) 
     const rt = r%14
    return days[rt]
     
}
function timeTravel(obj) {
   const dat = new Date(obj.date)
   dat.setHours(obj.hour, obj.minute, obj.second)
   return dat
}
// console.log(addWeek(new Date('0001-01-11')))

// // timeTravel({
// //   date: new Date('2020-05-29 23:25:22'),
// //   hour: 21,
// //   minute: 22,
// //   second: 22,
// // }).toString());