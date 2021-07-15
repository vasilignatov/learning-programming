function solve() {

    const [departBtn, arriveBtn] = document.querySelectorAll('input');
    const banner = document.querySelector('#info span');
    let stop = {
        next: 'depot'
    }

    async function depart() {

        const url = `http://localhost:3030/jsonstore/bus/schedule/` + stop.next;
        const responce = await fetch(url);
        const data = await responce.json();

        stop = data;
        banner.textContent = `Next stop ${data.name}`;

        departBtn.disabled = true;
        arriveBtn.disabled = false; 
    }
    
    function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true; 

        banner.textContent = `Arriving at ${stop.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();