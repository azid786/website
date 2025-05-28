import foodPic from "./assets/food.png";
function Card() {
  return (
    <div className="card">
      <img className="card-image" src={foodPic} alt="food picture"></img>
      <h2 className="card-title">azid</h2>
      <p className="card-text">i am in job</p>
    </div>
  );
}
export default Card;
