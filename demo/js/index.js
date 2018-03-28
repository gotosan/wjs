
document.oncontextmenu = function(){
    event.returnValue = false;
};
document.onselectstart = function(){
    event.returnValue = false;
}
