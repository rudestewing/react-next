import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

const Layout = (props) => {

    return (
        <div id="layout" style={layoutStyle}>
            <Header />
            <div id="content">
                {props.children}
            </div>
        </div>
    )
}

export default Layout;