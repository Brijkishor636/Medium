import { verify } from "hono/jwt";
import { createMiddleware } from 'hono/factory'

const blogMiddleware = createMiddleware<{
    Bindings: {
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>(async (c, next)=>{

    const authHeader = c.req.header("Authorization") || "";
    const user = await verify(authHeader, c.env.JWT_SECRET);

    if(user){
        // @ts-ignore
        c.set("userId", user.userId);
        await next();
    }
    else{
        c.status(403);
        return c.json({
            msg : "Not logged in!!"
        })
    }

})

export default blogMiddleware;


