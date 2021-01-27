import styles from '../style/car.module.css'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Header from "../components/Header"
import Footer from "../components/Footer"



const Mercedes = () => {
    return (
        <div >
            <Header />
            <div className={styles.img}>
                <div className={styles.car}>
                    <Card >
                        <Card.Img src="https://cdn.pixabay.com/photo/2015/05/01/13/36/sports-cars-748474_960_720.jpg" alt="Card image" />
                    </Card>
                </div>

                <div className={styles.details}>
                    <h1>MERCEDES-BENZ <hr /></h1>
                    <div>
                        <p>Cost : 76,50,000 ₹</p>
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
                    <ListGroup.Item as="li"><b>Mercedes-Benz Silver Arrows Noida</b> <br /><b>Address:</b> D7, Dallupura Rd, opposite Sahara India Financial Corporation Ltd, Rajat Vihar, D Block, Sector 8, Noida, Uttar Pradesh 201301<br /> <b>Phone: </b>099992 00500 </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <b>Mercedes-Benz Showroom Karnal</b> <br /><b>Address:</b>117 KM STONE, GT ROAD, NH-1, Ansal Town, VILLAGE KUTAIL, Karnal, Haryana 132001<br /> <b>Phone: </b>  0184 305 3333
                    </ListGroup.Item>
                    <ListGroup.Item as="li"><b>T & T Motors - Mercedes Benz Showroom (Jaipur)
                        </b> <br /><b>Address:</b >Ground Floor, Fort Anandam, Jawaharlal Nehru Marg, Opp. World Trade Park, Malviya Nagar, Jaipur, Rajasthan 302017 <br /> <b>Phone: </b> 0141 430 0000</ListGroup.Item>
                </ListGroup>
            </div>
            <Footer />
        </div>

    );
}

export default Mercedes;