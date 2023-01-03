document.body.onclick = function (event) {
    event = event || window.event;

    if (event.target.classList.contains('goods-min')) {

        let allDivs = document.querySelectorAll('goods-img-min div');
        for (let i = 0; i < allDivs.length; i += 1) {
            allDivs[i].classList.remove('active');
        }

        document.getElementById('goods-max').src = event.target.src;
        event.target.parentElement.classList.add('active');
    }
}
