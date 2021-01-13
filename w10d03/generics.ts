interface IContainer<T, B> {
  title: string;
  content: T;
  anotherContent?: B;
};

const stringContainer: IContainer<string, boolean> = {
  title: 'string container',
  content: 'hello'
}

const numberContainer: IContainer<number, void> = {
  title: 'number container',
  content: 42
};