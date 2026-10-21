# Как заполнить сайт

## 1. Заглушки
Замените сразу во всех файлах: в VS Code `Ctrl+Shift+H` → «Заменить все».

| Заглушка | Чем заменить | Пример |
|---|---|---|
| `[ИМЯ]` | имя мастера (стоит рядом с телефоном) | Андрей |
| `[АДРЕС]` | улица, дом | ул. Ленина, 1 |
| `[ТЕЛЕФОН]` | телефон, как его показывать | +7 (900) 123-45-67 |
| `7XXXXXXXXXX` | телефон, только цифры | 79001234567 |
| `[ЧАСЫ РАБОТЫ]` | часы работы | Пн–Сб 9:00–19:00 |
| `[ССЫЛКА_НА_ЯНДЕКС_КАРТЫ]` | ссылка на карточку в Яндекс Картах | |

В `index.html`, в блоке `application/ld+json`, часы пишутся так: `Mo-Sa 09:00-19:00`.

## 2. Фото
Сейчас на сайте стоят бесплатные фото с Unsplash в формате WebP. По их лицензии их можно использовать на коммерческом сайте без указания автора.
Чтобы поставить своё фото, сохраните его в формате WebP и положите в `photos/` **с тем же именем** поверх старого. Код менять не нужно.
Перевести JPG в WebP можно бесплатно, например на squoosh.app: качество 60–70, ширина 1000 px (для `hero.webp` — 1200 px).

| Файл | Где стоит | Источник |
|---|---|---|
| `hero.webp` | главная, первый экран | https://unsplash.com/photos/dSosKR6g-W8 |
| `toyota-lexus.webp` | Toyota и Lexus | https://unsplash.com/photos/r3cA8C6a-UA |
| `nissan-infiniti.webp` | Nissan и Infiniti | https://unsplash.com/photos/Yk-0M8S0KdE |
| `vw-audi-skoda.webp` | VW, Audi, Skoda | https://unsplash.com/photos/_E4bZ0lBE3g |
| `mercedes.webp` | Mercedes-Benz | https://unsplash.com/photos/Sv0AxtA8YxI |
| `peugeot-citroen.webp` | Peugeot и Citroën | https://unsplash.com/photos/sQvXW9o35K0 |
| `kitajskie.webp` | Китайские авто | https://unsplash.com/photos/HxY1GC1-cxM |
| `gruzovye.webp` | Грузовые | https://unsplash.com/photos/GBVDilE8yvI |
| `diagnostika.webp` | Диагностика | https://unsplash.com/photos/g5nquYyJMEA |
| `evro2.webp` | Евро-2 | https://unsplash.com/photos/I74mkR_3OP0 |
| `klyuchi.webp` | Ключи | https://unsplash.com/photos/zI_FuGSk-B8 |
| `airbag.webp` | SRS / Airbag | https://unsplash.com/photos/dqxdOxacJL0 |
| `proshivka.webp` | Прошивка блоков | https://unsplash.com/photos/pfR18JNEMv8 |
| `remont.webp` | Ремонт и шиномонтаж | https://unsplash.com/photos/Yh5WW3YlaZI |

Если пропорции фото другие, оно само обрежется по краям.
Когда меняете фото, исправьте и его описание `alt` на странице: в нём должно быть сказано, что на фото, и указан город.

## 3. Отзывы
Отзывы находятся в `index.html`, в блоках `<figure class="review">`. Чтобы добавить отзыв, скопируйте любой блок `<figure>…</figure>` и замените текст.
На компьютере видно три отзыва. Если их больше, сами появятся стрелки для прокрутки.
Если оценка изменится, исправьте `4,7` в тексте, `--r:4.7` в звёздах (звёзды закрашиваются по этому числу) и `19 отзывов` на всех страницах.

## 4. Из чего состоит сайт
```
*.html          страницы (лежат в корне, от этого зависят их адреса)
assets/
  style.css     оформление
  site.js       меню на телефоне, кнопка «наверх», тахометр, появление карточек, карусель отзывов
  bg-circuit.svg  фон «дорожки платы» (цвет линий — параметр stroke в файле)
  fonts/        шрифт Unbounded (лежит на сайте, Google не используется)
photos/         фотографии (WebP)
```

## 5. Публикация
Нужны все `.html`, а также папки `assets` и `photos`. Папку `.claude` загружать не нужно, она исключена в `.gitignore`.
