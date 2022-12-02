let nbFound = 0
export const showCapote = () => {
    nbFound ++;
    if(nbFound >= 5){
        document.getElementById("montroopers").style.display = "block"
        setTimeout(()=>{
            document.getElementById("montroopers").style.display = "none"
        },3000)
        nbFound = 0
    }else{
        document.getElementById("macapote").style.display = "block"
        setTimeout(()=>{
            document.getElementById("macapote").style.display = "none"
        },1000)
    }
}