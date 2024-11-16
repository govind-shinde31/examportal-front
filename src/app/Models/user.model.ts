// user.model.ts
export interface User {
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    profile: string;
    enable: boolean;
    userRoles: UserRole[];
  }
  
  // Assuming UserRole has properties that need to be defined, create the following interface
  export interface UserRole {
    // Define properties for UserRole interface as per your requirements
    id: number;
    roleName: string;
    // Other properties if applicable
  }
  