// import "./App.css";
import "./app.scss";

function App() {
  var matrixTest = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ];

  var matrixTest2 = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ];

  //fungsi menghitung selisih antar diagonal
  const jlmDiagonal = (arr) => {
    var diagonal = { kiri: 0, kanan: 0 };
    var arrLeng = arr.length;

    for (var i = 0; i < arrLeng; i++) {
      diagonal.kiri += arr[i][i];
      diagonal.kanan += arr[i][arrLeng - i - 1];
    }
    var selisihDiagonal = Math.abs(diagonal.kiri - diagonal.kanan);
    return selisihDiagonal;
  };

  return (
    <div className="container">
      <div className="header">Test Case 2 Backend Engineer</div>
      <div className="contain">
        <div className="card">
          <span>matrix Test 1 :</span>
          <br />
          <span>[ 1, 2, 3 ]</span>
          <br />
          <span>[ 4, 5, 6 ]</span>
          <br />
          <span>[ 9, 8, 9 ]</span>
          <br />
          <span>maka selisihny : {jlmDiagonal(matrixTest)}</span>
        </div>
        <div className="card">
          <span>matrix Test 2 :</span>
          <br />
          <span>[ 11, 2, 4 ]</span>
          <br />
          <span>[ 4, 5, 6 ]</span>
          <br />
          <span>[ 10, 8, -12 ]</span>
          <br />
          <span>maka selisihny : {jlmDiagonal(matrixTest2)}</span>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default App;
