import { useState } from "react";
import "./App.css";

function App() {

  const[formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India",
    streetAddress:"", city:"", state:"", postalCode:"",
    comments:false, candidates:false, offers:false,
    pushNotifications:""
  })


  function changeHandaler(event) {
    const{name,value,checked,type} = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]:type ==="checkbox" ? checked : value 
    }))
  }

  function submitHandaler(event) {
    event.preventDefault();

    console.log("Finally Printing The Form Data");
    console.log(formData);
  }


  return (
    <div className=" flex flex-col items-center">

      <form onSubmit={submitHandaler}>
        <label htmlFor="firstName">First Name</label>
        <br/>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Ajay"
          value={formData.firstName}
          onChange={changeHandaler}

          className=" border-2"
        />

        <br/>
        {/* <br/> */}

        <label htmlFor="lastName">Last Name</label>
        <br/>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Manjhi"
          value={formData.lastName}
          onChange={changeHandaler}

          className=" border-2"
        />

        <br/>

        <label htmlFor="email">Email</label>
        <br/>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="ajay@abcd"
          value={formData.email}
          onChange={changeHandaler}

          className=" border-2"
          />

          <br/>

          <label htmlFor="country">County</label>

          <br/>

          <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandaler}

          className="border-2"
          
          >
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>

          <br/>

        <label htmlFor="streetAddress">Street Address</label>
        <br/>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25C"
          value={formData.streetAddress}
          onChange={changeHandaler}

          className=" border-2"
          />

          <br/>

           

        <label htmlFor="city">City</label>
        <br/>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="B-25C"
          value={formData.city}
          onChange={changeHandaler}

          className=" border-2"
          />

          <br/>

        <label htmlFor="state">State</label>
        <br/>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Banglore"
          value={formData.state}
          onChange={changeHandaler}

          className=" border-2"
          />

          <br/>

        <label htmlFor="postalCode">Postal Code</label>
        <br/>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="110077"
          value={formData.postalCode}
          onChange={changeHandaler}

          className=" border-2"
          />

          <br/>
          <br/>

          <fieldset>
            <legend>BY Email</legend>

            <div className=" flex gap-3">

              <input
                type="checkbox"
                id="comments"
                name="comments"
                checked={formData.comments}
                onChange={changeHandaler}
                />
              <div>
                <label htmlFor="comments">Comments</label>
                <p>Get notifide when someones posts a comment on a posting.</p>
              </div>

            </div>

            <div className=" flex gap-3">

              <input
                type="checkbox"
                id="candidates"
                name="candidates"
                checked={formData.candidates}
                onChange={changeHandaler}
                />
              <div>
                <label htmlFor="candidates">Candidates</label>
                <p>Get notifide when candidates applise for job.</p>
              </div>

            </div>

            <div className=" flex gap-3">

              <input
                type="checkbox"
                id="offers"
                name="offers"
                checked={formData.offers}
                onChange={changeHandaler}
                />
              <div>
                <label htmlFor="offers">Offers</label>
                <p>Get notifide when candidates accepts or rejeact an offer.</p>
              </div>

            </div>

          </fieldset>

          <br/>
          <br/>

          <fieldset>
            <legend>Push Notification</legend>
            <p>These ar delivered via SMS to your mobile phone.</p>

            <input
              type="radio"
              id="pushEverything"
              name="pushNotifications"
              value="Everyting"
              onChange={changeHandaler}
            />

            <label htmlFor="pushEverything">Everyting</label>

            <br/>

            <input
              type="radio"
              id="pushEmail"
              name="pushNotifications"
              value="Same as email"
              onChange={changeHandaler}
            />

            <label htmlFor="pushEmail">Same as email</label>

            <br/>

            <input
              type="radio"
              id="pushNothing"
              name="pushNotifications"
              value="No Push Notifications"
              onChange={changeHandaler}
            />

            <label htmlFor="pushNothing">No Push Notifications</label>
          </fieldset>

          <button className=" bg-blue-500 text-white font-bold rounded px-2 py-1 mt-2">Save</button>

          
        
      </form>

    </div>

    
    
  );
}

export default App;
