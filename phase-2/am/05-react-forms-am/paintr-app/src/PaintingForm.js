// import useState hook to initialize our states and make them re-settable
import { useState } from 'react';

function PaintingForm() {
    // create a state to keep track of ImgURL
    // const [stateName, setterMethod] = useState(initialStateValue);

    // const [imgUrl, setImgUrl] = useState("");
    // const [title, setTitleUrl] = useState("");
    // continue adding additional input states...

    // merge all input states into one object, formData
    const [formData, setFormData] = useState({
        imgUrl: "",
        title: "",
        artistName: "",
        date: "",
        width: "",
        height: ""
    });

    // create one more state to handle submitted data
    const [submittedData, setSubmittedData] = useState([]);

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
      
        setFormData({
          // formData is an object (defined above) that we need to
          // use as a reference point in order to enable [name]: value
          ...formData,
          
          // here, we're dynamically setting the values for each of
          // our inputs
          [name]: value
        });
    } 

    // create a callback function (handleImgUrl) that will trigger updates
    // to our imgUrl state as we make changes to our "ImgURL"
    // input

    // function handleImgUrl(event) {
    //     setImgUrl(event.target.value);
    // }

    {/* Breakout Activity #1: Add necessary callback functions to "control" all remaining <inputs>. 
    Extra Credit: How we can avoid using separate callback functions to handle each controlled <input>? */}

    function handleSubmit(e) {
        // prevent default refresh behavior upon form submission
        e.preventDefault();

        const newFormSubmission = {
            imgUrl: formData.imgUrl,
            title: formData.title,
            artistName: formData.artistName,
            date: formData.date,
            width: formData.width,
            height: formData.height
        }

        // merge any existing submittedData with formData
        const dataArray = [...submittedData, newFormSubmission];

        // update our submittedData state to include the newest submission
        setSubmittedData(dataArray);

        // reset input values for the form ()
        setFormData({
            imgUrl: "",
            title: "",
            artistName: "",
            date: "",
            width: "",
            height: ""
        });
    }

    const listOfSubmissions = submittedData.map((data, index) => {
        return (
            <div key={index}>
                <hr />
                <h2>Title: {data.title}</h2>
                <h2>Artist {data.artistName}</h2>
                <hr />
            </div>
        );
    });

    return (
        <div>

            {/* <p>{formData.imgUrl}</p>
            <p>{formData.title}</p>
            <p>{formData.artistName}</p>
            <p>{formData.date}</p>
            <p>{formData.width}</p>
            <p>{formData.height}</p> */}

            <h1> Add a New Painting</h1>
            <form onSubmit={handleSubmit}>

                {/* Add onChange event handler to invoke handleImgUrl upon each
                keystroke change and set value equal to imgUrl to keep state / value
                in sync */}
                <input 
                    type="text" 
                    placeholder="ImgURL"
                    name="imgUrl"
                    onChange={handleChange}
                    value={formData.imgUrl}
                /> 
                <br/>

                {/* Breakout Activity #1: Add necessary attributes to "control" all remaining <inputs>. 
                Extra Credit: How we can avoid using separate callback functions to handle each controlled <input>? */}
                <input 
                    type="text" 
                    placeholder="Title"
                    name="title"
                    onChange={handleChange}
                    value={formData.title}
                /><br/>
                <input 
                    type="text" 
                    placeholder="Artist Name"
                    name="artistName"
                    onChange={handleChange}
                    value={formData.artistName}
                /><br/>
                <input 
                    type="text" 
                    placeholder="date"
                    name="date"
                    onChange={handleChange}
                    value={formData.date}
                /><br/>
                <input 
                    type="text" 
                    placeholder="width"
                    name="width"
                    onChange={handleChange}
                    value={formData.width}
                /><br/>
                <input 
                    type="text" 
                    placeholder="height"
                    name="height"
                    onChange={handleChange}
                    value={formData.height}
                /><br/>

                <input type="submit" value="add new painting"/>
            </form>

            {/* add new divs here containing info about new paintings added
                upon each form submission */}
            {listOfSubmissions}
        </div>
    );
}

export default PaintingForm;
