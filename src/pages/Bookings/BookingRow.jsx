

const BookingRow = ({booking}) => {
    const {_id, date, service, price, img} = booking;
    const []

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete');
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted successful')
                }
            })
        }
    }
    return (
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    
                </th>
                    <td>
                        <div className="avatar">
                            <div className="rounded w-12 h-12">
                                {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                            </div>
                            <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">United States</div>
                            </div>
                        </div>
                    </td>
                    <td>{service}</td>
                    <td>{date}</td>
                    <td>${price}</td>
                    <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                    </tr>
                    
    );
};

export default BookingRow;