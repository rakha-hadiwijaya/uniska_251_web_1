var colors = ["#0C2B4E", "#1A3D64", "#1D546C", "#F4F4F4"];
var index = 0;
function ubahBackground(){
    document.body.style.backgroundColor = colors
    [index];
    index++;

    if(index >= colors.length){
        index = 0;
    }
}