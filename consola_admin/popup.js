var btn_addOrganizator = document.getElementById('btn-addOrganizator'),
    overlay= document.getElementById('overlay'),
    popup = document.getElementById('popup--container-details'),
    btn_popup_close= document.getElementById('btn-popup-close'), 
    input= document.getElementById("input_text");


btn_addOrganizator.addEventListener('click', function(){
    overlay.classList.add('active')
    popup.classList.add('active')
    // overlaySecond.classList.add('active')
    // popup_second.classList.add('active')
})

btn_popup_close.addEventListener('click', function(){
    overlay.classList.remove('active')
    popup.classList.remove('active')
    document.input_text.value= ""
})

var btn_addOrganizatorSecond = document.getElementById('newOrganizator'),
    overlaySecond= document.getElementById('overlay-second'),
    popup_second = document.getElementById('popup--container-add');

btn_addOrganizatorSecond.addEventListener('click', function(){
    overlaySecond.classList.add('active')
    popup_second.classList.add('active')
    // overlay.classList.remove('active')
    // popup.classList.remove('active')
})