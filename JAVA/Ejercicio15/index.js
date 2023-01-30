const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: false},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 20, premium: true},
    {username: 'sergio58', age: 26, premium: true},
]
const premiumUsers = [];
const nonPremiumUsers = [];

for (const user of users) {
  if (user.premium) {
    console.log(`El usuario ${user.username} es premium`);
    premiumUsers.push(user);
  } else {
    nonPremiumUsers.push(user);
  }
}