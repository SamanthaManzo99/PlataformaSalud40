import {useState} from 'react'
import Menu from '../components/Navbar'
import "../pages/Styles.css"
import HelpButtton from '../components/HelpButtton'
import Modal from '../components/Modal'
import CalendarioC from '../components/CalendarC'

function Calendario() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState(null)

    const openModal = (content) =>{
        setModalContent(content)
        setIsModalOpen(true)
    }

    const closeModal =() => setIsModalOpen(false)

    const handleItemClick = (content) =>{
        openModal(content)
    }

  return (
    <div className='principal'>
        <div className='dashboard'>
            <Menu/>
        </div>
        <div className='contenido'>
                <CalendarioC/>
        </div>
    </div>
  )
}

export default Calendario