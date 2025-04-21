import { Hono } from 'hono'

import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>()

app.use('/*', cors())

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);



export default app

// postgres://avnadmin:AVNS_yJJiDbFr4dgtX3Ui6Nq@pg-cbc4675-brijkishor6206971311-8a84.k.aivencloud.com:15567/defaultdb?sslmode=require

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjd9.XoJa_kYElCkItvYDE3WukwL9IiGy90JAh8yYnZH_H1k

// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiZDJmMTZkZDktNWQ3Mi00MmU1LWExYjgtNGQ0NDNjYjUwNDFmIiwidGVuYW50X2lkIjoiMDUyNjBmYjJjNDIyZTdlNWJmMmMzNjk2MzQzYzQ5NmU2NzJhZTUwNWEyZTU0NTFjYTQ2YmI3NTZkMzhiNWZiNiIsImludGVybmFsX3NlY3JldCI6ImJiZDU0NWU1LWZmMmMtNDg2NS04YzRmLTQyNzhiY2E0M2MyMiJ9.ILVTmBYyVlwQhrtkGqg5dhThcyoZqbzssRzYsI5W374"