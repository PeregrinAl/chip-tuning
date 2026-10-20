# Как заполнить сайт

## 1. Заглушки
Замените сразу во всех файлах: в VS Code `Ctrl+Shift+H` → «Заменить все».

| Заглушка | Чем заменить | Пример |
|---|---|---|
| `[ИМЯ]` | имя мастера или название | Андрей |
| `[ГОРОД]` | город | Курган |
| `[ГОРОДЕ]` | город в предложном падеже | Кургане |
| `[АДРЕС]` | улица, дом | ул. Ленина, 1 |
| `[ТЕЛЕФОН]` | телефон, как его показывать | +7 (900) 123-45-67 |
| `7XXXXXXXXXX` | телефон, только цифры | 79001234567 |
| `[TELEGRAM]` | имя в Telegram без @ | ivanov |
| `[ЧАСЫ РАБОТЫ]` | часы работы | Пн–Сб 9:00–19:00 |
| `[ССЫЛКА_НА_АВИТО]` | ссылка на объявление или профиль | |
| `[ССЫЛКА_НА_ЯНДЕКС_КАРТЫ]` | ссылка на карточку в Яндекс Картах | |

В `index.html`, в блоке `application/ld+json`, часы пишутся так: `Mo-Sa 09:00-19:00`.

## 2. Жёлтые пункты «уточнить»
Это популярные запросы, которые мастер ещё не подтвердил. В коде у них стоит `class="check"`.
- Мастер это делает → удалите ` class="check"`.
- Не делает → удалите строку целиком.

Перед публикацией поищите `check` во всех файлах (`Ctrl+Shift+F`). Таких строк остаться не должно.

## 3. Фото
Сейчас на сайте стоят бесплатные фото с Unsplash. По их лицензии их можно использовать на коммерческом сайте без указания автора.
Чтобы поставить своё фото, положите файл **с тем же именем** в `photos/` поверх старого. Код менять не нужно.

| Файл | Где стоит | Источник |
|---|---|---|
| `hero.jpg` | главная, первый экран | https://unsplash.com/photos/dSosKR6g-W8 |
| `toyota-lexus.jpg` | Toyota и Lexus | https://unsplash.com/photos/r3cA8C6a-UA |
| `nissan-infiniti.jpg` | Nissan и Infiniti | https://unsplash.com/photos/Yk-0M8S0KdE |
| `vw-audi-skoda.jpg` | VW, Audi, Skoda | https://unsplash.com/photos/_E4bZ0lBE3g |
| `mercedes.jpg` | Mercedes-Benz | https://unsplash.com/photos/Sv0AxtA8YxI |
| `peugeot-citroen.jpg` | Peugeot и Citroën | https://unsplash.com/photos/sQvXW9o35K0 |
| `kitajskie.jpg` | Китайские авто | https://unsplash.com/photos/HxY1GC1-cxM |
| `gruzovye.jpg` | Грузовые | https://unsplash.com/photos/GBVDilE8yvI |
| `diagnostika.jpg` | Диагностика | https://unsplash.com/photos/g5nquYyJMEA |
| `evro2.jpg` | Евро-2 | https://unsplash.com/photos/I74mkR_3OP0 |
| `klyuchi.jpg` | Ключи | https://unsplash.com/photos/zI_FuGSk-B8 |
| `airbag.jpg` | SRS / Airbag | https://unsplash.com/photos/dqxdOxacJL0 |
| `proshivka.jpg` | Прошивка блоков | https://unsplash.com/photos/pfR18JNEMv8 |
| `remont.jpg` | Ремонт | https://unsplash.com/photos/Yh5WW3YlaZI |

Формат — JPG, по горизонтали, примерно 1200×900 px и до 300 КБ. Для `hero.jpg` — 1400×1050 px. Если пропорции другие, фото обрежется по краям само.
Когда меняете фото, исправьте и его описание `alt` на странице: в нём должно быть сказано, что на фото, и указан город.

## 4. Отзывы
Отзывы находятся в `index.html`, блок `<figure class="review">`. Вставьте вместо `[ТЕКСТ ОТЗЫВА С АВИТО]` текст ещё одного отзыва, а лишние карточки удалите. Чтобы добавить отзыв, скопируйте любой блок `<figure>…</figure>`.
Если оценка изменится, исправьте `4,7` в тексте, `--r:4.7` в звёздах (звёзды закрашиваются по этому числу) и `19 отзывов` на всех страницах.

## 5. Из чего состоит сайт
```
*.html          страницы (лежат в корне, от этого зависят их адреса)
assets/
  style.css     оформление
  site.js       меню на телефоне, тахометр, появление карточек, карусель отзывов
  bg-circuit.svg  фон «дорожки платы» (цвет линий — параметр stroke в файле)
  fonts/        шрифт Unbounded (лежит на сайте, Google не используется)
photos/         фотографии
```

## 6. Публикация
Нужны все `.html`, а также папки `assets` и `photos`. Папку `.claude` загружать не нужно, она исключена в `.gitignore`.
