import React from 'react';
import data from './data';

function Fulfillment() {
    return (
        <div className="content content-margined">
            <div className="order-header">
                <h3>Fulfillment</h3>
            </div>
            <div className="order-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ORDER ID</th>
                            <th>USER</th>
                            <th>CARRIER</th>
                            <th>TRACKING NUMBER</th>
                            <th>SHIPPED</th>
                            <th>SHIPPED AT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.fulfillments.map((fulfillment) => (
                            <tr key={fulfillment._id} className={fulfillment.isShipped ? '' : 'unshipped'}>
                                <td>{fulfillment._id}</td>
                                <td>{fulfillment.orderId}</td>
                                <td>{fulfillment.user.name}</td>
                                <td>{fulfillment.carrier}</td>
                                <td>{fulfillment.trackingNumber}</td>
                                <td>{fulfillment.isShipped.toString()}</td>
                                <td>{fulfillment.shippedAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>);
};

export default Fulfillment;
