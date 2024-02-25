import {client} from '..';

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  try {
    const query = `
    INSERT INTO users (username, password, name)
    VALUES ($1,$2,$3)
    `;
    const result = await client.query(query, [
      'testing',
      'testing',
      'test',
    ]);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {}
