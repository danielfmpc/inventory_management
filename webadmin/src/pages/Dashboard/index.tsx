import React from 'react';
import TopHeader from '../../components/TopHeader';

const Dashboard = () => {
  return (
    <div className="content-wrapper">
      <TopHeader menu="Home" />

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>150</h3>
                  <p>New Orders</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag" />
                </div>
                <a href="fake_url" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
              </div>
            </div>

            <div className="col-lg-3 col-6">

              <div className="small-box bg-success">
                <div className="inner">
                  <h3>53<sup style={{ fontSize: 20 }}>%</sup></h3>
                  <p>Bounce Rate</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars" />
                </div>
                <a href="fake_url" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
              </div>
            </div>

            <div className="col-lg-3 col-6">

              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>44</h3>
                  <p>User Registrations</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add" />
                </div>
                <a href="fake_url" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>65</h3>
                  <p>Unique Visitors</p>
                </div>
                <div className="icon">
                  <i className="ion ion-pie-graph" />
                </div>
                <a href="fake_url" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
              </div>
            </div>
          </div>

          
        </div>

      </section>
    </div>
  )
}

export default Dashboard;

// const TodoFooter = () => {
//   return <span>This is footer with <strong>Bold</strong> </span>;
// }

// export default class Dashboard extends Component {

//   async componentDidMount() {
//     this.setState({ loading: true });
//     const getStatusService = new StatusServices();
//     const response = await getStatusService.getAllStatus();
//     this.setState({ loading: false, status: response });      
//   }

//   renderItems() {
//     const { status } = this.state;
//     return status.map(item => {
//       return item;
//     });
//   }

//   render() {  
//     const[status, setStatus] = useState([]);

//     return (
//       <div className="content-wrapper">
//         <div className="content-header">
//           <div className="container-fluid">
//             <div className="row mb-2">
//               <div className="col-sm-6">
//                 <h1 className="m-0 text-dark">Dashboard</h1>
//               </div>
//               <div className="col-sm-6">
//                 <ol className="breadcrumb float-sm-right">
//                   <li className="breadcrumb-item"><a href="fake_url">Home</a></li>
//                   <li className="breadcrumb-item active">Dashboard v1</li>
//                 </ol>
//               </div>
//             </div>
//           </div>
//         </div> 

//         <section className="content">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-lg-3 col-6">                
//                 <div className="small-box bg-info">
//                   <div className="inner">
//                     <h3>150</h3>
//                     <p>New Orders</p>
//                   </div>
//                   <div className="icon">
//                     <i className="ion ion-bag" />
//                   </div>
//                   <a href="fake_url" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
//                 </div>
//               </div>

//               <div className="col-lg-3 col-6">

//                 <div className="small-box bg-success">
//                   <div className="inner">
//                     <h3>53<sup style={{ fontSize: 20 }}>%</sup></h3>
//                     <p>Bounce Rate</p>
//                   </div>
//                   <div className="icon">
//                     <i className="ion ion-stats-bars" />
//                   </div>
//                   <a href="fake_url" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
//                 </div>
//               </div>

//               <div className="col-lg-3 col-6">

//                 <div className="small-box bg-warning">
//                   <div className="inner">
//                     <h3>44</h3>
//                     <p>User Registrations</p>
//                   </div>
//                   <div className="icon">
//                     <i className="ion ion-person-add" />
//                   </div>
//                   <a href="fake_url" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
//                 </div>
//               </div>

//               <div className="col-lg-3 col-6">
//                 <div className="small-box bg-danger">
//                   <div className="inner">
//                     <h3>65</h3>
//                     <p>Unique Visitors</p>
//                   </div>
//                   <div className="icon">
//                     <i className="ion ion-pie-graph" />
//                   </div>
//                   <a href="fake_url" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
//                 </div>
//               </div>
//             </div>  

//             <div className="row">
//                 <div className="col-md-7">
//                   <Card
//                     title="Todo List"
//                     titleIcon="ion-clipboard"
//                     footer={<TodoFooter />}
//                   >
//                     <TodoList>
//                       <TodoItem todoName={() => renderItems()}>  
//                     </TodoList>
//                   </Card>
//                 </div>
//                 <div className="col-md-5">
//                   <Card title="Demo List" />
//                 </div>
//             </div>
//           </div>

//         </section>
//       </div>
//     )
//   }
// }
