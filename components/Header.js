import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  fontWeight: 'bold',
  color: '#fff'
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/logout">
          <a style={linkStyle}>Logout</a>
        </Link>
    </div>
)

export default Header
