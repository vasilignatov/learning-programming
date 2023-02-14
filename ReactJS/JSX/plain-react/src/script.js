let rootEkement = document.getElementById('root');

// let reactElement = React.createElement(
//     'header',
//     {},
//     React.createElement('h1', {id: 'heading'}, 'Hello React'),
//     React.createElement('h2', {className: 'sub-header'}, 'The best framework ever!')
// );

let reactElement = (
    <header>
        <h1>Hello JSX</h1>
        <h2>The bestframework in the world!</h2>
    </header>
);

ReactDOM.render(reactElement, rootEkement);

