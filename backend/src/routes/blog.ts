import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import blogMiddleware from "../middleware";
import { createBlogInput, updateBlogInput } from "@brijkishor636/medium-common";


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string;
    }
}>();


blogRouter.post('/', blogMiddleware, async (c) => {

    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            msg: "Incorrect inputs!!"
        })
    }
    const authorId = c.get("userId");

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: Number(authorId)
            }
        })
    
        return c.json({
            id: blog.id,
            msg: "Blog created successfully"
        })
      
    } catch (error) {
        console.log(error);
        c.status(500);
        return c.text("Internal error!!")
    }
})
  
  blogRouter.put('/', blogMiddleware, async (c) => {

    const body = await c.req.json();

    const { success } = updateBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            msg: "Incorrect inputs!!"
        })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const blog = await prisma.blog.update({
            where:{
                id: body.id
            },data: {
                title: body.title,
                content: body.content,
            }
        })
    
        return c.json({
            id: blog.id,
            msg: "Blog updated successfully"
        })
      
    } catch (error) {
        console.log(error);
        c.status(400);
        return c.text("Error during updating!!")
    }
    
  })


  blogRouter.get("/bulk", async (c)=>{
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const blogs = await prisma.blog.findMany({
            select: {
                title: true,
                content: true,
                id: true,
                author: {
                    select:{
                        name: true,
                    }
                }
            }
        })
        
        return c.json({
            blogs
        })
    } catch (error) {
        console.log(error);
        c.status(400);
        return c.json({
            msg: "Error while fetching blogs!!!!!!"
        })
    }

  })
  
  blogRouter.get('/:id', async (c) => {

    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const blog = await prisma.blog.findFirst({
            where : {
                id: Number(id),
            },
            select: {
                title: true,
                content: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })

        return c.json({
            blog,
        })
    } catch (error) {
        console.log(error);
        c.status(400);
        return c.json({
            msg: "Error while fetching blogs!!"
        })
    }
  })

