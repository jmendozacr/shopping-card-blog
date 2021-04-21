import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Shopping from './pages/Shopping';
import Error404 from './pages/Error404';
import Cart from './components/Cart';

function App() {
    const products = [
        { id: uuidv4(), name: "Apple" },
        { id: uuidv4(), name: "Banana" },
        { id: uuidv4(), name: "Cherry" },
        { id: uuidv4(), name: "Watermelon" },
    ];

    const [cart, setCart] = useState([]);

    return (
        <Container>
            <Menu>
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="shopping">Shopping</NavLink>
            </Menu>
            <main>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/shopping">
						<Shopping products={products}/>
					</Route>
                    <Route component={Error404}/>
                </Switch>
            </main>
            <aside>
				<Cart cart={cart}/>
            </aside>
        </Container>
    );
}

const Container = styled.div`
	background: #fff;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
	display: grid;
	gap: 20px;
	grid-template-columns: 2fr 1fr;
	margin: 40px 0;
	max-width: 1000px;
	padding: 40px;
	width: 90%;
`;

const Menu = styled.nav`
	background: #092c4c;
	border-radius: 3px;
	grid-column: span 2;
	text-align: center;
	width: 100%;

	a {
		color: #fff;
		display: inline-block;
		padding: 15px 20px;
	}

	a:hover {
		background: #1d85e8;
		text-decoration: none;
	}
`;

export default App;