/**
 * @property {object} settings Настройки корзины товаров.
 * @property {{price: number, name: string}[]} goods Список товаров что купил пользователь.
 * @property {HTMLElement} basketCountEl Место для показа количества товаров.
 * @property {HTMLElement} basketPriceEl Место для показа цены всех товаров.
 */
const basket = {
    settings: {
        countSelector: '#basket-count',
        priceSelector: '#basket-price',
    },
    goods: [],
    countEl: null,
    priceEl: null,

    /**
     * Инициализирует переменные для корзины и показывает эти значения.
     */
    init(settings = {}) {
        let elems = document.querySelectorAll('.buy-btn');
        for(let i = 0; i < elems.length; i++) {
            elems[i].addEventListener('click', event=> this.ClickHandler(event));
        }


    },

    ClickHandler(event) {
      this.add(event.target.dataset.name, event.target.dataset.price);
        console.log(event.target);

    },

    /**
     * Отображает количество всех товаров и их цену.
     */
    render() {
        let counts = document.querySelector(this.settings.countSelector);
        counts.innerHTML = this.goods.length;
        let prices = document.querySelector(this.settings.priceSelector);
        prices.innerHTML = this.getGoodsPrice();
    },

    /**
     * Считает и возвращает цену всех купленных товаров из массива this.goods.
     * @returns {number} Цену всех купленных товаров.
     */
    getGoodsPrice() {
        let p = 0;
        for (let i = 0; i < this.goods.length; i++) {
             p += parseInt(this.goods[i].dataset.price);
        }

        return p;
    },

    /**
     * Добавляет купленный товар в массив купленных товаров и отображает количество и цену всех товаров.
     * @param goodName Название товара.
     * @param goodPrice Цена товара.
     */
    add(goodName, goodPrice) {
        this.goods.push(event.target);
        console.log(this.goods);
        this.render();
    },
};

basket.init();