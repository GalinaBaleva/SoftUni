function validate() {
    document.getElementById('email').addEventListener('change', onChange);

    // function onChange(ev) {
    //     const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    //     if (pattern.test(ev.target.value)) {
    //         ev.target.classList.remove('error');
    //     } else {
    //         ev.target.classList.add('error');
    //     }
    // }
    
    function onChange({target}) { //деструктуриране на обект
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (pattern.test(target.value)) {
            target.classList.remove('error');
        } else {
            target.classList.add('error');
        }
    }
}