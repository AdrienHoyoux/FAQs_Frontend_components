function changeImage(imageId,pId){
    img = document.getElementById(imageId);
    paraId = document.getElementById(pId);

    if(img.src == 'http://127.0.0.1:5500/assets/images/icon-plus.svg'){
        img.src= './assets/images/icon-minus.svg';
        paraId.style.display = "block";
        
    }
    else{
        img.src= 'http://127.0.0.1:5500/assets/images/icon-plus.svg';
        paraId.style.display = "none";
    }
}