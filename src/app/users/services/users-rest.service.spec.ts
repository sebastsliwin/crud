import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UsersRestService } from './users-rest.service';
import { lastValueFrom } from 'rxjs';
import { User, users } from '../models/users.model';

describe('UsersRestService', () => {
  let service: UsersRestService;
  let _users: User[] = users;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersRestService],
    }).compileComponents();

    service = TestBed.inject(UsersRestService);
  });

  it('should get all users', async () => {
    const allUsers = await lastValueFrom(service.getUsers());

    expect(allUsers).toEqual(_users);
  });

  it('should get user by id', async () => {
    const user = await lastValueFrom(service.getUser(0, users));

    expect(user).toEqual({
      id: 0,
      name: 'Jan Kowalski',
      age: 30,
      email: 'jan.kowalski@example.com',
    });
  });

  it('should create user', async () => {
    const user = {
      name: 'New User',
      email: 'example@example.pl',
      age: 100,
    };

    await lastValueFrom(service.createUser(user, users));
    _users = await lastValueFrom(service.getUsers());
    const createdUser = await lastValueFrom(
      service.getUser(users.length, _users)
    );

    expect(createdUser).toEqual({
      id: users.length,
      name: 'New User',
      email: 'example@example.pl',
      age: 100,
    });
  });

  it('should update user', async () => {
    const user = {
      id: 1,
      name: 'Updated User',
      email: 'example@example.pl',
      age: 212,
    };

    await lastValueFrom(service.updateUser(user, users));
    _users = await lastValueFrom(service.getUsers());
    const updatedUser = await lastValueFrom(service.getUser(1, _users));

    expect(updatedUser).toEqual({
      id: 1,
      name: 'Updated User',
      email: 'example@example.pl',
      age: 212,
    });
  });
});
