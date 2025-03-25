import { BrowserRouter, Route, Routes, NavLink } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
//import About from "./pages/About";
import ErrorBoundary from "./pages/ErrorBoundary";
import { lazy, Suspense } from "react";

function App() {
  const isActiveStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none",
    marginRight: "15px",
  });
  const About = lazy(() => import("./pages/About"));
  return (
    <BrowserRouter basename="/react-projects/react-projects-with-typescript/tut08-react-router">
      <nav>
        <div style={{ display: "flex", gap: "20px" }}>
          <div>
            <NavLink style={isActiveStyle} to="/">
              Home
            </NavLink>
          </div>
          <div>
            <NavLink style={isActiveStyle} to="/about">
              About
            </NavLink>
          </div>
          <div>
            <NavLink style={isActiveStyle} to="/dashboard">
              Dashboard
            </NavLink>
            <nav>
              <ul
                style={{
                  listStyle: "none",
                  marginTop: "4px",
                }}
              >
                <li>
                  <NavLink style={isActiveStyle} to="/dashboard/profile">
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink style={isActiveStyle} to="/dashboard/settings">
                    Settings
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <NavLink style={isActiveStyle} to="/products">
              Products
            </NavLink>
          </div>
          <div>
            <NavLink style={isActiveStyle} to="/abcde">
              Not Found
            </NavLink>
          </div>
        </div>
      </nav>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ErrorBoundary>
                <About />
              </ErrorBoundary>
            </Suspense>
          }
        />

        <Route path="/dashboard" element={<Dashboard />}>
          {/* Nested Routes */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/products" element={<Products />}>
          {/* Dynamic route */}
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Route>
        <Route path="/non-existent" element={<NotFound />} />
        {/* Fallback route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
