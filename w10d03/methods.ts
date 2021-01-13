interface IDog {
  hasWorms: boolean;
  breed: string;
  deworm: (medicationNumber: number) => boolean;
};

const dog: IDog = {
  hasWorms: true,
  breed: 'hush puppy',
  deworm: (medicationNumber) => {
    // other stuff
    return false;
  }
};
