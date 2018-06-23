webpackJsonp([12],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verifica_usuario_verifica_usuario__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.irParaLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__verifica_usuario_verifica_usuario__["a" /* VerificaUsuarioPage */]);
    };
    WelcomePage.prototype.ionViewDidLoad = function () { };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/welcome/welcome.html"*/`<ion-content padding class="welcome" (click)="irParaLogin()">\n  <img src="assets/imgs/logo.png" alt="simpls.me">\n  <p>\n    "A day without laughter <br />is a day wasted."\n  <br /><br />\n    by Charlie Chaplin\n  </p>\n</ion-content>\n\n \n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProdutoPage = (function () {
    function ProdutoPage(navCtrl, navParams, storage, _data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this._data = _data;
        this.precoDe = true;
        this.produto = this.navParams.get('data');
        console.log(this.produto);
        //chama o get produtos
        this.getProduts();
    }
    // método adiciona carrinho
    ProdutoPage.prototype.adicionaCarrinho = function (produto) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__["a" /* CarrinhoPage */], { data: produto });
    };
    // método voltar à tela anterior
    ProdutoPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    // método get produtos
    ProdutoPage.prototype.getProduts = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this._data.get(token, 'products')
                .then(function (resposta) {
                _this.produtos = resposta;
                // define se o preço 'de' do produto existe
                if (_this.produto.precoDe == null) {
                    _this.precoDe = false;
                }
                console.log(_this.produtos);
                //this.setFilteredItems();
            }).catch(function (err) {
                console.error(err);
            });
        });
    };
    ProdutoPage.prototype.ionViewDidLoad = function () { };
    ProdutoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-produto',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/produto/produto.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<!-- Inicio do content -->\n<ion-content class="content" padding>\n\n  <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n    <ion-row class="star">\n      <ion-col col-6>{{produto.ean}} / {{ produto.industria}}</ion-col>\n      <ion-col col-6 text-right>\n        <ion-icon name="star"></ion-icon>\n        <ion-icon name="star"></ion-icon>\n        <ion-icon name="star"></ion-icon>\n        <ion-icon name="star"></ion-icon>\n        <ion-icon name="star"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- Produto -->\n  <ion-list class="listaProdutos">\n    <div class="produto" text-center center>\n      <h3>\n        {{ produto.nome }}\n      </h3>\n      <img src="{{produto.imagem}}" (click)="selecionaProduto(product)">\n      <div class="clear"></div>\n      <div class="preco">\n          <span #precoDE>De R$ {{ produto.precoDe.toString().replace(\'.\',\',\') }}</span>\n          <p>R$ {{ produto.precoPor.toString().replace(\'.\',\',\') }}</p>\n      </div>\n    </div>\n    <img src="assets/imgs/produto/adicionar_ao_carrinho.png" (click)="adicionaCarrinho(produto)">\n    <img src="assets/imgs/produto/adicionar_a_uma_lista.png" (click)="adicionaLista(produto)">\n    <!-- Compartilhamento nas redes sociais -->\n   \n    <div class="clear"></div>\n    <div class="grid">\n        <div class="row">\n          <div col-2><img class="redes-sociais" src="assets/imgs/redes-sociais/link.png"></div>\n          <div col-2><img class="redes-sociais" src="assets/imgs/redes-sociais/whatsApp.png"></div>\n          <div col-2><img class="redes-sociais" src="assets/imgs/redes-sociais/menssager.png"></div>\n          <div col-2><img class="redes-sociais" src="assets/imgs/redes-sociais/instagram.png"></div>\n          <div col-2><img class="redes-sociais" src="assets/imgs/redes-sociais/facebook.png"></div>\n          <div col-2><img class="redes-sociais" src="assets/imgs/redes-sociais/twitter.png"></div>\n      </div>\n    </div>\n  </ion-list>\n  <img class="img-evento" src="assets/imgs/banner_gillette_proshield.png">\n  <!-- Produtos relacionados -->\n  <slide></slide>\n  <!-- Descrição do Produto -->\n  <div class="descricao" text-center>\n    <h3>DESCRIÇÃO DO PRODUTO</h3>\n    <p>{{ produto.descricao }}</p>\n  </div>\n  \n</ion-content>\n\n<footer></footer>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/produto/produto.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */]) === "function" && _d || Object])
    ], ProdutoPage);
    return ProdutoPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=produto.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = (function () {
    function ModalComponent(_navCtrl, _loadingCtrl) {
        this._navCtrl = _navCtrl;
        this._loadingCtrl = _loadingCtrl;
        this.isTrue = true;
    }
    ModalComponent.prototype.modalOff = function () {
        this.isTrue = false;
    };
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'modal',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/components/modal/modal.html"*/`<div id="modal" *ngIf="isTrue">\n  <div id="overlay" (click)="modalOff"></div>\n\n  <div class="wrapper" (click)="modalOff">\n      <div class="box" text-center>\n        <img src="assets/imgs/adicionado_ao_carrinho.png">\n        <br />\n      </div>\n  </div>\n</div>\n\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/components/modal/modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ModalComponent);
    return ModalComponent;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AvaliarPage = (function () {
    function AvaliarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AvaliarPage.prototype.ionViewDidLoad = function () { };
    AvaliarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avaliar',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/avaliar/avaliar.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding center text-center>\n  <h3>ESCREVA SUA OPINIÃO</h3>\n  <form id="opiniao">\n      <div>\n        <ion-textarea placeholder="Digite aqui a sua dúvida" rows="10"></ion-textarea>\n      </div>\n    <ion-grid>\n      <ion-row>\n        <div col-1></div>\n        <div col-3 class="avaliacao">\n            <img class="img_btn" src="assets/imgs/icone_otimo.png"> <input type="radio" /> <span>Ótimo</span>\n        </div>\n        <div col-3 class="avaliacao">\n            <img class="img_btn" src="assets/imgs/icone_bom.png"> <input type="radio" /> <span>Bom</span>\n        </div>\n        <div col-3 class="avaliacao">\n            <img class="img_btn" src="assets/imgs/icone_ruim.png"> <input type="radio" /> <span>Ruim</span>\n        </div>\n      </ion-row>\n    </ion-grid>\n    \n    <img class="img-rodape" src="assets/imgs/enviar.png">\n  </form>\n</ion-content>\n\n<footer></footer>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/avaliar/avaliar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AvaliarPage);
    return AvaliarPage;
}());

//# sourceMappingURL=avaliar.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuvidasRespostasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faca_sua_pergunta_faca_sua_pergunta__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DuvidasRespostasPage = (function () {
    function DuvidasRespostasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DuvidasRespostasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DuvidasRespostasPage');
    };
    DuvidasRespostasPage.prototype.facaSuaPergunta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__faca_sua_pergunta_faca_sua_pergunta__["a" /* FacaSuaPerguntaPage */]);
    };
    DuvidasRespostasPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    DuvidasRespostasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-duvidas-respostas',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/duvidas-respostas/duvidas-respostas.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="perguntas">\n      <ion-segment-button value="perguntas-gerais">\n        Todas as perguntas\n      </ion-segment-button>\n      <ion-segment-button value="minhas-perguntas">\n        Suas perguntas\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <div padding>\n    <!-- Perguntas do usuário -->\n    <div [ngSwitch]="perguntas">\n      <ion-card *ngSwitchCase="\'perguntas-gerais\'">\n        <ion-grid class="pergunta">\n          <ion-row>\n              <ion-col col-2><img src="assets/imgs/icone_pergunta.png"></ion-col>\n              <ion-col col-10><p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</p></ion-col>          \n          </ion-row>\n        </ion-grid>\n        <ion-grid class="resposta">\n          <ion-row>\n              <ion-col col-2><img right text-right src="assets/imgs/icone_resposta.png"></ion-col>\n              <ion-col col-10><p>PERGUNTAS GERAIS - Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</p></ion-col>          \n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    <!-- Perguntas gerais -->\n      <ion-card *ngSwitchCase="\'minhas-perguntas\'">\n        <ion-grid class="pergunta">\n          <ion-row>\n              <ion-col col-2><img src="assets/imgs/icone_pergunta.png"></ion-col>\n              <ion-col col-10><p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</p></ion-col>          \n          </ion-row>\n        </ion-grid>\n        <ion-grid class="resposta">\n          <ion-row>\n              <ion-col col-2><img right text-right src="assets/imgs/icone_resposta.png"></ion-col>\n              <ion-col col-10><p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</p></ion-col>          \n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </div>\n  </div>\n  <img src="assets/imgs/faca_sua_pergunta.png" (click)="facaSuaPergunta()">\n  \n</ion-content>\n\n<footer></footer>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/duvidas-respostas/duvidas-respostas.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], DuvidasRespostasPage);
    return DuvidasRespostasPage;
    var _a, _b;
}());

//# sourceMappingURL=duvidas-respostas.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacaSuaPerguntaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FacaSuaPerguntaPage = (function () {
    function FacaSuaPerguntaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FacaSuaPerguntaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FacaSuaPerguntaPage');
    };
    FacaSuaPerguntaPage.prototype.cadastrarMensagem = function () {
    };
    FacaSuaPerguntaPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    FacaSuaPerguntaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faca-sua-pergunta',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/faca-sua-pergunta/faca-sua-pergunta.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Escreva sua pergunta</h3>\n\n  <form (ngSubmit)="cadastrarMensagem()">\n    <ion-item>\n      <ion-input [(ngModel)]="titulo" name="titulo" type="text" placeholder="Título"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-textarea [(ngModel)]="mensagem" name="mensagem" type="text" placeholder="Mensagem" rows="10"></ion-textarea>\n    </ion-item>\n    <img src="assets/imgs/enviar.png">\n  </form>\n</ion-content>\n\n<footer></footer>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/faca-sua-pergunta/faca-sua-pergunta.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], FacaSuaPerguntaPage);
    return FacaSuaPerguntaPage;
    var _a, _b;
}());

//# sourceMappingURL=faca-sua-pergunta.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuvidasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DuvidasPage = (function () {
    function DuvidasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DuvidasPage.prototype.ionViewDidLoad = function () {
    };
    DuvidasPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    DuvidasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-duvidas',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/duvidas/duvidas.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Como alterar meu cadastro?</ion-label>\n    <ion-select>\n      <ion-option value="f">Female</ion-option>\n      <ion-option value="m">Male</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Como alterar meu email de acesso?</ion-label>\n    <ion-select>\n      <ion-option value="f">Female</ion-option>\n      <ion-option value="m">Male</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Como alterar minha senha de acesso?</ion-label>\n    <ion-select>\n      <ion-option value="f">Female</ion-option>\n      <ion-option value="m">Male</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Quais as formas de pagamento aceitas?</ion-label>\n    <ion-select>\n      <ion-option value="f">Female</ion-option>\n      <ion-option value="m">Male</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Posso agendar minha entrega?</ion-label>\n    <ion-select>\n      <ion-option value="f">Female</ion-option>\n      <ion-option value="m">Male</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Como faço para receber ofertas?</ion-label>\n    <ion-select>\n      <ion-option value="f">Female</ion-option>\n      <ion-option value="m">Male</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Política de troca e devolução</ion-label>\n    <ion-select>\n      <ion-option value="f">Female</ion-option>\n      <ion-option value="m">Male</ion-option>\n    </ion-select>\n  </ion-item>\n  <h3 text-center center>Ainda com dúvidas?</h3>\n  <form>\n    <ion-item id="duvida">\n      <ion-textarea placeholder="Digite aqui a sua dúvida" rows="3"></ion-textarea>\n    </ion-item>\n    <img class="img-rodape" src="assets/imgs/faca_sua_pergunta.png">\n  </form>\n\n</ion-content>\n\n<footer></footer>`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/duvidas/duvidas.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], DuvidasPage);
    return DuvidasPage;
    var _a, _b;
}());

//# sourceMappingURL=duvidas.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TermosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermosPage = (function () {
    function TermosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermosPage');
    };
    TermosPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    TermosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-termos',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/termos/termos.html"*/`<ion-header center>\n    <ion-navbar hideBackButton>\n      <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n        <ion-row>\n          <!-- voltar -->\n          <ion-col col-4>\n            <div (click)="goBack()">\n              <img class="voltar" src="assets/imgs/voltar.png">\n            </div>\n          </ion-col>\n          <!-- logo -->\n          <ion-col col-4 text-center>\n              <img src="assets/imgs/logo_topo.png">\n          </ion-col>\n          <!-- cart -->\n          <ion-col col-4 text-right (click)="goCart()">\n              <ion-icon class="icon-cart" name="cart"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n<h2>Termos e Condicoes: ASPECTOS GERAIS</h2>\n<p>\n<strong>1. INFORMAÇÃO</strong><br><br>\nSIMPLS LTDA CNPJ: 30.573.138/0001-40, com residência na cidade de São Paulo, para os efeitos\ndestes termos será definida como A OPERADORA.<br><br>\n<strong>2. NATUREZA JURÍDICA</strong><br><br>\nEstes termos e condições de uso regulam a relação contratual, de caráter comercial, que une os\nConsumidores que têm acesso à plataforma virtual e a OPERADORA da mesma, especialmente na\nautorização de uso que outorga esta última a favor do Consumidor.<br><br>\n<strong>3. DEFINIÇÕES</strong><br><br>\nCookies: Arquivos enviados pelo servidor do site para o computador do USUÁRIO, com a\nfinalidade de identificar o computador e obter dados de acesso, como páginas navegadas ou links\nclicados, permitindo, desta forma, personalizar a utilização do site, de acordo com o seu perfil.\nTambém podem ser utilizados para garantir uma maior segurança dos USUÁRIOS da\nPLATAFORMA.<br><br>\nComércio Eletrônico: Abrange o envio, a transmissão, a recepção, o armazenamento de\nmensagens de dados pela via eletrônica.<br><br>\nConsumidores (usuários): são as pessoas físicas cadastradas na Plataforma de Internet\ndenominadaSIMPLSque acedem a esta para solicitar um mandato remunerado, cujo encarrego\nconsiste na celebração de um contrato de compra ou qualquer outro tipo de contrato lícito, com o\nfim de adquirir bens ou serviços.<br><br>\nContrato de mandato celebrado por meios eletrônicos: É aquele acordo de vontades celebrado\nentre o Mandatário e os Consumidores, onde o Consumidor solicita, através da Plataforma, a\ngestão de um encarrego ao Mandatário, obrigando-se este último a cumprir com dito encarrego\npor conta e risco do Consumidor, a mudança de receber uma remuneração como contraprestação.\nDados pessoais: É toda informação que permite identificar ou fazer identificável uma pessoa\nfísica.<br><br>\nMandatário:Pessoa física que aceita realizar a gestão do encarrego solicitado pelo Consumidor\natravés da Plataforma.<br><br>\n\nInteração na Plataforma: Faculdade de acesso dos Consumidores para conhecer os produtos e\nserviços exibidos pelos parceiros da OPERADORA, a publicidade colocada à disposição na\nPlataforma e manifestar sua vontade de solicitar um encarrego.<br><br>\nMaior de idade: Pessoa física maior de dezoito (18) anos.<br><br>\nMensagens de dados: A informação gerada, enviada, recebida, armazenada ou comunicada por\nmeios eletrônicos, ópticos ou similares, como poderiam ser, entre outros, o Intercâmbio Eletrônico\nde Dados (EDI), Internet, o correio eletrônico, o telegrama, o telex e o telefax.<br><br>\nOperadora da plataforma: Encarregada de administrar operativamente e funcionalmente a\nPlataforma, representada para os efeitos destes termos pela SIMPLS BRASIL, ou pela pessoa física\nou jurídica que ela designar.<br><br>\nMeios de pagamentos: Serviço que permite a realização de pagamentos pelos Consumidores\ndiretamente aos Mandatários de Serviços, através de meios eletrônicos, utilizando plataformas\ntecnológicas (software), exemplificando como as máquinas de cartão.<br><br>\nPLATAFORMA SIMPLS: aplicativo web e móvel administrado e com os direitos exclusivos de\nutilização no Brasil pela SIMPLS, através do qual: i) são exibidos diferentes produtos de consumo\nde forma publicitária, ii) facilita a aproximação entre os Consumidores e os Mandatários, iii) serve\ncomo meio de envio de comunicações entre o Consumidor e a SIMPLS e iv) pode receber os\npagamentos das compras diretamente do consumidor (por conta e ordem de terceiros), com\nrepasse do dinheiro ao Mandatário. A SIMPLS não realiza a compra de produtos por conta própria,\nnão armazena produtos e tampouco é vendedora de produtos. É uma plataforma de tecnologia\nsomente para intermediação, que permite a interação entre Consumidores e Mandatários.<br><br>\nTambém denominada neste Instrumento como“PLATAFORMA”,podendo ser acessada\nporcomputadores, notebooks,smartphones outablet’s.<br><br>\nPublicidade: É toda forma de comunicação realizada pela OPERADORA, com a finalidade de\nprestar informações sobre produtos, atividades comerciais e comunicar estratégias ou campanhas\npublicitárias ou de marketing, próprias ou de terceiros; realizada como mecanismo de referência e\nnão como oferta pública.<br><br>\nProduto: Bem de consumo exibido através da Plataforma.<br>\nServiço: Serviços oferecidos através da plataforma<br><br>\n\nJanelas emergentes (Pop-Ups): Janela ou aviso da internet que emerge automaticamente em\nqualquer momento quando a Plataforma é utilizada, especialmente utilizado para a formalização\ndo contrato de compra e venda entre Consumidores e Fornecedores.<br><br>\n<strong>4. OBJETO</strong><br><br>\nEstes termos e condições regulam a autorização de uso que outorga a Operadora aos\nConsumidores, para que eles ingressem à plataforma virtual e se informem sobre os produtos de\nconsumo e serviços exibidos, para que sejam utilizados como referência e possam solicitar a\ngestão de um encarrego, por médio de um contrato de mandato com o Mandatário.<br><br>\nA Operadora através da Plataforma realiza as seguintes ações:i) exibe diferentes produtos e\nserviços de consumo de forma publicitária para que possam servir de referência aos\nConsumidores,ii) facilita o encontro entre Consumidores e Mandatários para a realização do\nvínculo contratual,iii) permite o uso da plataforma de pagamentos, sem que este processo\nsignifique algum vínculo com a Operadora, posto que, pela tecnologia implementada, o pagamento\né realizado diretamente aos Mandatáriosiv) serve como meio de envio de comunicações entre os\nConsumidores e os Mandatários.<br><br>\nA realização da relação contratual entre Consumidores e Mandatários acontece com os\nConsumidores que se encontrarem no território nacional ou que estando no exterior solicitarem a\ngestão de um encarrego, que deve ser realizado no Brasil, pagando uma contraprestação\neconômica mediante o sistema de pagamento eletrônico pela plataforma eletrônica ou em\ndinheiro no momento da recepção dos produtos escolhidos pelo Consumidor.\nAtravés da Plataforma são exibidos produtos, cuja gestão de compra é encarregada pelos\nConsumidores aos Mandatários, sendo que os primeiros procuram satisfazer uma necessidade\nprivada, pessoal ou familiar e em nenhum momento para sua comercialização, revenda ou\nqualquer outro tipo de transação comercial.<br><br>\n<strong>5. ALTERAÇÃO</strong><br><br>\nA Operadora poderá modificar autonomamente e em qualquer momento os aspetos formais,\nprocedimentais ou substanciais destes Termos e Condições de uso da Plataforma, que serão\natualizados e colocados à disposição dos Consumidores na Plataforma, sendo a última versão\npublicada aquela que regulará as relações comerciais que sejam geradas no momento em que a\ntransação for realizada. Assim também, conta com plena autonomia para modificar os usos da\nPlataforma permitidos aos Consumidores, com o único dever de informá-lo por um meio virtual\nque permita sua publicação e comunicação ao público.<br><br>\n<br><br>\n<strong>DETALHES DO SERVIÇO</strong><br><br>\n<strong>6. CONSUMIDOR</strong><br><br>\nToda pessoa física que como destinatário final usar a plataforma para solicitar um mandato\nremunerado, cujo encarrego consiste na celebração de um contrato de compra ou qualquer outro\ntipo de contrato lícito, com o fim de adquirir bens ou serviços.<br><br>\nO uso da Plataforma é realizado pelo Consumidor como pessoa capaz, manifestando que para a\ncelebração de contratos de mandato com os Mandatários, ele conta com plena capacidade legal\npara ser sujeito de direitos e obrigações, qualidades que são aprovadas no momento de gerar seu\nregistro.<br><br>\n<strong>7. Mandatários</strong><br><br>\nPessoa física que aceita realizar a gestão do encarrego solicitado pelo Consumidor através da\nPlataforma.<br><br>\n<strong>8. CONTA DE USUÁRIO</strong><br><br>\nO uso das contas é pessoal e intransferível, por isto os Consumidores não estão autorizados a\nceder os dados de validação para acessar a Plataforma. No caso de esquecer os dados de validação\nou usurpação deles, é obrigação ao Consumidor informar sobre isto à Operadora através da opção\n“esqueceu sua senha” ou através de uma comunicação enviada ao correio\neletrônicomeajuda@simpls.com.me . As contas de usuários serão administradas pela Operadora\nou pela pessoa que ela designar, tendo plena faculdade para a conservação ou não da conta,\nquando as informações fornecidas pelos Consumidores não sejam verazes, completas ou seguras;\nou quando acontecer descumprimento das obrigações dos Consumidores.<br><br>\nOs dados dos cartões de débito e crédito somente serão solicitados no momento de realizar o\npagamento virtual e, se assim for definido pelo Consumidor, esses dados não serão armazenados\npela Operadora, serão inscritos diretamente na máquina de débito/crédito e serão utilizados\ndiretamente pelo Consumidor nesta, onde serão informadas as condições de segurança e\nprivacidade em que é efetuado o mesmo.\n<br><br>\nCom a criação da Conta de Usuário, os Consumidores estão manifestando sua vontade de\naceitação expressa e inequívoca destes Termos e Condições de uso da Plataforma.<br><br>\nParágrafo. O Consumidor autoriza expressamente, no momento da aceitação destes Termos, o\nuso de Cookies pela Operadora em toda atividade de uso que for realizada na Plataforma.\n<br><br>\n<strong>9. CAPACIDADE</strong><br><br>\nFica claro para o Consumidor que a relação contratual que pode chegar a ser gerada pelo uso da\nPlataforma será diretamente com os Mandatários e será efetuada por meio de um contrato de\nmandato realizado por meios eletrônicos, no qual o Consumidor é o mandante.\n<br><br>\n<strong>10. DESCRIÇÃO DO SERVIÇO</strong><br><br>\nA Operadora exibe através da Plataforma os produtos e serviços que estão à disposição dos\nConsumidores para serem adquiridos, usando a Plataforma como meio para solicitar um mandato\nremunerado, cujo encarrego consiste na celebração de um contrato de compra .\n<br><br>\nParágrafo. O aperfeiçoamento do contrato de mandato realizado por meios eletrônicos acontece\nno momento em que o Mandatário aceita realizar a gestão do encarrego solicitado pelo\nConsumidor através da Plataforma; esta aceitação corresponde ao momento em que o\nConsumidor seleciona o meio de pagamento. Verificados os passos do processo de compra, o\nMandatário, por meio da Operadora, pode aceitar total ou parcialmente o encarrego solicitado\npelo Consumidor, informando no resumo quais são os produtos incluídos no contrato.\n<br><br>\n<strong>11. DEVERES DO CONSUMIDOR</strong><br><br>\nCom a aceitação destes termos o Consumidor está obrigado a: (1) fornecer informações verazes e\nfidedignas no momento de criar sua Conta de Usuário; (2) não transferir a terceiros os dados de\nvalidação (nome de usuário e senha); (3) não utilizar a Plataforma para realizar atos contrários à\nmoral,a lei, a ordem pública e os bons costumes contra o Operador, Mandatários ou de terceiros;\n(4) pagar oportunamente ao Mandatário a quantia equivalente da contraprestação econômica\ndefinida no processo de compra; (5) informar imediatamente à Operadora em caso de\nesquecimento ou usurpação dos dados de validação; (6) não realizar condutas que atentarem\ncontra do funcionamento da Plataforma; (7) não suplantar a identidade de outros Consumidores;\n(8) não decifrar, desestruturar ou desmontar qualquer elemento da Plataforma ou de qualquer\numa das suas partes; (9) habilitar a utilização de janelas emergentes durante a operação para o\nfuncionamento adequado na Plataforma; (10) em geral adotar todas aquelas condutas necessárias\npara a execução do negócio jurídico, tais como: i) a recepção dos produtos solicitados, ii) exibir a\nidentificação em caso de compra de produtos de uso restringido ou de outros produtos, iii)\nverificar no momento da validação que os produtos selecionados correspondem aos requeridos,\niv) informar-se sobre as instruções de uso e consumo dos produtos. (11) em caso de o Consumidor\ndesejar receber a nota fiscal do serviço prestado, o Consumidor deverá solicitar a nota fiscal ao\nMandatário imediatamente após receber a confirmação de que o seu pedido foi aceito.\n<br><br>\n<strong>12. DEVERES DA OPERADORA</strong><br><br>\nEm razão destes termos, a Operadora obriga-se a: (1) fornecer informações certas, fidedignas,\nsuficientes, claras e atualizadas com respeito aos produtos exibidos, podendo realizar a\nsubstituição deles no caso de falta; (2) indicar as características gerais do produto para que sirvam\nde referência aos Consumidores, para o efeito são marca e apresentação; (3) informar\nsuficientemente sobre os meios habilitados para que os Consumidores realizem o pagamento; (4)\ninformar no momento indicado os dados dos Mandatários com os quais os Consumidores\nrealizarão o contrato de mandato; (5) enviar ao correio eletrônico fornecido pelo Consumidor\nconstância da transação; (6) colocar à disposição dos Consumidores os termos e condições de uso\nna Plataforma de forma atualizada; (7) utilizar as informações unicamente para os fins\nestabelecidos nestes termos; (8) utilizar mecanismos de informações e validação durante a\ntransação como as janelas emergentes (Pop Ups) que permitam ao Consumidor aceitar ou não\ncada passo do processo de compra. (9) A Simpls reserva-se o direito de aumentar, até 10% (dez por\ncento), os preços dos produtos exibidos nas lojas físicas de seus parceiros. O usuário reconhece e\naceita a condição acima e também não fará nenhum tipo de reivindicação contra a Simpls pelos\npreços que são refletidos nas notas fiscais de venda. Os valores adicionais serão cobrados pela\nSimpls pelo uso da plataforma virtual e, se você precisar de uma nota fiscal para esse conceito,\ndeverá solicitá-la por email: <a href="">meajuda@simpls.com.br</a>\n<br><br>\n<strong>13. DESCRIÇÃO DOS PRODUTOS E SERVIÇOS</strong>\n<br><br>\nFica claro para o Consumidor que a Operadora não é produtora, fornecedora, entregadora,\nagente, distribuidora e, em geral, nenhum tipo de comercializador dos produtos exibidos, posto\nque opera somente como uma plataforma tecnológica que permite o encontro entre\nConsumidores e Fornecedores para a configuração de relações de consumo.<br><br>\nOs produtos de uso restringido como tabaco e bebidas embriagantes somente serão entregados\npelo Mandatário aos Consumidores que forem maiores de idade, que manifestarem\nexpressamente esta qualidade no momento de se registrarem ou de selecionarem o produto. Não\nserão realizadas mandatos de compra de tabaco e bebidas embriagantes para menores de 18\n(dezoito) anos, mesmo que o menor tenha tido autorização dos seus representantes legais para o\nuso da Plataforma, mesmo que com a aquisição de outros produtos autorizados.<br><br>\nQuando por erros de ordem tecnológico os preços dos produtos exibidos na Plataforma resultam\nerrôneos e evidentemente desproporcionados com o preço do produto no mercado, a Operadora\npoderá cancelar a(s) ordens feitas de produtos com ditos preços, a seu livre discrição e com total\nautonomia.<br><br>\nA Operadora reserva o direito de atualizar, modificar e/ou descontinuar os produtos exibidos na\nPlataforma a qualquer momento, sem necessitar de qualquer aviso prévio.<br><br>\n<strong>14. GARANTIA</strong><br><br>\nO Consumidor entende e aceita que a relação de consumo é gerada diretamente com os\nMandatários, por isto, as reclamações pela garantia devem ser realizadas diretamente aos\nMandatários, que têm a obrigação de cumprir com as reclamações nos termos definidos aqui.<br><br>\nCONSIDERAÇÕES FINAIS<br><br>\n<strong>15. CONTEÚDOS</strong><br><br>\nAtravés da Plataforma, a Operadora poderá colocar à disposição dos Consumidores as\ninformações de caráter comercial e publicitário, próprias ou de terceiros, em conformidade com os\nbons costumes comerciais. Nestes casos, a Operadora não apoia, garante ou compromete sua\nresponsabilidade perante os serviços e/ou produtos que sejam comercializados por terceiros,\nposto que a Plataforma serve como canal de comunicação e publicidade, mas não como\nferramenta de prestação de serviços; em consequência, é total responsabilidade dos\nConsumidores acessar os sites que remetem à publicidade, assumindo a obrigação de verificar e\nconhecer os termos dos serviços oferecidos pelos terceiros.\n<br><br>\n<strong>16. FUNCIONAMENTO DA PLATAFORM</strong>A<br><br>\nA Operadora administra a Plataforma diretamente ou por meio de terceiras pessoas, todas as\ninformações ali comunicadas estão certas e atualizadas. Em nenhum caso responderá por danos\ndiretos ou indiretos sofridos pelo Consumidor pela utilização ou incapacidade de utilização da\nPlataforma.<br><br>\nA plataforma encontra-se disponível durante as 24 horas do dia para acesso e consulta. Para a\nrealização de transações, a disponibilidade da Plataforma é de 24 horas ao dia, dependendo da\ndisponibilidade dos Mandatários. A Operadora realiza os melhores esforços para manter a\nPlataforma em operação, mas em nenhum caso garante a disponibilidade e continuidade\npermanente da Plataforma.<br><br>\nA Operadora reserva para si o direito de cancelar as contas de usuários e/ou de proibir o acesso à\nPlataforma dos Consumidores que realizarem condutas que violem estes termos ou que\ndescumprirem as obrigações contraídas.<br><br>\n<strong>17. CANCELAMENTO E SUSPENSÃO DE CONTA</strong><br><br>\nAOPERADORA se reserva no direito de cancelar, suspender, desativar, bloquear ou, encerrar\nunilateralmente o acesso doConsumidoraos Serviços, com rescisão unilateral do presente\ncontrato, com ou sem aviso prévio, caso: (i) seja identificada qualquer violação as normas jurídicas\n(ii) suas ações violem às disposições destes Termos &amp; Condições; (iii) se oUsuário causar algum\ndano direto ou indireto àOPERADORA, seusUsuários ou a terceiros; (iv) seja identificada, de\nforma direta ou indireta, a prática de atitudes fraudulentas através do uso da PlataformaSimpls;\n(v) seja averiguada a inadimplência doUsuário, que se dá quando este último deixar de efetuar o\npagamento de qualquer parcela devida em favor daOPERADORA ou Mandatários nos termos\nfirmados entre as partes; (vi) em outros casos onde aOPERADORA entenda necessário, por\nviolação de normas jurídicas, incompatibilidade com a política da Plataforma, entre outras, a\ncritério da OPERADORA.<br><br>\n<strong>18. DO USO DAS INFORMAÇÕES</strong><br><br>\nAs informações levantadas pela Operadora nas transações realizadas são fornecidas pelos\nConsumidores de forma livre e voluntária, para que sejam administradas pela Operadora ou por\nquem ela designar para o cumprimento dos deveres adquiridos, significando seu levantamento;\narmazenamento em servidores ou repositórios da Operadora ou de terceiros; circulação dos\nmesmos dentro da organização da Operadora; comunicação aos Consumidores da informação\ncomercial, publicitária e de marketing relacionada com sua atividade comercial.\n<br><br>\nAssim também, os dados levantados serão objeto de análise para fins de melhoramento da\nestratégia de negócios da página web, apoiada por ferramentas de inteligência de negócios e\nmineração de dados, que permitem adquirir conhecimentos prospectivos para fins de predição,\nclassificação e segmentação.<br><br>\nO Consumidor poderá exercer seu direito de conhecer, atualizar, modificar e suprimir os dados\npessoais existentes nas bases de dados associadas à Plataforma. Para isto deverá realizar a\nsolicitação de consulta, reclamação ou supressão ao endereço eletrônicomeajuda@simpls.com.me\n, com os detalhes das alterações a serem realizadas e entregando os documentos que a sustentam.\nA Operadora é responsável do tratamento das informações pessoais levantadas através da página\nweb, responsabilidade que poderá ser delegada a um terceiro, na qualidade de responsável ou\nencarregado das informações, garantindo por meio de contrato um adequado tratamentos das\nmesmas, tudo explicitado na Política de Privacidade.\n<br><br>\n<strong>19. DA LEGISLAÇÃO APLICÁVEL E FORO</strong><br><br>\nPara dirimir quaisquer controvérsias oriundas do presente Instrumento, as partes elegem o Foro\nCentral da comarca da cidade de São Paulo – SP (renunciando a qualquer outro por mais\nprivilegiado que seja), sendo aplicáveis as Leis da República Federativa do Brasil.\n<br><br>\n<strong>20. LIMITAÇÃO DE RESPONSABILIDADES</strong><br><br>\nTodos os materiais e serviços disponibilizados na PLATAFORMA são fornecidos “como estão” e\n“como disponível” sem garantia de qualquer tipo, expressa ou implícita, incluindo, mas não\nlimitado a, garantias implícitas de adequação a um propósito específico ou as dadas diretamente\npelos FORNECEDORES. A Operadora não pode garantir que:<br><br>\n(a) os serviços satisfaçam completamente às necessidades do Consumidor;<br>\n(b) os serviços sejam ininterruptos, oportunos, seguros ou isentos de erros. A Operadora realiza os\nmelhores esforços para manter a PLATAFORMA em operação, mas em nenhum caso garante a\ndisponibilidade e continuidade permanente da PLATAFORMA;\n<br>\n(c) os resultados esperados pelo Consumidores que possam ser obtidos, atenderá às suas\nexpectativas ou estará livre de erros, ou defeitos.<br><br>\nO uso dos serviços ou do download por meio da PLATAFORMA é feito ao próprio critério e risco\ndo Consumidor e com o seu acordo de que será o único responsável por quaisquer danos ao seu\nsistema de computador ou perda de dados resultantes de tais atividades. O Consumidor também\nentende e concorda que a Operadora não tem controle sobre redes de terceiros que possam ser\nacessadas durante o uso da PLATAFORMA, portanto, atrasos e interrupções de outras\ntransmissões de rede estão completamente fora do controle da Operadora. Também não se pode\nimputar a Operadora por quaisquer caso de atos fortuitos ou de força maior, que venham a causar\ndanos a quaisquer das Partes. Em nenhum caso, a Operadora será responsável perante o\nUSUÁRIO ou terceiros por quaisquer danos, incluindo, sem limitação, aqueles resultantes de\nperda de dados, serviços de terceiros oferecidos por meio da PLATAFORMA ou no caso de\nquaisquer atos dos Mandatários.Em nenhum momento a Operadora solicitará ao USUÁRIO\ninformações que NÃO forem necessárias para seu vínculo com o Mandatário ou para a facilitação\ndo pagamento.<br><br>\n\n<strong>21. INFORMAÇÕES SOBRE A PROPRIEDADE INDUSTRIAL E DIREITOS AUTORAIS</strong><br><br>\nAo aceitar estes Termos de Uso, o Consumidor reconhece e concorda que todo o conteúdo\napresentado na PLATAFORMA está protegido por direitos autorais, marcas, patentes ou outros\ndireitos e leis de propriedade industrial e é propriedade exclusiva da Operadora. O Consumidor só\npode usar o conteúdo conforme expressamente autorizado pela Operadora, ou seja, para o seu\nuso pessoal sem que isso signifique a entrega de qualquer licença da PLATAFORMA. O\nConsumidor não pode copiar, reproduzir, modificar, republicar, carregar, publicar, transmitir ou\ndistribuir quaisquer documentos ou informações da PLATAFORMA de qualquer forma ou por\nqualquer meio, sem a permissão prévia por escrito da Operadora. O uso não autorizado dos\nmateriais que aparecem na PLATAFORMA pode violar direitos autorais, marcas registradas e\noutras leis aplicáveis ​​e pode resultar em penalidades criminais ou civis. O Consumidor não\ndeverá enviar à Operadora informações confidenciais, a menos que as Partes tenham concordado\nmutuamente por escrito. Eventuais ideias ou propostasnão solicitadas enviadas pelo Consumidor\nà Operadora não reserva nenhum direito ao Consumidor.\n<br><br>\n<strong>ACEITAÇÃO TOTAL DOS TERMOS</strong><br><br>\nO Consumidor manifesta expressamente ter a capacidade legal para usar a Plataforma e para\ncelebrar as transações comerciais que possam ser geradas com os Mandatários.<br><br>\nAssim, manifesta ter fornecido informação real, veraz e fidedigna. Portanto, deforma expressa e\ninequívoca declara ter lido, que entende e que aceita a totalidade das situações reguladas nestes\nTermos e Condições de Uso da Plataforma, dando o seu CONSENTIMENTO, pelo que se\ncompromete ao cumprimento total dos deveres, obrigações, ações e omissões aqui expressadas.<br><br>\nEm caso de USUÁRIOS de outros países utilizarem a Plataforma, ficam completamente sujeitos ao\ndisposto nestes termos. Declara ainda que teve a possibilidade de sanar quaisquer dúvidas em\nrelação a este TERMO E CONDIÇÕES pelo canal de Suporte ao Usuário. Com esta aceitação\nentende-se que na solicitação do cada encarrego se encontra a assinatura do Consumidor para\noutorgar o poder ao Mandatário e desta maneira poder gerir dito encarrego.\n– Criação: 28 de maio de 2018.<br><br>\n</p>\n<div class="margin-bottom-130"></div>\n</ion-content>\n<footer></footer>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/termos/termos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TermosPage);
    return TermosPage;
}());

//# sourceMappingURL=termos.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoliticaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PoliticaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PoliticaPage = (function () {
    function PoliticaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PoliticaPage.prototype.ionViewDidLoad = function () { };
    PoliticaPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    PoliticaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-politica',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/politica/politica.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h2>AVISO DE PRIVACIDADE E POLÍTICAS DE USO DAS INFORMAÇÃO UTILIZADAS PELA\n  SIMPLS</h2>\n  <br>\n  Este documento, denominado Política de Privacidade, possui finalidade de estabelecer as regras\n  sobre o uso, armazenamento e tratamento dos dados e informações coletadas dos USUÁRIOS na\n  PLATAFORMA SIMPLS\n  <br><br>\n  <strong>Responsável pelas Informações dos USUÁRIOS:</strong> SIMPLS LTDA., registrada sob o CNPJ\n  30.573.138/0001-40.\n  <br><br>\n  <strong>● DEFINIÇÕES IMPORTANTES:</strong>\n  <ul>\n  <li> <strong>BANCO DE DADOS:</strong> Conjunto estruturado de dados pessoais ou anônimizados,\n  localizado em um ou em vários locais, em suporte eletrônico ou físico;</li>\n  <li> <strong>CONSENTIMENTO:</strong> É a manifestação livre, informada e inequívoca pela qual o USUÁRIO\n  concorda com a utilização dos seus dados pessoais ou anônimizados.</li>\n  <li> <strong>CONTEÚDO:</strong> Qualquer informação, dados, comunicações, software, fotos, vídeos,\n  gráficos, música, sons e outros materiais e serviços que podem ser visualizados pelos\n  USUÁRIOS na PLATAFORMA. Isso inclui mensagens, conversas, bate-papo e outros\n  conteúdos originais.</li>\n  <li> <strong>COOKIES:</strong> Arquivos enviados pelo servidor da PLATAFORMA para o computador do\n  USUÁRIO, com a finalidade de identificar o computador e obter dados de acesso, como\n  páginas navegadas ou links clicados, permitindo, desta forma, personalizar a utilização da\n  PLATAFORMA, de acordo com o seu perfil. Também podem ser utilizados para garantir\n  uma maior segurança dos USUÁRIOS da PLATAFORMA.</li>\n  <li> <strong>DADOS PESSOAIS:</strong> todos os dados relacionados à pessoa natural (identificada ou\n  identificável), não-públicos, relativos à identidade e à vida privada de seu TITULAR.</li>\n  \n  <li> <strong>DADOS PESSOAIS ANÔNIMIZADOS ou ANÔNIMIZADOS:</strong> dados relativos a um\n  TITULAR que não possa ser identificado.</li>\n  <li> <strong>IP (Internet Protocol):</strong> É um conjunto de números que identifica o computador do\n  USUÁRIO na Internet.</li>\n  <li> <strong>JANELAS (Pop-Ups):</strong> Janela ou aviso da internet que emerge automaticamente em\n  qualquer momento quando a PLATAFORMA é utilizada, inclusive na formalização dos\n  Termos e Condições do Uso da Plataforma e na Política de Privacidade.</li>\n  <li> <strong>LOGS:</strong> registros de atividades do USUÁRIO efetuadas na PLATAFORMA.</li>\n  <li> <strong>SIMPLS:</strong> é a empresa proprietária e possuidora de todos os direitos autorais referente a\n  Plataforma de Internet denominada SIMPLS.</li>\n  \n  <li> <strong>MENSAGENS DE DADOS:</strong> A informação gerada, enviada, recebida, armazenada ou\n  comunicada por meios eletrônicos, óticos ou similares. Exemplificando: os formulários de\n  cadastramento, o Intercâmbio Eletrônico de Dados (EDI – Electronic Data Interchange),\n  Internet, o correio eletrônico, chats entre outros meios de comunicação.</li>\n  \n  <li> <strong>PLATAFORMA SIMPLS:</strong> aplicativo web e móvel administrado e com os direitos\n  exclusivos de utilização no Brasil pela SIMPLS, através do qual: i) são exibidos diferentes\n  produtos de consumo de forma publicitária (dos Prestadores de Serviço) para que possam\n  servir de referência ao Consumidor, ii) facilita a aproximação entre os Consumidores e os\n  Prestadores de Serviço, iii) serve como meio de envio de comunicações entre o\n  Consumidor e a SIMPLS e iv) pode receber os pagamentos das compras diretamente do\n  consumidor (por conta e ordem de terceiros), com repasse do dinheiro ao Prestador de\n  Serviço. A SIMPLS não realiza a compra de produtos por conta própria, não armazena\n  produtos e tampouco é vendedora de produtos. É uma plataforma de tecnologia somente\n  para intermediação da Venda, cobrando pelos serviços realizados..Também denominada\n  neste Instrumento como“PLATAFORMA”,podendo ser acessada porcomputadores,\n  notebooks,smartphones outablets.</li>\n  <li> <strong>SERVIÇO ou SERVIÇOS</strong>: Serviços oferecidos por meio da PLATAFORMA.</li>\n  <li> <strong>SESSION ID</strong>: identificação da sessão do USUÁRIO no processo de inscrição ou quando\n  utilizado de alguma forma na PLATAFORMA.</li>\n  <li> <strong>TERMOS E CONDIÇÕES DE USO DA PLATAFORMA ou TERMOS DE USO</strong>: Constituem\n  os termos legais que regulamentam a relação entre a SIMPLS e os USUÁRIOS.</li>\n  <li> <strong>TITULAR:</strong> é a pessoa natural usuária da Plataforma SIMPLS, identificada neste\n  Instrumento como USUÁRIO.</li>\n  <li> <strong>USUÁRIO DA PLATAFORMA SIMPLS:</strong> são as pessoas físicas cadastradas na Plataforma\n  de Internet denominadaSIMPLS também\n  denominados <strong>“USUÁRIO” </strong>ou <strong>“USUÁRIOS”</strong>. A <strong>SIMPLS</strong> e o <strong>USUÁRIO</strong> poderão ser\n  mencionados individualmente neste Instrumento como “Parte” ou em conjunto como\n  “Partes”.</li>\n</ul>\n  <strong>● Obtenção dos dados e informações:</strong>\n  <br><Br>\n  Os dados e informações (sejam eles PESSOAIS ou ANÔNIMIZADOS) serão obtidos quando o\n  USUÁRIO: (a) Passar a utilizar os SERVIÇOS da PLATAFORMA; (b) Interagir com as diversas\n  ferramentas existentes na PLATAFORMA, fornecendo as informações voluntariamente ou\n  involuntariamente (no caso de obtenção de informações sobre a frequência de utilização da\n  PLATAFORMA ou os tipos de informações envolvidas; ou (c) Entrar em contato por meio dos\n  canais de comunicação disponíveis na PLATAFORMA.\n  <br><Br>\n  <strong>● Armazenamento dos Dados e Informações:</strong>\n  <br><Br>\n  Todas as MENSAGENS DE DADOS e informações coletadas dos USUÁRIOS serão incorporados\n  ao BANCO DE DADOS da PLATAFORMA, sendo seu responsável e proprietário a SIMPLS. Os\n  dados e informações coletados estarão armazenados em ambiente seguro, observado o estado da\n  técnica disponível e criptografados, e somente poderão ser acessados por pessoas qualificadas e\n  autorizadas pela SIMPLS. Considerando que nenhum sistema de segurança é absolutamente\n  seguro, a SIMPLS se exime de quaisquer responsabilidades por eventuais danos e/ou prejuízos\n  decorrentes de falhas, vírus ou invasões do BANCO DE DADOS na PLATAFORMA.\n  <br><Br>\n  <strong>● Uso dos Dados e Informações:</strong>\n  <br><Br>\n  O USUÁRIO aceita de maneira expressa, consciente e voluntária que as suas informações\n  consignadas nas bases de dados da SIMPLS (pessoais ou anônimizados), sejam recompiladas,\n  armazenadas para sua utilização nos seguintes termos: (i) Juntar ou coletar os dados pessoais e\n  incorporá-los e armazená-los em nossa base de dados, (ii) Organizar, catalogar, classificar, dividir\n  ou separar a informação entregue, (iii) Utilizar os dados fornecidos em campanhas de\n  comunicação, divulgação e promoção ou oferta de produtos, atividades ou serviços desenvolvidos\n  como parte de estratégias internas da SIMPLS, (iv) Utilizá-los para fins administrativos internos ou\n  comerciais tais como: estudos de crédito, elaboração e apresentação de orçamentos, referencias\n  comerciais de experiência, estudos de mercado, análises estatísticas, realização de pesquisas\n  sobre satisfação, oferecimento ou reconhecimento de benefícios próprios do programa de\n  fidelidade da SIMPLS, bem como em serviços pós venda, (v) Conservar registros históricos dentro\n  da SIMPLS e manter contato com os USUÁRIOS, (vi) Verificar, comprovar ou validar os dados\n  entregues, (vii) Estudar e analisar a informação fornecida para o acompanhamento e\n  melhoramento dos produtos e do serviço, (viii) Entregar a informação recolhida a terceiros com os\n  que a SIMPLS mantenha contrato o armazenamento e administração dos dados pessoais, sob os\n  padrões de segurança e confidencialidade aos quais SIMPLS está obrigada de acordo com o\n  conteúdo das leis pertinentes, (ix) Transferir os dados pessoais a qualquer país ou servidor em\n  outro país, (x)Comunicar e permitir o acesso aos dados pessoais fornecidos a terceiros\n  fornecedores de serviços de apoio geral e às pessoas físicas ou jurídicas pertencentes ao quadro\n  societário da SIMPLS, (xi) Juntar, possuir, manusear e utilizar a informação recebida pelo\n  USUÁRIO para realizar a vinculação como contratante ou fornecedor, (xiii) Juntar, possuir,\n  manusear e utilizar a informação para realizar controle e prevenção de fraude, controle e\n  prevenção de lavagem de ativos e financiamento do terrorismo, (xiv) Celebração, execução e\n  gestão das propostas de negócios e contratos objeto dos serviços prestados, (xv) realizar, em\n  conformidade com a lei, os relatórios a centrais de risco por não cumprimento das obrigações\n  financeiras derivadas da relação comercial, (xvi) Fornecer informações dos USUÁRIOS em\n  cumprimento a ordem legal ou judicial e (xvii) compartilhar com terceiros dos dados dos\n  USUÁRIOS para o fim de recebimento de promoções ou outras informações. No caso de e-mails\n  encaminhandos pela SIMPLS o cliente sempre terá a opção de não mais recebê-los. Os e-mails\n  enviados pela SIMPLS não contêm anexos para serem baixados e tampouco solicitam dados dos\n  USUÁRIOS. Assim, os dados dos cartões de crédito somente serão solicitados no momento de\n  realizar o pagamento virtual, e não serão armazenados pela SIMPLS.\n  <br><Br>\n  <strong>● Do Registro de Atividades:\n    <br><br>\n  A SIMPLS poderá registrar as atividades efetuadas pelo USUÁRIO na PLATAFORMA, por meio\n  de LOGS, incluindo: (a) Endereço IP do USUÁRIO; (b) Ações efetuadas pelo USUÁRIO na\n  PLATAFORMA; (c) Páginas acessadas pelo USUÁRIO; (d) Datas e horários de cada ação e de\n  acesso a cada funcionalidade da PLATAFORMA; (e) SESSION ID do USUÁRIO, quando aplicável.\n  Os registros mencionados poderão ser utilizados pela SIMPLS em casos de investigação de\n  fraudes ou de alterações indevidas em seus sistemas e cadastros, assim como no\n  compartilhamento com terceiros de forma ANÔNIMIZADA.</strong>\n  <br><Br>\n  <strong>● Cookies:</strong>\n  <br><Br>\n  A PLATAFORMA poderá fazer o uso de COOKIES, cabendo ao USUÁRIO configurar o seu\n  navegador de Internet, caso deseje bloqueá-los. Nesta hipótese, algumas funcionalidades da\n  PLATAFORMA poderão ser limitadas. O USUÁRIO autoriza expressamente, no momento da\n  aceitação desta Política de Privacidade, o uso de COOKIES pela SIMPLS em toda atividade de uso\n  que for realizada na PLATAFORMA.\n  <ul>\n  <li> <strong>Direitos do USUÁRIO:</strong> (i)Conhecer, atualizar e retificar seus dados pessoais coletados pela\n  SIMPLS. Este direito pode ser exercido entre outros frente a dados parciais, inexatos,\n  incompletos, fracionados ou que induzam ao erro, (ii) Solicitar prova da autorização outorgada\n  a SIMPLS (v) Revogar a qualquer momento a autorização e/ou supressão do dado tendo em\n  conta os limites legais para tanto, (vi) Ter acesso de forma gratuita aos dados cadastrais do\n  USUÁRIO contidos na base de dados da SIMPLS.</li>\n  <li> Dos dados do USUÁRIO – Conhecimento: A SIMPLS apresenta á escolhado USUÁRIO as\n  seguintes formas de exercer seus direitos de acesso aos dados cadastrais.</li>\n  <li> Atendimento eletrônico: O USUÁRIO deverá realizar seu requerimento formal ao endereço\n  eletrônico <a href="mailto:meajuda@simpls.me">meajuda@simpls.me</a> prévio esgotamento dos requisitos de legitimação para o\n  exercício do USUÁRIO, a saber:\n  <ol>\n  <li>Ser USUÁRIO da informação, provar inequivocadamente sua identidade em forma suficiente\n  mediante qualquer meio que SIMPLS destine para tanto.</li>\n  <li>Pelos legítimos sucessores legais, devidamente representados, os quais deverão provar tal\n  qualidade de forma inequívoca.</li>\n  <li>Pelo representante/empoderado do USUÁRIO da informação, quem também deverá provar tal\n  qualidade de forma inequívoca e por documento público.</li>\n  <li>Os direitos dos menores de idade se exercerão pelas pessoas encarregadas de sua representação,\n  e igualmente se deverá provar tal qualidade de forma inequívoca.</li>\n</ol>\n  <li> <strong>Atendimento escrito:</strong> O USUÁRIO do dado deverá realizar seu requerimento formal ao\n  endereço: Rua Dona Maria Pera, 169 prévio esgotamento dos requisitos de legitimação para o\n  exercício do USUÁRIO, segundo o descrito de forma literala do presente parágrafo, mediante\n  escrito onde se especifique o endereço onde receberá notificações e respostas.</li>\n  <li> Disposições Gerais:\n  <br>\n  As disposições constantes desta Política de Privacidade poderão ser atualizadas ou modificadas a\n  qualquer momento, cabendo ao USUÁRIO verificá-las sempre que efetuar o acesso à\n  PLATAFORMA.\n  </li></ul>\n  <strong>● ACEITAÇÃO TOTAL DOS TERMOS</strong><br><br>\n  O USUÁRIO declara ter a capacidade legal, dando o seu CONSENTIMENTO expresso dos termos\n  constantes desta Política de Privacidade, sendo que aceita a totalidade das situações reguladas\n  neste documento.\n  <br><br>\n  <strong>● Lei Aplicável e Jurisdição:</strong><br><br>\n  A presente Política de Privacidade será interpretada segundo a legislação brasileira, no idioma\n  português, sendo eleito o Foro da Comarca de São Paulo para dirimir qualquer litígio, questão ou\n  dúvida superveniente, com expressa renúncia de qualquer outro, por mais privilegiado que seja.\n  <br><br>\n  Atualizações:<br><br>\n  – Criação: 28 de maio de 2018.\n  <br><br>\n  <div class="margin-bottom-130"></div>\n</ion-content>\n<footer></footer>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/politica/politica.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], PoliticaPage);
    return PoliticaPage;
    var _a, _b;
}());

//# sourceMappingURL=politica.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalPedidosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TotalPedidosPage = (function () {
    function TotalPedidosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TotalPedidosPage.prototype.ionViewDidLoad = function () { };
    TotalPedidosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-total-pedidos',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/total-pedidos/total-pedidos.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/total-pedidos/total-pedidos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], TotalPedidosPage);
    return TotalPedidosPage;
    var _a, _b;
}());

//# sourceMappingURL=total-pedidos.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = (function () {
    function DataProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.apiUrl = 'http://simpls-me.umbler.net/api/';
        this.produtos = [
            {
                nome: 'Gilete Sensor Fusion',
                descricao: 'This CSS3 calculator was built for lazy people like myself. There are many great HEX to RGB color converters ',
                img: 'gilleteFusion.jpg'
            },
            {
                nome: 'Sucrilhos',
                descricao: 'O melhor cereal!!!',
                img: 'sucrilhos.jpg'
            },
            {
                nome: 'Pampers Premium Care',
                descricao: 'Segurança para o seu bebê',
                img: 'pampers.jpg'
            }
        ];
        this.posts = [
            {
                titulo: 'Primeiro post',
                body: 'meu primeiro post'
            },
            {
                titulo: 'Segundo post',
                body: 'meu segundo post'
            },
            {
                titulo: 'Gillete corta mesmo',
                body: 'até descasquei laranja com ele'
            },
            {
                titulo: 'Saboete zoado',
                body: 'péssimo sabonete, é fedido'
            }
        ];
        this.brands = [
            {
                nome: 'Apple'
            },
            {
                nome: 'Android',
            }
        ];
    }
    DataProvider.prototype.get = function (token, rota) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            'x-access-token': token
        });
        return new Promise(function (resolve) {
            _this.http
                .get(_this.apiUrl + rota, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                console.error('Deu ruim', err);
            });
        });
    };
    DataProvider.prototype.post = function (data, rota) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        return new Promise(function (resolve) {
            _this.http
                .post(_this.apiUrl + 'login', data, { headers: headers })
                .subscribe(function (result) {
                resolve(result);
                var token = result.headers.get('x-access-token');
                if (token != null) {
                    _this.storage.set('token', token);
                }
            }, function (err) {
                console.error('Deu ruim', err);
            });
        });
    };
    DataProvider.prototype.updateCarrinho = function (data, rota, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            'Content-type': 'application/json',
            'x-access-token': token
        });
        return new Promise(function (resolve) {
            _this.http
                .put(rota, data, { headers: headers })
                .subscribe(function (result) {
                resolve(result);
                var token = result.headers.get('x-access-token');
                if (token != null) {
                    _this.storage.set('token', token);
                }
                console.log(token);
            }, function (err) {
                console.error('Deu ruim', err);
            });
        });
    };
    DataProvider.prototype.update = function (data, rota, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            'Content-type': 'application/json',
            'x-access-token': token
        });
        return new Promise(function (resolve) {
            _this.http
                .put(_this.apiUrl + 'users', data, { headers: headers })
                .subscribe(function (result) {
                resolve(result);
                var token = result.headers.get('x-access-token');
                if (token != null) {
                    _this.storage.set('token', token);
                }
                console.log(token);
            }, function (err) {
                console.error('Deu ruim', err);
            });
        });
    };
    DataProvider.prototype.filterItems = function (searchTerm) {
        return this.products.filter(function (product) {
            return product.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    DataProvider.prototype.filterPosts = function (searchTerm) {
        return this.posts.filter(function (post) {
            return post.titulo.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    DataProvider.prototype.filterBrands = function (searchTerm) {
        return this.brands.filter(function (marca) {
            return marca.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 131;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/avaliar/avaliar.module": [
		319,
		11
	],
	"../pages/duvidas-respostas/duvidas-respostas.module": [
		320,
		10
	],
	"../pages/duvidas/duvidas.module": [
		321,
		9
	],
	"../pages/enderecos-cadastrados/enderecos-cadastrados.module": [
		322,
		8
	],
	"../pages/faca-sua-pergunta/faca-sua-pergunta.module": [
		323,
		7
	],
	"../pages/formas-pagamento/formas-pagamento.module": [
		324,
		6
	],
	"../pages/info/info.module": [
		325,
		5
	],
	"../pages/mensagens/mensagens.module": [
		326,
		4
	],
	"../pages/notificacoes/notificacoes.module": [
		327,
		3
	],
	"../pages/politica/politica.module": [
		328,
		2
	],
	"../pages/termos/termos.module": [
		329,
		1
	],
	"../pages/total-pedidos/total-pedidos.module": [
		330,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 173;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__produto_produto__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__brand_brand__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_modal_modal__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__carrinho_carrinho__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



//providers

//pages


//components


var HomePage = (function () {
    function HomePage(navCtrl, _data, storage, _storageCarrinho, modalCtrl, _alertCtrl) {
        this.navCtrl = navCtrl;
        this._data = _data;
        this.storage = storage;
        this._storageCarrinho = _storageCarrinho;
        this.modalCtrl = modalCtrl;
        this._alertCtrl = _alertCtrl;
        //declara as variáveis públicas
        this.apiUrl = 'http://simpls-me.umbler.net/';
        this.searchTerm = '';
        this.modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_modal_modal__["a" /* ModalComponent */]);
        this.getProduts_page01();
        this.getProduts_page02();
        this.getProduts_page03();
        this.getCategories();
    }
    //consulta a api e returna um json com os produtos cadastrados
    //também faz o filtro dos produtos baseado no nome
    HomePage.prototype.setFilteredItems = function () {
        this.produtos = this._data.filterItems(this.searchTerm);
    };
    /*filterItems(ev: any) {
      this.getProduts();
      let val = ev.target.value;
  
      if (val && val.trim() !== '') {
        this.products = this.products.filter(function(product) {
          return product.toLowerCase().includes(val.toLowerCase());
        });
      }
    }*/
    HomePage.prototype.filterItems = function (searchTerm) {
        return this.products.filter(function (product) {
            return product.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    //consulta a api e retorna um json com as marcas cadastradas
    HomePage.prototype.getCategories = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this._data.get(token, 'categories')
                .then(function (resposta) {
                _this.categories = resposta;
            }).catch(function (err) {
                console.error(err);
            });
        });
    };
    //método get produtos
    HomePage.prototype.getProduts_page01 = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this._data.get(token, 'products/6/0')
                .then(function (resposta) {
                _this.products_01 = resposta;
            }).catch(function (err) {
                console.error(err);
            });
        });
    };
    HomePage.prototype.getProduts_page02 = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this._data.get(token, 'products/6/1')
                .then(function (resposta) {
                _this.products_02 = resposta;
            }).catch(function (err) {
                console.error(err);
            });
        });
    };
    HomePage.prototype.getProduts_page03 = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this._data.get(token, 'products/6/2')
                .then(function (resposta) {
                _this.products_03 = resposta;
            }).catch(function (err) {
                console.error(err);
            });
        });
    };
    HomePage.prototype.getProduts = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this._data.get(token, 'products/6/1')
                .then(function (resposta) {
                _this.products = resposta;
            }).catch(function (err) {
                console.error(err);
            });
        });
    };
    //método adiciona produto no carrinho
    HomePage.prototype.adicionaProduto = function (produto) {
        var _this = this;
        //recebe os dados da tela
        var data = {
            produto: {
                categorias: produto.categorias,
                id: produto._id,
                descricao: produto.descricao,
                ean: produto.ean,
                imagem: produto.imagem,
                industria: produto.industria,
                marca: produto.marca,
                nome: produto.nome,
                precoDe: produto.precoDe,
                precoPor: produto.precoPor,
                quantidade: 1
            }
        };
        //seta os dados no storage e chama a função updateCarrinho
        this.storage.get('token').then(function (token) {
            _this._data.get(token, 'users/carrinho')
                .then(function (resposta) {
                _this.produtos = resposta;
                _this.produtos = _this.produtos.carrinho;
                _this.items = _this.produtos.push(data);
                _this._storageCarrinho.set('produto', _this.produtos);
                var result = _this._storageCarrinho.get('produto');
                console.log(result);
                _this.updateCarrinho(result);
            }).catch(function (err) {
                console.error(err);
            });
        });
    };
    //atualiza o carrinho de compras
    HomePage.prototype.updateCarrinho = function (data) {
        var _this = this;
        this.modal.present();
        this.storage.get('token').then(function (token) {
            _this._storageCarrinho.get('produto').then(function () {
                _this._data.updateCarrinho(data, _this._data.apiUrl + "users/profile", token)
                    .then(function (resposta) {
                    console.log(resposta);
                }).catch(function (err) {
                    _this._alertCtrl.create({
                        title: 'Não foi possível inserir o produto no carrinho',
                        subTitle: "Por ",
                        buttons: [{ text: 'Ok' }]
                    }).present();
                });
            });
        });
        this.modal.dismiss();
    };
    // seleciona o produto e abre a pagina do produto selecionado
    HomePage.prototype.selecionaProduto = function (produto) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__produto_produto__["a" /* ProdutoPage */], { data: produto });
    };
    HomePage.prototype.selecionaBrand = function (brand) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__brand_brand__["a" /* BrandPage */], { data: brand });
    };
    HomePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    HomePage.prototype.goCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/home/home.html"*/`<ion-header center>\n    \n  <ion-navbar hideBackButton>\n\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <ion-col col-4>\n          <div>\n              <button ion-button menuToggle><ion-icon name="menu"></ion-icon></button>\n          </div>\n        </ion-col>\n        <ion-col col-4 text-center>\n            <img style="max-width: 100%;" src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-navbar>\n      \n</ion-header>\n\n<ion-content padding>\n\n  <!-- Vitrine -->\n  <h2>MINHA VITRINE</h2>\n  <div class="slide">\n    <div class="row">\n      <div class="row__inner">\n        <div class="tile" *ngFor="let product of products_01">\n          <div class="item">\n            <div class="tile__media">\n                <img src="{{product.imagem}}" (click)="selecionaProduto(product)">\n              </div>\n              <h3>{{ product.nome }}</h3>\n              <img src="assets/imgs/adicionar.png" (click)="adicionaProduto(product)">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n\n  <img class="img-poderosos" src="assets/imgs/banner_poderosos_da_casa.png">\n\n  <!-- Lançamentos -->\n  <h3>LANÇAMENTOS</h3>\n  <div class="slide">\n    <div class="row">\n      <div class="row__inner">\n        <div class="tile" *ngFor="let product of products_02">\n          <div class="item">\n            <div class="tile__media">\n                <img src="{{product.imagem}}" (click)="selecionaProduto(product)">\n              </div>\n              <h3>{{ product.nome }}</h3>\n              <img src="assets/imgs/adicionar.png" (click)="adicionaProduto(product)">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Promoções -->\n  <h3>PROMOÇÕES</h3>\n  <div class="slide">\n    <div class="row">\n      <div class="row__inner">\n        <div class="tile" *ngFor="let product of products_03">\n          <div class="item">\n            <div class="tile__media">\n                <img src="{{product.imagem}}" (click)="selecionaProduto(product)">\n              </div>\n              <h3>{{ product.nome }}</h3>\n              <img src="assets/imgs/adicionar.png" (click)="adicionaProduto(product)">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <img class="img-evento" src="assets/imgs/banner_gillette_proshield.png">\n\n  <!-- Categorias -->\n  <h3>CATEGORIA DE PRODUTOS</h3>\n  <section class="grid grid-template-columns">\n    <div class="item-card-category" *ngFor="let cat of categories" (click)="selecionaCategorie(cat)">\n        <img src="{{cat.imagem}}" alt="{{cat.nome}}">\n    </div>\n  </section>\n\n  <img class="img-oralB" src="assets/imgs/banner_oral_b.png">\n\n  <div class="margin-bottom-30"></div>\n\n  <ion-list>\n    <ion-item *ngFor="let cat of categories">\n      <p><ion-icon ios="ios-arrow-forward" md="md-arrow-forward"></ion-icon>\n        {{cat.nome}}\n        <ion-icon ios="ios-arrow-forward" md="md-arrow-forward"></ion-icon>\n      </p>\n    </ion-item>\n  </ion-list>\n\n  <div class="margin-bottom-70"></div>\n\n</ion-content>\n\n<footer></footer>\n\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/home/home.html"*/
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('StorageCarrinho')),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _f || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificaUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cadastro_cadastro__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Pages



var VerificaUsuarioPage = (function () {
    function VerificaUsuarioPage(navCtrl, navParams, loadingCtrl, alertCtrl, _storage) {
        //this.token = this._storage.get('token');
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this._storage = _storage;
        this.token = '';
        var loading = this.loadingCtrl.create({
            content: 'Carregando dados... por favor, espere um momennto'
        });
        loading.present();
        this._storage.get('token').then(function (token) {
            if (token != null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }
            else {
                _this.alertCtrl.create({
                    title: 'Desculpe, não encontramos seus dados no banco de dados',
                    subTitle: 'Por favor, selecione a tela de Login (se você já é usuário) ou Cadastro (se é seu primeiro acesso)',
                    buttons: [{ text: 'Ok' }]
                }).present();
            }
        });
        setTimeout(function () {
            loading.dismiss();
        }, 1000);
    }
    VerificaUsuarioPage.prototype.irParaLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    VerificaUsuarioPage.prototype.irParaCadastro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    VerificaUsuarioPage.prototype.ionViewDidLoad = function () { };
    VerificaUsuarioPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    VerificaUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verifica-usuario',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/verifica-usuario/verifica-usuario.html"*/`<ion-content padding class="verificaUsuario" text-center>\n    <h1>Seja muito bem vindo!</h1>\n    <img src="assets/imgs/logo.png" alt="simpls.me">\n    <img id="imgCadastro" (click)="irParaCadastro()" src="assets/imgs/cadastre-se.png" alt="cadastre-se no simpls.me">\n    <p (click)="irParaLogin()">Já possui uma conta? Clique aqui.</p>\n  </ion-content>\n  \n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/verifica-usuario/verifica-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */]) === "function" && _e || Object])
    ], VerificaUsuarioPage);
    return VerificaUsuarioPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=verifica-usuario.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrandPage = (function () {
    function BrandPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BrandPage.prototype.ionViewDidLoad = function () { };
    BrandPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    BrandPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-brand',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/brand/brand.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n\n<footer></footer>`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/brand/brand.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], BrandPage);
    return BrandPage;
    var _a, _b;
}());

//# sourceMappingURL=brand.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cadastro2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cadastro_cadastro__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//angular dependencies


//ionic dependecies

//pages



var Cadastro2Page = (function () {
    function Cadastro2Page(navCtrl, navParams, _http, _alertCtrl, _data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this._alertCtrl = _alertCtrl;
        this._data = _data;
        this.residencialTrue = false;
        this.trabalhosTrue = false;
        // variável que recebe a api
        this.apiUrl = this._data.apiUrl;
        //variável que recebe os dados do usuário da tela anterior
        this.user = this.navParams.get('data');
    }
    Cadastro2Page.prototype.callService = function (cep) {
        return this._http.get("https://viacep.com.br/ws/" + cep + "/json/");
    };
    Cadastro2Page.prototype.getEndereco = function () {
        var _this = this;
        this.callService(this.cep)
            .subscribe(function (data) {
            data = data.json();
            console.table(data);
            _this.rua = data.logradouro;
            _this.bairro = data.bairro;
            _this.cidade = data.localidade;
            _this.uf = data.uf;
        });
    };
    Cadastro2Page.prototype.concluiCadastro = function (data) {
        var _this = this;
        var model = {
            nomeCompleto: this.user.nome,
            email: this.user.email,
            password: this.user.password,
            cep: this.cep,
            rua: this.rua,
            complemento: this.complemento,
            numero: this.numero,
            bairro: this.bairro,
            cidade: this.cidade,
            estado: this.uf,
            tipoEndereco: this.tipoEndereco
        };
        data = model;
        console.table(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        return new Promise(function (resolve) {
            _this._http
                .post(_this.apiUrl + 'users', data, { headers: headers })
                .subscribe(function (result) {
                resolve(result);
                console.log(result);
                _this._alertCtrl.create({
                    title: 'Seu cadastro foi realizado com sucesso!',
                    subTitle: 'Você será direcionado para a tela de Login',
                    buttons: [{ text: 'Ok', handler: function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */], { data: data });
                            } }]
                }).present();
            }, function (err) {
                _this._alertCtrl.create({
                    title: 'Não foi possível realizar seu cadastro!',
                    subTitle: 'Por favor, reveja seus dados ou tente novamente mais tarde',
                    buttons: [{ text: 'Ok', handler: function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cadastro_cadastro__["a" /* CadastroPage */]);
                            } }]
                }).present();
            });
        });
    };
    Cadastro2Page.prototype.imgResidencialEhTrue = function () {
        this.residencialTrue = true;
        this.trabalhosTrue = false;
        this.tipoEndereco = 'Residencial';
    };
    Cadastro2Page.prototype.imgTrabalhoEhTrue = function () {
        this.residencialTrue = false;
        this.trabalhosTrue = true;
        this.tipoEndereco = 'Profissionl';
    };
    Cadastro2Page.prototype.ionViewDidLoad = function () { };
    Cadastro2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro2',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/cadastro2/cadastro2.html"*/`<ion-header class="headerCadastro2" text-center>\n  <h3>COMPLETE SEU ENDEREÇO</h3>\n</ion-header>\n \n<ion-content padding class="cadastro_tela2" text-center>\n   \n  <div class="busca">\n      <ion-label>\n          <img src="../assets/imgs/icone_cinza_cep.png">\n        </ion-label>\n    <ion-searchbar type="tel" [(ngModel)]="cep" (ionInput)="getEndereco()" placeholder="Digite seu cep"></ion-searchbar>\n  </div>\n  \n  <form class="formCadastro" (ngSubmit)="concluiCadastro()" #formCadastro="ngForm">\n    <ion-item class="iconesForm">\n      <ion-label>\n        <img src="../assets/imgs/icone_cinza_endereco.png">\n      </ion-label>\n      <ion-input placeholder="Endereço" [(ngModel)]="rua" name="rua"  type="text" required></ion-input>\n    </ion-item>\n    <ion-item class="iconesForm">\n      <ion-input placeholder="Complemento" [(ngModel)]="complemento" name="complemento" type="text" required></ion-input>\n    </ion-item>\n    <ion-item class="iconesForm">\n      <ion-input placeholder="Número" [(ngModel)]="numero" name="numero" type="number" required></ion-input>\n    </ion-item>\n    <ion-item class="iconesForm">\n      <ion-input placeholder="Bairro" [(ngModel)]="bairro" name="bairro" type="text" required></ion-input>\n    </ion-item>\n    <ion-item class="iconesForm">\n      <ion-input placeholder="Cidade" [(ngModel)]="cidade" name="cidade" type="text" required></ion-input>\n    </ion-item>\n    <ion-item class="iconesForm">\n      <ion-input placeholder="uf" [(ngModel)]="uf" name="uf" type="text" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6 (click)="imgResidencialEhTrue()">\n            <img src="../assets/imgs/cadastro/residencial_cinza.png" *ngIf="!residencialTrue">\n            <img src="../assets/imgs/cadastro/residencial_azul.png" *ngIf="residencialTrue">\n          </ion-col>\n          <ion-col col-6 (click)="imgTrabalhoEhTrue()">\n            <img class="img-trabalho" src="../assets/imgs/cadastro/trabalho_cinza.png" *ngIf="!trabalhosTrue">\n            <img class="img-trabalho" src="../assets/imgs/cadastro/trabalho_azul.png" *ngIf="trabalhosTrue">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <button class="btCriarConta">\n        <img id="criarConta" src="../assets/imgs/criar_conta.png">\n    </button>\n  </form>\n</ion-content>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/cadastro2/cadastro2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */]])
    ], Cadastro2Page);
    return Cadastro2Page;
}());

//# sourceMappingURL=cadastro2.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/about/about.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n\n<footer></footer>`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object])
    ], AboutPage);
    return AboutPage;
    var _a;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/contact/contact.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<footer></footer>`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object])
    ], ContactPage);
    return ContactPage;
    var _a;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarcaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarcaPage = (function () {
    function MarcaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.brands = this.navParams.get('data');
        console.log(this.brands);
    }
    MarcaPage.prototype.ionViewDidLoad = function () { };
    MarcaPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    MarcaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-marca',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/marca/marca.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n\n<footer></footer>`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/marca/marca.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], MarcaPage);
    return MarcaPage;
    var _a, _b;
}());

//# sourceMappingURL=marca.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarPerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditarPerfilPage = (function () {
    //public api  = 'http://simpls-me.umbler.net/';
    function EditarPerfilPage(navCtrl, navParams, _data, storage, _alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._data = _data;
        this.storage = storage;
        this._alertCtrl = _alertCtrl;
        this.http = http;
        this.data = this.navParams.get('data');
        console.log('Data que veio da tela de perfil', this.data);
        this.getUser('users/profile');
        this.nome = this.data.nomeCompleto;
        this.email = this.data.email;
        this.data_nasc = this.data.dataNasc;
        this.sexo = this.data.sexo;
        this.celular = this.data.celular;
        this.escolaridade = this.data.escolaridade;
        this.profissao = this.data.profissao;
        this.renda = this.data.renda;
        console.log('celular:', this.celular);
    }
    EditarPerfilPage.prototype.getUser = function (rota) {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this._data.get(token, rota)
                .then(function (resposta) {
                _this.usuario = resposta;
                console.log(_this.usuario);
            }).catch(function (err) {
                console.error(err);
            });
        });
    };
    EditarPerfilPage.prototype.editaUser = function () {
        var _this = this;
        var dados = {
            nomeCompleto: this.nome,
            email: this.email,
            data_nasc: this.data_nasc,
            sexo: this.sexo,
            celular: this.celular,
            escolaridade: this.escolaridade,
            profissao: this.profissao,
            renda: this.renda
        };
        console.log('Novos dados:', dados);
        console.log('Qual é a música?', dados.nomeCompleto);
        this.storage.get('token').then(function (token) {
            _this._data.update(dados, _this._data.apiUrl + "users", token)
                .then(function (resposta) {
                _this.usuario = resposta;
                console.log(_this.usuario);
                //this.navCtrl.setRoot(PerfilPage);
            }).catch(function (err) {
                console.error(err);
                _this._alertCtrl.create({
                    title: 'Não foi possível realizar a atualização',
                    subTitle: "Deu ruim demais, saca: " + err,
                    buttons: [{ text: 'Ok' }]
                }).present();
            });
        });
    };
    EditarPerfilPage.prototype.ionViewDidLoad = function () {
    };
    EditarPerfilPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    EditarPerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar-perfil',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/editar-perfil/editar-perfil.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form (submit)="editaUser()">\n    <ion-list>\n      <ion-item>\n        <ion-label>\n          <img src="assets/imgs/icone_azul_digite_seu_nome.png" />\n        </ion-label>\n        <ion-input [(ngModel)]="nome" name="nome" [value]="nome"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <img src="assets/imgs/icone_azul_digite_seu_email.png" />\n        </ion-label>\n        <ion-input [(ngModel)]="email" name="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <img src="assets/imgs/icone_cinza_data_de_nascimento.png" />\n        </ion-label>\n        <ion-input [(ngModel)]="data_nasc" name="data_nasc"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <img src="assets/imgs/icone_azul_telefone.png" />\n        </ion-label>\n        <ion-input [(ngModel)]="celular" name="celular"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <img src="assets/imgs/icone_azul_escolaridade.png" />\n        </ion-label>\n        <ion-input [(ngModel)]="escolaridade" name="escolaridade"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <img src="assets/imgs/icone_azul_situacao_profissional.png" />\n        </ion-label>\n        <ion-input [(ngModel)]="profissao" name="profissao"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <img src="assets/imgs/icone_azul_renda.png" />\n        </ion-label>\n        <ion-input [(ngModel)]="renda" name="renda"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button>Salvar</button>\n  </form>\n\n</ion-content>\n\n<footer></footer>\n `/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/editar-perfil/editar-perfil.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _f || Object])
    ], EditarPerfilPage);
    return EditarPerfilPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=editar-perfil.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__opinioes_opinioes__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__brandpages_brandpages__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__posts_posts__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Angular dependencies

//Ionic dependencies

//Pages








var ListasPage = (function () {
    function ListasPage(navCtrl, navParams, _data, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._data = _data;
        this.storage = storage;
    }
    ListasPage_1 = ListasPage;
    ListasPage.prototype.ionViewDidLoad = function () { this.getLists(); };
    ListasPage.prototype.getLists = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this._data.get(token, 'lists')
                .then(function (resposta) {
                _this.lists = resposta;
            }).catch(function (err) {
                console.error(err);
            });
        });
    };
    // navegação do menu header
    ListasPage.prototype.navListas = function () {
        this.navCtrl.setRoot(ListasPage_1);
    };
    ListasPage.prototype.navPosts = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__posts_posts__["a" /* PostsPage */]);
    };
    // navegação do menu footer
    ListasPage.prototype.navHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ListasPage.prototype.navBrand = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__brandpages_brandpages__["a" /* BrandpagesPage */]);
    };
    ListasPage.prototype.navCarrinho = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    ListasPage.prototype.navOpinioes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__opinioes_opinioes__["a" /* OpinioesPage */]);
    };
    ListasPage.prototype.navPerfil = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__perfil_perfil__["a" /* PerfilPage */]);
    };
    ListasPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ListasPage = ListasPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listas',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/listas/listas.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    Listas\n</ion-content>\n\n<footer></footer>`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/listas/listas.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_data_data__["a" /* DataProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* Storage */]) === "function" && _d || Object])
    ], ListasPage);
    return ListasPage;
    var ListasPage_1, _a, _b, _c, _d;
}());

//# sourceMappingURL=listas.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__opinioes_opinioes__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__brandpages_brandpages__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__listas_listas__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PostsPage = (function () {
    function PostsPage(navCtrl, navParams, _data, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._data = _data;
        this.storage = storage;
        this.searchTerm = '';
        this.likes = 0;
        this.postComment = false;
        this.setFilteredPosts();
    }
    PostsPage_1 = PostsPage;
    PostsPage.prototype.ionViewDidLoad = function () { this.getPosts(); };
    PostsPage.prototype.setFilteredPosts = function () {
        this.posts = this._data.filterPosts(this.searchTerm);
    };
    PostsPage.prototype.likeComment = function (e) {
        this.likes++;
    };
    PostsPage.prototype.newComment = function () {
        this.postComment = true;
    };
    PostsPage.prototype.getPosts = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this._data.get(token, 'posts')
                .then(function (resposta) {
                _this.posts = resposta;
            }).catch(function (err) {
                console.error(err);
            });
        });
    };
    // navegação do menu header
    PostsPage.prototype.navListas = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__listas_listas__["a" /* ListasPage */]);
    };
    PostsPage.prototype.navPosts = function () {
        this.navCtrl.setRoot(PostsPage_1);
    };
    // navegação do menu footer
    PostsPage.prototype.navHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PostsPage.prototype.navBrand = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__brandpages_brandpages__["a" /* BrandpagesPage */]);
    };
    PostsPage.prototype.navCarrinho = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    PostsPage.prototype.navOpinioes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__opinioes_opinioes__["a" /* OpinioesPage */]);
    };
    PostsPage.prototype.navPerfil = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__perfil_perfil__["a" /* PerfilPage */]);
    };
    PostsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    PostsPage = PostsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-posts',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/posts/posts.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let post of posts">\n      <ion-card>\n        <img src="https://ionicframework.com/dist/preview-app/www/assets/img/nin-live.png"/>\n        <ion-card-content>\n          <ion-card-title>\n              {{ post.titulo }}\n            </ion-card-title>\n          <p>{{ post.body }}</p>\n        </ion-card-content>\n        <ion-row>\n          <ion-col>\n            <button ion-button icon-left clear small (tap)="likeComment($event)">\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>{{likes}} Like(s)</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button icon-left clear small>\n              <ion-icon name="text"></ion-icon>\n              <div>4 Comments</div>\n            </button>\n          </ion-col>\n          <div>\n            <form ngIf="postComment">\n              <ion-list>\n                <ion-item>\n                  <ion-label fixed>Mensagem</ion-label>\n                  <ion-input type="text" [(ngModel)]="mensagem"></ion-input>\n                </ion-item>\n              </ion-list>\n              <button ion-button full>Comentar</button>\n            </form>\n          </div>\n          <ion-col center text-center>\n            <ion-note>\n              11h ago\n            </ion-note>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<footer></footer>`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/posts/posts.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_data_data__["a" /* DataProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* Storage */]) === "function" && _d || Object])
    ], PostsPage);
    return PostsPage;
    var PostsPage_1, _a, _b, _c, _d;
}());

//# sourceMappingURL=posts.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnderecosCadastradosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnderecosCadastradosPage = (function () {
    function EnderecosCadastradosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EnderecosCadastradosPage.prototype.ionViewDidLoad = function () {
    };
    EnderecosCadastradosPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    EnderecosCadastradosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enderecos-cadastrados',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/enderecos-cadastrados/enderecos-cadastrados.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n\n<footer></footer>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/enderecos-cadastrados/enderecos-cadastrados.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], EnderecosCadastradosPage);
    return EnderecosCadastradosPage;
    var _a, _b;
}());

//# sourceMappingURL=enderecos-cadastrados.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormasPagamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormasPagamentoPage = (function () {
    function FormasPagamentoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FormasPagamentoPage.prototype.ionViewDidLoad = function () {
    };
    FormasPagamentoPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    FormasPagamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formas-pagamento',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/formas-pagamento/formas-pagamento.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n</ion-content>\n\n<footer></footer>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/formas-pagamento/formas-pagamento.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], FormasPagamentoPage);
    return FormasPagamentoPage;
    var _a, _b;
}());

//# sourceMappingURL=formas-pagamento.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HeaderComponent.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'header',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/components/header/header.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/components/header/header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensagensPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MensagensPage = (function () {
    function MensagensPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MensagensPage.prototype.ionViewDidLoad = function () { };
    MensagensPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    MensagensPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mensagens',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/mensagens/mensagens.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="cadastrarMensagem()">\n    <ion-item>\n      <ion-input [(ngModel)]="titulo" name="titulo" type="text" placeholder="Título"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-textarea [(ngModel)]="mensagem" name="mensagem" type="text" placeholder="Mensagem" rows="10"></ion-textarea>\n    </ion-item>\n    <img src="assets/imgs/enviar.png">\n  </form>\n</ion-content>\n\n<footer></footer>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/mensagens/mensagens.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], MensagensPage);
    return MensagensPage;
    var _a, _b;
}());

//# sourceMappingURL=mensagens.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificacoesPage = (function () {
    function NotificacoesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificacoesPage.prototype.ionViewDidLoad = function () { };
    NotificacoesPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    NotificacoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notificacoes',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/notificacoes/notificacoes.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n\n<footer></footer>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/notificacoes/notificacoes.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], NotificacoesPage);
    return NotificacoesPage;
    var _a, _b;
}());

//# sourceMappingURL=notificacoes.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(256);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cadastro_cadastro__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_produto_produto__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_brandpages_brandpages__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_carrinho_carrinho__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_opinioes_opinioes__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_perfil_perfil__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_listas_listas__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_posts_posts__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_eventos_eventos__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_welcome_welcome__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_verifica_usuario_verifica_usuario__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_cadastro2_cadastro2__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_cadastro_aviso1_cadastro_aviso1__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_cadastro_aviso2_cadastro_aviso2__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_continua_cadastro_continua_cadastro__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_escolhe_categorias_escolhe_categorias__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_facebook__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_marca_marca__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_brand_brand__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_editar_perfil_editar_perfil__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_mensagens_mensagens__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_formas_pagamento_formas_pagamento__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_enderecos_cadastrados_enderecos_cadastrados__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_notificacoes_notificacoes__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_info_info__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_duvidas_duvidas__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_total_pedidos_total_pedidos__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_duvidas_respostas_duvidas_respostas__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_faca_sua_pergunta_faca_sua_pergunta__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_avaliar_avaliar__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_header_header__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_footer_footer__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_modal_modal__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_slide_slide__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_termos_termos__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_politica_politica__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//imports of angular



//imports of ionic





//import principal component

//import providers

//import pages


































//components







function provideStorage() {
    return new __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* Storage */]({
        name: 'simpls.db',
        storeName: 'usuario'
    });
}
function provideStorage2() {
    return new __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* Storage */]({
        name: 'simpls.db',
        storeName: 'carrinho'
    });
}
//declarations, imports, compoents and providers
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_cadastro2_cadastro2__["a" /* Cadastro2Page */],
                __WEBPACK_IMPORTED_MODULE_27__pages_cadastro_aviso1_cadastro_aviso1__["a" /* CadastroAviso1Page */],
                __WEBPACK_IMPORTED_MODULE_28__pages_cadastro_aviso2_cadastro_aviso2__["a" /* CadastroAviso2Page */],
                __WEBPACK_IMPORTED_MODULE_29__pages_continua_cadastro_continua_cadastro__["a" /* ContinuaCadastroPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_escolhe_categorias_escolhe_categorias__["a" /* EscolheCategoriasPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_verifica_usuario_verifica_usuario__["a" /* VerificaUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_produto_produto__["a" /* ProdutoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_brandpages_brandpages__["a" /* BrandpagesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_brand_brand__["a" /* BrandPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_carrinho_carrinho__["a" /* CarrinhoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_opinioes_opinioes__["a" /* OpinioesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_editar_perfil_editar_perfil__["a" /* EditarPerfilPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_listas_listas__["a" /* ListasPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_posts_posts__["a" /* PostsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_eventos_eventos__["a" /* EventosPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_marca_marca__["a" /* MarcaPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_mensagens_mensagens__["a" /* MensagensPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_formas_pagamento_formas_pagamento__["a" /* FormasPagamentoPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_enderecos_cadastrados_enderecos_cadastrados__["a" /* EnderecosCadastradosPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_duvidas_duvidas__["a" /* DuvidasPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_total_pedidos_total_pedidos__["a" /* TotalPedidosPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_duvidas_respostas_duvidas_respostas__["a" /* DuvidasRespostasPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_faca_sua_pergunta_faca_sua_pergunta__["a" /* FacaSuaPerguntaPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_avaliar_avaliar__["a" /* AvaliarPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_termos_termos__["a" /* TermosPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_politica_politica__["a" /* PoliticaPage */],
                __WEBPACK_IMPORTED_MODULE_47__components_modal_modal__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_48__components_slide_slide__["a" /* SlideComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/avaliar/avaliar.module#AvaliarPageModule', name: 'AvaliarPage', segment: 'avaliar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/duvidas-respostas/duvidas-respostas.module#DuvidasRespostasPageModule', name: 'DuvidasRespostasPage', segment: 'duvidas-respostas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/duvidas/duvidas.module#DuvidasPageModule', name: 'DuvidasPage', segment: 'duvidas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enderecos-cadastrados/enderecos-cadastrados.module#EnderecosCadastradosPageModule', name: 'EnderecosCadastradosPage', segment: 'enderecos-cadastrados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faca-sua-pergunta/faca-sua-pergunta.module#FacaSuaPerguntaPageModule', name: 'FacaSuaPerguntaPage', segment: 'faca-sua-pergunta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/formas-pagamento/formas-pagamento.module#FormasPagamentoPageModule', name: 'FormasPagamentoPage', segment: 'formas-pagamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mensagens/mensagens.module#MensagensPageModule', name: 'MensagensPage', segment: 'mensagens', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notificacoes/notificacoes.module#NotificacoesPageModule', name: 'NotificacoesPage', segment: 'notificacoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/politica/politica.module#PoliticaPageModule', name: 'PoliticaPage', segment: 'politica', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/termos/termos.module#TermosPageModule', name: 'TermosPage', segment: 'termos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/total-pedidos/total-pedidos.module#TotalPedidosPageModule', name: 'TotalPedidosPage', segment: 'total-pedidos', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_cadastro2_cadastro2__["a" /* Cadastro2Page */],
                __WEBPACK_IMPORTED_MODULE_27__pages_cadastro_aviso1_cadastro_aviso1__["a" /* CadastroAviso1Page */],
                __WEBPACK_IMPORTED_MODULE_28__pages_cadastro_aviso2_cadastro_aviso2__["a" /* CadastroAviso2Page */],
                __WEBPACK_IMPORTED_MODULE_29__pages_continua_cadastro_continua_cadastro__["a" /* ContinuaCadastroPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_escolhe_categorias_escolhe_categorias__["a" /* EscolheCategoriasPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_verifica_usuario_verifica_usuario__["a" /* VerificaUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_produto_produto__["a" /* ProdutoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_brandpages_brandpages__["a" /* BrandpagesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_brand_brand__["a" /* BrandPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_carrinho_carrinho__["a" /* CarrinhoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_opinioes_opinioes__["a" /* OpinioesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_editar_perfil_editar_perfil__["a" /* EditarPerfilPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_listas_listas__["a" /* ListasPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_posts_posts__["a" /* PostsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_eventos_eventos__["a" /* EventosPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_marca_marca__["a" /* MarcaPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_mensagens_mensagens__["a" /* MensagensPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_formas_pagamento_formas_pagamento__["a" /* FormasPagamentoPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_enderecos_cadastrados_enderecos_cadastrados__["a" /* EnderecosCadastradosPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_duvidas_duvidas__["a" /* DuvidasPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_total_pedidos_total_pedidos__["a" /* TotalPedidosPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_duvidas_respostas_duvidas_respostas__["a" /* DuvidasRespostasPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_faca_sua_pergunta_faca_sua_pergunta__["a" /* FacaSuaPerguntaPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_avaliar_avaliar__["a" /* AvaliarPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_termos_termos__["a" /* TermosPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_politica_politica__["a" /* PoliticaPage */],
                __WEBPACK_IMPORTED_MODULE_47__components_modal_modal__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_48__components_slide_slide__["a" /* SlideComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* Storage */], useFactory: provideStorage },
                { provide: 'StorageCarrinho', useFactory: provideStorage2 },
                __WEBPACK_IMPORTED_MODULE_9__providers_data_data__["a" /* DataProvider */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_46__components_footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_48__components_slide_slide__["a" /* SlideComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage, _data) {
        var _this = this;
        this.storage = storage;
        this._data = _data;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
        // lista categorias no menu
        this.storage.get('token').then(function (token) {
            _this._data.get(token, 'categories')
                .then(function (resposta) {
                _this.categories = resposta;
            }).catch(function (err) {
                console.error(err);
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/app/app.html"*/`<!-- menu -->\n<ion-menu [content]="content">\n\n<ion-content>\n    <ion-list nolines>\n        <ion-item *ngFor="let cat of categories">{{cat.nome}}</ion-item>\n    </ion-list>\n</ion-content>\n\n</ion-menu>\n<!-- nav -->\n<ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* DataProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/tabs/tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n\n<style>\n  .ion-md-home {\n    content: url("assets/imgs/icon-home.png") !important; \n  } \n  .tabs .tab-item .icon-home {\n  background-repeat: no-repeat;\n  background-position: 50%;\n  height: 100%;\n  background-image: url(\'../assets/imgs/icon-home.png\') !important;\n  background-size:contain;\n}\n</style>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__opinioes_opinioes__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__brandpages_brandpages__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EventosPage = (function () {
    function EventosPage(navCtrl, navParams, _data, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._data = _data;
        this.storage = storage;
    }
    EventosPage.prototype.getEvents = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this._data.get(token, 'events')
                .then(function (resposta) {
                _this.events = resposta;
            }).catch(function (err) {
                console.error(err);
            });
        });
    };
    EventosPage.prototype.ionViewDidLoad = function () { this.getEvents(); };
    EventosPage.prototype.navHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    EventosPage.prototype.navBrand = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__brandpages_brandpages__["a" /* BrandpagesPage */]);
    };
    EventosPage.prototype.navCarrinho = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    EventosPage.prototype.navOpinioes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__opinioes_opinioes__["a" /* OpinioesPage */]);
    };
    EventosPage.prototype.navPerfil = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__perfil_perfil__["a" /* PerfilPage */]);
    };
    EventosPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    EventosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventos',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/eventos/eventos.html"*/`<ion-header center>\n    <ion-navbar hideBackButton>\n      <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n        <ion-row>\n          <!-- voltar -->\n          <ion-col col-4>\n            <div (click)="goBack()">\n              <img class="voltar" src="assets/imgs/voltar.png">\n            </div>\n          </ion-col>\n          <!-- logo -->\n          <ion-col col-4 text-center>\n              <img src="assets/imgs/logo_topo.png">\n          </ion-col>\n          <!-- cart -->\n          <ion-col col-4 text-right (click)="goCart()">\n              <ion-icon class="icon-cart" name="cart"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n    Eventos\n</ion-content>\n\n<footer></footer>`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/eventos/eventos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_data_data__["a" /* DataProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* Storage */]) === "function" && _d || Object])
    ], EventosPage);
    return EventosPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=eventos.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroAviso1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CadastroAviso1Page = (function () {
    function CadastroAviso1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    //método de troca de tela 
    CadastroAviso1Page.prototype.vaiParaAviso2 = function () { };
    CadastroAviso1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroAviso1Page');
    };
    CadastroAviso1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-aviso1',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/cadastro-aviso1/cadastro-aviso1.html"*/`<ion-content class="cadastro1" padding (click)="vaiParaAviso2()" text-center center>\n  <img src="../assets/imgs/logo.png" alt="">\n  <p>\n    Quanto mais você completar<br />\n    os próximos dados automaticamente<br />\n    você ganha "pontos" para serem usados<br />\n    como desconto em suas compras.\n  </p>\n  <button>Avançar <span>></span></button>\n</ion-content>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/cadastro-aviso1/cadastro-aviso1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CadastroAviso1Page);
    return CadastroAviso1Page;
}());

//# sourceMappingURL=cadastro-aviso1.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroAviso2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadastroAviso2Page = (function () {
    function CadastroAviso2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    //método de troca de página
    CadastroAviso2Page.prototype.vaiParaCadastroTela1 = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    CadastroAviso2Page.prototype.ionViewDidLoad = function () { };
    CadastroAviso2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-aviso2',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/cadastro-aviso2/cadastro-aviso2.html"*/`<ion-content class="cadastro2" padding (click)="vaiParaCadastroTela1()" text-center center>\n    <img src="../assets/imgs/logo.png" alt="">\n    <p>\n        Não se preocupe, todos os seus dados\n        estarão seguros conosco, \n        queremos conhecê-lo melhor \n        para entregar a melhor experiência\n        para você.\n    </p>\n    <button>Avançar <span>></span></button>\n</ion-content>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/cadastro-aviso2/cadastro-aviso2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CadastroAviso2Page);
    return CadastroAviso2Page;
}());

//# sourceMappingURL=cadastro-aviso2.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContinuaCadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContinuaCadastroPage = (function () {
    function ContinuaCadastroPage(navCtrl, navParams, _alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._alertCtrl = _alertCtrl;
        this.data = this.navParams.get('data');
    }
    ContinuaCadastroPage_1 = ContinuaCadastroPage;
    ContinuaCadastroPage.prototype.irParaHome = function () {
        var _this = this;
        this._alertCtrl.create({
            title: 'Não se preocupe!',
            subTitle: 'Você pode escolher suas categorias futuramente. Agora você será redirecionado para a página de login, onde seu email e sua senha cadastradas serão solicitados.',
            buttons: [{ text: 'Ok', handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], { data: _this.data });
                    } }]
        }).present();
    };
    ContinuaCadastroPage.prototype.irParaCategorias = function () {
        this.navCtrl.push(ContinuaCadastroPage_1, { data: this.data });
    };
    ContinuaCadastroPage.prototype.ionViewDidLoad = function () { };
    ContinuaCadastroPage = ContinuaCadastroPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-continua-cadastro',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/continua-cadastro/continua-cadastro.html"*/`<ion-content class="continuaCadastro" padding text-center center>\n    <img class="logo" src="../assets/imgs/logo.png">\n    <img class="escolhe" (click)="irParaCategorias()" src="../assets/imgs/escolha_suas_preferencia_botao.png">\n    <p>ou</p>\n    <button (click)="irParaHome()">Pular</button>\n</ion-content>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/continua-cadastro/continua-cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ContinuaCadastroPage);
    return ContinuaCadastroPage;
    var ContinuaCadastroPage_1;
}());

//# sourceMappingURL=continua-cadastro.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolheCategoriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EscolheCategoriasPage = (function () {
    function EscolheCategoriasPage(navCtrl, navParams, _data, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._data = _data;
        this.storage = storage;
        this.press = 0;
        this.pan = 1;
        this.swipe = 0;
        this.tap = 0;
        this.alerta = '';
    }
    EscolheCategoriasPage.prototype.ionViewDidLoad = function () {
        this.getBrands();
    };
    EscolheCategoriasPage.prototype.pressEvent = function (e) {
        this.press++;
        console.log(this.press);
    };
    EscolheCategoriasPage.prototype.getBrands = function () {
        var _this = this;
        this.storage.get('token').then(function (data) {
            console.log(data);
            _this._data.get(data.token, 'brands')
                .then(function (resposta) {
                _this.brands = resposta;
                console.log(_this.brands);
            }).catch(function (err) {
                console.error(err);
            });
        });
    };
    EscolheCategoriasPage.prototype.panEvent = function (e) {
        this.pan++;
        if (this.pan <= 100) {
            this.alerta = "Voc\u00EA escolheu " + this.pan + "% dacategoria";
        }
    };
    EscolheCategoriasPage.prototype.swipeEvent = function (e) {
        this.swipe++;
    };
    EscolheCategoriasPage.prototype.tapEvent = function (e) {
        this.tap++;
    };
    EscolheCategoriasPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    EscolheCategoriasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-escolhe-categorias',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/escolhe-categorias/escolhe-categorias.html"*/`<!--\n  Generated template for the EscolheCategoriasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>escolheCategorias</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card (pan)="panEvent($event)">\n    <ion-item class="square">\n      <p>Chocolate Garoto</p>\n      <span>{{ alerta }}</span>\n    </ion-item>\n  </ion-card>\n</ion-content>\n\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/escolhe-categorias/escolhe-categorias.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* Storage */]) === "function" && _d || Object])
    ], EscolheCategoriasPage);
    return EscolheCategoriasPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=escolhe-categorias.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_info_info__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_perfil_perfil__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FooterComponent = (function () {
    function FooterComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    // navegação do menu footer
    FooterComponent.prototype.navHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
    };
    FooterComponent.prototype.navInfo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_info_info__["a" /* InfoPage */]);
    };
    FooterComponent.prototype.navPerfil = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_perfil_perfil__["a" /* PerfilPage */]);
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'footer',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/components/footer/footer.html"*/`<!-- menu footer -->\n<ion-footer class="footer">\n  <ion-grid class="footerMenu">\n    <ion-row center>\n      <ion-col></ion-col>\n      <ion-col class="info" (click)="navInfo()"><img src="assets/imgs/info_simpls.png" class="imgMenu"></ion-col>\n      <ion-col (click)="navHome()"><img src="assets/imgs/icon-sacola.png" class="imgMenu imgPrincipal"></ion-col>\n      <ion-col class="perfil" (click)="navPerfil()"><img src="assets/imgs/icon-perfil.png" class="imgMenu"></ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/components/footer/footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_modal__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_produto_produto__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var SlideComponent = (function () {
    function SlideComponent(navCtrl, storage, _storageCarrinho, modalCtrl, _alertCtrl, _data) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this._storageCarrinho = _storageCarrinho;
        this.modalCtrl = modalCtrl;
        this._alertCtrl = _alertCtrl;
        this._data = _data;
        this.quantidade = 1;
        this.modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modal_modal__["a" /* ModalComponent */]);
        this.items = [];
        //chama o get produtos
        this.getProduts();
    }
    //método get produtos
    SlideComponent.prototype.getProduts = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this._data.get(token, 'products/6/1')
                .then(function (resposta) {
                _this.products = resposta;
            }).catch(function (err) {
                console.error(err);
            });
        });
    };
    // método seleciona produto - vai para a página do produto
    SlideComponent.prototype.selecionaProduto = function (produto) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_produto_produto__["a" /* ProdutoPage */], { data: produto });
    };
    //método adiciona produto no carrinho
    SlideComponent.prototype.adicionaProduto = function (produto) {
        var _this = this;
        //recebe os dados da tela
        var data = {
            produto: {
                categorias: produto.categorias,
                id: produto._id,
                descricao: produto.descricao,
                ean: produto.ean,
                imagem: produto.imagem,
                industria: produto.industria,
                marca: produto.marca,
                nome: produto.nome,
                precoDe: produto.precoDe,
                precoPor: produto.precoPor,
                quantidade: 1
            }
        };
        //seta os dados no storage e chama a função updateCarrinho
        this.storage.get('token').then(function (token) {
            _this._data.get(token, 'users/carrinho')
                .then(function (resposta) {
                _this.produtos = resposta;
                _this.produtos = _this.produtos.carrinho;
                _this.items = _this.produtos.push(data);
                _this._storageCarrinho.set('produto', _this.produtos);
                var result = _this._storageCarrinho.get('produto');
                console.log(result);
                _this.updateCarrinho(result);
            }).catch(function (err) {
                console.error(err);
            });
        });
    };
    //atualiza o carrinho de compras
    SlideComponent.prototype.updateCarrinho = function (data) {
        var _this = this;
        this.modal.present();
        this.storage.get('token').then(function (token) {
            _this._storageCarrinho.get('produto').then(function () {
                _this._data.updateCarrinho(data, _this._data.apiUrl + "users/profile", token)
                    .then(function (resposta) {
                    console.log(resposta);
                }).catch(function (err) {
                    _this._alertCtrl.create({
                        title: 'Não foi possível inserir o produto no carrinho',
                        subTitle: "Por ",
                        buttons: [{ text: 'Ok' }]
                    }).present();
                });
            });
        });
        this.modal.dismiss();
    };
    SlideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'slide',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/components/slide/slide.html"*/`<div class="slide">\n  <!-- Loop do produto -->\n  <div class="row">\n    <div class="row__inner">\n      <div class="tile" *ngFor="let product of products">\n        <div class="item">\n          <div class="tile__media">\n              <img src="{{product.imagem}}" (click)="selecionaProduto(product)">\n            </div>\n            <h3>{{ product.nome }}</h3>\n            <img src="assets/imgs/adicionar.png" (click)="adicionaProduto(product)">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/components/slide/slide.html"*/
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('StorageCarrinho')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]])
    ], SlideComponent);
    return SlideComponent;
}());

//# sourceMappingURL=slide.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarrinhoPage = (function () {
    function CarrinhoPage(navCtrl, navParams, storage, _data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this._data = _data;
        this.isTrue = true;
        this.getProdutosNoCarrinhho();
    }
    // método lista produtos do carrinho
    CarrinhoPage.prototype.getProdutosNoCarrinhho = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this._data.get(token, 'users/carrinho')
                .then(function (resposta) {
                _this.produtos = resposta;
                //this.produtos = this.produtos.carrinho
                console.log(_this.produtos);
            }).catch(function (err) {
                console.error(err);
            });
        });
    };
    CarrinhoPage.prototype.carrinho = function () {
        this.isTrue = true;
    };
    CarrinhoPage.prototype.lista = function () {
        this.isTrue = false;
    };
    CarrinhoPage.prototype.ionViewDidLoad = function () { };
    CarrinhoPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    CarrinhoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-carrinho',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/carrinho/carrinho.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="isTrue">\n    <ion-grid class="imagens">\n      <ion-row>\n        <ion-col col-6>\n          <img class="img-carrinho" src="assets/imgs/carrinho/seu_carrinho_hover.png">\n        </ion-col>\n        <ion-col col-6>\n            <img class="img-lista" src="assets/imgs/carrinho/lista.png" (click)="lista()">\n          </ion-col>\n      </ion-row>\n      <img src="assets/imgs/carrinho/caixa.png">\n    </ion-grid>\n    <ion-grid class="carrinho">\n      <ion-row *ngFor="let produto of produtos">\n        <ion-col col-3>\n          <img src="{{ produto.imagem }}">\n        </ion-col>\n        <ion-col col-5>\n          <p class="nome">{{ produto.nome }}</p>\n          <p class="marca"><em>{{ produto.marca }}</em></p>\n          <ion-col class="stars" col-6>\n            <ion-icon name="star"></ion-icon>\n            <ion-icon name="star"></ion-icon>\n            <ion-icon name="star"></ion-icon>\n            <ion-icon name="star"></ion-icon>\n            <ion-icon name="star"></ion-icon>\n          </ion-col>\n          <div class="precos">\n              <span class="preco-de">De: R$ {{ produto.precoDe }}</span>\n              <p class="preco-por">POR: R$ {{ produto.precoPor }}</p>\n          </div>\n        </ion-col>\n        <ion-col col-4>\n          <ion-row>\n            <ion-col col-3><img src="assets/imgs/carrinho/menos.png"></ion-col>\n            <ion-col col-6><span>1</span> UN.</ion-col>\n            <ion-col col-3><img src="assets/imgs/carrinho/mais.png"></ion-col>\n            <div class="clear"></div>\n            <div class="preco-total-produto">\n              <ion-row>\n                <ion-col col-3 class="preco-total">\n                  <img src="assets/imgs/carrinho/valor_total.png">\n                </ion-col>\n                <ion-col col-9 text-center>\n                  <p class="preco-total-valor">R$ 46,37</p>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid class="valor-total-compra">\n      <ion-row>\n        <ion-col col-9>\n          <p>VALOR TOTAL DA COMPRA</p>\n        </ion-col>\n        <ion-col col-3>\n          <p><strong>R$ 146,25</strong></p>\n        </ion-col>\n        <div class="clear"></div>\n        <ion-col col-9>\n          <p>FRETE</p>\n        </ion-col>\n        <ion-col col-3>\n          <p><strong>R$ 7,59</strong></p>\n        </ion-col>\n        <div class="clear"></div>\n        <ion-col col-6></ion-col>\n        <ion-col col-1 text-right>\n          <img src="assets/imgs/carrinho/total_geral.png"> \n        </ion-col>\n        <ion-col col-2>\n            TOTAL\n          </ion-col>\n        <ion-col col-3>\n          <p><strong>R$ 7,59</strong></p>\n        </ion-col>\n        <div class="clear"></div>\n      </ion-row>\n    </ion-grid>\n  </div>\n  \n  <div *ngIf="!isTrue">\n    <ion-grid class="imagens">\n      <ion-row>\n        <ion-col col-6>\n          <img class="img-carrinho" src="assets/imgs/carrinho/seu_carrinho.png" (click)="carrinho()">\n        </ion-col>\n        <ion-col col-6>\n            <img class="img-lista" src="assets/imgs/carrinho/lista_hover.png">\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row *ngFor="let produto of produtos">\n        <ion-col col-4>\n          <h3>Aqui é a lista</h3>\n          <p>Marca</p>\n          <p>Estrelas</p>\n          <p>Preço De</p>\n          <p>Preço Por</p>\n          <!--img src="data:image/jpg;base64,{{produto.imagem}}"-->\n          <h3>{{produto.produto}}</h3>\n          <p>{{produto.quantidade}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n\n<footer></footer>`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/carrinho/carrinho.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]) === "function" && _d || Object])
    ], CarrinhoPage);
    return CarrinhoPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=carrinho.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editar_perfil_editar_perfil__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__total_pedidos_total_pedidos__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mensagens_mensagens__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__formas_pagamento_formas_pagamento__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__enderecos_cadastrados_enderecos_cadastrados__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__notificacoes_notificacoes__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams, _data, storage, actionSheetCtrl, socialSharing, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._data = _data;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.getUser('users/profile');
    }
    PerfilPage.prototype.getUser = function (rota) {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this._data.get(token, rota)
                .then(function (resposta) {
                _this.users = resposta;
                console.log('Bom, esta é a resposta com os dados do user', _this.users);
                _this.nome = _this.users.nomeCompleto;
                _this.endereco = "" + _this.users.rua;
            }).catch(function (err) {
                console.error(err);
            });
        });
    };
    PerfilPage.prototype.shareApp = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Compartilhe o Simpls nas redes sociais',
            buttons: [
                {
                    text: 'Facebook',
                    icon: 'logo-facebook',
                    handler: function () {
                        _this.shareWithFacebook();
                        console.log('Compartilhar no Facebook');
                    }
                }, {
                    text: 'Twitter',
                    icon: 'logo-twitter',
                    handler: function () {
                        _this.shareWithTwitter();
                        console.log('Compartilhar no Twitter');
                    }
                }, {
                    text: 'Whatsapp',
                    icon: 'logo-whatsapp',
                    handler: function () {
                        _this.shareWithWhatsapp();
                        console.log('Compartilhar no Whatsapp');
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Compartilhamento cancelado');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    PerfilPage.prototype.shareWithFacebook = function () {
        var _this = this;
        var message = 'Baixei o Simpls e estou adorando! Nunca foi tão confortável fazer compras!';
        var url = 'http://google.com';
        this.socialSharing.shareViaFacebook(message, url).then(function (data) {
            console.log('Foi postado no Facebook', data);
        }).catch(function (err) {
            console.error('Deu erro, rolou não', err);
            _this.alertCtrl.create({
                title: 'Não foi possível carregar o compartilhamento',
                subTitle: 'Por favor, tente mais tarde',
                buttons: [{ text: 'Ok' }]
            }).present();
        });
    };
    PerfilPage.prototype.shareWithTwitter = function () {
        var _this = this;
        var message = 'Baixei o Simpls e estou adorando! Nunca foi tão confortável fazer compras!';
        var url = 'http://google.com';
        this.socialSharing.shareViaTwitter(message, url).then(function (data) {
            console.log('Foi postado no Twitter', data);
        }).catch(function (err) {
            console.error('Deu erro, rolou não', err);
            _this.alertCtrl.create({
                title: 'Não foi possível carregar o compartilhamento',
                subTitle: 'Por favor, tente mais tarde',
                buttons: [{ text: 'Ok' }]
            }).present();
        });
    };
    PerfilPage.prototype.shareWithWhatsapp = function () {
        var _this = this;
        var message = 'Baixei o Simpls e estou adorando! Nunca foi tão confortável fazer compras!';
        var url = 'http://google.com';
        this.socialSharing.shareViaWhatsApp(message, url).then(function (data) {
            console.log('Foi postado no Facebook', data);
        }).catch(function (err) {
            console.error('Deu erro, rolou não', err);
            _this.alertCtrl.create({
                title: 'Não foi possível carregar o compartilhamento',
                subTitle: 'Por favor, tente mais tarde',
                buttons: [{ text: 'Ok' }]
            }).present();
        });
    };
    PerfilPage.prototype.selecionaPerfil = function (perfil) {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this._data.get(token, 'users/profile')
                .then(function (resposta) {
                _this.users = resposta;
                var id = _this.users.id;
                console.log('Id: ', id);
                console.log(_this.users);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editar_perfil_editar_perfil__["a" /* EditarPerfilPage */], { data: _this.users });
            }).catch(function (err) {
                console.error(err);
            });
        });
    };
    PerfilPage.prototype.logout = function () {
        var _this = this;
        this.alertCtrl.create({
            title: 'Tem certeza disso?',
            subTitle: 'Quer realmente sair do Simpls?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        _this.mensagem('Que bom que decidiu ficar!');
                    }
                },
                {
                    text: 'Sair',
                    handler: function () {
                        _this.mensagem('Por favor, aguarde um minuto...');
                        _this.storage.remove('token');
                        _this.mensagem('Você saiu do Simpls!');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__welcome_welcome__["a" /* WelcomePage */]);
                    }
                }
            ]
        }).present();
    };
    PerfilPage.prototype.mensagem = function (mensagem) {
        var loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: mensagem
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 1000);
    };
    PerfilPage.prototype.irParaPedidos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__total_pedidos_total_pedidos__["a" /* TotalPedidosPage */]);
    };
    PerfilPage.prototype.irParaMensagens = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__mensagens_mensagens__["a" /* MensagensPage */]);
    };
    PerfilPage.prototype.irFormasPagamento = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__formas_pagamento_formas_pagamento__["a" /* FormasPagamentoPage */]);
    };
    PerfilPage.prototype.enderecosCadastrados = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__enderecos_cadastrados_enderecos_cadastrados__["a" /* EnderecosCadastradosPage */]);
    };
    PerfilPage.prototype.notificacoes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__notificacoes_notificacoes__["a" /* NotificacoesPage */]);
    };
    PerfilPage.prototype.ionViewDidLoad = function () { };
    PerfilPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/perfil/perfil.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="divider-perfil">\n    <div class="grid-perfil">\n      <div class="item-1" text-center><img class="perfil" src="assets/imgs/icone_azul_digite_seu_nome.png" /> <span class="item-text">{{ this.nome }}</span></div>\n      <div class="item-text item-2"></div>\n      <div class="item-text tem-3" text-center></div>\n    </div>\n    <div class="grid-perfil">\n        <div class="item-1" text-center><img class="perfil" src="assets/imgs/icone_azul_endereco.png" /> <span class="item-text">Endereço Completo</span></div>\n        <div class="item-text item-2"></div>\n        <div class="item-text tem-3" text-center></div>\n      </div>\n    <div class="grid-perfil" (click)="irParaPedidos()">\n      <div class="item-1" text-center><img class="perfil" src="assets/imgs/pedidos_realizados.png" /> <span class="item-text">Pedidos realizados</span></div>\n      <div class="item-text item-2"></div>\n      <div class="item-3 item-destaque" text-right>Ver todos ></div>\n    </div>\n  </div>\n  <!--ion-list class="divider">\n    <ion-item no-lines>\n      <img src="assets/imgs/icone_azul_digite_seu_nome.png" /> <span>{{this.nome}}</span>\n    </ion-item>\n    <ion-item no-lines>\n      <img src="assets/imgs/icone_azul_endereco.png" /> <span style="margin-right: 100px;">{{this.endereco}}</span> <span>ALTERAR ></span>\n    </ion-item>\n    <ion-item no-lines>\n      <img src="assets/imgs/pedidos_realizados.png" /> <span style="margin-right: 40px;">Pedidos realizados</span> <span>Ver todos ></span>\n    </ion-item>\n  </ion-list>\n\n  <div class="divider">\n    <h3>Clube de Pontos</h3>\n    <br />\n    200 Pontos\n    <br /><br />\n    <img src="assets/imgs/perfil/compartilhe.png" (click)="shareApp()">\n  </div>\n\n  <div class="divider central-de-ajuda">\n    <h3>Central de Ajuda</h3>\n    <br />\n    <table class="table-central-de-ajuda">\n      <tr>\n        <td><img src="assets/imgs/perfil/duvidas_e_respostas.png" /></td>\n        <td>Dúvidas e Respostas</td>\n      </tr>\n      <tr>\n        <td><img src="assets/imgs/perfil/queremos_ouvir_sua_opiniao.png" /></td>\n        <td>Queremos ouvir você, deixe sua opinião!</td>\n      </tr>\n    </table>\n  </div-->\n  \n  <div class="divider">\n  <h3>Minha Conta</h3>\n  <br />\n\n  <div class="borderRadius" (click)="selecionaPerfil(perfil)">\n    <div class="grid-layout">\n      <div class="item-1" text-center><img src="assets/imgs/perfil/editar_configuracoes.png" /> </div>\n      <div class="item-text item-2">Editar Configurações</div>\n      <div class="item-text tem-3" text-center>></div>\n    </div>\n    <div class="grid-layout" (click)="irParaMensagens()">\n      <div class="item-1" text-center><img src="assets/imgs/perfil/caixa_de_mensagem.png" /> </div>\n      <div class="item-text item-2">Caixa de Mensagem</div>\n      <div class="item-text tem-3" text-center>></div>\n    </div>\n    <div class="grid-layout" (click)="irFormasPagamento()">\n      <div class="item-1" text-center><img src="assets/imgs/perfil/formas_de_pagamento.png" /> </div>\n      <div class="item-text item-2">Formas de Pagamento</div>\n      <div class="item-text tem-3" text-center>></div>\n    </div>\n    <div class="grid-layout" (click)="enderecosCadastrados()">\n      <div class="item-1" text-center><img src="assets/imgs/perfil/enderecos_cadastrados.png" /> </div>\n      <div class="item-text item-2">Endereços Cadastrados</div>\n      <div class="item-text tem-3" text-center>></div>\n    </div>\n    <div class="grid-layout" (click)="notificacoes()">\n      <div class="item-1" text-center><img src="assets/imgs/perfil/notificacoes.png" /> </div>\n      <div class="item-text item-2">Notificações</div>\n      <div class="item-text tem-3" text-center>></div>\n    </div>\n    <div class="grid-layout last" (click)="logout()">\n      <div class="item-1" text-center><img src="assets/imgs/perfil/sair.png" /> </div>\n      <div class="item-text item-2">Sair</div>\n      <div class="item-text tem-3" text-center>></div>\n    </div>\n  </div>\n</div>\n\n  <div class="clear"></div>\n  <br /><br />\n\n  <img class="img-rodape" src="assets/imgs/rodape.png" alt="">\n\n</ion-content>\n\n<footer></footer>`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _h || Object])
    ], PerfilPage);
    return PerfilPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandpagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__marca_marca__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BrandpagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BrandpagesPage = (function () {
    function BrandpagesPage(navCtrl, _data, storage) {
        this.navCtrl = navCtrl;
        this._data = _data;
        this.storage = storage;
        this.searchTerm = '';
        this.setFilteredItems();
        this.getBrands();
    }
    BrandpagesPage.prototype.ionViewDidLoad = function () { };
    // método de filtro de categorias
    BrandpagesPage.prototype.setFilteredItems = function () {
        this.brands = this._data.filterBrands(this.searchTerm);
    };
    // método get brands
    BrandpagesPage.prototype.getBrands = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            _this._data.get(token, 'brands')
                .then(function (resposta) {
                _this.brands = resposta;
                console.log(_this.brands);
            }).catch(function (err) {
                console.error(err);
            });
        });
    };
    // método de selecionar marca
    BrandpagesPage.prototype.selecionaMarca = function (marca) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__marca_marca__["a" /* MarcaPage */], { data: marca });
    };
    BrandpagesPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    BrandpagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-brandpages',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/brandpages/brandpages.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h2>Marcas</h2>\n  <ion-list *ngFor="let brand of brands"  (click)="selecionaMarca(brand)">\n    <p>{{ brand.nome }}</p>\n    <p>{{ brand.descricao }}</p>\n  </ion-list>\n\n</ion-content>\n\n<footer></footer>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/brandpages/brandpages.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* Storage */]) === "function" && _c || Object])
    ], BrandpagesPage);
    return BrandpagesPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=brandpages.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpinioesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brandpages_brandpages__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__perfil_perfil__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OpinioesPage = (function () {
    function OpinioesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OpinioesPage_1 = OpinioesPage;
    OpinioesPage.prototype.ionViewDidLoad = function () { };
    OpinioesPage.prototype.navHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    OpinioesPage.prototype.navBrand = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__brandpages_brandpages__["a" /* BrandpagesPage */]);
    };
    OpinioesPage.prototype.navCarrinho = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    OpinioesPage.prototype.navOpinioes = function () {
        this.navCtrl.setRoot(OpinioesPage_1);
    };
    OpinioesPage.prototype.navPerfil = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__perfil_perfil__["a" /* PerfilPage */]);
    };
    OpinioesPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    OpinioesPage = OpinioesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-opinioes',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/opinioes/opinioes.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  Opiniões\n</ion-content>\n\n<footer></footer>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/opinioes/opinioes.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], OpinioesPage);
    return OpinioesPage;
    var OpinioesPage_1, _a, _b;
}());

//# sourceMappingURL=opinioes.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(navCtrl, http, _facebook, storage, _alertCtrl, _loadingCtrl, _data, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this._facebook = _facebook;
        this.storage = storage;
        this._alertCtrl = _alertCtrl;
        this._loadingCtrl = _loadingCtrl;
        this._data = _data;
        this.platform = platform;
        this.email = '';
        this.password = '';
        this.isLogged = false;
        if (this.platform.is('cordova ')) {
            _facebook.getLoginStatus()
                .then(function (res) {
                console.log(res.status);
                if (res.status === "connect") {
                    _this.isLogged = true;
                }
                else {
                    _this.isLogged = false;
                }
            });
        }
    }
    LoginPage.prototype.ionViewDidLoad = function () { };
    LoginPage.prototype.setStorage = function (token, key) {
        this.storage.set(token, key);
    };
    LoginPage.prototype.login = function (data) {
        var _this = this;
        data = {
            email: this.email,
            password: this.password,
            token: ''
        };
        var key = new Date().toDateString();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        return new Promise(function (resolve) {
            _this._data
                .post(data, 'login')
                .then(function (result) {
                var loading = _this._loadingCtrl.create({
                    content: 'Login realizado com sucesso!<br />Estamos redirecionando você para a página inicial.',
                    spinner: 'bubbles'
                });
                loading.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { data: result });
                loading.dismiss();
            }, function (err) {
                _this._alertCtrl.create({
                    title: 'Não foi possível realizar o login',
                    subTitle: 'Email ou senha incorretos',
                    buttons: [{ text: 'Ok' }]
                }).present();
            });
        });
    };
    //login com facebook
    LoginPage.prototype.loginFC = function () {
        var _this = this;
        this._facebook.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            if (res.status === "connected") {
                _this.isLogged = true;
                _this._alertCtrl.create({
                    title: 'oia os dados',
                    subTitle: res.authResponse.accessToken,
                    buttons: [{ text: 'Ok' }]
                }).present();
                //this.getUserDetail(res.authResponse.userID);
            }
            else {
                _this.isLogged = false;
            }
        })
            .catch(function (e) {
            _this._alertCtrl.create({
                title: 'Não foi possível realizar o login com o Facebook',
                subTitle: 'Por favor, tente mais tarde',
                buttons: [{ text: 'Ok' }]
            }).present();
            console.log('Error logging into Facebook', e);
        });
    };
    LoginPage.prototype.logout = function () {
        var _this = this;
        this._facebook.logout()
            .then(function (res) { return _this.isLogged = false; })
            .catch(function (e) {
            console.log('Não foi possível fazer o logout com Facebook', e);
            _this._alertCtrl.create({
                title: 'Não foi possível realizar o logout com o Facebook',
                subTitle: 'Por favor, tente mais tarde',
                buttons: [{ text: 'Ok' }]
            }).present();
        });
    };
    LoginPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this._facebook.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
            .then(function (res) {
            _this.users = res;
            console.table("DADOS DO USU\u00C1RIO:" + _this.users);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { data: res });
        })
            .catch(function (e) {
            console.log(e);
            _this._alertCtrl.create({
                title: 'Não foi possível realizar o login com o Facebook',
                subTitle: 'Não conseguimos acessar seus dados no Facebook. Por favor, tente mais tarde',
                buttons: [{ text: 'Ok' }]
            }).present();
        });
    };
    LoginPage.prototype.loginFacebook = function () {
        /*this._facebook.login(['email', 'public_profile'])
          .then(( response: FacebookLoginResponse ) => {
            this.dataFace = response;
            this.isLogged = true;
            this._facebook.api('me?fields=id,name,email,first_name,picture.width(720).as(picture_large)', [])
              .then(profile => {
                let userData = {
                  email: profile['email'] ,
                  first_name: profile['first_name'],
                  picture: profile['picture_large'['data']['url']],
                  username: profile['name']
                }
                return;
              })
          }).catch(err => {
            this._alertCtrl.create({
              title: 'Não foi possível realizar o login com o Facebook',
              subTitle: 'Por favor, tente mais tarde',
              buttons: [{text: 'Ok'}]
            }).present();
          });
        ;*/
        var _this = this;
        this._facebook.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            console.log('Logged into Facebook!', res);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { data: res });
        })
            .catch(function (e) {
            console.log('Error logging into Facebook', e);
            _this._alertCtrl.create({
                title: 'Não foi possível realizar o login com o Facebook',
                subTitle: 'Por favor, tente mais tarde',
                buttons: [{ text: 'Ok' }]
            }).present();
        });
    };
    LoginPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/login/login.html"*/`<ion-content padding class="login" text-center>\n  <img id="logo" src="assets/imgs/logo.png" alt="simpls.me">\n  <img id="imgLoginFacebook" (click)="loginFC()" src="assets/imgs/login_com_facebook.png" alt="login no simpls.me com faceboook">\n  <img src="assets/imgs/ouDivider.png">\n  <div *ngIf="isLogged">\n    <p>{{dataFace}}</p>\n  </div>\n  <form class="vertical-align" (ngSubmit)="login()">\n    <ion-item>\n      <ion-label>Email</ion-label>\n      <ion-input [(ngModel)]="email" name="email" type="text" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Senha</ion-label>\n      <ion-input [(ngModel)]="password" name="password" type="password" required></ion-input>\n    </ion-item>\n    <span class="recuperaSenha" (click)="recuperaSenha()">Esqueceu a senha? Clique aqui!</span>\n    <button class="center itForm buttonSubmit" ion-button type="submit">\n      <img id="imgLogin" src="assets/imgs/login.png" alt="realiza login no simpls.me">\n    </button>\n  </form>\n</ion-content>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* DataProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _h || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastro2_cadastro2__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CadastroPage = (function () {
    function CadastroPage(navCtrl, navParams, _http, _ctrlAlert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this._ctrlAlert = _ctrlAlert;
        this.nomeCompleto = '';
        this.email = '';
        this.password = '';
        this.confirmaPassword = '';
    }
    CadastroPage_1 = CadastroPage;
    // método de cadastro
    CadastroPage.prototype.cadastro = function () {
        var _this = this;
        if (this.password != this.confirmaPassword) {
            this._ctrlAlert.create({
                title: 'As senhas não conferem',
                subTitle: 'Por favor digite senhas idênticas',
                buttons: [{ text: 'Ok', handler: function () {
                            _this.navCtrl.push(CadastroPage_1);
                        } }]
            });
        }
        this.model = {
            nome: this.nomeCompleto,
            email: this.email,
            login: this.email,
            password: this.password,
        };
        var data = this.model;
        this._ctrlAlert.create({
            title: 'Agora fala pouco...',
            subTitle: 'Precisamos só mais de algumas informações',
            buttons: [{ text: 'Ok', handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastro2_cadastro2__["a" /* Cadastro2Page */], { data: data });
                    } }]
        }).present();
    };
    CadastroPage.prototype.ionViewDidLoad = function () { };
    CadastroPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    CadastroPage = CadastroPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/cadastro/cadastro.html"*/`<ion-header class="casal">\n  <img id="loginFacebook" src="../assets/imgs/login_com_facebook.png">\n</ion-header>\n  \n<ion-content padding text-center>\n  \n  <form class="formCadastro" (ngSubmit)="cadastro()" #formCadastro="ngForm">\n    <ion-item class="iconesFom">\n      <ion-label>\n        <img src="../assets/imgs/icone_cinza_digite_seu_nome.png">\n      </ion-label>\n      <ion-input placeholder="Digite seu nome" [(ngModel)]="nomeCompleto" name="nomeCompleto" type="text" required></ion-input> \n    </ion-item>\n    <ion-item class="iconesFom">\n      <ion-label>\n        <img src="../assets/imgs/icone_cinza_digite_seu_email.png">\n      </ion-label>\n      <ion-input placeholder="Email" [(ngModel)]="email" name="email" type="email" required></ion-input>\n    </ion-item>\n    <ion-item class="iconesFom">\n      <ion-label>\n        <img src="../assets/imgs/icone_cinza_senha.png">\n      </ion-label>\n      <ion-input placeholder="Senha" [(ngModel)]="password" name="password" type="password" required></ion-input>\n    </ion-item>\n    <ion-item class="iconesFom">\n      <ion-label>\n        <img src="../assets/imgs/icone_cinza_senha.png">\n      </ion-label>\n      <ion-input placeholder="Confirme sua senha" [(ngModel)]="confirmaSenha" name="confirmaSenha" type="password" required></ion-input>\n    </ion-item>\n    <button class="btCriarConta">\n      <img id="criarConta" src="../assets/imgs/criar_conta.png">\n    </button>\n  </form>\n\n</ion-content>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/cadastro/cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _d || Object])
    ], CadastroPage);
    return CadastroPage;
    var CadastroPage_1, _a, _b, _c, _d;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__duvidas_respostas_duvidas_respostas__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__duvidas_duvidas__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__avaliar_avaliar__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__termos_termos__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__politica_politica__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InfoPage = (function () {
    function InfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InfoPage.prototype.ionViewDidLoad = function () { };
    InfoPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    InfoPage.prototype.irParaDuvidas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__duvidas_respostas_duvidas_respostas__["a" /* DuvidasRespostasPage */]);
    };
    InfoPage.prototype.irParaPerguntasFrequentes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__duvidas_duvidas__["a" /* DuvidasPage */]);
    };
    InfoPage.prototype.irParaPolitica = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__politica_politica__["a" /* PoliticaPage */]);
    };
    InfoPage.prototype.irParaTermos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__termos_termos__["a" /* TermosPage */]);
    };
    InfoPage.prototype.irParaSerEntregador = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__avaliar_avaliar__["a" /* AvaliarPage */]);
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"/Development/ionic_projects/simplsme/src/pages/info/info.html"*/`<ion-header center>\n  <ion-navbar hideBackButton>\n    <ion-grid class="headerMenu" style="padding-right: 10px; padding-left: 10px;">\n      <ion-row>\n        <!-- voltar -->\n        <ion-col col-4>\n          <div (click)="goBack()">\n            <img class="voltar" src="assets/imgs/voltar.png">\n          </div>\n        </ion-col>\n        <!-- logo -->\n        <ion-col col-4 text-center>\n            <img src="assets/imgs/logo_topo.png">\n        </ion-col>\n        <!-- cart -->\n        <ion-col col-4 text-right (click)="goCart()">\n            <ion-icon class="icon-cart" name="cart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="">\n        <h3>COMO FUNCIONA</h3>\n        <br />\n        <iframe src="https://www.youtube.com/embed/WzYA4rv41jg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n        <div class="divider"></div>\n        <h3><img src="assets/imgs/info-simpls/central_de_atendimento.png" /> CENTRAL DE ATENDIMENTO</h3>\n        <br />\n        <table class="table-central-de-ajuda">\n          <tr (click)="irParaDuvidas()">\n            <td><img src="assets/imgs/perfil/duvidas_e_respostas.png" /></td>\n            <td>Queremos ouvir você, deixe sua opinião</td>\n          </tr>\n        </table>\n        <div class="divider"></div>\n        <div class="central-de-ajuda">\n            <br />\n            <h3>CENTRAL DE AJUDA</h3>\n            <br />\n            <table class="table-central-de-ajuda">\n              <!--tr (click)="irParaDuvidas()">\n                <td><img src="assets/imgs/perfil/duvidas_e_respostas.png" /></td>\n                <td>Dúvidas e Respostas</td>\n              </tr-->\n              <tr (click)="irParaTermos()">\n                <td><img src="assets/imgs/perfil/duvidas_e_respostas.png" /></td>\n                <td>Termos e Condições</td>\n              </tr>\n              <tr (click)="irParaPerguntasFrequentes()">\n                <td><img src="assets/imgs/perfil/perguntas_frequentes.png" /></td>\n                <td>Perguntas Frequentes</td>\n              </tr>\n              <tr (click)="irParaPolitica()">\n                <td><img src="assets/imgs/perfil/queremos_ouvir_sua_opiniao.png" /></td>\n                <td>Política de Privacidade</td>\n              </tr>\n              <!--tr (click)="irParaAvaliacao()">\n                <td><img src="assets/imgs/perfil/queremos_ouvir_sua_opiniao.png" /></td>\n                <td>Queremos ouvir você, deixe sua opinião!</td>\n              </tr-->\n            </table>\n            <br />\n          </div>\n          <div class="divider"></div>\n          <div class="central-de-ajuda">\n            <br />\n            <table class="table-central-de-ajuda">\n              <tr>\n                <a href="http//simpes.me">\n                  <td><img src="assets/imgs/info-simpls/entregador_simpls.png" /></td>\n                  <td>Como ser entregador Simpls</td>\n                </a>\n              </tr>\n            </table>\n            <br />\n          </div>\n      </div>\n      <a href="http//simpes.me">\n        <img class="img-rodape" src="assets/imgs/perfil/banner_site.png">\n      </a>\n      <br><br>\n</ion-content>\n\n<footer></footer>\n`/*ion-inline-end:"/Development/ionic_projects/simplsme/src/pages/info/info.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], InfoPage);
    return InfoPage;
    var _a, _b;
}());

//# sourceMappingURL=info.js.map

/***/ })

},[232]);
//# sourceMappingURL=main.js.map