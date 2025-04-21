import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signinInput, signupInput } from "@brijkishor636/medium-common"
import bcrypt from "bcryptjs";
import blogMiddleware from "../middleware";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();


userRouter.post('/signup', async (c) => {

    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);

    if(!success){
      c.status(411);
      return c.json({
        msg: "Incorrect inputs"
      })
    }
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  try {

      const hashPassword = await bcrypt.hash(body.password, 10);
      // console.log(hashPassword);
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: String(hashPassword),
          name: body.name
        }
      })
  
      const userId = user.id;
  
      const token = await sign({userId}, c.env.JWT_SECRET);
  
      c.status(200);
      return c.json({
        msg: "Signed up successfully..",
        token,
      })
  
  } catch (error) {
    console.log(error);
    c.status(500);
    return c.text("Internal error!!")
  }
  
  })
  
  userRouter.post('/signin', async (c) => {
  
        const body = await c.req.json();

        const { success } = signinInput.safeParse(body);

        if(!success){
          c.status(411);
          return c.json({
            msg: "Incorrect inputs"
          })
        }
        const prisma = new PrismaClient({
          datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());
    try {
  
        const user = await prisma.user.findUnique({
          where: {
            email: body.email,
          }
        })
  
        if(!user){
          c.status(400)
          return c.json({
            msg: "Invalid inputs / Doesn't exist"
          })
        }

        const userPassword = user.password;
        const password = body.password;

        const originalPassword = await bcrypt.compare(password, userPassword)
        console.log(originalPassword);
        if(!originalPassword){
          c.status(403);
          return c.json({
            msg: "Incorrect inputs / not found!!"
          })
        }
  
        const userId = user.id
        const token = await sign({userId}, c.env.JWT_SECRET);
      return c.json({
        msg: "Logged in..",
        token
      })
  
    } catch (error) {
      console.log(500);
      c.status(500)
      return c.text('Internal error!!')
    }
  })


  userRouter.get('/allusers', blogMiddleware, async (c)=>{

      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
    try {
          const users = await prisma.user.findMany({});
          return c.json({
            users
          })
    } catch (error) {
        console.log(error);
        c.status(500);
        c.json({
          msg: "Error during fetching users!!"
        })
    }
  })
  