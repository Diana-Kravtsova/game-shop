import { get } from './Api';

function gameList(params) {
    return get('games', params);
}

export { gameList };
