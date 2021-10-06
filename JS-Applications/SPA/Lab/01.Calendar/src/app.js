const years = [...document.querySelectorAll('.monthCalendar')]
    .reduce((acc, c) => {
        acc[c.id.slice(5)] = c
        return acc
    }, {})

const months = [...document.querySelectorAll('.daysCalendar')]
    .reduce((acc, c) => {
        acc[c.id.slice(6)] = c
        return acc
    }, {});


const calendar = document.getElementById('years');

const monthsObj = {
    'Jan': '1',
    'Feb': '2',
    'Mar': '3',
    'Apr': '4',
    'May': '5',
    'Jun': '6',
    'Jul': '7',
    'Aug': '8',
    'Sept': '9',
    'Oct': '10',
    'Nov': '11',
    'Dec': '12'
}

function displaySection(section) {
    document.body.innerHTML = '';
    document.body.appendChild(section);
}
displaySection(calendar)
console.log(months);
console.log(years);

calendar.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('day') || target.classList.contains('date')) {
        event.stopImmediatePropagation();
        const yearId = target.textContent.trim();
        displaySection(years[yearId]);
    }
})

document.body.addEventListener('click', (event) => {
    if (event.target.tagName == 'CAPTION') {
        const sectionId = event.target.parentElement.parentElement.id;
        if (sectionId.includes('year-')) {
            displaySection(calendar)
        } else if (sectionId.includes('month-')) {
            const yearId = sectionId.split('-')[1];
            displaySection(years[yearId]);
        }

    } else if (event.target.tagName == 'DIV' || event.target.tagName == 'TD') {
        const monthNum = event.target.textContent.trim();

        if (monthsObj[monthNum]) {
            let parent = event.target.parentNode;

            while (parent.tagName != 'TABLE') {
                parent = parent.parentNode;
            }
            const year = parent.querySelector('caption').textContent.trim();
            const monthId = year + '-' + monthsObj[monthNum];
            displaySection(months[monthId])
        }
    }
});
