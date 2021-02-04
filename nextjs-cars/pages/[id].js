import styles from '../style/car.module.css'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Header from "../components/Header"
import Footer from "../components/Footer"



const Bmw = () => {
    /*const router = useRouter()
    console.log(router.query.id)
    
        console.log(props.cars[router.query.id])
       console.log (props.cars[router.query.id]) 
       */
    return (
        <div >
            <Header />
            <div className={styles.img}>
                <div className={styles.car}>
                    <Card >
                        <Card.Img src="https://cdn.pixabay.com/photo/2018/02/21/03/15/bmw-m4-3169357_960_720.jpg" alt="Card image" />
                    </Card>
                </div>

                <div className={styles.details}>
                    <h1>BMW <hr /></h1>
                    <div>
                        <p>Cost : 48,50,000 ₹</p>
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
                    <ListGroup.Item as="li"><b>BMW Deutsche Motoren | Noida</b> <br /><b>Address:</b> H-8, Sector 63 Rd, H Block, Sector 62, Noida, Uttar Pradesh 201301 <br /> <b>Phone: </b>0120 419 9000 </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <b>BMW Showroom, Andheri (W), Mumbai | Navnit Motors</b> <br /><b>Address:</b>C-Wing, Waterford Building, Ground, CD Barfiwala Road, Juhu Lane, Andheri West, Mumbai, Maharashtra 400058<br /> <b>Phone: </b> 1800 102 0507
                    </ListGroup.Item>
                    <ListGroup.Item as="li"><b>BMW Sanghi Classic | Udaipur</b> <br /><b>Address:</b >E-95 Normet India Pvt. Ltd, Madri Industrial Area, Udaipur, Rajasthan 313003 <br /> <b>Phone: </b>090019 13888</ListGroup.Item>
                </ListGroup>
            </div>
            <Footer />
        </div>

    );
    }
   


export default Bmw;