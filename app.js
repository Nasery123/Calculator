(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-danger');
    let equal = document.querySelector('.btn-secondary');



    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = "";
        } else {
            try {
                let answer = eval(screen.value);
                screen.value = answer;
            } catch (error) {
                console.log('Invalid expression')

            }

        }

    })
    clear?.addEventListener('click', function (e) {
        screen.value = '';
    })
})
    ();
