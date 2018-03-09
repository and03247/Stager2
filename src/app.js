i//import { inject } from '../node_modules/aurelia-framework/dist/aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';
import { HubConnection } from 'signalr-client';

export class App {
  constructor() {
    console.log("what what what");
    this.message = 'Hello WBorld!';

    this.httpClient = new HttpClient();
    this.httpClient.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:9000/')
        .withDefaults({
          headers: {
            'content-type': 'application/json',
            'Accept': 'application/json',
            'X-Requested-With': 'Fetch'
          }
        })
    });

    let connection = new HubConnection('http://localhost:57363/sync');

    connection.on('send', data => {
      console.log(data);
    });

    connection.start().then(() => console.log("Connected"));
  }

  activate() {
    let message = 'hihihihi';

    this.httpClient.fetch('api/message', {
      method: 'post',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        this.message = response;
        console.log(response);
      });
  }

  sendMessage() {
    let message = 'hihihihi';

    this.httpClient.fetch('api/message', {
      method: 'post',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        this.message = response;
        console.log(response);
      });
  }
}
