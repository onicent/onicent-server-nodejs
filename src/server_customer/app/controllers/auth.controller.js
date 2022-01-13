import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';

import Users from '../models/user.model';
// import profile from '../models/profile.model';
// import cart from '../models/cart.model';
// import shipping from '../models/shipping.model';
import webConfig from '../configs/auth.config';

import crypto from 'crypto';

class UserController {

  constructor() {
    // this.findUser = this.findUser.bind(this);
  };

  async findUser(key) {
    let users = await Users.findOne(key).populate("roles", "-__v").exec();
    return users;
  };

  async signUp(req, res, next) {
    let requests = req.body;

    console.log(requests);

    async function findUsers(key)  {
      let users = await Users.findOne(key).exec();
      return users;
    };

    let findEmail = await findUsers({ 'email': requests.email });
    if (findEmail) {
      console.log(findEmail);
      return res.status(302).send({ message: 'The Email was registered!' , data: ''});
    }
    let findPhoneNumber = await findUsers({ 'phoneNumber': requests.phoneNumber });
    if (findPhoneNumber) {
      console.log(findPhoneNumber);
      return res.status(302).send({ message: 'The findPhoneNumber was registered!', data: '' });
    }


    // let data = {
    //   ID: '30'+ between(1000000000,  9999999999),
    //   email: requests.email,
    //   password: requests.password,
    //   status: 1
    // };

    // let users = await Users.create(data);

    // function between(min, max) {  
    //   return Math.floor(
    //     Math.random() * (max - min) + min
    //   )
    // }
    

    res.status(200).send({ messenge: 'Login successfully!', data: '' });

  
  };



  async signIn(req, res, next) {
    let requests = req.body;
    await Users.findOne({
      email: req.body.email
    })
      
      .exec((err, user) => {

        if (err) {
          return res.status(500).send({ message: err });;
        }

        if (!user) {
          return res.status(200).send({ message: "Email Not found.", data: null });
        }

       

        var hash = crypto.createHash('sha256').update(requests.password).digest('base64');
        console.log(hash);


        if (user.password === hash) {
          let token = jwt.sign({ id: user.id }, webConfig.secret, {
            // expiresIn: webConfig.token.tokenLife
          });
          //let refreshToken =  RefreshToken.createToken(user);
  
          let authorities = [];
  
          
          let data = {
            id: user.ID,
            username: user.username,
            email: user.email,
            accessToken: token,
            fullname: user.fullname
            // refreshToken: refreshToken
          };
          console.log(requests);
          console.log(data);
  
          res.status(200).send({ messenge: 'Login successfully!', data: data });
          
        }else{
          return res.status(401).send({
            message: "Invalid Password!",
            data: null
          });
        }

      

      });
  };
 


}

export default new UserController;
