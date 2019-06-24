
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          first_name: 'Bernard',
          last_name: 'Johnson',
          email: "letslearntechyt@gmail.com",
          phone: "11111111111",
          password: "abc123"
        },
        {
          id: 2, 
          first_name: 'Robin',
          last_name: 'Johnson',
          email: "letslentechyt@gmail.com",
          phone: "11122211111",
          password: "def456"
        },
        {
          id: 3, 
          first_name: 'Amelia',
          last_name: 'Johnson',
          email: "letarntechyt@gmail.com",
          phone: "11133311111",
          password: "ghi567"
        },
      ]);
    });
};