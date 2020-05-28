import React from "react"; 

const TaskCard = () => {
    return (
        <div className="col-xs-6 col-lg-3 col-12 mb-4">
        <div className="card">
            <div className="position-relative">
                <img className="card-img-top" src="img/card-thumb-1.jpg" alt="" />
            </div>
            <div className="card-body">
                <h3>Task Title</h3>
                <p className="list-item-heading mb-4">Homemade Cheesecake with Fresh Berries and Mint
                </p>
                <footer>
                    <p className="text-muted text-small mb-0 font-weight-light">09.04.2018</p>
                </footer>
            </div>
        </div>
    </div>
    );
};

export default TaskCard;