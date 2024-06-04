import {userClear, userReset} from '../../scripts/buttonFunctions.js'

describe('test suite: Button functions', () => {
  afterEach(() => {
    document.querySelector('.js-main').innerHTML = `<div class="user-choice js-user-choice">
    </div>
    <div class="country-grid js-country-grid">
    </div>
    <div class="endgame js-endgame">
    </div>`;
    document.querySelector('.js-welcome-message').innerHTML = '';
  });

  it('creates event listener for clear button', () => {
    document.querySelector('.js-user-choice').innerHTML = '<button class="user-clear js-user-clear">Clear</buttton>';
    spyOn(document.querySelector('.js-user-clear'), 'addEventListener');
    userClear();
    expect(document.querySelector('.js-user-clear').addEventListener).toHaveBeenCalledTimes(1);
  });

  it('creates event listener for reset button', () => {
    document.querySelector('.js-endgame').innerHTML = '<button class="reset-button js-reset-button">Reset</button></div>';
    console.log(document.querySelector('.js-endgame'));
    spyOn(document.querySelector('.js-reset-button'), 'addEventListener');
    userReset();
    expect(document.querySelector('.js-reset-button').addEventListener).toHaveBeenCalledTimes(1);
  });
});