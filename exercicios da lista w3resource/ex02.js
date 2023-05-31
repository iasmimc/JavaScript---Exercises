window.addEventListener(`load`, function () {
    var printButton = document.getElementById(`print-button`);
    printButton.addEventListener(`click`, function () {
        window.print();
    });
});