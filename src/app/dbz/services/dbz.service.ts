import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krinlin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goky',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 9000
  }];

  addCharacter(Character: Character): void{

    const newCharacter: Character = {id: uuid(), ...Character}; // estamos indicando que el objeto va a tener un id, pero al poner ...Tipo indicamos que también tiene todos los atributos de ese objeto
    // esto { es destructuración }

    this.characters.push(newCharacter);
  }

  //onDeleteCharacter( index:number ) {
  // this.characters.splice(index,1);
  //}
  deleteCharacterById( id:string){
    this.characters = this.characters.filter( character => character.id !== id);
  }

}
