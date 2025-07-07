 export function getArchitects() {
    const array = []
    const getallParas = document.querySelectorAll("a");
    const r = document.querySelectorAll(":not(a)");
    array.push(getallParas, r)
    return array

}
 
export function getClassical() {
    const array = []
    const getallclase = document.querySelectorAll(".classical");
    const getnotclase = document.querySelectorAll(":not(.classical)");
    array.push(getallclase, getnotclase)
    return array
}

 export  function getActive() {
    const array = []
    const getall = document.querySelectorAll(".active");
    const getnot = document.querySelectorAll(":not(.classical.active)");
    array.push(getall, getnot)
    return array

}
 export function getBonannoPisano() {
    const array = []
    const getallid = document.getElementById("BonannoPisano");
    const getallclase = document.querySelectorAll(".classical.active");
    array.push(getallid , getallclase )
    return array

}
    