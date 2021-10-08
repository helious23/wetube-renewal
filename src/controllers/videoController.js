export const trending = (req, res) => res.send("Home Page Video");
export const see = (req, res) => {
  const {
    params: { id },
  } = req;
  res.send(`Watch Video #${id}`);
};
export const edit = (req, res) => {
  console.log(req.params);
  return res.send("Edit Video");
};
export const search = (req, res) => res.send("Search Videos");
export const upload = (req, res) => res.send("upload video");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
