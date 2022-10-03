import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteUser } from 'src/app/utils/store/action/user.actions';
import { userState } from 'src/app/utils/store/reducer/user.reducer';
import { selectusers } from 'src/app/utils/store/selector/user.selectors';
import { User } from 'src/app/utils/store/User';
import { ApiService } from 'src/app/shared/services/services';

declare let $: any;
const EDIT = 'edit';
const DELETE = 'delete';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  headers = ['name', 'username', 'email', 'actions'];
  shouldShowActions: boolean = true;
  data: any = {};
  deleteUserInfo: boolean = false;

  users: any;

  users$: Observable<User[]>;

  constructor(
    private store: Store<userState>,
    private modalService: NgbModal,
    private apiService: ApiService
  ) {
    this.users$ = this.store.pipe(select(selectusers));
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.apiService.getEmployees().subscribe((res: any) => {
      this.users = res.map((each: any) => ({
        id: each.id,
        name: each.name,
        username: each.username,
        email: each.email,
      }));
    });
  }

  onClickAddUser() {
    $('#addUser_modal').modal('show');

    this.data = { name: '', username: '', email: '' };
    this.deleteUserInfo = false;
  }

  public handleUserActions = (name: string, user: any) => {
    if (name == EDIT) this.editUser(user);
    if (name == DELETE) this.deleteUser(user);
  };

  editUser(data: any) {
    $('#addUser_modal').modal('show');

    this.data = data;
    this.deleteUserInfo = false;
  }

  deleteUser(data: any) {
    $('#addUser_modal').modal('show');

    this.data = data;
    this.deleteUserInfo = true;
  }

  performDeleteAction(data: any) {
    this.store.dispatch(deleteUser({ id: data?.id }));

    this.apiService.deleteEmployee(data?.id).subscribe(() => this.getUsers());

    this.closeModal();
  }

  closeModal() {
    $('#addUser_modal').modal('hide');

    this.data = {};
  }
}
