//imports of angular
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';

//imports of ionic
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';

import { Storage } from '@ionic/storage';

//import principal component
import { MyApp } from './app.component';

//import providers
import { DataProvider } from '../providers/data/data';

//import pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { ProdutoPage } from '../pages/produto/produto';
import { BrandpagesPage } from '../pages/brandpages/brandpages';
import { CarrinhoPage } from '../pages/carrinho/carrinho';
import { OpinioesPage } from '../pages/opinioes/opinioes';
import { PerfilPage } from '../pages/perfil/perfil';
import { ListasPage } from '../pages/listas/listas';
import { PostsPage } from '../pages/posts/posts';
import { EventosPage } from '../pages/eventos/eventos';
import { WelcomePage } from '../pages/welcome/welcome';
import { VerificaUsuarioPage } from '../pages/verifica-usuario/verifica-usuario';
import { Cadastro2Page } from '../pages/cadastro2/cadastro2';
import { CadastroAviso1Page } from '../pages/cadastro-aviso1/cadastro-aviso1';
import { CadastroAviso2Page } from '../pages/cadastro-aviso2/cadastro-aviso2';
import { ContinuaCadastroPage } from '../pages/continua-cadastro/continua-cadastro';
import { EscolheCategoriasPage } from '../pages/escolhe-categorias/escolhe-categorias';
import { Facebook } from '@ionic-native/facebook';
import { MarcaPage } from '../pages/marca/marca';
import { BrandPage } from '../pages/brand/brand';
import { EditarPerfilPage } from '../pages/editar-perfil/editar-perfil';
import { MensagensPage } from '../pages/mensagens/mensagens';
import { FormasPagamentoPage } from '../pages/formas-pagamento/formas-pagamento';
import { EnderecosCadastradosPage } from '../pages/enderecos-cadastrados/enderecos-cadastrados';
import { NotificacoesPage } from '../pages/notificacoes/notificacoes';
import { InfoPage } from '../pages/info/info';
import { DuvidasPage } from '../pages/duvidas/duvidas';
import { TotalPedidosPage } from '../pages/total-pedidos/total-pedidos';
import { DuvidasRespostasPage } from '../pages/duvidas-respostas/duvidas-respostas';
import { FacaSuaPerguntaPage } from '../pages/faca-sua-pergunta/faca-sua-pergunta';

//components
import { AvaliarPage } from '../pages/avaliar/avaliar';
import { HeaderComponent } from '../components/header/header';
import { FooterComponent } from '../components/footer/footer';
import { ModalComponent } from '../components/modal/modal';
import { SlideComponent } from '../components/slide/slide';
import { TermosPage } from '../pages/termos/termos';
import { PoliticaPage } from '../pages/politica/politica';

function provideStorage() {
  return new Storage({ 
    name: 'simpls.db',
    storeName: 'usuario'
  });
}

function provideStorage2() {
  return new Storage({ 
    name: 'simpls.db',
    storeName: 'carrinho'
  });
}

//declarations, imports, compoents and providers
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CadastroPage,
    Cadastro2Page,
    CadastroAviso1Page,
    CadastroAviso2Page,
    ContinuaCadastroPage,
    EscolheCategoriasPage,
    WelcomePage,
    VerificaUsuarioPage,
    ProdutoPage,
    BrandpagesPage,
    BrandPage,
    CarrinhoPage,
    OpinioesPage,
    PerfilPage,
    EditarPerfilPage,
    ListasPage,
    PostsPage,
    EventosPage,
    MarcaPage,
    MensagensPage,
    FormasPagamentoPage,
    EnderecosCadastradosPage,
    NotificacoesPage,
    InfoPage,
    DuvidasPage,
    TotalPedidosPage,
    DuvidasRespostasPage,
    FacaSuaPerguntaPage,
    AvaliarPage,
    TermosPage,
    PoliticaPage,
    ModalComponent,
    HeaderComponent,
    FooterComponent,
    SlideComponent
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CadastroPage,
    Cadastro2Page,
    CadastroAviso1Page,
    CadastroAviso2Page,
    ContinuaCadastroPage,
    EscolheCategoriasPage,
    WelcomePage,
    VerificaUsuarioPage,
    ProdutoPage,
    BrandpagesPage,
    BrandPage,
    CarrinhoPage,
    OpinioesPage,
    PerfilPage,
    EditarPerfilPage,
    ListasPage,
    PostsPage,
    EventosPage,
    MarcaPage,
    MensagensPage,
    FormasPagamentoPage,
    EnderecosCadastradosPage,
    NotificacoesPage,
    InfoPage,
    DuvidasPage,
    TotalPedidosPage,
    DuvidasRespostasPage,
    FacaSuaPerguntaPage,
    AvaliarPage,
    TermosPage,
    PoliticaPage,
    ModalComponent,
    HeaderComponent,
    FooterComponent,
    SlideComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: Storage, useFactory: provideStorage },
    { provide: 'StorageCarrinho', useFactory: provideStorage2 },
    DataProvider,
    Facebook,
    SocialSharing,
    FooterComponent,
    SlideComponent
  ]
})
export class AppModule {}
