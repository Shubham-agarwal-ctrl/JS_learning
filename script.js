var img_array = ["./Assert/1.png", "./Assert/2.png", "./Assert/3.png", "./Assert/4.png", "./Assert/5.png"]


var i = 0

// function plus() {

//     if (i < img_array.length) {
//         let pic = document.createElement("img")
//         pic.setAttribute("src", img_array[i])


//         pic.setAttribute("style", "width :20%; height:20%;");


//         document.getElementById("image_source_id").appendChild(pic)
//         i++
//         console.log(i)

//     }
//     printI()

// }

// console.log('hello outside in global')



// function sub() {


//     let pic = document.createElement("img")
//     pic.setAttribute("src", img_array[i])
//     pic.setAttribute("style", "width :20%; height:20%;");



//     document.getElementById("image_source_id").appendChild(pic)
//     i--

//     console.log(i)

//     printI()


// }

// function printI() {
//     console.log('i ki value >>>>>', i)
// }



// program to shift pic onclick


function plus() {
    let imgelement = document.getElementById("image_source_id")
    if (i < img_array.length) {
        imgelement.src = img_array[i]
        console.log(imgelement.src)
        console.log(i)
        i++
    }
    if (i == img_array.length) i--;
}

function sub() {
    let imgelement = document.getElementById("image_source_id")

    if (i >= 0) {
        imgelement.src = img_array[i]
        console.log(imgelement.src)
        i--
        console.log(i)
    }

}



// var x = 2;
// (function r() {
//     x++;
//     (function q() {
//         x = 4
//         console.log(x) // -->4

//     })();
//     console.log(x) //-->3
// })()
// console.log(x) 


