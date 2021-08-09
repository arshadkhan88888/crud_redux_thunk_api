{dataa &&
            !(dataa.length === 0) &&
            dataa.data.map((item) => (
              <tr key={item.id}>
               
              <td>{item.airline[0].id}</td>
                  <td>{item.name}</td>
                  <td>{item.airline[0].country}</td>
                  <td>{item.airline[0].slogan}</td>
                  <td>{item.airline[0].website}</td>
                  <td>{item.trips}</td> 
                  <td><button className="btn btn-danger" onClick={()=>handleDelete(item._id)}>Delete</button></td>
                  <td><button className="btn btn-primary">Edit</button></td> 
              </tr>