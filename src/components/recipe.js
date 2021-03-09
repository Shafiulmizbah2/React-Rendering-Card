
function RecipeItem(props) {
  return (
    <div className="recipe">
        <img src={props.img} alt="Project" className="recipe-img"  />
        <h2 className="recipe-name">{props.name}</h2>
        <p className="leads">{props.des}</p>
        {props.children}
        <button className="btn" onClick={props.remove}>Remove</button>
    </div>
  );
}

export default RecipeItem;
