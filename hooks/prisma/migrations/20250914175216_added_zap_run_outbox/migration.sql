-- CreateTable
CREATE TABLE "public"."zapRunOutbox" (
    "id" TEXT NOT NULL,
    "zapRunId" TEXT NOT NULL,

    CONSTRAINT "zapRunOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "zapRunOutbox_zapRunId_key" ON "public"."zapRunOutbox"("zapRunId");

-- AddForeignKey
ALTER TABLE "public"."zapRunOutbox" ADD CONSTRAINT "zapRunOutbox_zapRunId_fkey" FOREIGN KEY ("zapRunId") REFERENCES "public"."zapRun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
