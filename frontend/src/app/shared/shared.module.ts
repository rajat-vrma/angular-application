import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserActionsModalComponent } from './components/user-actions-modal/user-actions-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer, userFeatureKey } from '../utils/store/reducer/user.reducer';
import { ButtonComponent } from './components/atoms/button/button.component';
import { InputComponent } from './components/atoms/input/input.component';
import { DatepickerComponent } from './components/atoms/datepicker/datepicker.component';
import { LabelComponent } from './components/atoms/label/label.component';
import { TableComponent } from './components/molecules/table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from './services/services';

@NgModule({
  declarations: [
    UserActionsModalComponent,
    ButtonComponent,
    InputComponent,
    DatepickerComponent,
    LabelComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(userFeatureKey, reducer),
    NgbModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    UserActionsModalComponent,
    ButtonComponent,
    TableComponent,
    InputComponent,
    DatepickerComponent,
    LabelComponent,
  ],
  providers: [ApiService],
})
export class SharedModule {}
