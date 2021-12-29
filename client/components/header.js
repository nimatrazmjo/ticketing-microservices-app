
import Link  from 'next/link';
export default ({currentUser}) =>{
  const links = [
    !currentUser && {label: 'Sign Up', href: '/auth/signup'},
    !currentUser && {label: 'Sign Up', href: '/auth/signup'},
    currentUser && {label: 'Sign Out', href: '/auth/signout'},
  ].filter(label=>label)
  .map(({label, href})=>{
    return (
      <li key={href} className="nav-item">
        <Link href={href}>
          <a className="nav-link">{label}</a>
        </Link>
      </li>
    )
  });
  return (
    <nav className="navbar navbar-light bg-light px-5">
        <Link href='/'>
          <a className="navbar-brand">GitTix</a>
        </Link>
        <div className="d-flex justify-content=end">
          <ul className="nav d-flex align-item-center">
              {links}
          </ul>
        </div>
    </nav>
  )
}