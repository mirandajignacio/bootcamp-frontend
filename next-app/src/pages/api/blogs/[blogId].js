// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const blogs = {
  1: {
    title: "First blog",
    content: "This is the first blog",
  },
  2: {
    title: "Second blog",
    content: "This is the second blog",
  },
  3: {
    title: "Third blog",
    content: "This is the third blog",
  },
};

export default function handler(req, res) {
  res.status(200).json({ blog: blogs[req.query.blogId] });
}
