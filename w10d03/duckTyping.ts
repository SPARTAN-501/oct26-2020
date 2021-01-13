interface IUser {
  username: string;
  password: string;
};

const logIn = (user: IUser): boolean => {
  // compare passwords
  return true;
};

const potentialUser = {
  username: 'hush puppy',
  password: 'secret'
};

const valid = logIn(potentialUser);
