import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import bcrypt from 'bcrypt';
import { query } from '../../../lib/db';
import Axios from 'axios';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        let { email, password } = credentials;


        const responseObject = await Axios.post('https://api.bigly24.com/public/api/seller/login', {
          ...credentials,
        });

// console.log(responseObject);
// return responseObject

        return {
          // image: user[0].UserType,
          token: responseObject.data.token,
          email: responseObject.data.user.email,
        };
      },
    }),
  ],
});
