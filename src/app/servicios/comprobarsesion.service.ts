import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprobarsesionService {


  public logueo = new BehaviorSubject<boolean>(false);

  constructor() {}

  
}
