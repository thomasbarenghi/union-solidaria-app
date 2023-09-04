export class UserClass {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  profileImage: string;
  email: string;
  isSuperAdmin: boolean;
  softDelete: boolean;
  bannerImage: string;
  role: "volunteer" | "organization";

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    profileImage: string,
    email: string,
    isSuperAdmin: boolean,
    softDelete: boolean,
    coverImage: string,
    role: "volunteer" | "organization" = "volunteer",
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.profileImage = profileImage;
    this.email = email;
    this.isSuperAdmin = isSuperAdmin;
    this.softDelete = softDelete;
    this.bannerImage = coverImage;
    this.role = role;
  }

  getId(): string {
    return this.id;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getUsername(): string {
    return this.username;
  }

  getProfileImage(): string {
    return this.profileImage;
  }

  getEmail(): string {
    return this.email;
  }

  getIsSuperAdmin(): boolean {
    return this.isSuperAdmin;
  }

  getSoftDelete(): boolean {
    return this.softDelete;
  }

  getCoverImage(): string {
    return this.bannerImage;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  static deserialize(input: any): UserClass {
    return new UserClass(
      input.id,
      input.firstName,
      input.lastName,
      input.username,
      input.profileImage,
      input.email,
      input.isSuperAdmin,
      input.softDelete,
      input.coverImage,
    );
  }
}
