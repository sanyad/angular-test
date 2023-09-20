export class UserModel {
  id: number | null;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  user_type: 'Admin' | 'Drive';

  constructor(data: any) {
    this.id = +data.id || null;
    this.username = data.username || null;
    this.first_name = data.firstname || null;
    this.last_name = data.lastname || null;
    this.email = data.email || null;
    this.password = data.password || null;
    this.confirm_password = data.confirm_password || null;
    this.user_type = data.user_type || 'Drive';
  }
}
