import { makeAutoObservable } from 'mobx';

class UserStore {
  public token = '';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export const userStore = new UserStore();
