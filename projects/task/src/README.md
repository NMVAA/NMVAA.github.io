# ТЗ
Реализуйте single-page application, состоящее из двух экранов-страниц.

На индексной странице расположите таблицу со списком задач. Cписок получите из файла tasks.json.

В таблице нужно вывести только активные задачи (поле ‘obj_status’ имеет значение ‘active’);
Кроме имени задачи также выведите теги (поле ‘tags’), время потраченное на задачу (‘actual_effort’), общую оценку задачи (‘estimated_effort’), и дату окончания задачи (‘due_date’) в каком-нибудь человеко-понятном формате;
Название важных задач (‘is_high_priority’) должны выделяться (жирным/другим цветом).

При клике на название задачи в таблице пользователь должен переходить на страницу задачи.

На странице задачи выведите дополнительную информацию о задаче (например description);
при клике на название задачи оно должно редактироваться (inlineeditor) и после сохранения задача должна отправляться на сервер. Сервера нет, поэтому можно просто сделать PUT-запрос на любой адрес.

Должны быть использованы сервисы Angular, такие как $http/$resource, $route, promises, контроллеры, директивы.

## Task

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.
Тестовое задание для AngularJS-разработчика

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
