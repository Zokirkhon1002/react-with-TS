import "./App.css";

// Importing Components
import {
  Container,
  HeaderFC,
  Heading,
  HeadingWithContent,
  List,
  TextWithNumber,
} from "./components";

function App() {
  return (
    <div>
      <Heading title={"Salom Dunyo!"}></Heading>
      <HeaderFC title={"With Older version"}></HeaderFC>
      <HeadingWithContent>
        <strong>hi!</strong>
      </HeadingWithContent>
      <Container>with default props</Container>
      {/*  <TextWithNumber header={(num: number) => (<span>Header: {num}</span>)} >*/}
      <TextWithNumber>
        {(num: number) => <div>Today's number is: {num}</div>}
      </TextWithNumber>

      <List
        items={["Sayfulloxon", "Evlad", "Kardesh"]}
        render={(item: string) => <div>{item.toLowerCase()}</div>}
      ></List>
    </div>
  );
}

export default App;
