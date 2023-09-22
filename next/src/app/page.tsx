import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="/about">This goes to about!</Link> 
      <br/>
      <Link href="/components">This goes nowhere {`:(`}</Link>
    </div>
  )
}
