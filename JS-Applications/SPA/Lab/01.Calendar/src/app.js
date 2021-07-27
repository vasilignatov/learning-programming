const yearSelect = document.getElementById('years');

const years = [...document.querySelectorAll('.monthCalendar')].reduce((acc, c) => {
    acc[c.id] = c;
    return acc;
}, {})

const months = [...document.querySelectorAll('.daysCalendar')].reduce((acc, c) => {
    acc[c.id] = c;
    return acc
}, {});

function displaySection(section) {
    document.body.innerHTML = '';
    document.body.appendChild(section);
}

displaySection(yearSelect);

yearSelect.addEventListener('click', (event) => {
    if (event.target.classList.contains('date') || event.target.classList.contains('day')) {
        event.stopImmediatePropagation();
        const yearId = `year-${event.target.textContent.trim()}`
        displaySection(years[yearId]);
    }
})

document.body.addEventListener('click', (event) => {
    if (event.target.tagName == 'CAPTION') {
        const sectionId = event.target.parentNode.parentNode.id;

        if (sectionId.includes('year-')) {
            displaySection(yearSelect)
        }
    } else if (event.target.tagName == 'TD' || event.target.tagName == 'DIV') {
        const monthName = event.target.textContent.trim(); 
        console.log(monthName);
    }
})

