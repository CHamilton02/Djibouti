import {userClear} from '../../scripts/buttonFunctions.js'

describe('test suite: Button functions', () => {
  afterEach(() => {
    document.querySelector('.js-main').innerHTML = `<div class="user-choice js-user-choice">
    </div>
    <div class="country-grid js-country-grid">
    </div>
    <div class="endgame js-endgame">
    </div>`;
    document.querySelector('.js-welcome-message').innerHTML = '';
  })

  it('creates event listener for clear button', () => {
    spyOn(document.querySelector('.js-user-clear'), 'addEventListener');
    userClear();
    expect(document.querySelector('.js-user-clear').addEventListener).toHaveBeenCalledTimes(1);
  })
});