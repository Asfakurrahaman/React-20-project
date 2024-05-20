
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/lode-more-button';
import QRCodeGenerator from "./components/qr-code-generator";

function App() {
  return (
    <div className="App">
      {/* Accordian components */}
      {/* <Accordian /> */}

      {/* Random color component*/}
      {/* <RandomColor /> */}

      {/* Star rating component */}
      {/* <StarRating noOfStars={5}/> */}

      {/* Image slider component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"20"}
      /> */}

      {/* Load more products component */}
      {/* <LoadMoreData/> */}

      {/* QR code generator */}
      <QRCodeGenerator/>

      
    </div>
  );
}

export default App;
