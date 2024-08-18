import { Component } from '@angular/core';
import { ChatgptService } from './chatgpt.service';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Nasa</h1>
    <textarea [(ngModel)] = "prompt" rows="4" cols="50"></textarea>
    <button (click)="getCompletion()">Enviar</button>
    <p>SpringApi: {{ hello }}</p>
    -<p>Respuesta: {{ response }}</p>
    <p>Foto: <img src="{{ imagen }}"></p>
  </div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nasa News!!!';

  prompt: string = '';
  response: string = '';
  imagen:string = '';
  hello:string='';

  constructor(private chatgptService: ChatgptService){}

  getCompletion(){

      this.chatgptService.helloSpring().subscribe(
        data=>this.hello=data);

      this.chatgptService.getCompletion().subscribe(
      data=>(this.response = data.explanation,
      this.prompt = data.date, this.imagen = data.url),
      error=>console.error('Error',error));

     

    }
  
}
