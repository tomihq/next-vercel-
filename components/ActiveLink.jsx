import Link from 'next/link';
import { useRouter } from 'next/router';
export const ActiveLink = ({text, href}) => {
    const style = {
        color:'#0070f3',
        textDecoration: 'underline'
    }

    const { asPath } = useRouter();


  return (
    <Link href={href}>
        <a style={asPath===href && style || null}> {text} </a>
    </Link>
  )
}
