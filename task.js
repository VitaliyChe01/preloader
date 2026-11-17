const loader = document.getElementById('loader');
const items = document.getElementById('items');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3333/slow-get-courses');
xhr.responseType = 'json';

xhr.addEventListener('load', () => {
  loader.classList.remove('loader_active');

  const valute = xhr.response.response.Valute;

  for (const key in valute) {
    const currency = valute[key];

    const item = document.createElement('div');
    item.className = 'item';

    const code = document.createElement('div');
    code.className = 'item__code';
    code.textContent = currency.CharCode;

    const value = document.createElement('div');
    value.className = 'item__value';
    value.textContent = currency.Value;

    const currencyLabel = document.createElement('div');
    currencyLabel.className = 'item__currency';
    currencyLabel.textContent = 'руб.';

    item.append(code, value, currencyLabel);
    items.append(item);
  }
});

xhr.send();