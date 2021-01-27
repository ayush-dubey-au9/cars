import styles from '../style/car.module.css'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Header from "../components/Header"
import Footer from "../components/Footer"



const Audi = () => {
    return (
        <div >
            <Header />
            <div className={styles.img}>
                <div className={styles.car}>
                    <Card >
                        <Card.Img src="https://cdn.pixabay.com/photo/2019/12/26/20/50/audi-r8-4721217_960_720.jpg" alt="Card image" />
                    </Card>
                </div>

                <div className={styles.details}>
                    <h1>Audi<hr /></h1>
                    <div>
                        <p>Cost : 1,56,23,200 ₹</p>
                        <p>Fuel Type : Petrol</p>
                    </div>
                </div>
            </div>
            <br />
            <div className={styles.list}>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" active>
                        Showroom Details :-
                    </ListGroup.Item>
                    <ListGroup.Item as="li"><b>Audi Lucknow</b> <br /><b>Address:</b> Airport Circle, 464 & 465, Kanpur Rd, near Amausi, Chillawan, Lucknow, Uttar Pradesh 226023<br /> <b>Phone: </b> 095986 66666 </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <b>AUDI DELHI SOUTH</b> <br /><b>Address:</b>B1 H1, Mathura Rd, Mohan Cooperative Industrial Estate, New Delhi, Delhi 110044<br /> <b>Phone: </b>  011 4600 7300
                    </ListGroup.Item>
                    <ListGroup.Item as="li"><b>Audi Gurugram
                        </b> <br /><b>Address:</b >Trilium Avenue, Sector 29 Plot No. MLP-1, South City, Gurugram, Haryana 122101 <br /> <b>Phone: </b>  070875 75757</ListGroup.Item>
                </ListGroup>
            </div>
            <Footer />
        </div>

    );
}

export default Audi;