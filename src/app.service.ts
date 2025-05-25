import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  async getRandomNumber(): Promise<number[]> {
    try {
      const response = await firstValueFrom(
        this.httpService.get<number[]>(
          'https://www.randomnumberapi.com/api/v1.0/random',
        ),
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
