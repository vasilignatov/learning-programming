function solve() {

    const [lecture, date] = document.querySelectorAll('input');
    const modul = document.getElementsByName('lecture-module')[0];
    const addBtn = document.querySelector('button');
    const trainings = document.querySelector("section>div.modules");

    addBtn.addEventListener('click', add);

    function add(e) {
        e.preventDefault();
        if (lecture.value != '' && date.value != '' && modul.value != 'Select module') {
            let moduleName = modul.value;
            moduleName = moduleName.toUpperCase() + '-MODULE';
            const allModules = Array.from(document.querySelectorAll('div.modules>div.module>h3'));

            if (allModules.map(x => x.textContent).includes(moduleName)) {                      
                const currentModuleIndex = allModules.map(x => x.textContent).indexOf(moduleName);
                const currentModuleRef = allModules[currentModuleIndex].parentNode;     

                const newLecture = creatingLecture(lecture.value, date.value);

                currentModuleRef.children[1].appendChild(newLecture)

                sortingFunc(currentModuleRef.children[1]);
            } else {
                const newModule = creatingModule(moduleName);
                newModule.children[1].appendChild(creatingLecture(lecture.value, date.value));
                trainings.appendChild(newModule);
            }
        }
    }

    function creatingModule(moduleName) {
        const moduleDiv = e('div', 'module',
            e('h3', null, moduleName),
            e('ul'))
        return moduleDiv;
    }

    function creatingLecture(lectureName, lectureDate) {
        const delBtn = e('button', 'red', 'Del');

        delBtn.addEventListener('click', deleting)

        const lectureLi = e('li', 'flex',
            e('h4', null, `${lectureName}-${lectureDate}`),
            delBtn);
        lectureLi.date = lectureDate;

        return lectureLi;
    }

    function deleting(ev) {
        const moduleLi = ev.target.parentNode;
        const thisModuleUl = moduleLi.parentNode;
        moduleLi.parentNode.removeChild(moduleLi)
        if (Array.from(thisModuleUl.children).length == 0) {
            thisModuleUl.parentNode.remove();
        }
    }

    function sortingFunc(ulEl) {
        Array
            .from(ulEl.children)
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .forEach(d => ulEl.appendChild(d))



    }


    function e(type, className, ...content) {
        const result = document.createElement(type);
        if (className) { result.className = className }


        content.forEach(e => {
            if (typeof e == 'string') {
                const node = document.createTextNode(e);
                result.appendChild(node);
            } else {
                result.appendChild(e);
            }
        });

        return result;
    }
}
