type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>):User {
    // Оновлення користувача
    const updateUser: User = {
        name: '',
        surname: '',
        email: '',
        password: ''
    };
    return { ...updateUser, ...initialValues };
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
