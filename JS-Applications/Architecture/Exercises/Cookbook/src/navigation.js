// initialize links 
// setup evet listeners
// updatw active link
// render view
// keep assocciation between links and views

// export :
//  - goTo - update active link; render view 
//  - setUserNav
//  - registerView

export function createNavigation(main, nav) {

    const views = {};
    const links = {};

    setupNavigation();              // add event listeners to links and set user nav

    const navigation = {
        setUserNav,
        registerView,
        goTo
    };

    return navigation;

    async function goTo(name, ...params) {
        const linkId = Object.entries(links).find(([k, v]) => v == name) || [];
    
        setActiveNav(linkId[0])

        main.innerHTML = '';
        const section = await views[name](...params);
        console.log(section);
        main.appendChild(section);
    }

    function registerView(name, section, setup, navId) {    // recive name, section call setup func and set the view 
        const view = setup(section, navigation)

        views[name] = view;
        if (navId) {
            links[navId] = name;
        }
    }

    function setupNavigation() {      // add event listener to nav, handle 
        setUserNav();

        nav.addEventListener('click', (ev) => {
            if (ev.target.tagName == 'A') {
                const viewName = links[ev.target.id];
                if (viewName) {
                    ev.preventDefault();
                    goTo(viewName)
                }
            }
        });
    }

    function setActiveNav(targetId) {  // change color of the active button
        [...nav.querySelectorAll('a')].forEach(a => (targetId && a.id == targetId) ? a.classList.add('active') : a.classList.remove('active'));
    }
 

    function setUserNav() {            // set user navigation
        if (sessionStorage.getItem('authToken') != null) {
            document.getElementById('user').style.display = 'inline-block';
            document.getElementById('guest').style.display = 'none';
        } else {
            document.getElementById('user').style.display = 'none';
            document.getElementById('guest').style.display = 'inline-block';
        }
    }
}
