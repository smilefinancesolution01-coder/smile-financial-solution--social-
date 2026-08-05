router.get("/post", (req, res) => {
  res.json({
    success: true,
    message: "POST endpoint exists. Use POST request to publish."
  });
});
