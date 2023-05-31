window.addEventListener(`load`, function () {
    var printButton = this.document.getElementById('print-button');
    printButton.addEventListener('click', function () {
        window.print();

    });

});