import Image from "next/image";

const page = () => {
  return (
    <div className="App">
      <header style={{ position: "fixed", top: 0, right: 0, padding: "20px" }}>
        <div style={{ color: "#333" }}>
          <Image src={"/user.png"} alt="Logo" width={25} height={25} />
          
        </div>
      </header>
      <main style={{ display: "flex" }}>
        <div style={{ width: "50%", padding: "50px 200px 0 200px" }}>
          <form>
            <h2
              style={{
                marginBottom: "20px",
                fontSize: "50px",
                marginLeft: "100px",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                fontWeight: "bolder",
              }}
            >
              LOGIN
            </h2>
            <div
              style={{
                textAlign: "left",
                marginTop: "10px",
                color: "gray",
                marginBottom: "15px",
              }}
            >
              <p
                style={{ color: "gray", marginLeft: "100px", fontSize: "20px" }}
              >
                Sign in To Continue
              </p>
            </div>
            <div style={{ marginTop: "60px" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  htmlFor="email"
                  style={{
                    fontFamily:
                      "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    marginBottom: "10px",
                  }}
                >
                  E M A I L
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  style={{
                    marginBottom: "20px",
                    padding: "10px",
                    border: "none",
                    backgroundColor: "lightgray",
                    color: "#333",
                    fontSize: "16px",
                    outline: "none",
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  htmlFor="password"
                  style={{
                    fontFamily:
                      "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    marginBottom: "10px",
                  }}
                >
                  P A S S W O R D
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Your Password"
                  style={{
                    marginBottom: "20px",
                    padding: "10px",
                    border: "none",
                    backgroundColor: "lightgray",
                    color: "#333",
                    fontSize: "16px",
                    outline: "none",
                  }}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="submit"
                  style={{
                    padding: "15px 40px",
                    backgroundColor: "#333",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                    borderRadius: "12%",
                    fontFamily:
                      "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  }}
                >
                  LOGIN
                </button>
              </div>
            </div>
          </form>
        </div>
        <div style={{ width: "50%", padding: "50px" }}>
          <img src="logo.png" alt="Logo" style={{ width: "100%" }} />
        </div>
      </main>
    </div>
  );
};

export default page;
