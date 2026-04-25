import { useEffect, useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.style.background = dark ? "#0D0D0D" : "#FAFAFA";
    document.body.style.color = dark ? "#F5F5F5" : "#111111";
  }, [dark]);

  useEffect(() => {
  const cursor = document.createElement("div");
  const ring = document.createElement("div");

  Object.assign(cursor.style, {
    width: "10px", height: "10px",
    background: "#E85D4A",
    borderRadius: "50%",
    position: "fixed", top: 0, left: 0,
    pointerEvents: "none", zIndex: 9999,
    mixBlendMode: "multiply",
    transform: "translate(-50%, -50%)",
  });

  Object.assign(ring.style, {
    width: "36px", height: "36px",
    border: "1.5px solid #E85D4A",
    borderRadius: "50%",
    position: "fixed", top: 0, left: 0,
    pointerEvents: "none", zIndex: 9998,
    transform: "translate(-50%, -50%)",
    transition: "left 0.15s ease, top 0.15s ease, width 0.3s, height 0.3s",
  });

  document.body.appendChild(cursor);
  document.body.appendChild(ring);

  const move = e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    ring.style.left = e.clientX + "px";
    ring.style.top = e.clientY + "px";
  };
  const enterLink = () => { ring.style.width = "50px"; ring.style.height = "50px"; };
  const leaveLink = () => { ring.style.width = "36px"; ring.style.height = "36px"; };

  document.addEventListener("mousemove", move);
  document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("mouseenter", enterLink);
    el.addEventListener("mouseleave", leaveLink);
  });

  return () => {
    document.removeEventListener("mousemove", move);
    document.body.removeChild(cursor);
    document.body.removeChild(ring);
  };
}, []);

  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero dark={dark} />
        <About dark={dark} />
        <div className="divider" style={{ borderColor: dark ? "#FF2D6B33" : "#FF2D6B44" }} />
        <Portfolio dark={dark} />
        <Contact dark={dark} />
      </main>
      <Footer dark={dark} />
    </>
  );
}



// import { useEffect, useState } from "react";
// import "./index.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// export default function App() {
//   const [dark, setDark] = useState(true);

//   useEffect(() => {
//     document.body.style.background = dark ? "#0F0F0F" : "#F0F0F0";
//     document.body.style.color = dark ? "#F0F0F0" : "#111111";
//   }, [dark]);

//   useEffect(() => {
//     const cursor = document.createElement("div");
//     const ring = document.createElement("div");

//     Object.assign(cursor.style, {
//       width: "10px", height: "10px",
//       background: "#A78BFA",
//       borderRadius: "50%",
//       position: "fixed", top: 0, left: 0,
//       pointerEvents: "none", zIndex: 9999,
//       mixBlendMode: "normal",
//       transform: "translate(-50%, -50%)",
//       transition: "width 0.2s, height 0.2s",
//     });

//     Object.assign(ring.style, {
//       width: "36px", height: "36px",
//       border: "1.5px solid #A78BFA",
//       borderRadius: "50%",
//       position: "fixed", top: 0, left: 0,
//       pointerEvents: "none", zIndex: 9998,
//       transform: "translate(-50%, -50%)",
//       transition: "left 0.15s ease, top 0.15s ease, width 0.3s, height 0.3s",
//     });

//     document.body.appendChild(cursor);
//     document.body.appendChild(ring);

//     const move = e => {
//       cursor.style.left = e.clientX + "px";
//       cursor.style.top = e.clientY + "px";
//       ring.style.left = e.clientX + "px";
//       ring.style.top = e.clientY + "px";
//     };
//     const enterLink = () => { ring.style.width = "50px"; ring.style.height = "50px"; };
//     const leaveLink = () => { ring.style.width = "36px"; ring.style.height = "36px"; };

//     document.addEventListener("mousemove", move);
//     document.querySelectorAll("a, button").forEach(el => {
//       el.addEventListener("mouseenter", enterLink);
//       el.addEventListener("mouseleave", leaveLink);
//     });

//     return () => {
//       document.removeEventListener("mousemove", move);
//       document.body.removeChild(cursor);
//       document.body.removeChild(ring);
//     };
//   }, []);

//   return (
//     <>
//       <Navbar dark={dark} setDark={setDark} />
//       <main>
//         <Hero dark={dark} />
//         <About dark={dark} />
//         <div className="divider" />
//         <Portfolio dark={dark} />
//         <Contact dark={dark} />
//       </main>
//       <Footer dark={dark} />
//     </>
//   );
// }