const trimmer = require('../lib/trimmer');

describe('trimmer function tests', function () {
  it('should trim strings inside an object', function () {
    const payload = {
      name: ' Dimitri Wahyudiputra       ',
      phoneNumber: '+6281234567890 ',
      address: ' Somewhere on earth      ',
      followers: 666,
      bio: null,
    };

    expect(trimmer(payload)).toStrictEqual({
      name: 'Dimitri Wahyudiputra',
      phoneNumber: '+6281234567890',
      address: 'Somewhere on earth',
      followers: 666,
      bio: null,
    });
  });

  it('should trim strings inside an object', function () {
    const payload = {
      name: '  Dimitri Wahyudiputra',
      hobbies: ['  Playing guitar ', 'Playing Tekken'],
      personalInfo: {
        phoneNumber: ' +6281234567890   ',
        address: ' Somewhere on earth',
      },
      isPrivate: true,
    };
    expect(trimmer(payload)).toStrictEqual({
      name: 'Dimitri Wahyudiputra',
      hobbies: ['Playing guitar', 'Playing Tekken'],
      personalInfo: {
        phoneNumber: '+6281234567890',
        address: 'Somewhere on earth',
      },
      isPrivate: true,
    });
  });

  it('should trim strings inside an object', function () {
    const payload = {
      name: ' Dimitri',
      followers: [
        {
          name: 'Sergei ',
          bio: null,
          personalInfo: {
            address: '   Somewhere on earth',
            phoneNumber: ' +7 123-45-67   ',
          },
        },
        {
          name: '    Bogdan ',
          bio: null,
          personalInfo: {
            address: '   Somewhere on earth     ',
            phoneNumber: ' +7 123-45-68   ',
          },
        },
      ],
    };

    expect(trimmer(payload)).toStrictEqual({
      name: 'Dimitri',
      followers: [
        {
          name: 'Sergei',
          bio: null,
          personalInfo: {
            address: 'Somewhere on earth',
            phoneNumber: '+7 123-45-67',
          },
        },
        {
          name: 'Bogdan',
          bio: null,
          personalInfo: {
            address: 'Somewhere on earth',
            phoneNumber: '+7 123-45-68',
          },
        },
      ],
    });
  });
});
