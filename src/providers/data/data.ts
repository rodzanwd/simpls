import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  items: any;
  produtos: any;
  products: any;
  posts: any;
  brands: any;
  users: any;
  lists: any;
  events: any;

  headers;

  public apiUrl = 'http://simpls-me.umbler.net/api/';

 
  constructor(
    private http: Http,
    private storage: Storage
  ) {

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

  public get(token, rota) {

    let headers = new Headers({
      'x-access-token': token
    });

    return new Promise(resolve => {
      this.http 
        .get(this.apiUrl + rota, { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, err => {
          console.error('Deu ruim', err);
        }
      );
    });
  }
 
public post(data, rota) {
  let headers = new Headers();
  headers.append('Content-type', 'application/json');

  return new Promise(resolve => {
    this.http
      .post(this.apiUrl+'login', data, { headers: headers })
      .subscribe(result => {
        resolve(result);
        let token = result.headers.get('x-access-token');
        if(token != null){
          this.storage.set('token', token);
        }
      }, err => {
        console.error('Deu ruim', err);
      })
    ;
  })
}

public updateCarrinho(data, rota, token) {
  
  let headers = new Headers({
    'Content-type': 'application/json',
    'x-access-token': token

  });

  return new Promise(resolve => {
    this.http
      .put(rota, data, { headers: headers })
      .subscribe(result => {
        resolve(result);
        let token = result.headers.get('x-access-token');
        if(token != null){
          this.storage.set('token', token);
        }
        console.log(token)
      }, err => {
        console.error('Deu ruim', err);
      })
    ;
  })
}

public update(data, rota, token) {

  let headers = new Headers({
    'Content-type': 'application/json',
    'x-access-token': token

  });

  return new Promise(resolve => { 
    this.http
      .put(this.apiUrl+'users', data, { headers: headers })
      .subscribe(result => {
        resolve(result);
        let token = result.headers.get('x-access-token');
        if(token != null){
          this.storage.set('token', token);
        }
        console.log(token) 
      }, err => {
        console.error('Deu ruim', err);
      })
    ;
  })
}

  filterItems(searchTerm){

      return this.products.filter((product) => {
        return product.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });  

  }

  filterPosts(searchTerm){

    return this.posts.filter((post) => {
      return post.titulo.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });  

  }

  filterBrands(searchTerm){

    return this.brands.filter((marca) => {
      return marca.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
   

}

  


}
