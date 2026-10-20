import React from 'react'
import { Link } from 'react-router-dom'
import students from '../data.js'
import '../styles/Home.css';

function Home() {
  return (
  <>
    <div className="home">
        <h1>STUDENT DIRECTORY</h1> 
   {students.map((student) => (
    

        <Link
          key={student.id}
          to={`/student/${student.id}`}
          style={{
            textDecoration: "none",
            color: "black"

          }}
          className="student-link"
        >
          <div
            style={{
              border: "1px solid gray",
              padding: "15px",
              margin: "10px",
              borderRadius: "8px",
              cursor: "pointer"
            }}
            className="student-card"
          >
            <h2> {student.name}</h2>
           
          </div>
        </Link>
      ))}
    </div>
    </>
  );}


export default Home;

    
 