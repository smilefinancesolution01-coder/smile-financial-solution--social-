import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Checking...");
  const [page, setPage] = useState(null);

  const API_URL =
    "https://smile-financial-solution-social.vercel.app/api/facebook";

  useEffect(() => {
    loadPage();
  }, []);

  const loadPage = async () => {
    try {
      const response = await fetch(`${API_URL}/page`);
      const data = await response.json();

      if (data.success) {
        setPage(data.data);
        setStatus("Connected ✅");
      } else {
        setStatus("Connection Failed ❌");
      }
    } catch (error) {
      console.error(error);
      setStatus("Server Error ❌");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1>🚀 Smile AI Marketing OS</h1>

      <h3>Status : {status}</h3>

      {page && (
        <div
          style={{
            background: "#fff",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,.1)"
          }}
        >
          <img
            src={page.picture.data.url}
            alt="Page"
            width="80"
            height="80"
            style={{
              borderRadius: "50%"
            }}
          />

          <h2>{page.name}</h2>

          <p>
            <strong>Page ID :</strong> {page.id}
          </p>

          <p>
            <strong>Followers :</strong> {page.followers_count}
          </p>

          <p>
            <strong>Fans :</strong> {page.fan_count}
          </p>

          <button
            onClick={loadPage}
            style={{
              padding: "10px 20px",
              border: "none",
              background: "#1877F2",
              color: "#fff",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Refresh
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
