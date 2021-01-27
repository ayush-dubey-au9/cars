import Head from 'next/head'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from '../style/index.module.css'
import Link from 'next/link'
import Header from "../components/Header"
import Footer from "../components/Footer"

const Index = () => {
  return (
    <div>
      <Header />
      <div className={styles.main}>

        <div className={styles.container} >

          <div className={styles.card}>
            <Card style={{ width: '24rem', height: '26rem' }}>
              <Card.Img className={styles.img} variant="top" src="https://cdn.pixabay.com/photo/2015/05/15/14/46/bmw-768688_960_720.jpg" />
              <Card.Body>
                <Card.Title >BMW</Card.Title>
                <Link href="/Bmw">
                  <Button className={styles.btn} variant="primary">Learn More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className={styles.card}>
            <Card style={{ width: '24rem', height: '26rem' }}>
              <Card.Img className={styles.img} variant="top" src="https://cdn.pixabay.com/photo/2015/12/04/09/33/audi-1076316_960_720.jpg" />
              <Card.Body>
                <Card.Title >AUDI</Card.Title>
                <Link href="/Audi">
                  <Button className={styles.btn} variant="primary">Learn More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>

          <div className={styles.card}>
            <Card style={{ width: '24rem', height: '26rem' }}>
              <Card.Img className={styles.img} variant="top" src="https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_960_720.jpg" />
              <Card.Body>
                <Card.Title >MERCEDES</Card.Title>
                <Link href="/Mercedes">
                  <Button className={styles.btn} variant="primary">Learn More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;