import { Kafka } from "kafkajs";
import { PrismaClient } from "./generated/prisma/index.js";
const client = new PrismaClient();
const Topic_Name = "zap-events";
const kafka = new Kafka({
    clientId: "outbox processor",
    brokers: ["localhost:9092"]
});
(async function main() {
    const producer = kafka.producer();
    await producer.connect().then(() => console.log("producer connected"));
    while (1) {
        const pendingrows = await client.zapRunOutbox.findMany({
            where: {},
            take: 10
        });
        await producer.send({
            topic: Topic_Name,
            messages: pendingrows.map(r => ({
                value: r.zapRunId,
            }))
        });
        await client.zapRunOutbox.deleteMany({
            where: {
                id: {
                    in: pendingrows.map(r => r.id)
                }
            }
        });
    }
})();
//# sourceMappingURL=index.js.map