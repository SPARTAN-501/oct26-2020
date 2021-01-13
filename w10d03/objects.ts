interface IFriend {
  firstName: string;
};

interface IAuthor {
  id?: number;
  penName: string;
  numberOfBooks: number;
  password?: string | number;
  books?: (string | number)[];
  friend?: IFriend;
  friends?: IFriend[];
}

const author: IAuthor = {
  penName: 'HP Lovecraft',
  numberOfBooks: 7
};

const authors: IAuthor[] = [];
authors.push(author);
// authors.push('anything else');
