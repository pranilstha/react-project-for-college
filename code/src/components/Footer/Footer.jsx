import './Footer.css';

function Footer() {
    return (
        <>
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-logo">
                        <img src="bookstore-icon.png" alt="Bookstore Logo"/>
                    </div>
                    <div class="footer-text">
                        <p>Explore our collection of books and find your next great read.</p>
                    </div>
                    <div class="footer-search">
                        <form action="#" method="get">
                            <input type="text" placeholder="Search for books..."/>
                                <button type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <div class="footer-recommendation">
                    <h3>Recommended Books</h3>
                    <ul>
                        <li><a href="#">Fiction</a></li>
                        <li><a href="#">Mystery</a></li>
                        <li><a href="#">Science Fiction</a></li>
                        <li><a href="#">Fantasy</a></li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Footer;