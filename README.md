# Статичен сайт + игра Змия

## За сайта

### Идея

Реших да направя статичен сайт за онлайн игри, в който да вградя играта със змията.

### Тема

Използвах **собствен HTML, CSS и JavaScript код** + jQuery, както и външни шрифтове и икони.

### Страници

Сайтът съдържа следните страници:

- Landing page

- Начало
- Игри
- Инфо
- За нас
- Контакти

- Вход/Регистрация
- Профил
- Резултати
- Любими

Към всяка от страниците (без landing page) има вградена **PHP динамика във футъра**.

В страницата "Игри" има формуляри, които са само с **илюстративен** характер.

### Менюта

Основното меню е с **responsive design**.

Търсачката и бутонът за смяна на езика са само **илюстративни**.

## За играта

### Вид на играта

Играта е от типа Змия/Snake.

Повече за правилата на играта може да прочетете на страницата *game-tips.html*.

### Стартиране

Преди да пуснете играта **създадайте MySQL база данни** и **стартирайте Apache сървър**, както и **двата сървърни NODE.JS файла**.

> - Настройките и структурата на базата данни може да намерите съответно във файловете **database_settings.txt** и **snake_game.sql**.
>
> - Стартирайте Bash Shell или Linux Terminal, отворете папката *service*, която се намира в *games/x-snake/assets/* и напишете *node insert*, след което натиснете **enter**.
>
> - Ако всичко е наред, сървърният файл трябва да се стартира на порт 3000.
>
> - Стартирайте нов Bash Shell или Linux Terminal и след като достъпите същата папка, стартирайте файла *select.js*.
>
> - Този файл ще се стартира на порт 3001.

Играта може да се пусне от линка към слайдшоуто на началната страница на сайта, както и през страницата landing page.

### Брой на играчите

Изберете игра за един или за двама души.

- Single Player

- Multi Player / НЕ РАБОТИ!!! :(

### Записване на точките

Записването на точките става след натискането на бутона **Save scores and time**.

#### Как става записването на точките? / НЕ РАБОТИ!!! :(

> - От файла *single-player.js* се изпраща AJAX заявка към файла *insert.js* с точките и секундите в момента на натискане на бутона. / РАБОТИ!!! :)
>
> - От файла *insert.js* данните се записват в MySQL база данни. / РАБОТИ САМО РЪЧНО!!! :(

### Показване/обновяване на топ резултатите / НЕ РАБОТИ!!! :(

Първите 5 топ резултата се показват/обновяват след натискането на бутона **Refresh top scores and time**.

#### Как става обновяването на топ резултатите?

> - От файла *single-player.js* се изпраща AJAX заявка към файла *select.js*. / РАБОТИ!!! :)
>
> - От файла *select.js* се извеждат данните от таблицата *user_scores* в базата данни. / РАБОТИ!!! :)
>
> - Данните се изпращат до файла *single-player.js* и се показват на страницата *single-player.html*. / НЕ РАБОТИ!!! :(