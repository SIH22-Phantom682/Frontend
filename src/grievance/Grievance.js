import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  AttachFile,
  Description,
  PictureAsPdf,
  Theaters,
} from "@material-ui/icons";
import {
  Grid,
} from "@mui/material";
import LessWages from "./LessWages.js";
import NonPayment from "./NonPayment.js";

export default function Grievance() {
  const [showhide, setShowhide] = React.useState("");
  const [mainCat, setMainCat] = React.useState("");
  const [mainCategories, setMainCategories] = React.useState([]);

  const handleshowhide = (event) => {
    const getuser = event.target.value;
    setMainCat(getuser);
    setShowhide(getuser);
  };

  const handlePreviewIcon = (fileObject, classes) => {
    const { type } = fileObject.file;
    const iconProps = {
      className: classes.image,
    };

    if (type.startsWith("video/")) return <Theaters {...iconProps} />;

    switch (type) {
      case "application/msword":
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        return <Description {...iconProps} />;
      case "application/pdf":
        return <PictureAsPdf {...iconProps} />;
      default:
        return <AttachFile {...iconProps} />;
    }
  };

  const fetchMainCat = async () => {
    const result = await fetch(
      process.env.REACT_APP_API_URL + "/mainCategory",
      {
        method: "GET",
      }
    );
    const data = await result.json();
    setMainCategories(data.data);
  };

  React.useEffect(() => {
    fetchMainCat();
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Lodge Grievance</h1>
      <FormControl fullWidth>
        <InputLabel fullWidth id="demo" size="small">
          Main Category
        </InputLabel>

        <Grid item xs={12}>
          <Select
            label="Main Category"
            size="small"
            fullWidth
            onChange={(e) => handleshowhide(e)}
          >
            <MenuItem value="NonPayment">Non Payment</MenuItem>
          </Select>
          {/* <Select
              labelId="demo"
              fullWidth
              size="small"
              onChange={(e) => handleshowhide(e)}
              sx={{ width: "100%" }}
            >
              <MenuItem value="NonPayment">Non NonPayment</MenuItem>
              {mainCategories
                ? mainCategories.map((ctr, index) => {
                    return (
                      <MenuItem value={ctr.name} key={index}>
                        {ctr.name}
                      </MenuItem>
                    );
                  })
                : "No Country"}
            </Select> */}
        </Grid>
      </FormControl>
      {/* {showhide === "Vigilance" && <Vigilance mainCat={mainCat} />} */}

      {showhide === "LessWages" && <LessWages mainCat={mainCat} />}

      {showhide === "NonPayment" && <NonPayment mainCat={mainCat} />}

      {/* {showhide === "Recruitment" && <Recruitment mainCat={mainCat} />} */}

      {/* {showhide === "Service" && <Service mainCat={mainCat} />} */}

      {/* {showhide === "Termination" && <Termination mainCat={mainCat} />} */}
    </Box>
  );
}
