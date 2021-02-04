import Head from 'next/head'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from '../style/index.module.css'
import Link from 'next/link'
import Header from "../components/Header"
import Footer from "../components/Footer"

const Index = (props) => {
  console.log(props.cars)

  return props.cars.map(data =>{
  return (
    <div>
      {/* <Header /> */}
      
      <div className={styles.main}>

        <div className={styles.container} >

          <div className={styles.card}>
            <Card style={{ width: '24rem', height: '26rem' }}>
              <Card.Img className={styles.img} variant="top" src={data.img_url} />
              <Card.Body>
                <Card.Title >{data.make}</Card.Title>
                <Link href={`/${data.id}`}>
                  <Button className={styles.btn} variant="primary">Learn More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>

        
        </div>
      </div>
      
      {/* <Footer /> */}
    </div>
  );


})
    }






export const getStaticProps = async () => {
  const res = await fetch('https://private-anon-ae71e25743-carsapi1.apiary-mock.com/cars')
  const cars = await res.json()

  return {
    props: {
      cars,
    },
  }
}
export default Index;