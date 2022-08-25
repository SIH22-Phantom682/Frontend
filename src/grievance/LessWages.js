import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  TextareaAutosize,
  Grid,
  TextField,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import StopIcon from "@mui/icons-material/Stop";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import SendIcon from "@mui/icons-material/Send";

export default function LessWages({ mainCat }) {
  const [mainCatId, setMainCatId] = useState(mainCat);
  const [subcategory, setSubCategories] = useState([]);
  const [subcategoryId, setSubCategoryId] = useState(undefined);
  const [description, setDescription] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [regionName, setRegionName] = useState([]);
  const [file, setFile] = useState(undefined);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return console.log("Kaam Nahi kar Raha");
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("mainCat", mainCatId);
      formData.append("subCat", subcategoryId);
      formData.append("dis", description);
      formData.append("file", file);
      formData.append("audioGriev", transcript);
      formData.append("companyName", companyName);
      formData.append("workLocation", workLocation);
      formData.append("regionName", regionName);
      console.log(formData.get("mainCat"));
      console.log(formData.get("companyName"));
      console.log(formData.get("regionName"));
      console.log(formData.get("mainCat"));
      console.log(formData.get("subCat"));
      console.log(formData.get("dis"));
      console.log(formData.get("file"));
      // console.log(process.env.REACT_APP_API_URL + "/grievance")
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/grievance",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSub = (e) => {
    setSubCategoryId(e.target.value)
  }

  const fetchSubCat = async () => {
    const result = await fetch(
      process.env.REACT_APP_API_URL + "/mainCategory/getSubCategory/" + mainCat,
      {
        method: "GET",
      }
    );
    const data = await result.json();
    console.log(data);
    setSubCategories(data.data);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} component="form" noValidate onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <InputLabel id="demo" size="small">
              Sub Category
            </InputLabel>
            <Select
              labelId="demo"
              size="small"
              label="Sub Category"
              onChange={handleSub}
            >
              {subcategory
                ? subcategory.map((ctr, index) => {
                    return (
                      <MenuItem value={ctr._id} key={index}>
                        {ctr.name}
                      </MenuItem>
                    );
                  })
                : "No Country"}
            </Select>
          </FormControl>  

          
          <Grid item xs={12}>
          <TextField 
          required 
          fullWidth size="small"
           label="Name of Company"
           value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
           />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            size="small"
            label="Location of Workplace"
            value={workLocation}
            onChange={(e) => setWorkLocation(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            size="small"
            label="Details of Termination"
            value={regionName}
            onChange={(e) => setRegionName(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField required fullWidth size="small" label="Region Name" />
        </Grid> 

          <Grid item xs={12}>
            <Typography style={{ color: "red" }}>
              {" "}
              Text of grievance (Remarks)<br></br>Maximum 2000 characters are
              allowed in description.(2000 characters remaining.)
              <br></br>
              Alphabet A-Z, a-z, number 0-9 and special characters , . - _ ( ) /
              : & @ # $ % & * ? + = ! ' " only are allowed in grievance
              description.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              fullWidth
              multiline
              style={{ width: "100%" }}
              maxRows={3}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Audio Grievance</Typography>
          </Grid>
          <Grid item xs={12}>
            Microphone: {listening ? "on" : "off"}
            <br></br>
            <FiberManualRecordIcon
              onClick={(g) => {
                g.preventDefault();
                SpeechRecognition.startListening({ continuous: true });
                console.log("sun raha hu mai");
              }}
            />
            <StopIcon
              onClick={(e) => {
                e.preventDefault();
                SpeechRecognition.stopListening();
                console.log("listening stop");
              }}
            />
            <RotateLeftIcon onClick={resetTranscript} />
            <p>{transcript}</p>
            <TextareaAutosize
              aria-label="minimum height"
              fullWidth
              multiline
              maxRows={6}
              style={{ width: "100%" }}
              value={transcript}
              // onChange={setDescription(transcript)}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              onChange={(e) => setFile(e.target.files[0])}
            ></input>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" type="submit" endIcon={<SendIcon />}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}