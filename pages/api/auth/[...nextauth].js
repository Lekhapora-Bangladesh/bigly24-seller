import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import bcrypt from 'bcrypt';
import { query } from '../../../lib/db';
import Axios from 'axios';

export default NextAuth({
  // session: {
  //   jwt: false,
  // },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        let { email, password } = credentials;


        const user = await Axios.post('https://api.bigly24.com/public/api/seller/login', {
          ...credentials,
        });


        // if(user) {
        //   console.log('from auth',user);
        //   return user
        // }else{
        //   return null
        // }

// console.log(responseObject);
// return responseObject
        
        if( user.status === 200 ){
          return {
            image: user.data.token,
            name: user.data.user.name,
            email: user.data.user.email,
          };
        }

        else {
          return {
            errorMessage : user.message
          }
        }

      },
    }),
  ],
});
