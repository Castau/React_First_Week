import React, { useState } from "react";

// Forms and Controlled Components 2 a-f
function ReservationForm() {
    const initialValue = {
        payByCreditCard: true,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        zip: "",
        country: ""
    };
    const [reservation, setReservation] = useState(initialValue);

    const handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setReservation({ ...reservation, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        window.alert(JSON.stringify(reservation));
        setReservation(initialValue);
    };

    return (
        <div>
            <form onChange={handleChange}>
                <label>Pay by Credit Card: </label>
                <input name="payByCreditCard" type="checkbox" checked={reservation.payByCreditCard} /><br />
                <input name="firstName" value={reservation.firstName} placeholder="First Name" /><br />
                <input name="lastName" value={reservation.lastName} placeholder="Last Name" /><br />
                <input name="email" value={reservation.email} placeholder="E-mail" /><br />
                <input name="phone" value={reservation.phone} placeholder="Phone" /><br />
                <input name="street" value={reservation.street} placeholder="Adress" /><br />
                <input name="city" value={reservation.city} placeholder="City" /><br />
                <input name="zip" value={reservation.zip} placeholder="Zip code" /><br />
                <input name="country" value={reservation.country} placeholder="Country" /><br />
                <button onClick={handleSubmit}>Submit</button>
            </form>
            <p>{JSON.stringify(reservation)}</p>
        </div>
    );
}
export default ReservationForm;