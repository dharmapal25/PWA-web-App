import CodeEditor from '../components/Code/CodeEditor'
import Navbar from '../components/Navbar/Navbar'

function PythonEditor() {
  
  const pythonInfo = {
    language : "python",
    fileName : "main.py",
  }

  return (
    <div>
      <Navbar/>
        <CodeEditor pythonInfo={pythonInfo} />
    </div>
  )
}

export default PythonEditor