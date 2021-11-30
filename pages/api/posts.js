import { getAllPosts } from "../../lib/api";

export default async function getPosts(req, res) {
  const offset = parseInt(req.query.offset || 0, 10);
  const date = req.query.date || "desc";
  const category = req.query.category || "all";
  const search = req.query.search || "";

  const data = await getAllPosts({ offset, date, category, search });
  res.status(200).json(data);
}
