const { renderList } = require('./searchView');

test('should output a List of li ', () => {
    const list = renderList(['Pasta', 'Pen', 'Dog']);
    expect('<li>Pasta</li><li>Pen</li><li>Dog</li>');
});
