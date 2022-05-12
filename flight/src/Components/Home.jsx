import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Home = () => {
  const Main = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 2%;
    background-color: #144072;
    & .btn {
      border-radius: 10px;
      background-color: white;
      color: #144072;
    }
    & .btn:hover {
      background-color: #144072;
      color: white;
    }
    & input {
      background-color: white;
      color: white;
      border-radius: 5px;
    }
    & input[type="date"] {
      color: black;
    }
  `;

  return (
    <div>
      <Main>
        <TextField id="outlined-basic" label="From" variant="outlined" />
        <TextField id="outlined-basic" label="To" variant="outlined" />
        <TextField type={"date"} id="outlined-basic" variant="outlined" />
        <Button className="btn" variant="contained">
          SEARCH
        </Button>
      </Main>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
