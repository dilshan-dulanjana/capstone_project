
import "./Homebody.css";
import sigiriya from "../assets/sigiriya.jpg";
import yala from "../assets/Yal.jpg";
import galle from "../assets/galle.jpeg";
import ella from "../assets/ella.webp";
import kandy from "../assets/Kandy.webp";
import Nuwreliya from "../assets/Nuwraeliy.jpg";
import Mirissa from "../assets/mirissa1.jpg";
import polonnaruw from "../assets/polonnaruwa.jpg";
import Anuradhapura from "../assets/Anuradhapura.jpg";
import udwalawa from "../assets/udawalawa.webp";
import dabulla from "../assets/dabulla.webp";
import horton from "../assets/97.jpg";
import Aubowan from "../assets/Ayubowan.svg";
import Au from "../assets/YU.webp";
import Sl from "../assets/sl.webp";
import we from "../assets/we.jpg";
import po from "../assets/po.jpg";
function Homebody() {


    return (
        <div>


            <div>
                <h2 className="text1" data-aos="fade-down">Welcome to Sri Lanka</h2>
                <br />
                <img src={Aubowan} className="img-fluid p-5  " alt="" style={{ maxWidth: '950px', height: 'auto', display: 'inline-block', marginRight: '10px' }} data-aos="fade-right" />
                <img src={Au} className="img-fluid p-150px " alt="" style={{ maxWidth: '550px', height: 'auto', display: 'inline-block' }} data-aos="fade-left" />
                <br /><br />
                <p className="text2">See what's waiting for you on your next island getaway.
                    Savour the unique experiences this island treasure has to offer.</p>
            </div>

            <br /><br /><br />
            <div>


                <div className="row">
                    <div className="col-md-6" data-aos="fade-up-right">
                        <div className="card" style={{ maxWidth: '40rem' }}>
                            <img src={Sl} className="card-img-top img-fluid" alt="" />
                            <div className="card-body">
                                <p className="text4">The best destinations to travel to in 2024 mentions Sri Lanka as one of the tourist hotspots this year.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-up-left">
                        <div className="card" style={{ maxWidth: '40rem' }}>
                            <img src={po} className="card-img-top img-fluid" alt="" />
                            <div className="card-body">
                                <p className="text4">Sri Lanka Tourism | Top 10 Countries To Travel in 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center"  data-aos="zoom-in-down">
                    <div className="card col-md-12 mx-auto" style={{ maxWidth: '40rem' }}>
                        <img src={we} className="card-img-top img-fluid" alt="" />
                        <div className="card-body">
                            <p className="text4">Epic Sri Lanka Holidays | Adventure and Water Sports</p>
                        </div>
                    </div>
                </div>



            </div>

            <br /><br />
            <div className="famousplace">
                <h1 className="text1">Most Famous Travel Places In Sri Lanka</h1>

            </div>


            <br />
            <div className="bg-black">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 " j>
                        <div className="col-md-4 mb-4 d-flex justify-content-center " data-aos="zoom-in">
                            <div className="card">
                                <img src={sigiriya} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Sigiriya Sri Lanka</h5>
                                    <button type="button" className="btn btn-outline-warning">See Details</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4 d-flex justify-content-center" data-aos="zoom-in">
                            <div className="card">
                                <img src={yala} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Yala National Park</h5>
                                    <button type="button" className="btn btn-outline-warning">See Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center" data-aos="zoom-in">
                            <div className="card">
                                <img src={galle} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Galle Fort</h5>
                                    <button type="button" className="btn btn-outline-warning">See Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center" data-aos="zoom-in">
                            <div className="card">
                                <img src={ella} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Ella Rock</h5>
                                    <button type="button" className="btn btn-outline-warning">See Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center" data-aos="zoom-in">
                            <div className="card">
                                <img src={kandy} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Kandy</h5>
                                    <button type="button" className="btn btn-outline-warning">See Details</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4 d-flex justify-content-center" data-aos="zoom-in">
                            <div className="card">
                                <img src={Nuwreliya} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Nuwara Eliya</h5>
                                    <button type="button" className="btn btn-outline-warning">See Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center" data-aos="zoom-in">
                            <div className="card">
                                <img src={Mirissa} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Mirissa</h5>
                                    <button type="button" className="btn btn-outline-warning">See Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center" data-aos="zoom-in">
                            <div className="card">
                                <img src={polonnaruw} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Polonnaruwa</h5>
                                    <button type="button" className="btn btn-outline-warning">See Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center" data-aos="zoom-in">
                            <div className="card">
                                <img src={Anuradhapura} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Anuradhapuraya</h5>
                                    <button type="button" className="btn btn-outline-warning">See Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center" data-aos="zoom-in">
                            <div className="card">
                                <img src={udwalawa} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Udawalawa National Park</h5>
                                    <button type="button" className="btn btn-outline-warning">See Details</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4 d-flex justify-content-center" data-aos="zoom-in">
                            <div className="card">
                                <img src={dabulla} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Dabulla Cave Temple</h5>
                                    <button type="button" className="btn btn-outline-warning">See Details</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4 d-flex justify-content-center" data-aos="zoom-in">
                            <div className="card">
                                <img src={horton} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Horton Plains National Park</h5>
                                    <button type="button" className="btn btn-outline-warning">See Details</button>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="row justify-content-center mt-4 cols-md-3 ">
                        <div className="col-auto">
                            <button type="button" className="btn btn-outline-light p-5px ">See More Places{">>>"}</button>
                        </div>

                    </div>
                    <br />
                </div>
            </div>

            <br />
            <div className="famousplace">
                <h1 className="text1">Plane Your Dream Holiday</h1>
            </div>

            <br /><br />

            <div className="bg-dark">

                <figure className="figure">
                    <img src={galle} className="figure-img img-fluid rounded" style={{ width: '300px', height: '300px' }} alt="..." />
                    <figcaption className="figure-caption text-end">A caption for the above image.</figcaption>
                </figure>


            </div>
        </div>

    )
}


export default Homebody