import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Hello'/>
        <Button color='blue' text='There'/>
        <Button color='red' text='Friend'/>
    </header> 
  )  
}

Header.defaultProps = {
    title: 'Task Tracker', 
}
 
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;