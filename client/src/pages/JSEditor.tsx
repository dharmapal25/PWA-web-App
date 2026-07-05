import CodeEditor from '../components/Code/CodeEditor'
import Navbar from '../components/Navbar/Navbar';

function JSEditor() {

interface Info {
  language: string;
  fileName: string;
}

const info: Info = {
  language: "javascript",
  fileName: "main.js",
};

  return (
    <div>
      <Navbar/>
        <CodeEditor info={info} />
    </div>
  )
}

export default JSEditor