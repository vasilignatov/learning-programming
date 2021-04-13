function validate() {
    document.getElementById('email').addEventListener('change', onChange)

    function onChange(ev) {
        const email = ev.target.value;
        const pattern = /^[\a-z]+@[a-z]+\.[a-z]+$/;
        if (pattern.test(email)) {
            ev.target.className = ''
            return;
        }
        ev.target.className = 'error';
    }
}

const validate = () => {
    document.getElementById('email').addEventListener('change', (ev) => {
        ev.target.className = /^[a-z]+@[a-z]+\.[a-z]+$/g.test(ev.target.value) ? '' : 'error'
    });
}