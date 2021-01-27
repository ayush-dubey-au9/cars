import Navbar from 'react-bootstrap/Navbar'
import Link from 'next/link'

const Header = () => {
    return (
        <div>
            
            <Navbar style={{ height: '50px'}} bg="white" variant="dark">
                <Link href="/">
                    <img  style={{padding:'5px', margin:'5px'}}
                        alt=""
                        src="https://firebasestorage.googleapis.com/v0/b/ig-reels-clone-6f67b.appspot.com/o/owncar.in.png?alt=media&token=1acde327-8f24-4e84-9f1f-727880752c91"
                        width="200"
                        height="50"
                        className="d-inline-block align-top"
                    />
                </Link>
            </Navbar>
            <hr/>
        </div>
    );
}

export default Header;