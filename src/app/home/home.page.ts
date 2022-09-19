import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  senha: string = null;
  pontuacao: number = 0;
  frase: string = ""
  imagem: string = ''

  constructor() { }

  verificarSenha() {
    this.pontuacao = 0;

    if (this.senha.match(/[a-z]/))
      this.pontuacao++;

    if (this.senha.match(/[A-Z]/))
      this.pontuacao++;

    if (this.senha.match(/[0-9]/))
      this.pontuacao++;

    if (this.senha.length > 8)
      this.pontuacao++

    if (this.pontuacao == 0) {
      this.frase = 'Senha Muito Fraca'
      this.imagem = '';

    } else if (this.pontuacao == 1) {
      this.frase = 'Senha Fraca'
      this.imagem = '../../assets/senha/1.png'

    } else if (this.pontuacao == 2) {
      this.frase = 'Senha Média'
      this.imagem = '../../assets/senha/2.jpg'

    } else if (this.pontuacao == 3) {
      this.frase = 'Senha Forte'
      this.imagem = '../../assets/senha/3.png';
    } else {
      this.frase = 'Senha Muito Forte'
      this.imagem = '../../assets/senha/4.jpg';
    }
  }

}
