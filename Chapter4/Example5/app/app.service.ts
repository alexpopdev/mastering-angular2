import {
  Injectable,
  EventEmitter
} from '@angular/core';

@Injectable()
export class AppService {
  private componentDescriptions: string[];
  private componentMessages: string[];
  public appServiceMessage$ = new EventEmitter <string> ();

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

  sendMessage(message: string): void {
    this.componentMessages.push(message);
    this.appServiceMessage$.emit(message);
  }

  getComponentMessages(): string[] {
    return this.componentMessages;
  }
}
