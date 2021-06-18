function browserHistory(obj, arr) {

    for (let line of arr) {
        let [command, site] = line.split(' ');
        switch (command) {
            case 'Close': closeTab(line, site); break;
            case 'Open': openTab(line, site); break;
            default: clearHistoryandCache(); break;
        }
    }
    printOnTheConsole();

    function closeTab(line, site) {
        if (obj['Open Tabs'].includes(site)){
            
            obj['Open Tabs'].splice(obj['Open Tabs'].indexOf(site), 1);    
            obj['Recently Closed'].push(site);
            obj['Browser Logs'].push(line);
        }
    }

    function openTab(line, site) {
        obj['Open Tabs'].push(site);
        obj['Browser Logs'].push(line);
    }

    function clearHistoryandCache() {
        obj['Open Tabs'] = [];
        obj['Recently Closed'] = [];
        obj['Browser Logs'] = [];
    }

    function printOnTheConsole (){
        let printArr = Object.values(obj)
        console.log(`${printArr[0]}`)
        console.log(`Open Tabs: ${printArr[1].join(', ')}`)
        console.log(`Recently Closed: ${printArr[2].join(', ')}`)
        console.log(`Browser Logs: ${printArr[3].join(', ')}`)
    }
}
// browserHistory(
// {
//     "Browser Name": "Google Chrome",
//     "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//     "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
// },
//     ["Close Facebook", "Open StackOverFlow", "Open Google"]
// )
browserHistory({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)