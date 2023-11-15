const employee = {
  id: {
    $oid: '6555197bfc13ae512d22b684',
  },
  email: 'kbowling0@rediff.com',
  address: '2798 Nancy Drive',
  firstName: 'Kelsey',
  lastName: 'Bowling',
  img: 'http://dummyimage.com/180x100.png/5fa2dd/ffffff',
  role: 'Electrician',
  socialMedia: {
    tw: 'https://twitter.com',
    ig: 'https://www.instagram.com/',
    li: 'https://www.linkedin.com',
  },
};

const _id = employee.id.$oid

employee.id = _id

const value = employee


console.log(value);