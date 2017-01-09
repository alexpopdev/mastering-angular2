import {
  Injectable
} from '@angular/core';
import {
  Model
} from './model';

@Injectable()
export class AppService {
  private models: Model[];

  constructor() {
    this.models = [{
      id: 1,
      description: 'First component has loaded.'
    }, {
      id: 2,
      description: 'Second component has loaded.'
    }];

  }

  getModels() {
    return this.models;
  }
}
