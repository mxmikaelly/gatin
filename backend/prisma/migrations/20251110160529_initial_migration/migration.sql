-- CreateEnum
CREATE TYPE "PersonType" AS ENUM ('fisica', 'juridica');

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "usename" VARCHAR(120) NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "person_type" "PersonType" NOT NULL,
    "cpf" VARCHAR(11),
    "cnpj" VARCHAR(14),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_email_key" ON "accounts"("email");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_cpf_key" ON "accounts"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_cnpj_key" ON "accounts"("cnpj");
