import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
  const jsonPOstRepository = new JsonPostRepository();
  const posts = await jsonPOstRepository.findAll();

  try {
    await drizzleDb.insert(postsTable).values(posts);
  } catch (e) {
    console.log("Ocorreu o erro - " + e);
  }
})();
