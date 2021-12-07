import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet, useParams, NavLink, useNavigate, useLocation } from "react-router-dom"
import Webshare from './Webshare';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/learn" element={<Learn />}>
          <Route path="courses" element={<Courses />}>
            <Route path=":courseid" element={<CourseId />} />
          </Route>
          <Route path="bundles" element={<Bundles />} />
        </Route>
        <Route path="/myapps" element={<Navigate replace to="/learn" />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

function Home() {
  return (
    <>
      <h1>Home Route</h1>
      <Webshare />
    </>
  )
}

function Learn() {
  return (
    <>
      <h1>Learn Route</h1>
      <Link className="btn btn-success" to="/learn/courses">Course</Link>
      <Link className="btn btn-warning" to="/learn/bundles">Bundle</Link>
      <Outlet />
    </>
  )
}

function Courses() {
  const arr = ["python", "java", "react", "angular"]
  const random = arr[Math.floor(Math.random() * arr.length)]
  return (
    <>
      <h1>Course List</h1>
      <h4>Course card</h4>
      <NavLink style={({ isActive }) => {
        return {
          backgroundColor: isActive ? "Pink" : "yellow"
        }
      }} className="btn btn-danger" to={`/learn/courses/${random}`}>{random}</NavLink>
      <Outlet />
    </>
  )
}
function Bundles() {
  return (
    <>
      <h1>Bundle List</h1>
      <h4>Bundle card</h4>
    </>
  )
}

function Dashboard() {
  const location = useLocation()
  return (
    <>
      <h1>Info Im getting is - {location.state} </h1>
    </>
  )
}

function CourseId() {
  const navigate = useNavigate()
  const { courseid } = useParams()
  return (
    <>
      <h1>URL Params is :{courseid}</h1>
      <button to="/dashboard" onClick={() => navigate("/dashboard", { state: "399" })} className="btn btn-dark">Price</button>
    </>
  )
}
