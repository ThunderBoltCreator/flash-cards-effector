import { routes } from '@/shared/routing'
import { Link } from 'atomic-router-react'

export const LoginPage = () => {
  return (
    <div>
      <p>LoginPage</p>
      <Link to={routes.auth.register}>Go to RegisterPage</Link>
    </div>
  )
}
