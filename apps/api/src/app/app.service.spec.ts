import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  afterEach(async () => {
    service.clearTodos();
  });

  it('should return empty todos', () => {
    expect(service.getData()).toEqual([]);
  });

  it('should add todo', () => {
    const text = 'Create something amazing';
    service.add(text);
    expect(service.getData()).toEqual([{ done: false, id: 0, text }]);
  });

  it('should set todo', () => {
    const text = 'Create something amazing';
    service.add(text);
    service.setDone(0, true);
    expect(service.getData()).toEqual([{ done: true, id: 0, text }]);
    service.setDone(0, false);
    expect(service.getData()).toEqual([{ done: false, id: 0, text }]);
  });
});
