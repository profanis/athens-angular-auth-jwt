import { HotelModule } from './hotel.module';

describe('HotelModule', () => {
  let hotelModule: HotelModule;

  beforeEach(() => {
    hotelModule = new HotelModule();
  });

  it('should create an instance', () => {
    expect(hotelModule).toBeTruthy();
  });
});
