import {renderMenu} from './components/menu';
import {renderSearch} from './components/search';
import {renderFilter} from './components/filter';
import {renderCard} from './components/card';
import {renderForm} from './components/form';
import {renderLoadMore} from './components/load-more';
import {renderBoard} from './components/board';

let components = {
  menu: renderMenu(),
  search: renderSearch(),
  filter: renderFilter(),
  board: renderBoard(),
  card: renderCard(),
  form: renderForm(),
  loadMore: renderLoadMore()
};

const renderComponents = (container, component, place) => {
  container.insertAdjacentHTML(place, component);
};

const main = document.querySelector(`.main`);
const menuControl = main.querySelector(`.control`);

renderComponents(menuControl, components.menu, `beforeend`);
renderComponents(menuControl, components.search, `afterend`);
renderComponents(main, components.filter, `beforeend`);
renderComponents(main, components.board, `beforeend`);

const board = main.querySelector(`.board__tasks`);

new Array(3).fill(``).forEach(() => renderComponents(board, components.card, `afterbegin`));
renderComponents(board, components.form, `afterbegin`);
