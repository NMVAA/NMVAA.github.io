webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Tasks\n  </h1>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__task_list_task_list_component__ = __webpack_require__("../../../../../src/app/task-list/task-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__task_detail_task_detail_component__ = __webpack_require__("../../../../../src/app/task-detail/task-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_service_service__ = __webpack_require__("../../../../../src/app/data-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__task_list_task_list_component__["a" /* TaskListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__task_detail_task_detail_component__["a" /* TaskDetailComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot([
                {
                    path: '',
                    redirectTo: 'tasklist',
                    pathMatch: 'full'
                },
                {
                    path: 'tasklist',
                    component: __WEBPACK_IMPORTED_MODULE_6__task_list_task_list_component__["a" /* TaskListComponent */]
                },
                {
                    path: 'task/:id',
                    component: __WEBPACK_IMPORTED_MODULE_7__task_detail_task_detail_component__["a" /* TaskDetailComponent */]
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__data_service_service__["a" /* DataServiceService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/data-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_tasks__ = __webpack_require__("../../../../../src/app/mock-tasks.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataServiceService = (function () {
    function DataServiceService(http) {
        this.http = http;
        this.tasksUrl = "https://www.google.com.ua/";
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    DataServiceService.prototype.getTasks = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_tasks__["a" /* TASKS */]);
    };
    DataServiceService.prototype.getTask = function (id) {
        return this.getTasks()
            .then(function (TASKS) { return TASKS.find(function (task) { return task.id === id; }); });
    };
    DataServiceService.prototype.update = function (task) {
        var url = this.tasksUrl + "/" + task.id;
        return this.http
            .put(url, JSON.stringify(task), { headers: this.headers })
            .toPromise()
            .then(function () { return task; })
            .catch(this.handleError);
    };
    DataServiceService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return DataServiceService;
}());
DataServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataServiceService);

var _a;
//# sourceMappingURL=data-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/mock-tasks.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TASKS; });
var TASKS = [
    {
        "id": 1,
        "name": "Today_task1",
        "creation_date": "2015-04-21T06:50:21",
        "due_date": "2015-04-22T23:59:00",
        "start_date": "2015-04-21T00:00:01",
        "is_completed": false,
        "is_archived": false,
        "estimated_effort": 5.5,
        "actual_effort": 3.3,
        "physical_progress": 60,
        "obj_status": "active",
        "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
        "project_id": 0
    },
    {
        "id": 11,
        "name": "Today_task11",
        "creation_date": "2015-04-21T06:50:21",
        "due_date": "2015-04-22T23:59:00",
        "start_date": "2015-04-21T00:00:01",
        "is_completed": false,
        "is_archived": false,
        "estimated_effort": 5.5,
        "actual_effort": 3.3,
        "physical_progress": 60,
        "obj_status": "active",
        "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
        "project_id": 0,
        "tags": [
            "meeting"
        ]
    },
    {
        "id": 12,
        "name": "Today_task12",
        "creation_date": "2015-04-21T06:50:21",
        "due_date": "2015-04-22T23:59:00",
        "start_date": "2015-04-21T00:00:01",
        "is_completed": false,
        "is_archived": false,
        "estimated_effort": 5.5,
        "actual_effort": 3.3,
        "physical_progress": 60,
        "obj_status": "active",
        "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
        "project_id": 0
    },
    {
        "id": 13,
        "name": "Today_task13",
        "creation_date": "2015-04-21T06:50:21",
        "due_date": "2015-04-22T23:59:00",
        "start_date": "2015-04-21T00:00:01",
        "is_completed": false,
        "is_archived": false,
        "estimated_effort": 5.5,
        "actual_effort": 3.3,
        "physical_progress": 60,
        "obj_status": "active",
        "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
        "project_id": 0
    },
    {
        "id": 14,
        "name": "Today_task14",
        "creation_date": "2015-04-21T06:50:21",
        "due_date": "2015-04-22T23:59:00",
        "start_date": "2015-04-21T00:00:01",
        "is_completed": false,
        "is_archived": false,
        "estimated_effort": 5.5,
        "actual_effort": 3.3,
        "physical_progress": 60,
        "obj_status": "active",
        "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
        "project_id": 0
    },
    {
        "id": 15,
        "name": "Today_task15",
        "creation_date": "2015-04-21T06:50:21",
        "due_date": "2015-04-22T23:59:00",
        "start_date": "2015-04-21T00:00:01",
        "is_completed": false,
        "is_archived": false,
        "estimated_effort": 5.5,
        "actual_effort": 3.3,
        "physical_progress": 60,
        "obj_status": "active",
        "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
        "project_id": 0
    },
    {
        "id": 16,
        "name": "Today_task16",
        "creation_date": "2015-04-21T06:50:21",
        "due_date": "2015-04-22T23:59:00",
        "start_date": "2015-04-21T00:00:01",
        "is_completed": false,
        "is_archived": false,
        "estimated_effort": 5.5,
        "actual_effort": 3.3,
        "physical_progress": 60,
        "obj_status": "active",
        "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
        "project_id": 0
    },
    {
        "id": 17,
        "name": "Today_task17",
        "creation_date": "2015-04-21T06:50:21",
        "due_date": "2015-04-22T23:59:00",
        "start_date": "2015-04-21T00:00:01",
        "is_completed": false,
        "is_archived": false,
        "estimated_effort": 5.5,
        "actual_effort": 3.3,
        "physical_progress": 60,
        "obj_status": "active",
        "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
        "project_id": 0
    },
    {
        "id": 18,
        "name": "Today_task18",
        "creation_date": "2015-04-21T06:50:21",
        "due_date": "2015-04-22T23:59:00",
        "start_date": "2015-04-21T00:00:01",
        "is_completed": false,
        "is_archived": false,
        "estimated_effort": 5.5,
        "actual_effort": 3.3,
        "physical_progress": 60,
        "obj_status": "active",
        "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
        "project_id": 0,
        "tags": [
            "Cerri",
            "task"
        ]
    },
    {
        "id": 19,
        "name": "Today_task19",
        "creation_date": "2015-04-21T06:50:21",
        "due_date": "2015-04-22T23:59:00",
        "start_date": "2015-04-21T00:00:01",
        "is_completed": false,
        "is_archived": false,
        "is_high_priority": true,
        "estimated_effort": 5.5,
        "actual_effort": 3.3,
        "physical_progress": 60,
        "obj_status": "active",
        "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
        "project_id": 0
    },
    {
        "id": 20,
        "name": "Today_task21",
        "creation_date": "2015-04-21T06:50:21",
        "due_date": "2015-04-22T23:59:00",
        "start_date": "2015-04-21T00:00:01",
        "is_completed": false,
        "is_archived": false,
        "estimated_effort": 5.5,
        "actual_effort": 3.3,
        "physical_progress": 60,
        "obj_status": "active",
        "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
        "project_id": 0
    },
    {
        "id": 2,
        "name": "Today_task2",
        "creation_date": "2015-04-22T06:50:22",
        "due_date": "2015-04-22T00:00:00Z",
        "start_date": "2015-04-22T00:00:00Z",
        "is_completed": false,
        "is_archived": false,
        "estimated_effort": 1.0,
        "actual_effort": 0.0,
        "physical_progress": 10,
        "obj_status": "active",
        "project_id": 1
    },
    {
        "id": 3,
        "name": "Upcoming_task",
        "creation_date": "2015-04-22T06:50:23",
        "due_date": "2015-04-29T06:50:29",
        "start_date": "2015-04-28T00:00:00",
        "is_completed": false,
        "is_archived": false,
        "estimated_effort": 5.0,
        "actual_effort": 0.0,
        "physical_progress": 100,
        "obj_status": "active",
        "project_id": 1
    },
    {
        "id": 4,
        "name": "Old_task",
        "creation_date": "2015-04-22T06:50:24",
        "due_date": "2015-04-22T06:50:30",
        "start_date": "2015-04-18T00:00:00",
        "is_completed": false,
        "is_archived": false,
        "estimated_effort": 5.0,
        "actual_effort": 0.0,
        "physical_progress": 50,
        "obj_status": "active",
        "project_id": 3
    },
    {
        "id": 5,
        "name": "Future_task",
        "creation_date": "2015-04-22T06:50:25",
        "due_date": "2025-05-22T06:50:31",
        "start_date": "2025-05-18T00:00:00",
        "is_completed": false,
        "is_archived": false,
        "estimated_effort": 5.0,
        "actual_effort": 0.0,
        "physical_progress": 0,
        "obj_status": "active",
        "project_id": 4
    },
    {
        "id": 6,
        "name": "Archived_task",
        "creation_date": "2015-04-20T06:50:26",
        "due_date": "2015-04-22T06:52:32",
        "start_date": "2015-04-22T00:00:00",
        "is_completed": true,
        "is_archived": true,
        "estimated_effort": 5.0,
        "actual_effort": 5.0,
        "physical_progress": 50,
        "obj_status": "active",
        "project_id": 6
    },
    {
        "id": 7,
        "name": "Trashed_task",
        "creation_date": "2015-04-19T06:50:27",
        "due_date": "2015-04-22T06:52:33",
        "start_date": "2015-04-22T00:00:00",
        "is_completed": false,
        "is_archived": false,
        "estimated_effort": 23.0,
        "actual_effort": 15.0,
        "physical_progress": 50,
        "obj_status": "trashed",
        "project_id": 5
    },
    {
        "id": 8,
        "name": "Deleted_task",
        "creation_date": "2015-04-18T06:50:28",
        "due_date": "2015-04-22T06:52:34",
        "start_date": "2015-04-22T00:00:00",
        "is_completed": false,
        "is_archived": false,
        "estimated_effort": 10.0,
        "actual_effort": 1.0,
        "physical_progress": 50,
        "obj_status": "deleted",
        "project_id": 6
    },
    {
        "id": 21,
        "name": "Completed_task",
        "creation_date": "2015-05-22T00:00:00",
        "due_date": "2015-05-26T00:00:00",
        "start_date": "2015-05-25T00:00:00",
        "is_completed": true,
        "is_archived": true,
        "estimated_effort": 5.0,
        "actual_effort": 4.0,
        "physical_progress": 100,
        "obj_status": "active",
        "project_id": 6
    },
    {
        "id": 22,
        "name": "Future_task2",
        "creation_date": "2015-04-22T06:50:25",
        "due_date": "2025-05-22T06:50:31",
        "start_date": "2025-05-18T00:00:00",
        "is_completed": false,
        "is_archived": false,
        "estimated_effort": 5.0,
        "actual_effort": 0.0,
        "physical_progress": 0,
        "obj_status": "active",
        "project_id": 4
    },
    {
        "id": 23,
        "name": "Future_milestone",
        "creation_date": "2015-04-22T06:50:25",
        "due_date": "2025-07-10T00:00:00",
        "start_date": "2025-07-10T00:00:00",
        "is_completed": false,
        "is_archived": false,
        "estimated_effort": 0.0,
        "actual_effort": 0.0,
        "physical_progress": 0,
        "obj_status": "active",
        "project_id": 4,
        "task_type": "milestone"
    },
    {
        "id": 24,
        "name": "Task_without_dates",
        "creation_date": "2015-06-26T06:50:21",
        "is_completed": false,
        "is_archived": false,
        "obj_status": "active",
        "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
        "project_id": 0
    }
];
//# sourceMappingURL=mock-tasks.js.map

/***/ }),

/***/ "../../../../../src/app/task-detail/task-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div:nth-child(even) {\r\n  background-color: #dddddd;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n}\r\n\r\ninput {\r\n  display: inline-block\r\n}\r\n\r\ndiv {\r\n  padding: 8px;\r\n  font-family: arial, sans-serif;\r\n  text-align: right;\r\n}\r\n\r\n.conteiner {\r\n  position: relative;\r\n  width: 45%;\r\n  margin: 0 auto;\r\n}\r\n\r\nspan {\r\n  position: absolute;\r\n  left: 20px;\r\n}\r\n\r\n.status {\r\n  text-transform: capitalize;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/task-detail/task-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conteiner\">\n  <h2 (click)=\"toggle()\">{{selectedTask.name}}</h2>\n  <label *ngIf=\"show\">\n      <input [(ngModel)]=\"selectedTask.name\" placeholder=\"name\">\n      <button (click)=\"save()\">Save</button>\n      </label>\n  <div class=\"status\">\n    <span>Status: </span>{{selectedTask.obj_status ? selectedTask.obj_status : \"No status\"}}\n  </div>\n  <div>\n    <span>Priority: </span> {{selectedTask.is_high_priority ? \"High\" : \"Not high\"}}\n  </div>\n  <div>\n    <span>Task type: </span> {{selectedTask.task_type ? selectedTask.task_type : \"Not set\"}}\n  </div>\n  <div>\n    <span>Physical progress: </span> {{selectedTask.physical_progress ? selectedTask.physical_progress + \"%\" : \"Not started\"}}\n  </div>\n  <div>\n    <span>Creation date: </span> {{selectedTask.creation_date | date:'dd/MM/yyyy'}}\n  </div>\n  <div>\n    <span>Start date: </span> {{selectedTask.start_date | date:'dd/MM/yyyy'}}\n  </div>\n  <div>\n    <span>Tags: </span> {{selectedTask.tags ? selectedTask.tags : \"No tags\"}}\n  </div>\n  <p><span>Description: </span>{{selectedTask.description ? selectedTask.description : \"No description\"}}</p>\n  <button (click)=\"goBack()\">Back</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/task-detail/task-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task__ = __webpack_require__("../../../../../src/app/task.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service_service__ = __webpack_require__("../../../../../src/app/data-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskDetailComponent = (function () {
    function TaskDetailComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.show = false;
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.dataService.getTask(+params.get('id')); })
            .subscribe(function (task) { return _this.selectedTask = task; });
    };
    TaskDetailComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    TaskDetailComponent.prototype.save = function () {
        var _this = this;
        this.show = !this.show;
        this.dataService.update(this.selectedTask)
            .then(function () { return _this.goBack(); });
    };
    TaskDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return TaskDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__task__["a" /* Task */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__task__["a" /* Task */]) === "function" && _a || Object)
], TaskDetailComponent.prototype, "selectedTask", void 0);
TaskDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-task-detail',
        template: __webpack_require__("../../../../../src/app/task-detail/task-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/task-detail/task-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__data_service_service__["a" /* DataServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__data_service_service__["a" /* DataServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _d || Object])
], TaskDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=task-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/task-list/task-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n\r\n\r\n.singleTag {\r\n  display: inline-block;\r\n  background: lightblue;\r\n  border-radius: 10%;\r\n}\r\n\r\n\r\n.highPriority {\r\n  font-weight: bold;\r\n  color: blue;\r\n}\r\n\r\ntable {\r\n    font-family: arial, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\ntd, th {\r\n    border: 1px solid #dddddd;\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\ntr:nth-child(even) {\r\n    background-color: #dddddd;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/task-list/task-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n  <tr>\n    <th>Task Name</th>\n    <th>Tags</th>\n    <th>Actual effort</th>\n    <th>Estimated effort </th>\n    <th>Due date</th>\n  </tr>\n  <tr *ngFor=\"let task of tasks\" id=\"{{task.id}}\">\n    <td [class.highPriority]=\"task.is_high_priority\" (click)=\"onSelect(task)\">{{task.name}}</td>\n    <td>\n      <div class=\"task-tags\">\n        <span *ngFor=\"let tag of task.tags\">\n          <span class=\"singleTag\">{{tag}}</span>\n        </span>\n      </div>\n    </td>\n    <td class=\"actual_effort\">{{task.actual_effort ? task.actual_effort + \" hours\" : \"Not started\"}} </td>\n    <td class=\"estimated_effort\">{{task.estimated_effort ? task.estimated_effort + \" hours\" : \"Not set\" }} </td>\n    <td>{{task.due_date | date:'dd/MM/yyyy'}}</td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/task-list/task-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service_service__ = __webpack_require__("../../../../../src/app/data-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskListComponent = (function () {
    function TaskListComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.tasks = this.dataService.getTasks();
        this.dataService.getTasks().then(function (tasks) { return _this.tasks = tasks; });
    };
    TaskListComponent.prototype.onSelect = function (task) {
        this.selectedTask = task;
        this.router.navigate(['/task', this.selectedTask.id]);
    };
    return TaskListComponent;
}());
TaskListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-task-list',
        template: __webpack_require__("../../../../../src/app/task-list/task-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/task-list/task-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service_service__["a" /* DataServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service_service__["a" /* DataServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], TaskListComponent);

var _a, _b;
//# sourceMappingURL=task-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/task.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = (function () {
    function Task() {
    }
    return Task;
}());

//# sourceMappingURL=task.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map