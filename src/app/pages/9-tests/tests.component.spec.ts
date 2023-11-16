import { ComponentFixture, TestBed, DeferBlockState } from '@angular/core/testing';
import { TestsComponent } from './tests.component';

describe('TestsComponent', () => {
  let component: TestsComponent;
  let fixture: ComponentFixture<TestsComponent>;
  const completeExpected = 'Michi Diferido';
  const loadingExpected = 'spinner';
  const placeholderExpected = 'Placeholder';
  const errorExpected = 'Oops! Something went wrong.';
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render a defer block in complete state', async () => {
    const deferFixture = (await fixture.getDeferBlocks())[0];
    await deferFixture.render(DeferBlockState.Complete);
    expect(fixture.nativeElement.innerHTML).toContain(completeExpected);
  });
});
