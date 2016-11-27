import {
  Injectable
} from '@angular/core';

@Injectable()
export class AppService {
  private componentDescriptions: string[];
  private componentMessages: string[];

  constructor() {
    this.componentDescriptions = [
      'The first child component goes here',
      'The second child component goes here'
    ];

    this.componentMessages = [];
  }

  getComponentDescription(index: number): string {
    return this.componentDescriptions[index];
  }

  onComponentMessageReceived(message: string): void {
    this.componentMessages.push(message);    
  }

   getComponentMessages(): string[] {    
    return this.componentMessages;
  }
}
