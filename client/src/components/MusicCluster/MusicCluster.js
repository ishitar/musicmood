import React from 'react';
import Parser from 'html-react-parser';

const imageDivs = (number, images) => {
    //console.log(Object.keys(images));
    let arr = [];
    // Array
    // .from(Array(number+1), (_, i) => i)
    // .filter((i) => {
    //     return (number % i === 0 && !arr.includes(i)) ? arr.push(i,number/i) : number % i === 0});
    // console.log("Array of factors is ",arr);
    // let row = arr ? arr[arr.length-2] : 0;
    // let col = arr ? arr[arr.length-1] : 0;
    let row = 4;
    let col = 5;
    console.log("Row and coloum is ", row, col);
    var i;
    var j;
    let img = [];
    let newArr = [];
    
    if(row > 0 && col > 0){
        console.log(images.length);
        while(images.length) newArr.push(images.splice(0,4));
        console.log(newArr[0][1]);
        // if(newArr.length>0){
        //     for(i = 0; i < row; i++){
        //         img.push(`<div className="row">`);
        //         var innerArray = newArr[i].length;
        //         for(j= 0; j < innerArray; j++){
        //             img.push(`<div className="column"><img src="${newArr[i][j]}" alt="Recent track"/></div>`)
        //         }
        //         img.push(`</div>`);
        //     }
        // }
        
}
    return img;
}
export const MusicCluster = (props) => {
    console.log(props.images);
    const images = props.images;
    let img = [];
    img = imageDivs(images.length,images);
    console.log(images);
    return (
        <div>
            <div className="container flex">
                {Parser(img.join(""))}
            </div>
        </div>
    )
}