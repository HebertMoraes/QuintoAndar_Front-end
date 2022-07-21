import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.sass']
})
export class BottomSheetComponent implements OnInit {

  @Input() bottomSheetType!: string;
  @Input() options!: { text: string, iconImg: string, optionAction: string, secondText?: string }[];
  @Input() open?: boolean = false;
  @Input() tittle?: string;

  @Output() clickOption = new EventEmitter();

  @ViewChild('shapeBottomSheet') shapeBottomSheet!: ElementRef;

  constructor() { }

  ngOnInit(): void {

    setInterval( ()=> {
      if (this.open){
        this.open = false;
      } else {
        this.open = true;
      }
    }, 3000);
  }

  ngAfterViewInit(): void {

  }

  public clickOnOption(optionAction: string) {

    //o que subir por esse parâmetro string optionAction, o componente pai terá de fazer uma verificação 
    //de qual string é para executar a função correta da opção clicada
    this.clickOption.emit(optionAction);
  }
}
