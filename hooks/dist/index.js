import express from "express";
import { Prisma, PrismaClient } from "./generated/prisma/index.js";
const app = express();
const client = new PrismaClient();
app.use(express.json());
app.post('/hooks/catch/:userId/:zapId', async (req, res) => {
    const body = req.body;
    const userId = req.params.userId;
    const zapId = req.params.zapId;
    await client.$transaction(async (tx) => {
        const run = await tx.zapRun.create({
            data: {
                zapId: zapId,
                metadata: body
            }
        });
        const runOutbox = await tx.zapRunOutbox.create({
            data: {
                zapRunId: run.id
            }
        });
    });
    res.json({
        msg: "webhook recieved !"
    });
});
app.listen(3000, () => console.log('running server : 3000'));
//# sourceMappingURL=index.js.map