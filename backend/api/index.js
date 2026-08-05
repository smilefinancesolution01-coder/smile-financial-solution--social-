import app from "../backend/app.js";
import serverless from "serverless-http";

export default async function handler(req, res) {
  if (req.url === "/" || req.url === "") {
    return res.status(200).send(`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Smile AI Marketing OS</title>

<style>
body{
margin:0;
font-family:Arial,sans-serif;
background:#0f172a;
color:#fff;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
text-align:center;
}

.card{
background:#1e293b;
padding:40px;
border-radius:16px;
max-width:700px;
box-shadow:0 10px 30px rgba(0,0,0,.3);
}

h1{
color:#3b82f6;
margin-bottom:10px;
}

p{
color:#cbd5e1;
line-height:1.7;
}

a{
display:inline-block;
margin-top:20px;
padding:12px 24px;
background:#1877F2;
color:white;
text-decoration:none;
border-radius:8px;
}
</style>

</head>

<body>

<div class="card">

<h1>🚀 Smile AI Marketing OS</h1>

<p>
Backend Successfully Running
</p>

<p>
Facebook Graph API Connected
</p>

<a href="/api/facebook/health">
Check API
</a>

</div>

</body>

</html>
`);
  }

  return serverless(app)(req, res);
}
