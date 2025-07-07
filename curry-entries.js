function defaultCurry(obj1) {
    return function (obj2) {
        return { ...obj1, ...obj2 }
    }
}
function mapCurry(func) {
    return function (obj) {
        let result = {};
        for (const key in obj) {
            const [key1, values] = func([key, obj[key]]);
            result[key1] = values;
        }
        console.log(result);
        
        return result;
    };

}
function reduceCurry(func) {
    return function (obj, i = 0) {
        return Object.entries(obj).reduce(func, i);
    };
}
function filterCurry(func) {
    return function (obj) {
        let result = {};
        for (const key in obj) {
            if (func([key, obj[key]])) {
                result[key] = obj[key];
            }
        }
        return result;
    };

}

function reduceScore(obj, acc) {
    const filter = filterCurry(([_, values]) => values.isForceUser)(obj)
    return reduceCurry((acc, [_, values]) => acc + values.pilotingScore + values.shootingScore)(filter, acc)
}
function filterForce(obj) {
    return filterCurry(( [_, values]) => values.shootingScore >=80 && values.isForceUser)(obj)
}
function mapAverage(obj) {
    return mapCurry(( [key, values]) => {
        const ar = (values.shootingScore+values.pilotingScore)/2
        return [ key, {...values, averageScore: ar} ]
     })(obj)
}

// const personnel = {
//     lukeSkywalker: { id: 5, pilotingScore: 98, shootingScore: 56, isForceUser: true },
//     sabineWren: { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//     zebOrellios: { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//     ezraBridger: { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true },
//     calebDume: { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true },
// }

// console.log(reduceScore(personnel, 420));
