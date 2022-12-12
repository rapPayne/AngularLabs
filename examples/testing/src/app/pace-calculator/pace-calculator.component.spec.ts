import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { PaceCalculatorComponent } from './pace-calculator.component';
import { Input } from '@angular/core';
import { PaceService } from './pace.service';

describe('PaceCalculatorComponent', () => {
  let component: PaceCalculatorComponent;
  let fixture: ComponentFixture<PaceCalculatorComponent>;
  let mockPaceService: jasmine.SpyObj<PaceService>;

  beforeEach(async () => {
    mockPaceService = jasmine.createSpyObj('PaceService', ['calcPace', 'getMinutesFromTimeString']);
    await TestBed.configureTestingModule({
      declarations: [PaceCalculatorComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: PaceService, useValue: mockPaceService }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PaceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has a select list for distance', () => {
    const sel = fixture.nativeElement.querySelector('select#distance')
    expect(sel).not.toBeNull()
    const label = fixture.nativeElement.querySelector('label[for="distance"]');
    expect(label.textContent).toMatch(/distance/i)
  });

  it('has an option that says "pick one"', () => {
    const sel = fixture.nativeElement.querySelector('select#distance')
    const optionsNodeList: NodeList = sel.querySelectorAll('option');
    const options = Array.from(optionsNodeList)
    const pickOneOption = options.find((o: any) => o.textContent.match(/(select|pick)\sone/i))
    expect(pickOneOption).toBeTruthy();
  });

  it('has at least three options: marathon, 10k, 5k', () => {
    const sel = fixture.nativeElement.querySelector('select#distance')
    const optionsNodeList: NodeList = sel.querySelectorAll('option');
    const options: Node[] = Array.from(optionsNodeList);
    [{ regex: /marathon/i, miles: 26.2 }, { regex: /10k/i, miles: 6.214 }, { regex: /5k/i, miles: 3.107 }]
      .forEach((obj: { regex: RegExp, miles: number }) => {
        const found = options.find((o: any) => o.textContent.match(obj.regex));
        expect(found).toBeTruthy();
        expect(found?.textContent).toMatch(obj.regex)
        expect((<HTMLOptionElement>found).value).toBeCloseTo(+obj.miles, 0.1)
      })
  });

  it('has a textbox for duration', () => {
    const box = fixture.nativeElement.querySelector('input#duration')
    expect(box).not.toBeNull()
    const label = fixture.nativeElement.querySelector('label[for="duration"]');
    expect(label.textContent).toMatch(/duration/i)
  })

  it('duration accepts valid values', () => {
    const box = fixture.nativeElement.querySelector('input#duration')
    expect(box).not.toBeNull();
    [
      "00:00:00", "99:59:59", "4:8:2", "04:08:02", "40:02", "40:2"
    ].forEach(validValue => {
      box.value = validValue;
      const box2 = fixture.nativeElement.querySelector('input#duration')
      //console.log({ validValue, boxval: box2.value })
      box.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(component.duration.valid).toBeTruthy()
      const errorElement = fixture.nativeElement.querySelector('#badDurationError')
      expect(errorElement).toBeNull()
    })
  });

  // This was here to show that using ngModel can't be validated except through E2E testing.
  // it('shows ngModel error message for bad durations', () => {
  //   const box = fixture.nativeElement.querySelector('input#duration')
  //   expect(box).not.toBeNull();
  //   box.value = "any string";
  //   box.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();
  //   //expect(component.duration.invalid).toBeTruthy()
  //   const errorElement = fixture.nativeElement.querySelector('#badDurationError')
  //   expect(errorElement).not.toBeNull()
  // });

  it('shows error message for bad durations', () => {
    const box = fixture.nativeElement.querySelector('input#duration')
    expect(box).not.toBeNull();
    [
      "00", "any string", "", "x04:08:02x",
    ].forEach(invalidValue => {
      box.value = invalidValue;
      box.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(component.duration.invalid).toBeTruthy()
      const errorElement = fixture.nativeElement.querySelector('#badDurationError')
      expect(errorElement).not.toBeNull()
    })
  });

  it('displays a proper pace when given a duration and distance', () => {
    //Arrange
    const calcPaceSpy = mockPaceService.calcPace.and.returnValue(9.656)
    const durationInput = fixture.nativeElement.querySelector('#duration')
    const distanceSelect = fixture.nativeElement.querySelector('#distance')
    const button = fixture.nativeElement.querySelector('button');
    const paceOutput = fixture.nativeElement.querySelector('#pace');
    durationInput.value = 30;
    distanceSelect.value = 3.107;
    durationInput.dispatchEvent(new Event('input'));
    distanceSelect.dispatchEvent(new Event('input'));
    fixture.detectChanges()
    //Act
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges()
    //Assert
    const pace = +paceOutput.textContent;
    expect(pace).toBeCloseTo(9.656, 2)
    expect(calcPaceSpy).toHaveBeenCalledTimes(1)
    //RAP: Why doesn't the following work?
    //expect(calcPaceSpy).toHaveBeenCalledWith(3.107, 30);
  });
});
