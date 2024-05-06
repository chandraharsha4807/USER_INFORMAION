export const GET_ALL_USERS = function () {
  return `query{
          getUsers{
            id,
            name,
            userName,
            password,
            email,
            status
          }
    }`
}
