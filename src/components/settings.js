import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import { blue, green, yellow } from "@material-ui/core/colors";
import React from "react";
import Number from "./Number";
import "./styles.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Axios from "axios";
import AddApp from "../App";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import PauseCircleOutlineOutlinedIcon from "@material-ui/icons/PauseCircleOutlineOutlined";
import TvIcon from "@material-ui/icons/Tv";
const Checkboxes = withStyles({
  root: {
    color: yellow[400],
    "&$checked": {
      color: yellow[600],
    },
  },
  checked: {},
})((checks) => <Checkbox color="default" {...checks} />);

export default function Settings(props) {
  const [setting, setSetting] = React.useState({
    checkedExplorer: true,
    checkedIncognito: true,
    visitPage: true,
    checkedPhone: true,
    checkedData: true,
    removeCookies: true,
    dataSaving: true,
    analyticProtection: true,
    waitNumberHour: 100,
    waitNumberSeconds: 100,
    pagesNumber1: 100,
    pagesNumber2: 100,
    pagesNumber3: 100,
    afterOperationNumber1: 1,
    afterOperationNumber2: 20,
    targetNumber1: 100,
    targetNumber2: 200,
    resetNumber: 13,
    flyMode: false,
    checkedFirefox: false,
    changeResolution: false,
    mouseTracks: false,
    removeHistory: false,
    checkedSafari: false,
    checkedDevice: false,
    checkedVinn: true,
    checkedOpera: true,
    checkedChrome: false,
  });

  const onUpdatedKeywords = (item) => {
    setSetting({ ...setting, keyWords: [item] });
  };

  const onUpdatedSites = (item) => {
    setSetting({ ...setting, webSites: [item] });
  };

  const startExport = (event) => {
    Axios.post("http://localhost:4000/updateSettings", {
      setting,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onStop = (event) => {
    console.log(setting);
  };

  const [loading, setLoading] = React.useState(false);
  const onStart = (event) => {
    setLoading(true);
    // Where we're fetching data from
    fetch(`http://localhost:4000/json`)
      // We get the API response and receive data in JSON format...
      .then((r) => r.json())
      .then((response) => {
        setSetting({
          checkedExplorer: response.checkedExplorer,
          checkedIncognito: response.checkedIncognito,
          visitPage: response.visitPage,
          checkedPhone: response.checkedPhone,
          checkedData: response.checkedData,
          removeCookies: response.removeCookies,
          dataSaving: response.dataSaving,
          analyticProtection: response.analyticProtection,
          waitNumberHour: response.waitNumberHour,
          waitNumberSeconds: response.waitNumberSeconds,
          pagesNumber1: response.pagesNumber1,
          pagesNumber2: response.pagesNumber2,
          pagesNumber3: response.pagesNumber3,
          afterOperationNumber1: response.afterOperationNumber1,
          afterOperationNumber2: response.afterOperationNumber2,
          targetNumber1: response.targetNumber1,
          targetNumber2: response.targetNumber2,
          resetNumber: response.resetNumber,
          flyMode: response.flyMode,
          checkedFirefox: response.checkedFirefox,
          changeResolution: response.changeResolution,
          mouseTracks: response.mouseTracks,
          removeHistory: response.removeHistory,
          checkedSafari: response.checkedSafari,
          checkedDevice: response.checkedDevice,
          checkedVinn: response.checkedVinn,
          checkedOpera: response.checkedOpera,
          checkedChrome: response.checkedChrome,
          webSites: response.waitNumberSeconds,
          keyWords: response.keyWords,
        });
        setLoading(false);
      });
  };
  const handleChange = (event) => {
    event.stopPropagation();
    const n = event.target.name;
    const value = event.target.checked;
    const oldState = setting[n.toString()];
    setSetting({ ...setting, [event.target.name]: !oldState });
  };

  const handleNumberChange = (event) => {
    event.stopPropagation();
  };

  const onUpdatedNumber = (name, value) => {
    setSetting({ ...setting, [name]: value });
  };
  return (
    <div>
      {loading ? (
        <div></div>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className="headings">
              <LabelOutlinedIcon
                style={{ color: blue[500] }}
                fontSize="large"
              />
              <Typography variant="h4"> Keyword</Typography>
            </div>
            <AddApp
              items={setting.keyWords}
              name="keyword"
              label="Enter your keywords"
              buttonColor="primary"
              updated={onUpdatedKeywords}
            ></AddApp>
          </Grid>
          <Grid item xs={3}>
            <div className="headings">
              <TvIcon style={{ color: green[500] }} fontSize="large" />
              <Typography variant="h4"> Site</Typography>
            </div>
            <AddApp
              items={setting.webSites}
              name="site"
              label="Enter your site"
              buttonColor="secondary"
              updated={onUpdatedSites}
            ></AddApp>
          </Grid>
          <Grid item xs={6}>
            <div className="headings">
              <SettingsOutlinedIcon
                style={{ color: yellow[500] }}
                fontSize="large"
              />
              <Typography variant="h4">Settings</Typography>
            </div>
            <Paper className="settings-container">
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={setting.checkedChrome}
                      onChange={handleChange}
                      name="checkedChrome"
                    />
                  }
                  label="Chrome"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={setting.checkedExplorer}
                      onChange={handleChange}
                      name="checkedExplorer"
                    />
                  }
                  label="Explorer"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={setting.checkedFirefox}
                      onChange={handleChange}
                      name="checkedFirefox"
                    />
                  }
                  label="Firefox"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={setting.checkedSafari}
                      onChange={handleChange}
                      name="checkedSafari"
                    />
                  }
                  label="Safari"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={setting.checkedOpera}
                      onChange={handleChange}
                      name="checkedOpera"
                    />
                  }
                  label="Opera"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={setting.checkedIncognito}
                      onChange={handleChange}
                      name="checkedIncognito"
                    />
                  }
                  label="Incognito"
                />
              </FormGroup>
              <div className="number-input">
                <div>
                  Wait{" "}
                  <Number
                    v={setting.waitNumberHour}
                    updatedNumber={onUpdatedNumber}
                    name="waitNumberHour"
                  />
                </div>
                <div>
                  <Number
                    v={setting.waitNumberSeconds}
                    updatedNumber={onUpdatedNumber}
                    name="waitNumberSeconds"
                  />{" "}
                  seconds on the targeted website.
                </div>
              </div>
              <FormControlLabel
                control={
                  <Checkboxes
                    checked={setting.visitPage}
                    onChange={handleChange}
                    name="visitPage"
                  />
                }
                label="Visit the Page within the site"
              />
              <div>
                <div className="number-input">
                  <div>
                    <Number
                      v={setting.pagesNumber1}
                      name="pagesNumber1"
                      updatedNumber={onUpdatedNumber}
                      onChange={handleNumberChange}
                    />{" "}
                    pages
                  </div>
                  <div>
                    <Number
                      v={setting.pagesNumber2}
                      name="pagesNumber2"
                      updatedNumber={onUpdatedNumber}
                      onChange={handleNumberChange}
                    />
                  </div>
                  <div>
                    <Number
                      v={setting.pagesNumber3}
                      name="pagesNumber3"
                      updatedNumber={onUpdatedNumber}
                      onChange={handleNumberChange}
                    />{" "}
                    Visit from to second.
                  </div>
                </div>
                <div className="number-input">
                  <div>
                    After the operation is complete{" "}
                    <Number
                      v={setting.afterOperationNumber1}
                      name="afterOperationNumber1"
                      updatedNumber={onUpdatedNumber}
                      onChange={handleNumberChange}
                    />
                  </div>
                  <div>
                    <Number
                      v={setting.afterOperationNumber2}
                      name="afterOperationNumber2"
                      updatedNumber={onUpdatedNumber}
                      onChange={handleNumberChange}
                    />{" "}
                    seconds wait
                  </div>
                </div>
                <div className="number-input">
                  <div>
                    Target site{" "}
                    <Number
                      v={setting.targetNumber1}
                      name="targetNumber1"
                      updatedNumber={onUpdatedNumber}
                      onChange={handleNumberChange}
                    />{" "}
                    if not founds times
                  </div>
                  <div>
                    <Number
                      v={setting.targetNumber2}
                      name="targetNumber2"
                      updatedNumber={onUpdatedNumber}
                      onChange={handleNumberChange}
                    />{" "}
                    minutes wait.
                  </div>
                </div>
                <div className="reset-operation">
                  <div>
                    <Number
                      v={setting.pagesNumber2}
                      name="resetNumber"
                      updatedNumber={onUpdatedNumber}
                      onChange={handleNumberChange}
                    />{" "}
                    automatic reset after operation.
                  </div>
                </div>
              </div>
            </Paper>
            <Paper className="settings-container">
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={setting.checkedDevice}
                      onChange={handleChange}
                      name="checkedDevice"
                    />
                  }
                  label="Device Reset"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={setting.checkedVinn}
                      onChange={handleChange}
                      name="checkedVinn"
                    />
                  }
                  label="Vinn Reset"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={setting.checkedPhone}
                      onChange={handleChange}
                      name="checkedPhone"
                    />
                  }
                  label="Phone Reset"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={setting.checkedData}
                      onChange={handleChange}
                      name="checkedData"
                    />
                  }
                  label="Mobile Data"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={setting.flyMode}
                      onChange={handleChange}
                      name="flyMode"
                    />
                  }
                  label="Incognito"
                />
              </FormGroup>
              <div className="bottom-checkboxes">
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={setting.removeCookies}
                        onChange={handleChange}
                        name="removeCookies"
                      />
                    }
                    label="Remove Cookies"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={setting.checkedExplorer}
                        onChange={handleChange}
                        name="checkedExplorer"
                      />
                    }
                    label="Explorer"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={setting.checkedFirefox}
                        onChange={handleChange}
                        name="checkedFirefox"
                      />
                    }
                    label="Remove Cookies"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={setting.changeResolution}
                        onChange={handleChange}
                        name="changeResolution"
                      />
                    }
                    label="Change Resolution"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={setting.mouseTracks}
                        onChange={handleChange}
                        name="mouseTracks"
                      />
                    }
                    label="Mouse Tracks"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={setting.dataSaving}
                        onChange={handleChange}
                        name="dataSaving"
                      />
                    }
                    label="Data Saving Mode"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={setting.analyticProtection}
                        onChange={handleChange}
                        name="analyticProtection"
                      />
                    }
                    label="Analytics Protection"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={setting.removeHistory}
                        onChange={handleChange}
                        name="removeHistory"
                      />
                    }
                    label="Remove History"
                  />
                </FormGroup>
              </div>
            </Paper>
            <div className="button-group">
              <ThemeProvider theme={theme}>
                <Button
                  style={{ backgroundColor: yellow[500] }}
                  onClick={startExport}
                  variant="contained"
                >
                  Export Report
                </Button>
                <Button
                  onClick={onStop}
                  variant="contained"
                  color="primary"
                  startIcon={<PauseCircleOutlineOutlinedIcon />}
                >
                  Stop
                </Button>
                <Button
                  onClick={onStart}
                  variant="contained"
                  color="secondary"
                  startIcon={<PlayCircleOutlineOutlinedIcon />}
                >
                  Start
                </Button>
              </ThemeProvider>
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
