const sayHello = (personName: string, book: string, age?: number): string => {
  return `hello ${personName}`;
};

const result = sayHello('Carol', 'hello world');

const doesntReturnAnything = (bool: boolean): void => {
  console.log('hey there');
  // return null;
};

const returningPromise = (title: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    resolve(title);
  });
};

returningPromise('Hewlett Packard')
  .then((data) => {});


const higherOrder = (cb: (dogName: string) => number): () => boolean => {
  cb('hush puppy');
  return () => false;
};

higherOrder((whatever: string) => {
  return 42;
});
