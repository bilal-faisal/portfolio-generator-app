import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

const page = () => {
  return (
    <div>
      <header style={{ position: "fixed", top: 0, right: 0, padding: "20px" }}>
        <div style={{ color: "#333" }}>
          <Image src={"/user.png"} alt="Logo" width={25} height={25} />
        </div>
      </header>
      <main style={{ display: "flex" }}>
        <div
          style={{
            width: "60%",
            paddingRight: 200,
            paddingLeft: 200,
            paddingTop: 50,
          }}
        >
          <form>
            <h2
              style={{
                marginBottom: 20,
                fontSize: 50,
                paddingRight: 50,
                fontFamily: "Segoe UI",
                fontWeight: "bolder",
              }}
            >
              Create New Account
            </h2>
            <div
              style={{
                textAlign: "left",
                marginTop: 10,
                color: "gray",
                marginBottom: 15,
              }}
            >
              <p>
                Already Registered?{" "}
                <Link href={"/login"} className="font-semibold underline">
                  Login
                </Link>
              </p>
            </div>

            <div className="flex flex-col">
              <label htmlFor="name" className="font-sans">
                NAME
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                style={{
                  marginBottom: 20,
                  padding: 10,
                  border: "none",
                  backgroundColor: "lightgray",
                  color: "#333",
                  fontSize: 16,
                  outline: "none",
                  paddingRight: 40,
                  paddingTop: 14,
                }}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-sans">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                style={{
                  marginBottom: 20,
                  padding: 10,
                  border: "none",
                  backgroundColor: "lightgray",
                  color: "#333",
                  fontSize: 16,
                  outline: "none",
                  paddingTop: 14,
                }}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="font-sans">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                placeholder="Your Password"
                style={{
                  marginBottom: 20,
                  padding: 10,
                  border: "none",
                  backgroundColor: "lightgray",
                  color: "#333",
                  fontSize: 16,
                  outline: "none",
                  paddingTop: 14,
                }}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                style={{
                  padding: "15px 40px",
                  backgroundColor: "#333",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 20,
                  borderRadius: "12%",
                  fontFamily: "Segoe UI",
                }}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        <div style={{ width: "40%", padding: 50 }}>
          <Link href={"/"}>
            <Image src={logo} alt="logo image" />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default page;
