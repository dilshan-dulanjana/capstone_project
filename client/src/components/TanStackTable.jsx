import Table from 'react-bootstrap/Table';
import './Tanstack.css';
import profile from "../assets/profile.png";
import star from "../assets/star.avif";

function ResponsiveExample() {
  return (
    <div className="container  bg- ">

      <div className="flex-container justify-content-center ">
        <h1 className="txt">Our Top Rated Travelers</h1>
        <img src={star} alt="Star"  className="star1"/>
      </div>

      <br />
      <Table responsive className="custom-table bg-black   ">
        <thead style={{ backgroundColor: "blue" }}>
          <tr >
            <th>ID</th>
            <th>Profile Photo</th>
            <th>Name</th>
            <th>Points</th>
            <th>Ranks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10</td>
            <td><img src={profile} alt="" className="profile-img" /></td>
            <td>Dilshan</td>
            <td>110</td>
            <td>1</td>

          </tr>
          <tr>
            <td>10</td>
            <td><img src={profile} alt="" className="profile-img" /></td>
            <td>Dilshan</td>
            <td>110</td>
            <td>1</td>

          </tr>
          <tr>
            <td>10</td>
            <td><img src={profile} alt="" className="profile-img" /></td>
            <td>Dilshan</td>
            <td>110</td>
            <td>1</td>

          </tr>
        </tbody>
      </Table>
    </div>

  );
}

export default ResponsiveExample;