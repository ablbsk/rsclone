## TieCreators
Для приложения реализован и задеплоен Back-end: https://github.com/anast-ananko/server

### Back-end:
- Использован REST API, +20
- Использован MVC паттерн, +10
- Подключение и работа с БД (MongoDB), +10
- Используется ORM (mongoose), +10
- Приложение разбито на микросервисы, +10
- Регистрация, +10
- Аутентификация, +10
- Авторизация, +10
- Приложение отображает статистику и график, данные для которых получает от бекенда, +10
- Реализован nodejs и express, +10
- Сервер отдаёт корректные ответы, отдаёт HTTP ошибки с нормальными body, по которым можно понять, что произошло, пишет читаемые логи, +20
- Использован eslint, +10 
  
**Итого: 140 баллов**  

### Front-end
Приложение реализовано с использованием библиотеки React

#### Технический стек
- Работа с Audio API, +10
- Написаны тесты с использованием React Tecting Library, +20
- Сохранение и загрузка данных с использованием Local storage, +10
- Есть возможность переключения языков (русский и англиский), +10
- Приложение работает на телефоне/планшете/PC, +30
- Реализован routing, +10
- Возможность кастомизации приложения, настроек пользователя (ночной режим, ночной режим заголовка и футера, выбор цвета акцента), +20

**Итого: 110 баллов**  

В приложении реализовано 4 роли для взаимодействия с данными: 
- Администратор
- Менеджер
- Продавец
- Покупатель

Можно завести новый аккаунт или взаимодествовать с данными через уже сформированную базу пользоветелей с разными ролями:
- Роль: Aдминистратор, Логин: user1@gmail.com, Пароль: user1
- Роль: Менеджер, Логин: user2@gmail.com, Пароль: user2
- Роль: Менеджер, Логин: user3@gmail.com, Пароль: user3
- Роль: Продавец, Логин: user4@gmail.com, Пароль: user4
- Роль: Продавец, Логин: user5@gmail.com, Пароль: user5
- Роль: Продавец, Логин: user6@gmail.com, Пароль: user6
- Роль: Покупатель, Логин: user7@gmail.com, Пароль: user7
- Роль: Покупатель, Логин: user8@gmail.com, Пароль: user8
- Роль: Покупатель, Логин: user9@gmail.com, Пароль: user9
- Роль: Покупатель, Логин: user10@gmail.com, Пароль: user10
- Роль: Покупатель, Логин: user11@gmail.com, Пароль: user11
- Роль: Покупатель, Логин: user12@gmail.com, Пароль: user12
- Роль: Покупатель, Логин: user13@gmail.com, Пароль: user13
- Роль: Покупатель, Логин: user14@gmail.com, Пароль: user14
- Роль: Покупатель, Логин: user15@gmail.com, Пароль: user15
- Роль: Покупатель, Логин: user16@gmail.com, Пароль: user16
- Роль: Покупатель, Логин: user17@gmail.com, Пароль: user17
- Роль: Покупатель, Логин: user18@gmail.com, Пароль: user18
- Роль: Покупатель, Логин: user19@gmail.com, Пароль: user19
- Роль: Покупатель, Логин: user20@gmail.com, Пароль: user20
- Роль: Покупатель, Логин: user21@gmail.com, Пароль: user21
- Роль: Покупатель, Логин: user22@gmail.com, Пароль: user22
- Роль: Продавец, Логин: user23@gmail.com, Пароль: user23
- Роль: Продавец, Логин: user24@gmail.com, Пароль: user24
- Роль: Продавец, Логин: user25@gmail.com, Пароль: user25
- Роль: Продавец, Логин: user26@gmail.com, Пароль: user26
- Роль: Продавец, Логин: user27@gmail.com, Пароль: user27
- Роль: Продавец, Логин: user28@gmail.com, Пароль: user28
- Роль: Продавец, Логин: user29@gmail.com, Пароль: user29
- Роль: Покупатель, Логин: user30@gmail.com, Пароль: user30

В процессе взаимодействия с БД для некоторых пользователей могут быть изменены роли или пользователи могут быть удалены. Актуальную информацию о количестве пользователей и их роли может посмотреть Администратор через Dashboard.

#### Регистрация и Аутентификация
Пользователь может зарегистрироваться или залогиниться, если у него уже есть аккакунт.

- Реализована страница регистрации, +10
- Реализована страница аутентификации, +10

**Итого: 20 баллов**  

После аутентификации пользователь попадает либо на главную страницу (роли Продавец (SELLER) и Пользователь(USER)), либо на страницу Dashboard (роли Администратор (ADMIN) и Менеджер (MENEGER)).

#### Dashboard

Для ролей Администратор и Менеджер доступен Dashboard, где они могут посмотреть общую сумму, полученную от продажи галстуков, количество реализованных товаров (co статусом finished) за сегодня, общее количество покупателей и продавцов, доход за текущий месяц по сравнению с предыдущим, график продаж за неделю, месяц и квартал. Доступен календарь, на котором отображены все продажи галстуков с их текущими статусами. Также можно получить список всех пользователей и всех заказов. Администратор может удалять пользователей (продавцы и покупатели) и повышать их до менеджера, менять статус заказа и удалять заказы. Менеджер может только просматривать пользователей (продавцы и покупатели), менять статус заказа и удалять заказы.

- Реализована главная страница Dashboard, +50
    - Плитка Общий доход, +5
    - Плитка Количество реализованных товаров за сегодня (со статусом finished), +5
    - Плитка Количество продавцов, +5
    - Плитка Количество покупателей, +5
    - Плитка Доход за месяц по сравнению с предыдущим, +10
    - График, отображающий количество продаж и чистую выручку по месяцам, +20
- Реализован Календарь, +40
- Реализован Список заказов, +15
    - Отображение всех заказов с их текущими статусами, +5
    - Удаление заказа, +5
    - Обновление статуса заказа, +5
- Реализован Список пользователей, +15
    - Отображение всех пользователей с разделением на вкладки Пользователи и Продавцы, +5
    - Удаление пользователя (только для роли Администратор (ADMIN)), +5
    - Повышение пользователя/продавца (изменение роли на Менеджер (MENEGER), только для роли Администратор (ADMIN)), +5 

**Итого: 120 баллов**  

#### Главная страница

Реализована главная страница приложения, +25
    - Видео, +5
    - Header, +5
    - Footer, +5
    - Блок с отзывами, +5
    - Блок с вопросами, +5

**Итого: 25 баллов** 

#### Конфигуратор

На странице конфигуратора можно сконфигурировать галстук, купить этот галстук могут лишь зарегистрированные пользователи (роль Покупатель(USER))

- Конфигуратор, +125
- Покупка сконфигурированного галстука, +5
- Перевод полученного изображения в base64, +10

**Итого: 140 баллов** 

#### Магазин 

Все пользователи могут посмотреть магазин готовых галстуков, размещенных продавцами, зарегистрированные покупатели (роль Покупатель (USER)) могут отложить в избранное или купить галстук

- Реализована страница галстуков, размещенных продавцами, +10
- Реализовано взаимодействие с галстуками, +10
    - Купить галстук, +5
    - Отложить в избранное, +5

**Итого: 20 баллов** 

#### Страница Мой профиль и Мои Галстуки/Мои заказы

Зарегистрированный покупатель может посмотреть свой профиль, Продавец может добавить новый галстук, посмотреть свои галстуки, а также проданные галстуки. Покупатель может посмотреть свои заказы

- Реализована страница профиля, +5
- Реализована страница Мои галстуки для продавца, +10
    - Просмотр галстуков, размещенных продавцом, +5
    - Просмотр проданных галстуков, +5
- Реализована страница Мои заказы для покупателя, +10
- Реализована страница Мои желания для покупателя, +10
- Реализована страница для добавления нового галстука продавцом, +10

**Итого: 45 баллов** 


**Итого за все приложение: 620 баллов**