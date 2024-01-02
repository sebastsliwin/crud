import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { HeaderComponent } from '../shared-component/header/components/header.component';
import { CardComponent } from '../shared-component/card/card.component';
import { TableComponent } from '../shared-component/table/components/table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from '../shared-controls/input-text/input-text.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HeaderComponent,
    CardComponent,
    TableComponent,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    InputTextComponent,
  ],
})
export class UsersModule {}
