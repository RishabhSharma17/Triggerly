import express from "express";
import { PrismaClient } from "../prisma/generated/prisma";


const app = express();
const client = new PrismaClient();


app.post('/hooks/catch/:userId/:zapId', async (req,res)=>{
    const userId = req.params.userId;
    const zapId = req.params.zapId;
    const body = req.body;

    await client.$transaction(async tx => {
        const run = await tx.zapRun.create({
            data:{
                zapId:zapId,
                metadata:body
            }
        });

        const runOutbox = await tx.zapRunOutbox.create({
            data:{
                zapRunId:run.id
            }
        });
    })

});


app.listen(3000);