import { Scrollbars } from 'react-custom-scrollbars-2';
const Recipe = (props) => {
    const { recipe } = props;

    if (!recipe) {
        return <h3 className="text-centre display-5"> There is no recipe for such type... </h3>
    }
    else {
        return (
            <>
                <div className="row ">
                    {
                        recipe.map(items => (
                            <div className="col-md-3 mb-4" key={items.idMeal}>
                                <div className="card pt-3 text-center cd " >
                                    <img className=" rounded-circle w-50 mx-auto" src={items.strMealThumb} />
                                    <Scrollbars>
                                        <div className="card-body ">
                                            <h5>{items.strMeal}</h5>
                                            <p className="pt-3">{items.strInstructions}</p>
                                            <a href={items.strYoutube} target="blank" style={{ textDecoration: 'none' }}> Get more info....</a>

                                        </div>
                                    </Scrollbars>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </>
        )
    }
}
export default Recipe;