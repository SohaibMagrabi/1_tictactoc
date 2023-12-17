import Header from "./comp/Header";
import Pre from "./comp/Pre";
import Square from "./comp/Square";
import Post from "./comp/Post";
import Footer from "./comp/Footer";

function App() {

  const renderSq = (i) => {
    return (
      <Square />
    )

  }
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-3 h-screen relative" >

      <Header />


      <div className="flex flex-col justify-center items-center gap-y-12 mt-12">
        <Pre />
        <div className="grid grid-cols-3 relative overflow-hidden shadow-2xl rounded-xl">
          {


            Array.from({ length: 9 }, (_, i) => renderSq(i))

          }

        </div >
        <Post />
        <Footer />
      </div>

      

    </div>
  );
}

export default App;
