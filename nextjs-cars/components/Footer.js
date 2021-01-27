import Navbar from 'react-bootstrap/Navbar'
import styles from '../style/footer.module.css'

const Footer = () => {
    return (
        <div >
            <hr/>
            <Navbar className={styles.foot} bg="dark" variant="dark">
                <Navbar.Brand href="#">
                    <h4 className={styles.about}>About</h4>
                    <h4 className={styles.about}> Contact</h4>
                </Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default Footer;