import './style.css';
export const CardDetail = () => {
    const data = [
        {
            cod: '215462',
            name: 'Arandela de Madeira Grega',
            img1: 'img/arandela01.png',
            img2: 'img/arandela02.png',
            img3: 'img/arandela03.png',
            
        }
    ]
    return (
        <div className="container">
            <div className="row ">
                <div className="col-12 mt-5 mb-5">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 mt-2 mb-2 d-flex justify-content-center">
                            <div className="card card-detail rounded-0">
                                <div className="card-body">
                                    <img src={data[0].img1} className="card-img-top" alt="..." />
                                    <div className="card-content text-center">
                                        <div className="card-title">
                                            {data[0].name}
                                        </div>
                                        <p>cod: {data[0].cod}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 mt-2 mb-2 d-flex justify-content-center">
                            <div className="card card-detail rounded-0">
                                <div className="card-body">
                                    <img src={data[0].img1} className="card-img-top" alt="..." />
                                    <div className="card-content text-center">
                                        <div className="card-title">
                                            {data[0].name}
                                        </div>
                                        <p>cod: {data[0].cod}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 mt-2 mb-2 d-flex justify-content-center">
                            <div className="card card-detail rounded-0">
                                <div className="card-body">
                                    <img src={data[0].img2} className="card-img-top" alt="..." />
                                    <div className="card-content text-center">
                                        <div className="card-title">
                                            {data[0].name}
                                        </div>
                                        <p>cod: {data[0].cod}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 mt-2 mb-2 d-flex justify-content-center">
                            <div className="card card-detail rounded-0">
                                <div className="card-body">
                                    <img src={data[0].img3} className="card-img-top" alt="..." />
                                    <div className="card-content text-center">
                                        <div className="card-title">
                                            {data[0].name}
                                        </div>
                                        <p>cod: {data[0].cod}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    ) 
}