import Link from 'next/link';

const linkStyle = {
    marginRight: 15
}

export default () => {

    return (
        <div id="header">
             <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/about">
                <a style={linkStyle}>About</a>
            </Link>
            <Link href="/blog">
                <a style={linkStyle}>Blog</a>
            </Link>

            <Link href="/characters">
                <a style={linkStyle}> Characters </a>
            </Link>
        </div>
    )
}