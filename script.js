function handlers() {
    var as = document.getElementsByTagName('a')
    for(let i = 0; i < as.length; i++) {
        as[i].onclick = function(e) {
            if(i === 0) {
                console.log(i)
            }
        }
    }
}

