
export default function DoneImg(props) {
    if (props.done) {
      return <img className="doneimg" alt="check" src="./assets/checked.png"></img>;
    } else {
      return <img className="doneimg" alt="check" src="./assets/check.png"></img>;
    }
  }