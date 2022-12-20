

const Header = (props) => {
    const { search, inputChange, submit } = props
    return (
        <>
            <div className="Header row">
                <div className="col-md-12">

                    <h1 className="display-1 ">
                        <i className="fa fa-birthday-cake" ></i>  food recipe</h1>

                    <div className="input-group w-50 mx-auto">

                        <input type="text" className="form-control " placeholder="Recipe..."
                            value={search} onChange={inputChange} />

                        <button className="btn btn-dark input-group-text" onClick={submit}>Search Recipe</button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Header;
{/* <i class="fa-solid fa-burger-soda"></i> */ }