const Pet = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('h2', {}, props.animal),
        React.createElement('h2', {}, props.breed),
    ]);
}

const App = () => {
    return React.createElement(
        'div',
        {},
        [
            React.createElement('h1', {}, 'Adopt me!'),
            React.createElement(Pet, {
                name: 'Luna',
                animal: 'dog',
                breed: 'Havanese'
            }),
            React.createElement(Pet, {
                name: 'Peeper',
                animal: 'bird',
                breed: 'Cockatiel'
            }),
            React.createElement(Pet, {
                name: 'Cat',
                animal: 'Doink',
                breed: 'Mixed'
            })
        ]);
};
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));