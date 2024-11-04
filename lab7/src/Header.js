const Header = () => {
    return(
        <header>
            <h1 id="welcome-msg">Welcome to Guess The Number</h1>
            <p id="instructions">
                A number will be randomly selected between 1 and 10 
                inclusive, the goal is to guess it in three attempts or less!
            </p>
        </header>
    )
}

export default Header