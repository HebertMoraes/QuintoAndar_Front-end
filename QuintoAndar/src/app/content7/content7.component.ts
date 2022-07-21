import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content7',
  templateUrl: './content7.component.html',
  styleUrls: ['./content7.component.sass']
})
export class Content7Component implements OnInit {

  allStatesHighlights: string[] = ["Todas as cidades", "São Paulo", "Rio de Janeiro", "Belo Horizonte",
    "Porto Alegre", "Guarulhos", "Niterói", "Osasco", "Barueri"];

  @ViewChild('optionStateSelectedContent7') optionStateSelectedContent7!: ElementRef;
  nome: string = "";
  list: Array<{nome: string}> = [{nome: "hebert"}, {nome: "hebert2"}];
  
  
  constructor() { }

  ngOnInit(): void {

  }

  public save() {
    this.list.push({nome: this.nome});
    this.nome = "";
    console.log(this.list);
  }

  public deleteLast() {
    this.list.pop();
  }

  public changePositionOfOptionState(option: string) {
    
    this.optionStateSelectedContent7.nativeElement.style.transform = "translateX(700px)";

    //de acordo com o option recebido, setar um valor fixo a ele, e usar no translateX
    //depois, setar a widht do optionStateSelectedContent7 de acordo com a widht 
  }
}
