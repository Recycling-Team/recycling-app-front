import Text from './Text'
import '../styles/Notification.css'

const Notification = ({ text, status }) => {

    if (status === true) {
        return (
            <div className='true'>
                <Text text={text}/>
            </div>
        )
    } else if (status === false) {
        return (
            <div className='false'>
                <Text text={text}/>
            </div>
        )
    } else {
        return
        }
}

export default Notification