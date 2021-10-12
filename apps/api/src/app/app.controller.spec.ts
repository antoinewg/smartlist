import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  afterEach(async () => {
    app.get(AppController).clearTodos();
  });

  it('should return empty todos', () => {
    const appController = app.get<AppController>(AppController);
    expect(appController.getData()).toEqual([]);
  });

  it('should create todo', () => {
    const appController = app.get<AppController>(AppController);
    const text = 'Create something amazing';
    appController.create({ text });
    expect(appController.getData()).toEqual([{ done: false, id: 0, text }]);
  });

  it('should set todo', () => {
    const appController = app.get<AppController>(AppController);
    const text = 'Create something amazing';
    appController.create({ text });
    appController.setDone({ id: 0, done: true });
    expect(appController.getData()).toEqual([{ done: true, id: 0, text }]);
    appController.setDone({ id: 0, done: false });
    expect(appController.getData()).toEqual([{ done: false, id: 0, text }]);
  });
});
