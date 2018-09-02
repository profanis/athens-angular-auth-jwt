import { MuseumModule } from './museum.module';

describe('MuseumModule', () => {
  let museumModule: MuseumModule;

  beforeEach(() => {
    museumModule = new MuseumModule();
  });

  it('should create an instance', () => {
    expect(museumModule).toBeTruthy();
  });
});
