import { Link } from 'react-router-dom'
import './Home.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  return (
    <>
      <h1>Hello My name is Biraj!</h1>
      
      <p>I am a junior at NYU. </p>
      <p>In my free time, I like to watch basketball and tv shows like The Wire, Game of Thrones, and  </p>
      <p>I am excited for the weather to get better.</p>
      <p>
        Check out the <Link to="/messages">messages page</Link>.
      </p>
    </>
  )
}

// make this component available to be imported into any other file
export default About
