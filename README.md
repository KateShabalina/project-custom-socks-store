# Сервис для продажи кастомных носков

## Описание:
<p>Web-приложение для кастомизации пользователем носков и их последующей продажи, реализованное на JS с использованием серверного рендеринга (Server-Side Rendering, SSR)</p>

## Функционал:

### Главная страница

* Шапка
  * Логотип
  * Кнопка для входа
  * Кнопка для регистрации
  * Ссылка на страницу избранного
  * Ссылка на страницу корзины
* Приветственный текст
* Ссылка на генератор носков
* Футер
  * Адрес магазина
  * Email службы поддержки

### Генератор носков

* Выбор базового цвета
  * Цвет выбирается из заранее заданной палитры цветов
* Выбор картинки
  * Картинки зашиты в приложение
* Выбор узора
  * Узоры зашиты в приложение
* Отображение готового дизайна в реальном времени
  * При каждом изменении мы сразу видим итоговый дизайн носков
* Кнопка добавления в избранное
* Кнопка добавления в корзину

### Избранное
* Список добавленных в избранное носков
* Возможность поделиться конкретным дизайном с друзьями с помощью ссылки

### Корзина

* Список добавленных в корзину дизайнов носков
* Поле для ввода количества единиц товара
* Кнопка оформления заказа
  * При нажатии уходит email на почту магазина с параметрами заказа

## Стек технологий:
JavaScript

DB: PostgreSQL, Sequelize ORM

Back: Node.js, Express, Sessions, Bcrypt, Handlebars

Front: Bootstrap, HTML5, CSS

## Установка:
npm ci
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
npm run dev
