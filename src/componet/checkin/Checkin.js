import React, { Component } from "react";
class Checkin extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Họ và tên</th>
                        <th scope="col">Check in</th>
                        <th scope="col">Check out</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Dào Minh Đức</td>
                    <td>07:20</td>
                    <td>17:30</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Mark</td>
                    <td>07:20</td>
                    <td>17:30</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Tuấn</td>
                    <td>07:20</td>
                    <td>17:30</td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Phúc</td>
                    <td>07:20</td>
                    <td>17:30</td>
                    </tr>
                </tbody>
            </table>
            </div>
        );
    }
}
export default Checkin;