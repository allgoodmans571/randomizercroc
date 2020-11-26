# Randomizer Croc

## Как запустить ?

```sh
# Клонируем проект 
git clone https://github.com/allgoodmans571/randomizercroc.git
# Переходим в папку проекта
cd randomizercroc
# ставим все зависимости
npm i 
```

Запускаем проект 
```sh
npm run start 
```
Как скомпилировать проект
```sh
npm run build
```
> после компиляции нужно через `nginx` захостить его 

Для работы приложения нужен [сервер](https://github.com/nik19ta/randomizer_croc_server)


как запустить сервер

```sh
# Клонируем проект 
https://github.com/nik19ta/randomizer_croc_server.git
# Переходим в папку проекта
cd randomizer_croc_server
# ставим все зависимости
npm i 
# Ставим mysql 
sudo apt install mysql-server
sudo mysql_secure_installation
# далее нужно из файла index.sql импортировать данные
# после всех операций можно запустить проект через forever
# устанавливаем его 
sudo npm install forever -g
# и наконец запускаем 
forever start server.js
```
Также нужно в файлах reacta поменять ip на домен/ip сервера на котором запускается приложение

---

## Как пользоватся && функционал ?

функционал - пользователь переходит по ссылки и может узнать какой приз он получил, далее заполняет форму как ему удобно получить приз доставка/самовызов.

> из exel берём ссылки и человек уже может переходить по ней, в случае если нужно сгенерировать ссылку это делается так:

https://`ip сервера или домен`/?code=`шестизначный код из exel`

--- 

## Стек технологий


Front-end - часть которую видет пользователь

- React
- Axios

Back-end - серверная часть

- node
- express
- mysql
