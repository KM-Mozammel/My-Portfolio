import "dotenv/config";
import { db } from "@/db";
import { users } from "@/db/schema";
import bcrypt from "bcrypt";

export async function registerAdmin(email: string, password: string) {
  const passwordHash = await bcrypt.hash(password, 10);

  console.log(passwordHash);

  await db.insert(users).values({
    email,
    passwordHash,
    role: "admin",
  });
}

async function main() {
  await registerAdmin("admin@gmail.com", "password123");
  console.log("✅ Admin user created!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
