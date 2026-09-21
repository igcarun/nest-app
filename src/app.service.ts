import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): Object[] {
    return [{
      id: 1,
      name: "Arunkumar Ramasamy",
      email: "abc@gmail.com",
      city: "Chennai"
    }, {
      id: 2,
      name: "Gunaseelan Subramani",
      email: "def@gmail.com",
      city: "Vellore"
    }];
  }
}
