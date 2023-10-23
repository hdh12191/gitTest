import _ from 'lodash'

const user = {
  name: 'Heropy',
  age: 85,
  emails: ['thesecom@gamil.com']
}
const copyUser = _.cloneDeep(user)
console.log(copyUser === user)

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

console.log('------')
console.log('------')

user.emails.push('neo@zillnks.com')
console.log(user.emails === copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser)
// console.log('copyUser', copyUser)
