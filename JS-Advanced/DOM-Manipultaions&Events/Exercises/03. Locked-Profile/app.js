// function lockedProfile() {
//     document.getElementById('main').addEventListener('click', onClick)

//     function onClick(ev) {
//         if (ev.target.tagName === 'BUTTON') {
//             const profile = ev.target.parentNode;
//             const isLocked = profile
//                 .querySelector('input[type="radio"]:checked').value === 'lock';
//             if(isLocked) {
//                 return
//             }

//             let div = profile.querySelector('div'); 
//             let isVsisible = div.style.display === 'block';

//             div.style.display = isVsisible ? 'none' : 'block';
//             ev.target.textContent = isVsisible ? 'Show more' : 'Hide it'
//         }
//     }
// }       


function lockedProfile() {
    document.querySelector('main').addEventListener('click', onClick);
    
    function onClick(e) {
        if(e.target.tagName == 'BUTTON') {
            const profile = e.target.parentNode;
            const isLocked = profile
                .querySelector('input[type="radio"]:checked').value === 'lock';
            if (isLocked) return;

            const info = profile.querySelector('div');
            let isVisible = info.style.display === 'block';

            info.style.display = isVisible ? 'none' : 'block';
            e.target.textContent = isVisible ? 'Show more' : 'Hide it';

        }
    }
}       

