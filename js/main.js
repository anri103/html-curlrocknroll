//////////////////////////////////////////////////////////////////
// [ PHONE MASK ]

const maskPhone = document.querySelectorAll('.maskPhone')
const maskDate = document.querySelectorAll('.maskDate')

maskPhone.forEach(function (el) {
    IMask(el, {
        mask: '+{7}(000)000-00-00'
    });
});

maskDate.forEach(function (el) {
    IMask(el, {
        mask: Date,
        min: new Date(1900, 0, 1),
        lazy: false
    });
});

//////////////////////////////////////////////////////////////////
// [ subscribeForm after submit show modal modalThanks ]

document.getElementById("subscribeForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const sf = new bootstrap.Modal(document.getElementById("modalThanks"));
    sf.show()
});
  